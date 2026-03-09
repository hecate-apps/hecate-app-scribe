typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add("5");
const yf = 1, bf = 2, vf = 16, kf = 1, xf = 2, ya = "[", eo = "[!", Ho = "[?", to = "]", Bn = {}, te = /* @__PURE__ */ Symbol(), ba = "http://www.w3.org/1999/xhtml", Sf = "@attach", vs = !1;
var no = Array.isArray, wf = Array.prototype.indexOf, zn = Array.prototype.includes, Si = Array.from, ri = Object.keys, ii = Object.defineProperty, Dn = Object.getOwnPropertyDescriptor, Mf = Object.getOwnPropertyDescriptors, Cf = Object.prototype, Tf = Array.prototype, va = Object.getPrototypeOf, qo = Object.isExtensible;
const Ef = () => {
};
function Of(n) {
  for (var e = 0; e < n.length; e++)
    n[e]();
}
function ka() {
  var n, e, t = new Promise((r, i) => {
    n = r, e = i;
  });
  return { promise: t, resolve: n, reject: e };
}
const me = 2, Xn = 4, Ln = 8, wi = 1 << 24, jt = 16, et = 32, Wt = 64, ks = 128, He = 512, he = 1024, pe = 2048, Ze = 4096, xe = 8192, ot = 16384, kn = 32768, Fn = 65536, jo = 1 << 17, Nf = 1 << 18, xn = 1 << 19, Af = 1 << 20, yt = 1 << 25, hn = 65536, xs = 1 << 21, ro = 1 << 22, Rt = 1 << 23, In = /* @__PURE__ */ Symbol("$state"), _f = /* @__PURE__ */ Symbol("legacy props"), Df = /* @__PURE__ */ Symbol(""), Qt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}(), Mi = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  !!globalThis.document?.contentType && /* @__PURE__ */ globalThis.document.contentType.includes("xml")
), Er = 3, Or = 8;
function xa(n) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function If() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Rf(n, e, t) {
  throw new Error("https://svelte.dev/e/each_key_duplicate");
}
function Pf(n) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function $f() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Bf(n) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function zf() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Lf() {
  throw new Error("https://svelte.dev/e/hydration_failed");
}
function Ff() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Vf() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Hf() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function qf() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
function Ci(n) {
  console.warn("https://svelte.dev/e/hydration_mismatch");
}
function jf() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
function Wf() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
let $ = !1;
function Qe(n) {
  $ = n;
}
let L;
function Ne(n) {
  if (n === null)
    throw Ci(), Bn;
  return L = n;
}
function Nr() {
  return Ne(/* @__PURE__ */ ft(L));
}
function J(n) {
  if ($) {
    if (/* @__PURE__ */ ft(L) !== null)
      throw Ci(), Bn;
    L = n;
  }
}
function Kf(n = 1) {
  if ($) {
    for (var e = n, t = L; e--; )
      t = /** @type {TemplateNode} */
      /* @__PURE__ */ ft(t);
    L = t;
  }
}
function si(n = !0) {
  for (var e = 0, t = L; ; ) {
    if (t.nodeType === Or) {
      var r = (
        /** @type {Comment} */
        t.data
      );
      if (r === to) {
        if (e === 0) return t;
        e -= 1;
      } else (r === ya || r === eo || // "[1", "[2", etc. for if blocks
      r[0] === "[" && !isNaN(Number(r.slice(1)))) && (e += 1);
    }
    var i = (
      /** @type {TemplateNode} */
      /* @__PURE__ */ ft(t)
    );
    n && t.remove(), t = i;
  }
}
function Sa(n) {
  if (!n || n.nodeType !== Or)
    throw Ci(), Bn;
  return (
    /** @type {Comment} */
    n.data
  );
}
function wa(n) {
  return n === this.v;
}
function Jf(n, e) {
  return n != n ? e == e : n !== e || n !== null && typeof n == "object" || typeof n == "function";
}
function Ma(n) {
  return !Jf(n, this.v);
}
let Uf = !1, Ae = null;
function Vn(n) {
  Ae = n;
}
function Ar(n, e = !1, t) {
  Ae = {
    p: Ae,
    i: !1,
    c: null,
    e: null,
    s: n,
    x: null,
    l: null
  };
}
function _r(n) {
  var e = (
    /** @type {ComponentContext} */
    Ae
  ), t = e.e;
  if (t !== null) {
    e.e = null;
    for (var r of t)
      Ka(r);
  }
  return n !== void 0 && (e.x = n), e.i = !0, Ae = e.p, n ?? /** @type {T} */
  {};
}
function Ca() {
  return !0;
}
let Xt = [];
function Ta() {
  var n = Xt;
  Xt = [], Of(n);
}
function lt(n) {
  if (Xt.length === 0 && !cr) {
    var e = Xt;
    queueMicrotask(() => {
      e === Xt && Ta();
    });
  }
  Xt.push(n);
}
function Gf() {
  for (; Xt.length > 0; )
    Ta();
}
function Ea(n) {
  var e = F;
  if (e === null)
    return z.f |= Rt, n;
  if ((e.f & kn) === 0 && (e.f & Xn) === 0)
    throw n;
  At(n, e);
}
function At(n, e) {
  for (; e !== null; ) {
    if ((e.f & ks) !== 0) {
      if ((e.f & kn) === 0)
        throw n;
      try {
        e.b.error(n);
        return;
      } catch (t) {
        n = t;
      }
    }
    e = e.parent;
  }
  throw n;
}
const Yf = -7169;
function Y(n, e) {
  n.f = n.f & Yf | e;
}
function io(n) {
  (n.f & He) !== 0 || n.deps === null ? Y(n, he) : Y(n, Ze);
}
function Oa(n) {
  if (n !== null)
    for (const e of n)
      (e.f & me) === 0 || (e.f & hn) === 0 || (e.f ^= hn, Oa(
        /** @type {Derived} */
        e.deps
      ));
}
function Na(n, e, t) {
  (n.f & pe) !== 0 ? e.add(n) : (n.f & Ze) !== 0 && t.add(n), Oa(n.deps), Y(n, he);
}
const Lr = /* @__PURE__ */ new Set();
let H = null, Ss = null, Ge = null, Ce = [], Ti = null, cr = !1, Hn = null, Qf = 1;
class vt {
  // for debugging. TODO remove once async is stable
  id = Qf++;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<(batch: Batch) => void>}
   */
  #e = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #n = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #l = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #r = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #o = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * A map of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`.
   * The value contains child effects that were dirty/maybe_dirty before being reset,
   * so they can be rescheduled if the branch survives.
   * @type {Map<Effect, { d: Effect[], m: Effect[] }>}
   */
  #s = /* @__PURE__ */ new Map();
  is_fork = !1;
  #a = !1;
  #u() {
    return this.is_fork || this.#l > 0;
  }
  /**
   * Add an effect to the #skipped_branches map and reset its children
   * @param {Effect} effect
   */
  skip_effect(e) {
    this.#s.has(e) || this.#s.set(e, { d: [], m: [] });
  }
  /**
   * Remove an effect from the #skipped_branches map and reschedule
   * any tracked dirty/maybe_dirty child effects
   * @param {Effect} effect
   */
  unskip_effect(e) {
    var t = this.#s.get(e);
    if (t) {
      this.#s.delete(e);
      for (var r of t.d)
        Y(r, pe), it(r);
      for (r of t.m)
        Y(r, Ze), it(r);
    }
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(e) {
    Ce = [], this.apply();
    var t = Hn = [], r = [];
    for (const i of e)
      this.#c(i, t, r);
    if (Hn = null, this.#u()) {
      this.#f(r), this.#f(t);
      for (const [i, s] of this.#s)
        Ia(i, s);
    } else {
      Ss = this, H = null;
      for (const i of this.#e) i(this);
      this.#e.clear(), this.#n === 0 && this.#d(), Wo(r), Wo(t), this.#o.clear(), this.#i.clear(), Ss = null, this.#r?.resolve();
    }
    Ge = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #c(e, t, r) {
    e.f ^= he;
    for (var i = e.first; i !== null; ) {
      var s = i.f, o = (s & (et | Wt)) !== 0, l = o && (s & he) !== 0, a = (s & xe) !== 0, c = l || this.#s.has(i);
      if (!c && i.fn !== null) {
        o ? a || (i.f ^= he) : (s & Xn) !== 0 ? t.push(i) : (s & (Ln | wi)) !== 0 && a ? r.push(i) : Dr(i) && (Wn(i), (s & jt) !== 0 && (this.#i.add(i), a && Y(i, pe)));
        var u = i.first;
        if (u !== null) {
          i = u;
          continue;
        }
      }
      for (; i !== null; ) {
        var f = i.next;
        if (f !== null) {
          i = f;
          break;
        }
        i = i.parent;
      }
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #f(e) {
    for (var t = 0; t < e.length; t += 1)
      Na(e[t], this.#o, this.#i);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(e, t) {
    t !== te && !this.previous.has(e) && this.previous.set(e, t), (e.f & Rt) === 0 && (this.current.set(e, e.v), Ge?.set(e, e.v));
  }
  activate() {
    H = this, this.apply();
  }
  deactivate() {
    H === this && (H = null, Ge = null);
  }
  flush() {
    if (Ce.length > 0)
      H = this, Aa();
    else if (this.#n === 0 && !this.is_fork) {
      for (const e of this.#e) e(this);
      this.#e.clear(), this.#d(), this.#r?.resolve();
    }
    this.deactivate();
  }
  discard() {
    for (const e of this.#t) e(this);
    this.#t.clear();
  }
  #d() {
    if (Lr.size > 1) {
      this.previous.clear();
      var e = H, t = Ge, r = !0;
      for (const s of Lr) {
        if (s === this) {
          r = !1;
          continue;
        }
        const o = [];
        for (const [a, c] of this.current) {
          if (s.current.has(a))
            if (r && c !== s.current.get(a))
              s.current.set(a, c);
            else
              continue;
          o.push(a);
        }
        if (o.length === 0)
          continue;
        const l = [...s.current.keys()].filter((a) => !this.current.has(a));
        if (l.length > 0) {
          var i = Ce;
          Ce = [];
          const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const u of o)
            _a(u, l, a, c);
          if (Ce.length > 0) {
            H = s, s.apply();
            for (const u of Ce)
              s.#c(u, [], []);
            s.deactivate();
          }
          Ce = i;
        }
      }
      H = e, Ge = t;
    }
    this.#s.clear(), Lr.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(e) {
    this.#n += 1, e && (this.#l += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(e) {
    this.#n -= 1, e && (this.#l -= 1), !this.#a && (this.#a = !0, lt(() => {
      this.#a = !1, this.#u() ? Ce.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const e of this.#o)
      this.#i.delete(e), Y(e, pe), it(e);
    for (const e of this.#i)
      Y(e, Ze), it(e);
    this.flush();
  }
  /** @param {(batch: Batch) => void} fn */
  oncommit(e) {
    this.#e.add(e);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(e) {
    this.#t.add(e);
  }
  settled() {
    return (this.#r ??= ka()).promise;
  }
  static ensure() {
    if (H === null) {
      const e = H = new vt();
      Lr.add(H), cr || lt(() => {
        H === e && e.flush();
      });
    }
    return H;
  }
  apply() {
  }
}
function pn(n) {
  var e = cr;
  cr = !0;
  try {
    for (var t; ; ) {
      if (Gf(), Ce.length === 0 && (H?.flush(), Ce.length === 0))
        return Ti = null, /** @type {T} */
        t;
      Aa();
    }
  } finally {
    cr = e;
  }
}
function Aa() {
  var n = null;
  try {
    for (var e = 0; Ce.length > 0; ) {
      var t = vt.ensure();
      if (e++ > 1e3) {
        var r, i;
        Xf();
      }
      t.process(Ce), Pt.clear();
    }
  } finally {
    Ce = [], Ti = null, Hn = null;
  }
}
function Xf() {
  try {
    zf();
  } catch (n) {
    At(n, Ti);
  }
}
let mt = null;
function Wo(n) {
  var e = n.length;
  if (e !== 0) {
    for (var t = 0; t < e; ) {
      var r = n[t++];
      if ((r.f & (ot | xe)) === 0 && Dr(r) && (mt = /* @__PURE__ */ new Set(), Wn(r), r.deps === null && r.first === null && r.nodes === null && r.teardown === null && r.ac === null && Ga(r), mt?.size > 0)) {
        Pt.clear();
        for (const i of mt) {
          if ((i.f & (ot | xe)) !== 0) continue;
          const s = [i];
          let o = i.parent;
          for (; o !== null; )
            mt.has(o) && (mt.delete(o), s.push(o)), o = o.parent;
          for (let l = s.length - 1; l >= 0; l--) {
            const a = s[l];
            (a.f & (ot | xe)) === 0 && Wn(a);
          }
        }
        mt.clear();
      }
    }
    mt = null;
  }
}
function _a(n, e, t, r) {
  if (!t.has(n) && (t.add(n), n.reactions !== null))
    for (const i of n.reactions) {
      const s = i.f;
      (s & me) !== 0 ? _a(
        /** @type {Derived} */
        i,
        e,
        t,
        r
      ) : (s & (ro | jt)) !== 0 && (s & pe) === 0 && Da(i, e, r) && (Y(i, pe), it(
        /** @type {Effect} */
        i
      ));
    }
}
function Da(n, e, t) {
  const r = t.get(n);
  if (r !== void 0) return r;
  if (n.deps !== null)
    for (const i of n.deps) {
      if (zn.call(e, i))
        return !0;
      if ((i.f & me) !== 0 && Da(
        /** @type {Derived} */
        i,
        e,
        t
      ))
        return t.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return t.set(n, !1), !1;
}
function it(n) {
  var e = Ti = n, t = e.b;
  if (t?.is_pending && (n.f & (Xn | Ln | wi)) !== 0 && (n.f & kn) === 0) {
    t.defer_effect(n);
    return;
  }
  for (; e.parent !== null; ) {
    e = e.parent;
    var r = e.f;
    if (Hn !== null && e === F && (n.f & Ln) === 0)
      return;
    if ((r & (Wt | et)) !== 0) {
      if ((r & he) === 0)
        return;
      e.f ^= he;
    }
  }
  Ce.push(e);
}
function Ia(n, e) {
  if (!((n.f & et) !== 0 && (n.f & he) !== 0)) {
    (n.f & pe) !== 0 ? e.d.push(n) : (n.f & Ze) !== 0 && e.m.push(n), Y(n, he);
    for (var t = n.first; t !== null; )
      Ia(t, e), t = t.next;
  }
}
function Zf(n) {
  let e = 0, t = mn(0), r;
  return () => {
    co() && (N(t), Ai(() => (e === 0 && (r = Ir(() => n(() => ur(t)))), e += 1, () => {
      lt(() => {
        e -= 1, e === 0 && (r?.(), r = void 0, ur(t));
      });
    })));
  };
}
var ed = Fn | xn;
function td(n, e, t, r) {
  new nd(n, e, t, r);
}
class nd {
  /** @type {Boundary | null} */
  parent;
  is_pending = !1;
  /**
   * API-level transformError transform function. Transforms errors before they reach the `failed` snippet.
   * Inherited from parent boundary, or defaults to identity.
   * @type {(error: unknown) => unknown}
   */
  transform_error;
  /** @type {TemplateNode} */
  #e;
  /** @type {TemplateNode | null} */
  #t = $ ? L : null;
  /** @type {BoundaryProps} */
  #n;
  /** @type {((anchor: Node) => void)} */
  #l;
  /** @type {Effect} */
  #r;
  /** @type {Effect | null} */
  #o = null;
  /** @type {Effect | null} */
  #i = null;
  /** @type {Effect | null} */
  #s = null;
  /** @type {DocumentFragment | null} */
  #a = null;
  #u = 0;
  #c = 0;
  #f = !1;
  /** @type {Set<Effect>} */
  #d = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #p = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #h = null;
  #v = Zf(() => (this.#h = mn(this.#u), () => {
    this.#h = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   * @param {((error: unknown) => unknown) | undefined} [transform_error]
   */
  constructor(e, t, r, i) {
    this.#e = e, this.#n = t, this.#l = (s) => {
      var o = (
        /** @type {Effect} */
        F
      );
      o.b = this, o.f |= ks, r(s);
    }, this.parent = /** @type {Effect} */
    F.b, this.transform_error = i ?? this.parent?.transform_error ?? ((s) => s), this.#r = _i(() => {
      if ($) {
        const s = (
          /** @type {Comment} */
          this.#t
        );
        Nr();
        const o = s.data === eo;
        if (s.data.startsWith(Ho)) {
          const a = JSON.parse(s.data.slice(Ho.length));
          this.#x(a);
        } else o ? this.#S() : this.#k();
      } else
        this.#y();
    }, ed), $ && (this.#e = L);
  }
  #k() {
    try {
      this.#o = Ee(() => this.#l(this.#e));
    } catch (e) {
      this.error(e);
    }
  }
  /**
   * @param {unknown} error The deserialized error from the server's hydration comment
   */
  #x(e) {
    const t = this.#n.failed;
    t && (this.#s = Ee(() => {
      t(
        this.#e,
        () => e,
        () => () => {
        }
      );
    }));
  }
  #S() {
    const e = this.#n.pending;
    e && (this.is_pending = !0, this.#i = Ee(() => e(this.#e)), lt(() => {
      var t = this.#a = document.createDocumentFragment(), r = Be();
      t.append(r), this.#o = this.#g(() => (vt.ensure(), Ee(() => this.#l(r)))), this.#c === 0 && (this.#e.before(t), this.#a = null, on(
        /** @type {Effect} */
        this.#i,
        () => {
          this.#i = null;
        }
      ), this.#m());
    }));
  }
  #y() {
    try {
      if (this.is_pending = this.has_pending_snippet(), this.#c = 0, this.#u = 0, this.#o = Ee(() => {
        this.#l(this.#e);
      }), this.#c > 0) {
        var e = this.#a = document.createDocumentFragment();
        po(this.#o, e);
        const t = (
          /** @type {(anchor: Node) => void} */
          this.#n.pending
        );
        this.#i = Ee(() => t(this.#e));
      } else
        this.#m();
    } catch (t) {
      this.error(t);
    }
  }
  #m() {
    this.is_pending = !1;
    for (const e of this.#d)
      Y(e, pe), it(e);
    for (const e of this.#p)
      Y(e, Ze), it(e);
    this.#d.clear(), this.#p.clear();
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(e) {
    Na(e, this.#d, this.#p);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#n.pending;
  }
  /**
   * @template T
   * @param {() => T} fn
   */
  #g(e) {
    var t = F, r = z, i = Ae;
    at(this.#r), Ke(this.#r), Vn(this.#r.ctx);
    try {
      return e();
    } catch (s) {
      return Ea(s), null;
    } finally {
      at(t), Ke(r), Vn(i);
    }
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #b(e) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#b(e);
      return;
    }
    this.#c += e, this.#c === 0 && (this.#m(), this.#i && on(this.#i, () => {
      this.#i = null;
    }), this.#a && (this.#e.before(this.#a), this.#a = null));
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(e) {
    this.#b(e), this.#u += e, !(!this.#h || this.#f) && (this.#f = !0, lt(() => {
      this.#f = !1, this.#h && qn(this.#h, this.#u);
    }));
  }
  get_effect_pending() {
    return this.#v(), N(
      /** @type {Source<number>} */
      this.#h
    );
  }
  /** @param {unknown} error */
  error(e) {
    var t = this.#n.onerror;
    let r = this.#n.failed;
    if (!t && !r)
      throw e;
    this.#o && (re(this.#o), this.#o = null), this.#i && (re(this.#i), this.#i = null), this.#s && (re(this.#s), this.#s = null), $ && (Ne(
      /** @type {TemplateNode} */
      this.#t
    ), Kf(), Ne(si()));
    var i = !1, s = !1;
    const o = () => {
      if (i) {
        Wf();
        return;
      }
      i = !0, s && qf(), this.#s !== null && on(this.#s, () => {
        this.#s = null;
      }), this.#g(() => {
        vt.ensure(), this.#y();
      });
    }, l = (a) => {
      try {
        s = !0, t?.(a, o), s = !1;
      } catch (c) {
        At(c, this.#r && this.#r.parent);
      }
      r && (this.#s = this.#g(() => {
        vt.ensure();
        try {
          return Ee(() => {
            var c = (
              /** @type {Effect} */
              F
            );
            c.b = this, c.f |= ks, r(
              this.#e,
              () => a,
              () => o
            );
          });
        } catch (c) {
          return At(
            c,
            /** @type {Effect} */
            this.#r.parent
          ), null;
        }
      }));
    };
    lt(() => {
      var a;
      try {
        a = this.transform_error(e);
      } catch (c) {
        At(c, this.#r && this.#r.parent);
        return;
      }
      a !== null && typeof a == "object" && typeof /** @type {any} */
      a.then == "function" ? a.then(
        l,
        /** @param {unknown} e */
        (c) => At(c, this.#r && this.#r.parent)
      ) : l(a);
    });
  }
}
function Ra(n, e, t, r) {
  const i = so;
  var s = n.filter((f) => !f.settled);
  if (t.length === 0 && s.length === 0) {
    r(e.map(i));
    return;
  }
  var o = (
    /** @type {Effect} */
    F
  ), l = rd(), a = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((f) => f.promise)) : null;
  function c(f) {
    l();
    try {
      r(f);
    } catch (d) {
      (o.f & ot) === 0 && At(d, o);
    }
    ws();
  }
  if (t.length === 0) {
    a.then(() => c(e.map(i)));
    return;
  }
  function u() {
    l(), Promise.all(t.map((f) => /* @__PURE__ */ sd(f))).then((f) => c([...e.map(i), ...f])).catch((f) => At(f, o));
  }
  a ? a.then(u) : u();
}
function rd() {
  var n = F, e = z, t = Ae, r = H;
  return function(s = !0) {
    at(n), Ke(e), Vn(t), s && r?.activate();
  };
}
function ws(n = !0) {
  at(null), Ke(null), Vn(null), n && H?.deactivate();
}
function id() {
  var n = (
    /** @type {Boundary} */
    /** @type {Effect} */
    F.b
  ), e = (
    /** @type {Batch} */
    H
  ), t = n.is_rendered();
  return n.update_pending_count(1), e.increment(t), () => {
    n.update_pending_count(-1), e.decrement(t);
  };
}
// @__NO_SIDE_EFFECTS__
function so(n) {
  var e = me | pe, t = z !== null && (z.f & me) !== 0 ? (
    /** @type {Derived} */
    z
  ) : null;
  return F !== null && (F.f |= xn), {
    ctx: Ae,
    deps: null,
    effects: null,
    equals: wa,
    f: e,
    fn: n,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      te
    ),
    wv: 0,
    parent: t ?? F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function sd(n, e, t) {
  /** @type {Effect | null} */
  F === null && If();
  var i = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), s = mn(
    /** @type {V} */
    te
  ), o = !z, l = /* @__PURE__ */ new Map();
  return bd(() => {
    var a = ka();
    i = a.promise;
    try {
      Promise.resolve(n()).then(a.resolve, a.reject).finally(ws);
    } catch (d) {
      a.reject(d), ws();
    }
    var c = (
      /** @type {Batch} */
      H
    );
    if (o) {
      var u = id();
      l.get(c)?.reject(Qt), l.delete(c), l.set(c, a);
    }
    const f = (d, p = void 0) => {
      if (c.activate(), p)
        p !== Qt && (s.f |= Rt, qn(s, p));
      else {
        (s.f & Rt) !== 0 && (s.f ^= Rt), qn(s, d);
        for (const [h, m] of l) {
          if (l.delete(h), h === c) break;
          m.reject(Qt);
        }
      }
      u && u();
    };
    a.promise.then(f, (d) => f(null, d || "unknown"));
  }), uo(() => {
    for (const a of l.values())
      a.reject(Qt);
  }), new Promise((a) => {
    function c(u) {
      function f() {
        u === i ? a(s) : c(i);
      }
      u.then(f, f);
    }
    c(i);
  });
}
// @__NO_SIDE_EFFECTS__
function od(n) {
  const e = /* @__PURE__ */ so(n);
  return e.equals = Ma, e;
}
function ld(n) {
  var e = n.effects;
  if (e !== null) {
    n.effects = null;
    for (var t = 0; t < e.length; t += 1)
      re(
        /** @type {Effect} */
        e[t]
      );
  }
}
function ad(n) {
  for (var e = n.parent; e !== null; ) {
    if ((e.f & me) === 0)
      return (e.f & ot) === 0 ? (
        /** @type {Effect} */
        e
      ) : null;
    e = e.parent;
  }
  return null;
}
function oo(n) {
  var e, t = F;
  at(ad(n));
  try {
    n.f &= ~hn, ld(n), e = tc(n);
  } finally {
    at(t);
  }
  return e;
}
function Pa(n) {
  var e = oo(n);
  if (!n.equals(e) && (n.wv = Za(), (!H?.is_fork || n.deps === null) && (n.v = e, n.deps === null))) {
    Y(n, he);
    return;
  }
  Ht || (Ge !== null ? (co() || H?.is_fork) && Ge.set(n, e) : io(n));
}
function cd(n) {
  if (n.effects !== null)
    for (const e of n.effects)
      (e.teardown || e.ac) && (e.teardown?.(), e.ac?.abort(Qt), e.teardown = Ef, e.ac = null, mr(e, 0), fo(e));
}
function $a(n) {
  if (n.effects !== null)
    for (const e of n.effects)
      e.teardown && Wn(e);
}
let Ms = /* @__PURE__ */ new Set();
const Pt = /* @__PURE__ */ new Map();
let Ba = !1;
function mn(n, e) {
  var t = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: n,
    reactions: null,
    equals: wa,
    rv: 0,
    wv: 0
  };
  return t;
}
// @__NO_SIDE_EFFECTS__
function G(n, e) {
  const t = mn(n);
  return xd(t), t;
}
// @__NO_SIDE_EFFECTS__
function za(n, e = !1, t = !0) {
  const r = mn(n);
  return e || (r.equals = Ma), r;
}
function B(n, e, t = !1) {
  z !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Xe || (z.f & jo) !== 0) && Ca() && (z.f & (me | jt | ro | jo)) !== 0 && (qe === null || !zn.call(qe, n)) && Hf();
  let r = t ? Nn(e) : e;
  return qn(n, r);
}
function qn(n, e) {
  if (!n.equals(e)) {
    var t = n.v;
    Ht ? Pt.set(n, e) : Pt.set(n, t), n.v = e;
    var r = vt.ensure();
    if (r.capture(n, t), (n.f & me) !== 0) {
      const i = (
        /** @type {Derived} */
        n
      );
      (n.f & pe) !== 0 && oo(i), io(i);
    }
    n.wv = Za(), La(n, pe), F !== null && (F.f & he) !== 0 && (F.f & (et | Wt)) === 0 && (Le === null ? Sd([n]) : Le.push(n)), !r.is_fork && Ms.size > 0 && !Ba && ud();
  }
  return e;
}
function ud() {
  Ba = !1;
  for (const n of Ms)
    (n.f & he) !== 0 && Y(n, Ze), Dr(n) && Wn(n);
  Ms.clear();
}
function ur(n) {
  B(n, n.v + 1);
}
function La(n, e) {
  var t = n.reactions;
  if (t !== null)
    for (var r = t.length, i = 0; i < r; i++) {
      var s = t[i], o = s.f, l = (o & pe) === 0;
      if (l && Y(s, e), (o & me) !== 0) {
        var a = (
          /** @type {Derived} */
          s
        );
        Ge?.delete(a), (o & hn) === 0 && (o & He && (s.f |= hn), La(a, Ze));
      } else l && ((o & jt) !== 0 && mt !== null && mt.add(
        /** @type {Effect} */
        s
      ), it(
        /** @type {Effect} */
        s
      ));
    }
}
function Nn(n) {
  if (typeof n != "object" || n === null || In in n)
    return n;
  const e = va(n);
  if (e !== Cf && e !== Tf)
    return n;
  var t = /* @__PURE__ */ new Map(), r = no(n), i = /* @__PURE__ */ G(0), s = ln, o = (l) => {
    if (ln === s)
      return l();
    var a = z, c = ln;
    Ke(null), Yo(s);
    var u = l();
    return Ke(a), Yo(c), u;
  };
  return r && t.set("length", /* @__PURE__ */ G(
    /** @type {any[]} */
    n.length
  )), new Proxy(
    /** @type {any} */
    n,
    {
      defineProperty(l, a, c) {
        (!("value" in c) || c.configurable === !1 || c.enumerable === !1 || c.writable === !1) && Ff();
        var u = t.get(a);
        return u === void 0 ? o(() => {
          var f = /* @__PURE__ */ G(c.value);
          return t.set(a, f), f;
        }) : B(u, c.value, !0), !0;
      },
      deleteProperty(l, a) {
        var c = t.get(a);
        if (c === void 0) {
          if (a in l) {
            const u = o(() => /* @__PURE__ */ G(te));
            t.set(a, u), ur(i);
          }
        } else
          B(c, te), ur(i);
        return !0;
      },
      get(l, a, c) {
        if (a === In)
          return n;
        var u = t.get(a), f = a in l;
        if (u === void 0 && (!f || Dn(l, a)?.writable) && (u = o(() => {
          var p = Nn(f ? l[a] : te), h = /* @__PURE__ */ G(p);
          return h;
        }), t.set(a, u)), u !== void 0) {
          var d = N(u);
          return d === te ? void 0 : d;
        }
        return Reflect.get(l, a, c);
      },
      getOwnPropertyDescriptor(l, a) {
        var c = Reflect.getOwnPropertyDescriptor(l, a);
        if (c && "value" in c) {
          var u = t.get(a);
          u && (c.value = N(u));
        } else if (c === void 0) {
          var f = t.get(a), d = f?.v;
          if (f !== void 0 && d !== te)
            return {
              enumerable: !0,
              configurable: !0,
              value: d,
              writable: !0
            };
        }
        return c;
      },
      has(l, a) {
        if (a === In)
          return !0;
        var c = t.get(a), u = c !== void 0 && c.v !== te || Reflect.has(l, a);
        if (c !== void 0 || F !== null && (!u || Dn(l, a)?.writable)) {
          c === void 0 && (c = o(() => {
            var d = u ? Nn(l[a]) : te, p = /* @__PURE__ */ G(d);
            return p;
          }), t.set(a, c));
          var f = N(c);
          if (f === te)
            return !1;
        }
        return u;
      },
      set(l, a, c, u) {
        var f = t.get(a), d = a in l;
        if (r && a === "length")
          for (var p = c; p < /** @type {Source<number>} */
          f.v; p += 1) {
            var h = t.get(p + "");
            h !== void 0 ? B(h, te) : p in l && (h = o(() => /* @__PURE__ */ G(te)), t.set(p + "", h));
          }
        if (f === void 0)
          (!d || Dn(l, a)?.writable) && (f = o(() => /* @__PURE__ */ G(void 0)), B(f, Nn(c)), t.set(a, f));
        else {
          d = f.v !== te;
          var m = o(() => Nn(c));
          B(f, m);
        }
        var g = Reflect.getOwnPropertyDescriptor(l, a);
        if (g?.set && g.set.call(u, c), !d) {
          if (r && typeof a == "string") {
            var y = (
              /** @type {Source<number>} */
              t.get("length")
            ), k = Number(a);
            Number.isInteger(k) && k >= y.v && B(y, k + 1);
          }
          ur(i);
        }
        return !0;
      },
      ownKeys(l) {
        N(i);
        var a = Reflect.ownKeys(l).filter((f) => {
          var d = t.get(f);
          return d === void 0 || d.v !== te;
        });
        for (var [c, u] of t)
          u.v !== te && !(c in l) && a.push(c);
        return a;
      },
      setPrototypeOf() {
        Vf();
      }
    }
  );
}
function Ko(n) {
  try {
    if (n !== null && typeof n == "object" && In in n)
      return n[In];
  } catch {
  }
  return n;
}
function fd(n, e) {
  return Object.is(Ko(n), Ko(e));
}
var Jo, Fa, Va, Ha;
function Cs() {
  if (Jo === void 0) {
    Jo = window, Fa = /Firefox/.test(navigator.userAgent);
    var n = Element.prototype, e = Node.prototype, t = Text.prototype;
    Va = Dn(e, "firstChild").get, Ha = Dn(e, "nextSibling").get, qo(n) && (n.__click = void 0, n.__className = void 0, n.__attributes = null, n.__style = void 0, n.__e = void 0), qo(t) && (t.__t = void 0);
  }
}
function Be(n = "") {
  return document.createTextNode(n);
}
// @__NO_SIDE_EFFECTS__
function jn(n) {
  return (
    /** @type {TemplateNode | null} */
    Va.call(n)
  );
}
// @__NO_SIDE_EFFECTS__
function ft(n) {
  return (
    /** @type {TemplateNode | null} */
    Ha.call(n)
  );
}
function U(n, e) {
  if (!$)
    return /* @__PURE__ */ jn(n);
  var t = /* @__PURE__ */ jn(L);
  if (t === null)
    t = L.appendChild(Be());
  else if (e && t.nodeType !== Er) {
    var r = Be();
    return t?.before(r), Ne(r), r;
  }
  return e && Ei(
    /** @type {Text} */
    t
  ), Ne(t), t;
}
function oi(n, e = !1) {
  if (!$) {
    var t = /* @__PURE__ */ jn(n);
    return t instanceof Comment && t.data === "" ? /* @__PURE__ */ ft(t) : t;
  }
  if (e) {
    if (L?.nodeType !== Er) {
      var r = Be();
      return L?.before(r), Ne(r), r;
    }
    Ei(
      /** @type {Text} */
      L
    );
  }
  return L;
}
function q(n, e = 1, t = !1) {
  let r = $ ? L : n;
  for (var i; e--; )
    i = r, r = /** @type {TemplateNode} */
    /* @__PURE__ */ ft(r);
  if (!$)
    return r;
  if (t) {
    if (r?.nodeType !== Er) {
      var s = Be();
      return r === null ? i?.after(s) : r.before(s), Ne(s), s;
    }
    Ei(
      /** @type {Text} */
      r
    );
  }
  return Ne(r), r;
}
function qa(n) {
  n.textContent = "";
}
function ja() {
  return !1;
}
function lo(n, e, t) {
  return (
    /** @type {T extends keyof HTMLElementTagNameMap ? HTMLElementTagNameMap[T] : Element} */
    document.createElementNS(ba, n, void 0)
  );
}
function Ei(n) {
  if (
    /** @type {string} */
    n.nodeValue.length < 65536
  )
    return;
  let e = n.nextSibling;
  for (; e !== null && e.nodeType === Er; )
    e.remove(), n.nodeValue += /** @type {string} */
    e.nodeValue, e = n.nextSibling;
}
function ao(n, e) {
  if (e) {
    const t = document.body;
    n.autofocus = !0, lt(() => {
      document.activeElement === t && n.focus();
    });
  }
}
let Uo = !1;
function Wa() {
  Uo || (Uo = !0, document.addEventListener(
    "reset",
    (n) => {
      Promise.resolve().then(() => {
        if (!n.defaultPrevented)
          for (
            const e of
            /**@type {HTMLFormElement} */
            n.target.elements
          )
            e.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function Oi(n) {
  var e = z, t = F;
  Ke(null), at(null);
  try {
    return n();
  } finally {
    Ke(e), at(t);
  }
}
function dd(n, e, t, r = t) {
  n.addEventListener(e, () => Oi(t));
  const i = n.__on_r;
  i ? n.__on_r = () => {
    i(), r(!0);
  } : n.__on_r = () => r(!0), Wa();
}
function hd(n) {
  F === null && (z === null && Bf(), $f()), Ht && Pf();
}
function pd(n, e) {
  var t = e.last;
  t === null ? e.last = e.first = n : (t.next = n, n.prev = t, e.last = n);
}
function tt(n, e) {
  var t = F;
  t !== null && (t.f & xe) !== 0 && (n |= xe);
  var r = {
    ctx: Ae,
    deps: null,
    nodes: null,
    f: n | pe | He,
    first: null,
    fn: e,
    last: null,
    next: null,
    parent: t,
    b: t && t.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  }, i = r;
  if ((n & Xn) !== 0)
    Hn !== null ? Hn.push(r) : it(r);
  else if (e !== null) {
    try {
      Wn(r);
    } catch (o) {
      throw re(r), o;
    }
    i.deps === null && i.teardown === null && i.nodes === null && i.first === i.last && // either `null`, or a singular child
    (i.f & xn) === 0 && (i = i.first, (n & jt) !== 0 && (n & Fn) !== 0 && i !== null && (i.f |= Fn));
  }
  if (i !== null && (i.parent = t, t !== null && pd(i, t), z !== null && (z.f & me) !== 0 && (n & Wt) === 0)) {
    var s = (
      /** @type {Derived} */
      z
    );
    (s.effects ??= []).push(i);
  }
  return r;
}
function co() {
  return z !== null && !Xe;
}
function uo(n) {
  const e = tt(Ln, null);
  return Y(e, he), e.teardown = n, e;
}
function md(n) {
  hd();
  var e = (
    /** @type {Effect} */
    F.f
  ), t = !z && (e & et) !== 0 && (e & kn) === 0;
  if (t) {
    var r = (
      /** @type {ComponentContext} */
      Ae
    );
    (r.e ??= []).push(n);
  } else
    return Ka(n);
}
function Ka(n) {
  return tt(Xn | Af, n);
}
function gd(n) {
  vt.ensure();
  const e = tt(Wt | xn, n);
  return () => {
    re(e);
  };
}
function yd(n) {
  vt.ensure();
  const e = tt(Wt | xn, n);
  return (t = {}) => new Promise((r) => {
    t.outro ? on(e, () => {
      re(e), r(void 0);
    }) : (re(e), r(void 0));
  });
}
function Ni(n) {
  return tt(Xn, n);
}
function bd(n) {
  return tt(ro | xn, n);
}
function Ai(n, e = 0) {
  return tt(Ln | e, n);
}
function Zt(n, e = [], t = [], r = []) {
  Ra(r, e, t, (i) => {
    tt(Ln, () => n(...i.map(N)));
  });
}
function _i(n, e = 0) {
  var t = tt(jt | e, n);
  return t;
}
function Ja(n, e = 0) {
  var t = tt(wi | e, n);
  return t;
}
function Ee(n) {
  return tt(et | xn, n);
}
function Ua(n) {
  var e = n.teardown;
  if (e !== null) {
    const t = Ht, r = z;
    Go(!0), Ke(null);
    try {
      e.call(null);
    } finally {
      Go(t), Ke(r);
    }
  }
}
function fo(n, e = !1) {
  var t = n.first;
  for (n.first = n.last = null; t !== null; ) {
    const i = t.ac;
    i !== null && Oi(() => {
      i.abort(Qt);
    });
    var r = t.next;
    (t.f & Wt) !== 0 ? t.parent = null : re(t, e), t = r;
  }
}
function vd(n) {
  for (var e = n.first; e !== null; ) {
    var t = e.next;
    (e.f & et) === 0 && re(e), e = t;
  }
}
function re(n, e = !0) {
  var t = !1;
  (e || (n.f & Nf) !== 0) && n.nodes !== null && n.nodes.end !== null && (kd(
    n.nodes.start,
    /** @type {TemplateNode} */
    n.nodes.end
  ), t = !0), fo(n, e && !t), mr(n, 0), Y(n, ot);
  var r = n.nodes && n.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  Ua(n);
  var i = n.parent;
  i !== null && i.first !== null && Ga(n), n.next = n.prev = n.teardown = n.ctx = n.deps = n.fn = n.nodes = n.ac = null;
}
function kd(n, e) {
  for (; n !== null; ) {
    var t = n === e ? null : /* @__PURE__ */ ft(n);
    n.remove(), n = t;
  }
}
function Ga(n) {
  var e = n.parent, t = n.prev, r = n.next;
  t !== null && (t.next = r), r !== null && (r.prev = t), e !== null && (e.first === n && (e.first = r), e.last === n && (e.last = t));
}
function on(n, e, t = !0) {
  var r = [];
  Ya(n, r, !0);
  var i = () => {
    t && re(n), e && e();
  }, s = r.length;
  if (s > 0) {
    var o = () => --s || i();
    for (var l of r)
      l.out(o);
  } else
    i();
}
function Ya(n, e, t) {
  if ((n.f & xe) === 0) {
    n.f ^= xe;
    var r = n.nodes && n.nodes.t;
    if (r !== null)
      for (const l of r)
        (l.is_global || t) && e.push(l);
    for (var i = n.first; i !== null; ) {
      var s = i.next, o = (i.f & Fn) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & et) !== 0 && (n.f & jt) !== 0;
      Ya(i, e, o ? t : !1), i = s;
    }
  }
}
function ho(n) {
  Qa(n, !0);
}
function Qa(n, e) {
  if ((n.f & xe) !== 0) {
    n.f ^= xe;
    for (var t = n.first; t !== null; ) {
      var r = t.next, i = (t.f & Fn) !== 0 || (t.f & et) !== 0;
      Qa(t, i ? e : !1), t = r;
    }
    var s = n.nodes && n.nodes.t;
    if (s !== null)
      for (const o of s)
        (o.is_global || e) && o.in();
  }
}
function po(n, e) {
  if (n.nodes)
    for (var t = n.nodes.start, r = n.nodes.end; t !== null; ) {
      var i = t === r ? null : /* @__PURE__ */ ft(t);
      e.append(t), t = i;
    }
}
let Yr = !1, Ht = !1;
function Go(n) {
  Ht = n;
}
let z = null, Xe = !1;
function Ke(n) {
  z = n;
}
let F = null;
function at(n) {
  F = n;
}
let qe = null;
function xd(n) {
  z !== null && (qe === null ? qe = [n] : qe.push(n));
}
let Te = null, Ie = 0, Le = null;
function Sd(n) {
  Le = n;
}
let Xa = 1, en = 0, ln = en;
function Yo(n) {
  ln = n;
}
function Za() {
  return ++Xa;
}
function Dr(n) {
  var e = n.f;
  if ((e & pe) !== 0)
    return !0;
  if (e & me && (n.f &= ~hn), (e & Ze) !== 0) {
    for (var t = (
      /** @type {Value[]} */
      n.deps
    ), r = t.length, i = 0; i < r; i++) {
      var s = t[i];
      if (Dr(
        /** @type {Derived} */
        s
      ) && Pa(
        /** @type {Derived} */
        s
      ), s.wv > n.wv)
        return !0;
    }
    (e & He) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Ge === null && Y(n, he);
  }
  return !1;
}
function ec(n, e, t = !0) {
  var r = n.reactions;
  if (r !== null && !(qe !== null && zn.call(qe, n)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & me) !== 0 ? ec(
        /** @type {Derived} */
        s,
        e,
        !1
      ) : e === s && (t ? Y(s, pe) : (s.f & he) !== 0 && Y(s, Ze), it(
        /** @type {Effect} */
        s
      ));
    }
}
function tc(n) {
  var e = Te, t = Ie, r = Le, i = z, s = qe, o = Ae, l = Xe, a = ln, c = n.f;
  Te = /** @type {null | Value[]} */
  null, Ie = 0, Le = null, z = (c & (et | Wt)) === 0 ? n : null, qe = null, Vn(n.ctx), Xe = !1, ln = ++en, n.ac !== null && (Oi(() => {
    n.ac.abort(Qt);
  }), n.ac = null);
  try {
    n.f |= xs;
    var u = (
      /** @type {Function} */
      n.fn
    ), f = u();
    n.f |= kn;
    var d = n.deps, p = H?.is_fork;
    if (Te !== null) {
      var h;
      if (p || mr(n, Ie), d !== null && Ie > 0)
        for (d.length = Ie + Te.length, h = 0; h < Te.length; h++)
          d[Ie + h] = Te[h];
      else
        n.deps = d = Te;
      if (co() && (n.f & He) !== 0)
        for (h = Ie; h < d.length; h++)
          (d[h].reactions ??= []).push(n);
    } else !p && d !== null && Ie < d.length && (mr(n, Ie), d.length = Ie);
    if (Ca() && Le !== null && !Xe && d !== null && (n.f & (me | Ze | pe)) === 0)
      for (h = 0; h < /** @type {Source[]} */
      Le.length; h++)
        ec(
          Le[h],
          /** @type {Effect} */
          n
        );
    if (i !== null && i !== n) {
      if (en++, i.deps !== null)
        for (let m = 0; m < t; m += 1)
          i.deps[m].rv = en;
      if (e !== null)
        for (const m of e)
          m.rv = en;
      Le !== null && (r === null ? r = Le : r.push(.../** @type {Source[]} */
      Le));
    }
    return (n.f & Rt) !== 0 && (n.f ^= Rt), f;
  } catch (m) {
    return Ea(m);
  } finally {
    n.f ^= xs, Te = e, Ie = t, Le = r, z = i, qe = s, Vn(o), Xe = l, ln = a;
  }
}
function wd(n, e) {
  let t = e.reactions;
  if (t !== null) {
    var r = wf.call(t, n);
    if (r !== -1) {
      var i = t.length - 1;
      i === 0 ? t = e.reactions = null : (t[r] = t[i], t.pop());
    }
  }
  if (t === null && (e.f & me) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (Te === null || !zn.call(Te, e))) {
    var s = (
      /** @type {Derived} */
      e
    );
    (s.f & He) !== 0 && (s.f ^= He, s.f &= ~hn), io(s), cd(s), mr(s, 0);
  }
}
function mr(n, e) {
  var t = n.deps;
  if (t !== null)
    for (var r = e; r < t.length; r++)
      wd(n, t[r]);
}
function Wn(n) {
  var e = n.f;
  if ((e & ot) === 0) {
    Y(n, he);
    var t = F, r = Yr;
    F = n, Yr = !0;
    try {
      (e & (jt | wi)) !== 0 ? vd(n) : fo(n), Ua(n);
      var i = tc(n);
      n.teardown = typeof i == "function" ? i : null, n.wv = Xa;
      var s;
      vs && Uf && (n.f & pe) !== 0 && n.deps;
    } finally {
      Yr = r, F = t;
    }
  }
}
async function Md() {
  await Promise.resolve(), pn();
}
function N(n) {
  var e = n.f, t = (e & me) !== 0;
  if (z !== null && !Xe) {
    var r = F !== null && (F.f & ot) !== 0;
    if (!r && (qe === null || !zn.call(qe, n))) {
      var i = z.deps;
      if ((z.f & xs) !== 0)
        n.rv < en && (n.rv = en, Te === null && i !== null && i[Ie] === n ? Ie++ : Te === null ? Te = [n] : Te.push(n));
      else {
        (z.deps ??= []).push(n);
        var s = n.reactions;
        s === null ? n.reactions = [z] : zn.call(s, z) || s.push(z);
      }
    }
  }
  if (Ht && Pt.has(n))
    return Pt.get(n);
  if (t) {
    var o = (
      /** @type {Derived} */
      n
    );
    if (Ht) {
      var l = o.v;
      return ((o.f & he) === 0 && o.reactions !== null || rc(o)) && (l = oo(o)), Pt.set(o, l), l;
    }
    var a = (o.f & He) === 0 && !Xe && z !== null && (Yr || (z.f & He) !== 0), c = (o.f & kn) === 0;
    Dr(o) && (a && (o.f |= He), Pa(o)), a && !c && ($a(o), nc(o));
  }
  if (Ge?.has(n))
    return Ge.get(n);
  if ((n.f & Rt) !== 0)
    throw n.v;
  return n.v;
}
function nc(n) {
  if (n.f |= He, n.deps !== null)
    for (const e of n.deps)
      (e.reactions ??= []).push(n), (e.f & me) !== 0 && (e.f & He) === 0 && ($a(
        /** @type {Derived} */
        e
      ), nc(
        /** @type {Derived} */
        e
      ));
}
function rc(n) {
  if (n.v === te) return !0;
  if (n.deps === null) return !1;
  for (const e of n.deps)
    if (Pt.has(e) || (e.f & me) !== 0 && rc(
      /** @type {Derived} */
      e
    ))
      return !0;
  return !1;
}
function Ir(n) {
  var e = Xe;
  try {
    return Xe = !0, n();
  } finally {
    Xe = e;
  }
}
const ir = /* @__PURE__ */ Symbol("events"), ic = /* @__PURE__ */ new Set(), Ts = /* @__PURE__ */ new Set();
function sc(n, e, t, r = {}) {
  function i(s) {
    if (r.capture || Es.call(e, s), !s.cancelBubble)
      return Oi(() => t?.call(this, s));
  }
  return n.startsWith("pointer") || n.startsWith("touch") || n === "wheel" ? lt(() => {
    e.addEventListener(n, i, r);
  }) : e.addEventListener(n, i, r), i;
}
function oc(n, e, t, r, i) {
  var s = { capture: r, passive: i }, o = sc(n, e, t, s);
  (e === document.body || // @ts-ignore
  e === window || // @ts-ignore
  e === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  e instanceof HTMLMediaElement) && uo(() => {
    e.removeEventListener(n, o, s);
  });
}
function Z(n, e, t) {
  (e[ir] ??= {})[n] = t;
}
function Rr(n) {
  for (var e = 0; e < n.length; e++)
    ic.add(n[e]);
  for (var t of Ts)
    t(n);
}
let Qo = null;
function Es(n) {
  var e = this, t = (
    /** @type {Node} */
    e.ownerDocument
  ), r = n.type, i = n.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || n.target
  );
  Qo = n;
  var o = 0, l = Qo === n && n[ir];
  if (l) {
    var a = i.indexOf(l);
    if (a !== -1 && (e === document || e === /** @type {any} */
    window)) {
      n[ir] = e;
      return;
    }
    var c = i.indexOf(e);
    if (c === -1)
      return;
    a <= c && (o = a);
  }
  if (s = /** @type {Element} */
  i[o] || n.target, s !== e) {
    ii(n, "currentTarget", {
      configurable: !0,
      get() {
        return s || t;
      }
    });
    var u = z, f = F;
    Ke(null), at(null);
    try {
      for (var d, p = []; s !== null; ) {
        var h = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s[ir]?.[r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          n.target === s) && m.call(s, n);
        } catch (g) {
          d ? p.push(g) : d = g;
        }
        if (n.cancelBubble || h === e || h === null)
          break;
        s = h;
      }
      if (d) {
        for (let g of p)
          queueMicrotask(() => {
            throw g;
          });
        throw d;
      }
    } finally {
      n[ir] = e, delete n.currentTarget, Ke(u), at(f);
    }
  }
}
const Cd = (
  // We gotta write it like this because after downleveling the pure comment may end up in the wrong location
  globalThis?.window?.trustedTypes && /* @__PURE__ */ globalThis.window.trustedTypes.createPolicy("svelte-trusted-html", {
    /** @param {string} html */
    createHTML: (n) => n
  })
);
function Td(n) {
  return (
    /** @type {string} */
    Cd?.createHTML(n) ?? n
  );
}
function Ed(n) {
  var e = lo("template");
  return e.innerHTML = Td(n.replaceAll("<!>", "<!---->")), e.content;
}
function $t(n, e) {
  var t = (
    /** @type {Effect} */
    F
  );
  t.nodes === null && (t.nodes = { start: n, end: e, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function ze(n, e) {
  var t = (e & kf) !== 0, r = (e & xf) !== 0, i, s = !n.startsWith("<!>");
  return () => {
    if ($)
      return $t(L, null), L;
    i === void 0 && (i = Ed(s ? n : "<!>" + n), t || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ jn(i)));
    var o = (
      /** @type {TemplateNode} */
      r || Fa ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (t) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ jn(o)
      ), a = (
        /** @type {TemplateNode} */
        o.lastChild
      );
      $t(l, a);
    } else
      $t(o, o);
    return o;
  };
}
function Od(n = "") {
  if (!$) {
    var e = Be(n + "");
    return $t(e, e), e;
  }
  var t = L;
  return t.nodeType !== Er ? (t.before(t = Be()), Ne(t)) : Ei(
    /** @type {Text} */
    t
  ), $t(t, t), t;
}
function lc() {
  if ($)
    return $t(L, null), L;
  var n = document.createDocumentFragment(), e = document.createComment(""), t = Be();
  return n.append(e, t), $t(e, t), n;
}
function ce(n, e) {
  if ($) {
    var t = (
      /** @type {Effect & { nodes: EffectNodes }} */
      F
    );
    ((t.f & kn) === 0 || t.nodes.end === null) && (t.nodes.end = L), Nr();
    return;
  }
  n !== null && n.before(
    /** @type {Node} */
    e
  );
}
function Nd(n) {
  return n.endsWith("capture") && n !== "gotpointercapture" && n !== "lostpointercapture";
}
const Ad = [
  "beforeinput",
  "click",
  "change",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
];
function _d(n) {
  return Ad.includes(n);
}
const Dd = {
  // no `class: 'className'` because we handle that separately
  formnovalidate: "formNoValidate",
  ismap: "isMap",
  nomodule: "noModule",
  playsinline: "playsInline",
  readonly: "readOnly",
  defaultvalue: "defaultValue",
  defaultchecked: "defaultChecked",
  srcobject: "srcObject",
  novalidate: "noValidate",
  allowfullscreen: "allowFullscreen",
  disablepictureinpicture: "disablePictureInPicture",
  disableremoteplayback: "disableRemotePlayback"
};
function Id(n) {
  return n = n.toLowerCase(), Dd[n] ?? n;
}
const Rd = ["touchstart", "touchmove"];
function Pd(n) {
  return Rd.includes(n);
}
function tn(n, e) {
  var t = e == null ? "" : typeof e == "object" ? `${e}` : e;
  t !== (n.__t ??= n.nodeValue) && (n.__t = t, n.nodeValue = `${t}`);
}
function ac(n, e) {
  return cc(n, e);
}
function $d(n, e) {
  Cs(), e.intro = e.intro ?? !1;
  const t = e.target, r = $, i = L;
  try {
    for (var s = /* @__PURE__ */ jn(t); s && (s.nodeType !== Or || /** @type {Comment} */
    s.data !== ya); )
      s = /* @__PURE__ */ ft(s);
    if (!s)
      throw Bn;
    Qe(!0), Ne(
      /** @type {Comment} */
      s
    );
    const o = cc(n, { ...e, anchor: s });
    return Qe(!1), /**  @type {Exports} */
    o;
  } catch (o) {
    if (o instanceof Error && o.message.split(`
`).some((l) => l.startsWith("https://svelte.dev/e/")))
      throw o;
    return o !== Bn && console.warn("Failed to hydrate: ", o), e.recover === !1 && Lf(), Cs(), qa(t), Qe(!1), ac(n, e);
  } finally {
    Qe(r), Ne(i);
  }
}
const Fr = /* @__PURE__ */ new Map();
function cc(n, { target: e, anchor: t, props: r = {}, events: i, context: s, intro: o = !0, transformError: l }) {
  Cs();
  var a = void 0, c = yd(() => {
    var u = t ?? e.appendChild(Be());
    td(
      /** @type {TemplateNode} */
      u,
      {
        pending: () => {
        }
      },
      (p) => {
        Ar({});
        var h = (
          /** @type {ComponentContext} */
          Ae
        );
        if (s && (h.c = s), i && (r.$$events = i), $ && $t(
          /** @type {TemplateNode} */
          p,
          null
        ), a = n(p, r) || {}, $ && (F.nodes.end = L, L === null || L.nodeType !== Or || /** @type {Comment} */
        L.data !== to))
          throw Ci(), Bn;
        _r();
      },
      l
    );
    var f = /* @__PURE__ */ new Set(), d = (p) => {
      for (var h = 0; h < p.length; h++) {
        var m = p[h];
        if (!f.has(m)) {
          f.add(m);
          var g = Pd(m);
          for (const S of [e, document]) {
            var y = Fr.get(S);
            y === void 0 && (y = /* @__PURE__ */ new Map(), Fr.set(S, y));
            var k = y.get(m);
            k === void 0 ? (S.addEventListener(m, Es, { passive: g }), y.set(m, 1)) : y.set(m, k + 1);
          }
        }
      }
    };
    return d(Si(ic)), Ts.add(d), () => {
      for (var p of f)
        for (const g of [e, document]) {
          var h = (
            /** @type {Map<string, number>} */
            Fr.get(g)
          ), m = (
            /** @type {number} */
            h.get(p)
          );
          --m == 0 ? (g.removeEventListener(p, Es), h.delete(p), h.size === 0 && Fr.delete(g)) : h.set(p, m);
        }
      Ts.delete(d), u !== t && u.parentNode?.removeChild(u);
    };
  });
  return Os.set(a, c), a;
}
let Os = /* @__PURE__ */ new WeakMap();
function Bd(n, e) {
  const t = Os.get(n);
  return t ? (Os.delete(n), t(e)) : Promise.resolve();
}
class uc {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #e = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #t = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #n = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #l = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #r = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(e, t = !0) {
    this.anchor = e, this.#r = t;
  }
  /**
   * @param {Batch} batch
   */
  #o = (e) => {
    if (this.#e.has(e)) {
      var t = (
        /** @type {Key} */
        this.#e.get(e)
      ), r = this.#t.get(t);
      if (r)
        ho(r), this.#l.delete(t);
      else {
        var i = this.#n.get(t);
        i && (i.effect.f & xe) === 0 && (this.#t.set(t, i.effect), this.#n.delete(t), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
      }
      for (const [s, o] of this.#e) {
        if (this.#e.delete(s), s === e)
          break;
        const l = this.#n.get(o);
        l && (re(l.effect), this.#n.delete(o));
      }
      for (const [s, o] of this.#t) {
        if (s === t || this.#l.has(s) || (o.f & xe) !== 0) continue;
        const l = () => {
          if (Array.from(this.#e.values()).includes(s)) {
            var c = document.createDocumentFragment();
            po(o, c), c.append(Be()), this.#n.set(s, { effect: o, fragment: c });
          } else
            re(o);
          this.#l.delete(s), this.#t.delete(s);
        };
        this.#r || !r ? (this.#l.add(s), on(o, l, !1)) : l();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #i = (e) => {
    this.#e.delete(e);
    const t = Array.from(this.#e.values());
    for (const [r, i] of this.#n)
      t.includes(r) || (re(i.effect), this.#n.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(e, t) {
    var r = (
      /** @type {Batch} */
      H
    ), i = ja();
    if (t && !this.#t.has(e) && !this.#n.has(e))
      if (i) {
        var s = document.createDocumentFragment(), o = Be();
        s.append(o), this.#n.set(e, {
          effect: Ee(() => t(o)),
          fragment: s
        });
      } else
        this.#t.set(
          e,
          Ee(() => t(this.anchor))
        );
    if (this.#e.set(r, e), i) {
      for (const [l, a] of this.#t)
        l === e ? r.unskip_effect(a) : r.skip_effect(a);
      for (const [l, a] of this.#n)
        l === e ? r.unskip_effect(a.effect) : r.skip_effect(a.effect);
      r.oncommit(this.#o), r.ondiscard(this.#i);
    } else
      $ && (this.anchor = L), this.#o(r);
  }
}
function Di(n) {
  Ae === null && xa(), md(() => {
    const e = Ir(n);
    if (typeof e == "function") return (
      /** @type {() => void} */
      e
    );
  });
}
function zd(n) {
  Ae === null && xa(), Di(() => () => Ir(n));
}
function Rn(n, e, t = !1) {
  var r;
  $ && (r = L, Nr());
  var i = new uc(n), s = t ? Fn : 0;
  function o(l, a) {
    if ($) {
      var c = Sa(
        /** @type {TemplateNode} */
        r
      );
      if (l !== parseInt(c.substring(1))) {
        var u = si();
        Ne(u), i.anchor = u, Qe(!1), i.ensure(l, a), Qe(!0);
        return;
      }
    }
    i.ensure(l, a);
  }
  _i(() => {
    var l = !1;
    e((a, c = 0) => {
      l = !0, o(c, a);
    }), l || o(-1, null);
  }, s);
}
const Ld = /* @__PURE__ */ Symbol("NaN");
function Fd(n, e, t) {
  $ && Nr();
  var r = new uc(n);
  _i(() => {
    var i = e();
    i !== i && (i = /** @type {any} */
    Ld), r.ensure(i, t);
  });
}
function Vd(n, e) {
  return e;
}
function Hd(n, e, t) {
  for (var r = [], i = e.length, s, o = e.length, l = 0; l < i; l++) {
    let f = e[l];
    on(
      f,
      () => {
        if (s) {
          if (s.pending.delete(f), s.done.add(f), s.pending.size === 0) {
            var d = (
              /** @type {Set<EachOutroGroup>} */
              n.outrogroups
            );
            Ns(n, Si(s.done)), d.delete(s), d.size === 0 && (n.outrogroups = null);
          }
        } else
          o -= 1;
      },
      !1
    );
  }
  if (o === 0) {
    var a = r.length === 0 && t !== null;
    if (a) {
      var c = (
        /** @type {Element} */
        t
      ), u = (
        /** @type {Element} */
        c.parentNode
      );
      qa(u), u.append(c), n.items.clear();
    }
    Ns(n, e, !a);
  } else
    s = {
      pending: new Set(e),
      done: /* @__PURE__ */ new Set()
    }, (n.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function Ns(n, e, t = !0) {
  var r;
  if (n.pending.size > 0) {
    r = /* @__PURE__ */ new Set();
    for (const o of n.pending.values())
      for (const l of o)
        r.add(
          /** @type {EachItem} */
          n.items.get(l).e
        );
  }
  for (var i = 0; i < e.length; i++) {
    var s = e[i];
    if (r?.has(s)) {
      s.f |= yt;
      const o = document.createDocumentFragment();
      po(s, o);
    } else
      re(e[i], t);
  }
}
var Xo;
function qd(n, e, t, r, i, s = null) {
  var o = n, l = /* @__PURE__ */ new Map();
  $ && Nr();
  var a = null, c = /* @__PURE__ */ od(() => {
    var y = t();
    return no(y) ? y : y == null ? [] : Si(y);
  }), u, f = /* @__PURE__ */ new Map(), d = !0;
  function p(y) {
    (g.effect.f & ot) === 0 && (g.pending.delete(y), g.fallback = a, jd(g, u, o, e, r), a !== null && (u.length === 0 ? (a.f & yt) === 0 ? ho(a) : (a.f ^= yt, sr(a, null, o)) : on(a, () => {
      a = null;
    })));
  }
  function h(y) {
    g.pending.delete(y);
  }
  var m = _i(() => {
    u = /** @type {V[]} */
    N(c);
    var y = u.length;
    let k = !1;
    if ($) {
      var S = Sa(o) === eo;
      S !== (y === 0) && (o = si(), Ne(o), Qe(!1), k = !0);
    }
    for (var M = /* @__PURE__ */ new Set(), A = (
      /** @type {Batch} */
      H
    ), E = ja(), v = 0; v < y; v += 1) {
      $ && L.nodeType === Or && /** @type {Comment} */
      L.data === to && (o = /** @type {Comment} */
      L, k = !0, Qe(!1));
      var T = u[v], w = r(T, v), _ = d ? null : l.get(w);
      _ ? (_.v && qn(_.v, T), _.i && qn(_.i, v), E && A.unskip_effect(_.e)) : (_ = Wd(
        l,
        d ? o : Xo ??= Be(),
        T,
        w,
        v,
        i,
        e,
        t
      ), d || (_.e.f |= yt), l.set(w, _)), M.add(w);
    }
    if (y === 0 && s && !a && (d ? a = Ee(() => s(o)) : (a = Ee(() => s(Xo ??= Be())), a.f |= yt)), y > M.size && Rf(), $ && y > 0 && Ne(si()), !d)
      if (f.set(A, M), E) {
        for (const [_e, Ue] of l)
          M.has(_e) || A.skip_effect(Ue.e);
        A.oncommit(p), A.ondiscard(h);
      } else
        p(A);
    k && Qe(!0), N(c);
  }), g = { effect: m, items: l, pending: f, outrogroups: null, fallback: a };
  d = !1, $ && (o = L);
}
function tr(n) {
  for (; n !== null && (n.f & et) === 0; )
    n = n.next;
  return n;
}
function jd(n, e, t, r, i) {
  var s = e.length, o = n.items, l = tr(n.effect.first), a, c = null, u = [], f = [], d, p, h, m;
  for (m = 0; m < s; m += 1) {
    if (d = e[m], p = i(d, m), h = /** @type {EachItem} */
    o.get(p).e, n.outrogroups !== null)
      for (const T of n.outrogroups)
        T.pending.delete(h), T.done.delete(h);
    if ((h.f & yt) !== 0)
      if (h.f ^= yt, h === l)
        sr(h, null, t);
      else {
        var g = c ? c.next : l;
        h === n.effect.last && (n.effect.last = h.prev), h.prev && (h.prev.next = h.next), h.next && (h.next.prev = h.prev), Mt(n, c, h), Mt(n, h, g), sr(h, g, t), c = h, u = [], f = [], l = tr(c.next);
        continue;
      }
    if ((h.f & xe) !== 0 && ho(h), h !== l) {
      if (a !== void 0 && a.has(h)) {
        if (u.length < f.length) {
          var y = f[0], k;
          c = y.prev;
          var S = u[0], M = u[u.length - 1];
          for (k = 0; k < u.length; k += 1)
            sr(u[k], y, t);
          for (k = 0; k < f.length; k += 1)
            a.delete(f[k]);
          Mt(n, S.prev, M.next), Mt(n, c, S), Mt(n, M, y), l = y, c = M, m -= 1, u = [], f = [];
        } else
          a.delete(h), sr(h, l, t), Mt(n, h.prev, h.next), Mt(n, h, c === null ? n.effect.first : c.next), Mt(n, c, h), c = h;
        continue;
      }
      for (u = [], f = []; l !== null && l !== h; )
        (a ??= /* @__PURE__ */ new Set()).add(l), f.push(l), l = tr(l.next);
      if (l === null)
        continue;
    }
    (h.f & yt) === 0 && u.push(h), c = h, l = tr(h.next);
  }
  if (n.outrogroups !== null) {
    for (const T of n.outrogroups)
      T.pending.size === 0 && (Ns(n, Si(T.done)), n.outrogroups?.delete(T));
    n.outrogroups.size === 0 && (n.outrogroups = null);
  }
  if (l !== null || a !== void 0) {
    var A = [];
    if (a !== void 0)
      for (h of a)
        (h.f & xe) === 0 && A.push(h);
    for (; l !== null; )
      (l.f & xe) === 0 && l !== n.fallback && A.push(l), l = tr(l.next);
    var E = A.length;
    if (E > 0) {
      var v = null;
      Hd(n, A, v);
    }
  }
}
function Wd(n, e, t, r, i, s, o, l) {
  var a = (o & yf) !== 0 ? (o & vf) === 0 ? /* @__PURE__ */ za(t, !1, !1) : mn(t) : null, c = (o & bf) !== 0 ? mn(i) : null;
  return {
    v: a,
    i: c,
    e: Ee(() => (s(e, a ?? t, c ?? i, l), () => {
      n.delete(r);
    }))
  };
}
function sr(n, e, t) {
  if (n.nodes)
    for (var r = n.nodes.start, i = n.nodes.end, s = e && (e.f & yt) === 0 ? (
      /** @type {EffectNodes} */
      e.nodes.start
    ) : t; r !== null; ) {
      var o = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ ft(r)
      );
      if (s.before(r), r === i)
        return;
      r = o;
    }
}
function Mt(n, e, t) {
  e === null ? n.effect.first = t : e.next = t, t === null ? n.effect.last = e : t.prev = e;
}
function fc(n, e) {
  Ni(() => {
    var t = n.getRootNode(), r = (
      /** @type {ShadowRoot} */
      t.host ? (
        /** @type {ShadowRoot} */
        t
      ) : (
        /** @type {Document} */
        t.head ?? /** @type {Document} */
        t.ownerDocument.head
      )
    );
    if (!r.querySelector("#" + e.hash)) {
      const i = lo("style");
      i.id = e.hash, i.textContent = e.code, r.appendChild(i);
    }
  });
}
function Kd(n, e) {
  var t = void 0, r;
  Ja(() => {
    t !== (t = e()) && (r && (re(r), r = null), t && (r = Ee(() => {
      Ni(() => (
        /** @type {(node: Element) => void} */
        t(n)
      ));
    })));
  });
}
function dc(n) {
  var e, t, r = "";
  if (typeof n == "string" || typeof n == "number") r += n;
  else if (typeof n == "object") if (Array.isArray(n)) {
    var i = n.length;
    for (e = 0; e < i; e++) n[e] && (t = dc(n[e])) && (r && (r += " "), r += t);
  } else for (t in n) n[t] && (r && (r += " "), r += t);
  return r;
}
function Jd() {
  for (var n, e, t = 0, r = "", i = arguments.length; t < i; t++) (n = arguments[t]) && (e = dc(n)) && (r && (r += " "), r += e);
  return r;
}
function Ud(n) {
  return typeof n == "object" ? Jd(n) : n ?? "";
}
const Zo = [...` 	
\r\f \v\uFEFF`];
function Gd(n, e, t) {
  var r = n == null ? "" : "" + n;
  if (e && (r = r ? r + " " + e : e), t) {
    for (var i of Object.keys(t))
      if (t[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, o = 0; (o = r.indexOf(i, o)) >= 0; ) {
          var l = o + s;
          (o === 0 || Zo.includes(r[o - 1])) && (l === r.length || Zo.includes(r[l])) ? r = (o === 0 ? "" : r.substring(0, o)) + r.substring(l + 1) : o = l;
        }
  }
  return r === "" ? null : r;
}
function el(n, e = !1) {
  var t = e ? " !important;" : ";", r = "";
  for (var i of Object.keys(n)) {
    var s = n[i];
    s != null && s !== "" && (r += " " + i + ": " + s + t);
  }
  return r;
}
function Ui(n) {
  return n[0] !== "-" || n[1] !== "-" ? n.toLowerCase() : n;
}
function Yd(n, e) {
  if (e) {
    var t = "", r, i;
    if (Array.isArray(e) ? (r = e[0], i = e[1]) : r = e, n) {
      n = String(n).replaceAll(/\s*\/\*.*?\*\/\s*/g, "").trim();
      var s = !1, o = 0, l = !1, a = [];
      r && a.push(...Object.keys(r).map(Ui)), i && a.push(...Object.keys(i).map(Ui));
      var c = 0, u = -1;
      const m = n.length;
      for (var f = 0; f < m; f++) {
        var d = n[f];
        if (l ? d === "/" && n[f - 1] === "*" && (l = !1) : s ? s === d && (s = !1) : d === "/" && n[f + 1] === "*" ? l = !0 : d === '"' || d === "'" ? s = d : d === "(" ? o++ : d === ")" && o--, !l && s === !1 && o === 0) {
          if (d === ":" && u === -1)
            u = f;
          else if (d === ";" || f === m - 1) {
            if (u !== -1) {
              var p = Ui(n.substring(c, u).trim());
              if (!a.includes(p)) {
                d !== ";" && f++;
                var h = n.substring(c, f).trim();
                t += " " + h + ";";
              }
            }
            c = f + 1, u = -1;
          }
        }
      }
    }
    return r && (t += el(r)), i && (t += el(i, !0)), t = t.trim(), t === "" ? null : t;
  }
  return n == null ? null : String(n);
}
function Qr(n, e, t, r, i, s) {
  var o = n.__className;
  if ($ || o !== t || o === void 0) {
    var l = Gd(t, r, s);
    (!$ || l !== n.getAttribute("class")) && (l == null ? n.removeAttribute("class") : e ? n.className = l : n.setAttribute("class", l)), n.__className = t;
  } else if (s && i !== s)
    for (var a in s) {
      var c = !!s[a];
      (i == null || c !== !!i[a]) && n.classList.toggle(a, c);
    }
  return s;
}
function Gi(n, e = {}, t, r) {
  for (var i in t) {
    var s = t[i];
    e[i] !== s && (t[i] == null ? n.style.removeProperty(i) : n.style.setProperty(i, s, r));
  }
}
function Qd(n, e, t, r) {
  var i = n.__style;
  if ($ || i !== e) {
    var s = Yd(e, r);
    (!$ || s !== n.getAttribute("style")) && (s == null ? n.removeAttribute("style") : n.style.cssText = s), n.__style = e;
  } else r && (Array.isArray(r) ? (Gi(n, t?.[0], r[0]), Gi(n, t?.[1], r[1], "important")) : Gi(n, t, r));
  return r;
}
function As(n, e, t = !1) {
  if (n.multiple) {
    if (e == null)
      return;
    if (!no(e))
      return jf();
    for (var r of n.options)
      r.selected = e.includes(tl(r));
    return;
  }
  for (r of n.options) {
    var i = tl(r);
    if (fd(i, e)) {
      r.selected = !0;
      return;
    }
  }
  (!t || e !== void 0) && (n.selectedIndex = -1);
}
function Xd(n) {
  var e = new MutationObserver(() => {
    As(n, n.__value);
  });
  e.observe(n, {
    // Listen to option element changes
    childList: !0,
    subtree: !0,
    // because of <optgroup>
    // Listen to option element value attribute changes
    // (doesn't get notified of select value changes,
    // because that property is not reflected as an attribute)
    attributes: !0,
    attributeFilter: ["value"]
  }), uo(() => {
    e.disconnect();
  });
}
function tl(n) {
  return "__value" in n ? n.__value : n.value;
}
const Vr = /* @__PURE__ */ Symbol("class"), nr = /* @__PURE__ */ Symbol("style"), hc = /* @__PURE__ */ Symbol("is custom element"), pc = /* @__PURE__ */ Symbol("is html"), Zd = Mi ? "link" : "LINK", eh = Mi ? "input" : "INPUT", th = Mi ? "option" : "OPTION", nh = Mi ? "select" : "SELECT";
function mo(n) {
  if ($) {
    var e = !1, t = () => {
      if (!e) {
        if (e = !0, n.hasAttribute("value")) {
          var r = n.value;
          li(n, "value", null), n.value = r;
        }
        if (n.hasAttribute("checked")) {
          var i = n.checked;
          li(n, "checked", null), n.checked = i;
        }
      }
    };
    n.__on_r = t, lt(t), Wa();
  }
}
function rh(n, e) {
  e ? n.hasAttribute("selected") || n.setAttribute("selected", "") : n.removeAttribute("selected");
}
function li(n, e, t, r) {
  var i = mc(n);
  $ && (i[e] = n.getAttribute(e), e === "src" || e === "srcset" || e === "href" && n.nodeName === Zd) || i[e] !== (i[e] = t) && (e === "loading" && (n[Df] = t), t == null ? n.removeAttribute(e) : typeof t != "string" && gc(n).includes(e) ? n[e] = t : n.setAttribute(e, t));
}
function ih(n, e, t, r, i = !1, s = !1) {
  if ($ && i && n.nodeName === eh) {
    var o = (
      /** @type {HTMLInputElement} */
      n
    ), l = o.type === "checkbox" ? "defaultChecked" : "defaultValue";
    l in t || mo(o);
  }
  var a = mc(n), c = a[hc], u = !a[pc];
  let f = $ && c;
  f && Qe(!1);
  var d = e || {}, p = n.nodeName === th;
  for (var h in e)
    h in t || (t[h] = null);
  t.class ? t.class = Ud(t.class) : t.class = null, t[nr] && (t.style ??= null);
  var m = gc(n);
  for (const E in t) {
    let v = t[E];
    if (p && E === "value" && v == null) {
      n.value = n.__value = "", d[E] = v;
      continue;
    }
    if (E === "class") {
      var g = n.namespaceURI === "http://www.w3.org/1999/xhtml";
      Qr(n, g, v, r, e?.[Vr], t[Vr]), d[E] = v, d[Vr] = t[Vr];
      continue;
    }
    if (E === "style") {
      Qd(n, v, e?.[nr], t[nr]), d[E] = v, d[nr] = t[nr];
      continue;
    }
    var y = d[E];
    if (!(v === y && !(v === void 0 && n.hasAttribute(E)))) {
      d[E] = v;
      var k = E[0] + E[1];
      if (k !== "$$")
        if (k === "on") {
          const T = {}, w = "$$" + E;
          let _ = E.slice(2);
          var S = _d(_);
          if (Nd(_) && (_ = _.slice(0, -7), T.capture = !0), !S && y) {
            if (v != null) continue;
            n.removeEventListener(_, d[w], T), d[w] = null;
          }
          if (S)
            Z(_, n, v), Rr([_]);
          else if (v != null) {
            let _e = function(Ue) {
              d[E].call(this, Ue);
            };
            d[w] = sc(_, n, _e, T);
          }
        } else if (E === "style")
          li(n, E, v);
        else if (E === "autofocus")
          ao(
            /** @type {HTMLElement} */
            n,
            !!v
          );
        else if (!c && (E === "__value" || E === "value" && v != null))
          n.value = n.__value = v;
        else if (E === "selected" && p)
          rh(
            /** @type {HTMLOptionElement} */
            n,
            v
          );
        else {
          var M = E;
          u || (M = Id(M));
          var A = M === "defaultValue" || M === "defaultChecked";
          if (v == null && !c && !A)
            if (a[E] = null, M === "value" || M === "checked") {
              let T = (
                /** @type {HTMLInputElement} */
                n
              );
              const w = e === void 0;
              if (M === "value") {
                let _ = T.defaultValue;
                T.removeAttribute(M), T.defaultValue = _, T.value = T.__value = w ? _ : null;
              } else {
                let _ = T.defaultChecked;
                T.removeAttribute(M), T.defaultChecked = _, T.checked = w ? _ : !1;
              }
            } else
              n.removeAttribute(E);
          else A || m.includes(M) && (c || typeof v != "string") ? (n[M] = v, M in a && (a[M] = te)) : typeof v != "function" && li(n, M, v);
        }
    }
  }
  return f && Qe(!0), d;
}
function Ct(n, e, t = [], r = [], i = [], s, o = !1, l = !1) {
  Ra(i, t, r, (a) => {
    var c = void 0, u = {}, f = n.nodeName === nh, d = !1;
    if (Ja(() => {
      var h = e(...a.map(N)), m = ih(
        n,
        c,
        h,
        s,
        o,
        l
      );
      d && f && "value" in h && As(
        /** @type {HTMLSelectElement} */
        n,
        h.value
      );
      for (let y of Object.getOwnPropertySymbols(u))
        h[y] || re(u[y]);
      for (let y of Object.getOwnPropertySymbols(h)) {
        var g = h[y];
        y.description === Sf && (!c || g !== c[y]) && (u[y] && re(u[y]), u[y] = Ee(() => Kd(n, () => g))), m[y] = g;
      }
      c = m;
    }), f) {
      var p = (
        /** @type {HTMLSelectElement} */
        n
      );
      Ni(() => {
        As(
          p,
          /** @type {Record<string | symbol, any>} */
          c.value,
          !0
        ), Xd(p);
      });
    }
    d = !0;
  });
}
function mc(n) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    n.__attributes ??= {
      [hc]: n.nodeName.includes("-"),
      [pc]: n.namespaceURI === ba
    }
  );
}
var nl = /* @__PURE__ */ new Map();
function gc(n) {
  var e = n.getAttribute("is") || n.nodeName, t = nl.get(e);
  if (t) return t;
  nl.set(e, t = []);
  for (var r, i = n, s = Element.prototype; s !== i; ) {
    r = Mf(i);
    for (var o in r)
      r[o].set && t.push(o);
    i = va(i);
  }
  return t;
}
function yc(n, e, t = e) {
  var r = /* @__PURE__ */ new WeakSet();
  dd(n, "input", async (i) => {
    var s = i ? n.defaultValue : n.value;
    if (s = Yi(n) ? Qi(s) : s, t(s), H !== null && r.add(H), await Md(), s !== (s = e())) {
      var o = n.selectionStart, l = n.selectionEnd, a = n.value.length;
      if (n.value = s ?? "", l !== null) {
        var c = n.value.length;
        o === l && l === a && c > a ? (n.selectionStart = c, n.selectionEnd = c) : (n.selectionStart = o, n.selectionEnd = Math.min(l, c));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  ($ && n.defaultValue !== n.value || // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Ir(e) == null && n.value) && (t(Yi(n) ? Qi(n.value) : n.value), H !== null && r.add(H)), Ai(() => {
    var i = e();
    if (n === document.activeElement) {
      var s = (
        /** @type {Batch} */
        Ss ?? H
      );
      if (r.has(s))
        return;
    }
    Yi(n) && i === Qi(n.value) || n.type === "date" && !i && !n.value || i !== n.value && (n.value = i ?? "");
  });
}
function Yi(n) {
  var e = n.type;
  return e === "number" || e === "range";
}
function Qi(n) {
  return n === "" ? null : +n;
}
function rl(n, e) {
  return n === e || n?.[In] === e;
}
function bc(n = {}, e, t, r) {
  return Ni(() => {
    var i, s;
    return Ai(() => {
      i = s, s = [], Ir(() => {
        n !== t(...s) && (e(n, ...s), i && rl(t(...i), n) && e(null, ...i));
      });
    }), () => {
      lt(() => {
        s && rl(t(...s), n) && e(null, ...s);
      });
    };
  }), n;
}
function gr(n, e, t, r) {
  var i = (
    /** @type {V} */
    r
  ), s = !0, o = () => (s && (s = !1, i = /** @type {V} */
  r), i);
  n[e];
  var l;
  l = () => {
    var f = (
      /** @type {V} */
      n[e]
    );
    return f === void 0 ? o() : (s = !0, f);
  };
  var a = !1, c = /* @__PURE__ */ so(() => (a = !1, l())), u = (
    /** @type {Effect} */
    F
  );
  return (
    /** @type {() => V} */
    (function(f, d) {
      if (arguments.length > 0) {
        const p = d ? N(c) : f;
        return B(c, p), a = !0, i !== void 0 && (i = p), f;
      }
      return Ht && a || (u.f & ot) !== 0 ? c.v : N(c);
    })
  );
}
function sh(n) {
  return new oh(n);
}
class oh {
  /** @type {any} */
  #e;
  /** @type {Record<string, any>} */
  #t;
  /**
   * @param {ComponentConstructorOptions & {
   *  component: any;
   * }} options
   */
  constructor(e) {
    var t = /* @__PURE__ */ new Map(), r = (s, o) => {
      var l = /* @__PURE__ */ za(o, !1, !1);
      return t.set(s, l), l;
    };
    const i = new Proxy(
      { ...e.props || {}, $$events: {} },
      {
        get(s, o) {
          return N(t.get(o) ?? r(o, Reflect.get(s, o)));
        },
        has(s, o) {
          return o === _f ? !0 : (N(t.get(o) ?? r(o, Reflect.get(s, o))), Reflect.has(s, o));
        },
        set(s, o, l) {
          return B(t.get(o) ?? r(o, l), l), Reflect.set(s, o, l);
        }
      }
    );
    this.#t = (e.hydrate ? $d : ac)(e.component, {
      target: e.target,
      anchor: e.anchor,
      props: i,
      context: e.context,
      intro: e.intro ?? !1,
      recover: e.recover,
      transformError: e.transformError
    }), (!e?.props?.$$host || e.sync === !1) && pn(), this.#e = i.$$events;
    for (const s of Object.keys(this.#t))
      s === "$set" || s === "$destroy" || s === "$on" || ii(this, s, {
        get() {
          return this.#t[s];
        },
        /** @param {any} value */
        set(o) {
          this.#t[s] = o;
        },
        enumerable: !0
      });
    this.#t.$set = /** @param {Record<string, any>} next */
    (s) => {
      Object.assign(i, s);
    }, this.#t.$destroy = () => {
      Bd(this.#t);
    };
  }
  /** @param {Record<string, any>} props */
  $set(e) {
    this.#t.$set(e);
  }
  /**
   * @param {string} event
   * @param {(...args: any[]) => any} callback
   * @returns {any}
   */
  $on(e, t) {
    this.#e[e] = this.#e[e] || [];
    const r = (...i) => t.call(this, ...i);
    return this.#e[e].push(r), () => {
      this.#e[e] = this.#e[e].filter(
        /** @param {any} fn */
        (i) => i !== r
      );
    };
  }
  $destroy() {
    this.#t.$destroy();
  }
}
let vc;
typeof HTMLElement == "function" && (vc = class extends HTMLElement {
  /** The Svelte component constructor */
  $$ctor;
  /** Slots */
  $$s;
  /** @type {any} The Svelte component instance */
  $$c;
  /** Whether or not the custom element is connected */
  $$cn = !1;
  /** @type {Record<string, any>} Component props data */
  $$d = {};
  /** `true` if currently in the process of reflecting component props back to attributes */
  $$r = !1;
  /** @type {Record<string, CustomElementPropDefinition>} Props definition (name, reflected, type etc) */
  $$p_d = {};
  /** @type {Record<string, EventListenerOrEventListenerObject[]>} Event listeners */
  $$l = {};
  /** @type {Map<EventListenerOrEventListenerObject, Function>} Event listener unsubscribe functions */
  $$l_u = /* @__PURE__ */ new Map();
  /** @type {any} The managed render effect for reflecting attributes */
  $$me;
  /** @type {ShadowRoot | null} The ShadowRoot of the custom element */
  $$shadowRoot = null;
  /**
   * @param {*} $$componentCtor
   * @param {*} $$slots
   * @param {ShadowRootInit | undefined} shadow_root_init
   */
  constructor(n, e, t) {
    super(), this.$$ctor = n, this.$$s = e, t && (this.$$shadowRoot = this.attachShadow(t));
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  addEventListener(n, e, t) {
    if (this.$$l[n] = this.$$l[n] || [], this.$$l[n].push(e), this.$$c) {
      const r = this.$$c.$on(n, e);
      this.$$l_u.set(e, r);
    }
    super.addEventListener(n, e, t);
  }
  /**
   * @param {string} type
   * @param {EventListenerOrEventListenerObject} listener
   * @param {boolean | AddEventListenerOptions} [options]
   */
  removeEventListener(n, e, t) {
    if (super.removeEventListener(n, e, t), this.$$c) {
      const r = this.$$l_u.get(e);
      r && (r(), this.$$l_u.delete(e));
    }
  }
  async connectedCallback() {
    if (this.$$cn = !0, !this.$$c) {
      let n = function(r) {
        return (i) => {
          const s = lo("slot");
          r !== "default" && (s.name = r), ce(i, s);
        };
      };
      if (await Promise.resolve(), !this.$$cn || this.$$c)
        return;
      const e = {}, t = lh(this);
      for (const r of this.$$s)
        r in t && (r === "default" && !this.$$d.children ? (this.$$d.children = n(r), e.default = !0) : e[r] = n(r));
      for (const r of this.attributes) {
        const i = this.$$g_p(r.name);
        i in this.$$d || (this.$$d[i] = Xr(i, r.value, this.$$p_d, "toProp"));
      }
      for (const r in this.$$p_d)
        !(r in this.$$d) && this[r] !== void 0 && (this.$$d[r] = this[r], delete this[r]);
      this.$$c = sh({
        component: this.$$ctor,
        target: this.$$shadowRoot || this,
        props: {
          ...this.$$d,
          $$slots: e,
          $$host: this
        }
      }), this.$$me = gd(() => {
        Ai(() => {
          this.$$r = !0;
          for (const r of ri(this.$$c)) {
            if (!this.$$p_d[r]?.reflect) continue;
            this.$$d[r] = this.$$c[r];
            const i = Xr(
              r,
              this.$$d[r],
              this.$$p_d,
              "toAttribute"
            );
            i == null ? this.removeAttribute(this.$$p_d[r].attribute || r) : this.setAttribute(this.$$p_d[r].attribute || r, i);
          }
          this.$$r = !1;
        });
      });
      for (const r in this.$$l)
        for (const i of this.$$l[r]) {
          const s = this.$$c.$on(r, i);
          this.$$l_u.set(i, s);
        }
      this.$$l = {};
    }
  }
  // We don't need this when working within Svelte code, but for compatibility of people using this outside of Svelte
  // and setting attributes through setAttribute etc, this is helpful
  /**
   * @param {string} attr
   * @param {string} _oldValue
   * @param {string} newValue
   */
  attributeChangedCallback(n, e, t) {
    this.$$r || (n = this.$$g_p(n), this.$$d[n] = Xr(n, t, this.$$p_d, "toProp"), this.$$c?.$set({ [n]: this.$$d[n] }));
  }
  disconnectedCallback() {
    this.$$cn = !1, Promise.resolve().then(() => {
      !this.$$cn && this.$$c && (this.$$c.$destroy(), this.$$me(), this.$$c = void 0);
    });
  }
  /**
   * @param {string} attribute_name
   */
  $$g_p(n) {
    return ri(this.$$p_d).find(
      (e) => this.$$p_d[e].attribute === n || !this.$$p_d[e].attribute && e.toLowerCase() === n
    ) || n;
  }
});
function Xr(n, e, t, r) {
  const i = t[n]?.type;
  if (e = i === "Boolean" && typeof e != "boolean" ? e != null : e, !r || !t[n])
    return e;
  if (r === "toAttribute")
    switch (i) {
      case "Object":
      case "Array":
        return e == null ? null : JSON.stringify(e);
      case "Boolean":
        return e ? "" : null;
      case "Number":
        return e ?? null;
      default:
        return e;
    }
  else
    switch (i) {
      case "Object":
      case "Array":
        return e && JSON.parse(e);
      case "Boolean":
        return e;
      // conversion already handled above
      case "Number":
        return e != null ? +e : e;
      default:
        return e;
    }
}
function lh(n) {
  const e = {};
  return n.childNodes.forEach((t) => {
    e[
      /** @type {Element} node */
      t.slot || "default"
    ] = !0;
  }), e;
}
function Ii(n, e, t, r, i, s) {
  let o = class extends vc {
    constructor() {
      super(n, t, i), this.$$p_d = e;
    }
    static get observedAttributes() {
      return ri(e).map(
        (l) => (e[l].attribute || l).toLowerCase()
      );
    }
  };
  return ri(e).forEach((l) => {
    ii(o.prototype, l, {
      get() {
        return this.$$c && l in this.$$c ? this.$$c[l] : this.$$d[l];
      },
      set(a) {
        a = Xr(l, a, e), this.$$d[l] = a;
        var c = this.$$c;
        if (c) {
          var u = Dn(c, l)?.get;
          u ? c[l] = a : c.$set({ [l]: a });
        }
      }
    });
  }), r.forEach((l) => {
    ii(o.prototype, l, {
      get() {
        return this.$$c?.[l];
      }
    });
  }), n.element = /** @type {any} */
  o, o;
}
let _s = null;
function ah(n) {
  _s = n;
}
function Sn() {
  if (!_s) throw new Error("Plugin API not initialized");
  return _s;
}
async function ch() {
  return (await Sn().get("/documents")).documents ?? [];
}
async function uh(n) {
  return Sn().get(`/documents/${n}`);
}
async function fh(n) {
  return (await Sn().post("/documents", {
    title: n,
    owner: "local"
  })).document_id;
}
async function kc(n, e) {
  await Sn().put(`/documents/${n}`, { title: e });
}
async function dh(n) {
  await Sn().del(`/documents/${n}`);
}
async function hh(n) {
  return Sn().get(`/documents/${n}/content`);
}
async function ph(n, e) {
  await Sn().put(`/documents/${n}/content`, { content: e });
}
var mh = /* @__PURE__ */ ze('<div class="p-4 text-sm text-zinc-500">Loading...</div>'), gh = /* @__PURE__ */ ze('<div class="p-4 text-center text-zinc-500"><p class="text-sm">No documents yet</p> <p class="text-xs mt-1">Create one to get started</p></div>'), yh = /* @__PURE__ */ ze('<input type="text" class="flex-1 text-sm bg-zinc-800 text-zinc-200 border border-zinc-600 rounded px-1.5 py-0.5 outline-none focus:border-indigo-500"/>'), bh = /* @__PURE__ */ ze('<span class="text-sm text-zinc-200 truncate"> </span> <div class="flex items-center gap-1 opacity-0 group-hover:opacity-100 flex-shrink-0"><button class="text-xs text-zinc-600 hover:text-zinc-300 px-0.5" title="Rename">&#x270E;</button> <button class="text-xs text-zinc-600 hover:text-red-400 px-0.5" title="Archive">&#x2715;</button></div>', 1), vh = /* @__PURE__ */ ze('<div role="button" tabindex="0" class="w-full text-left px-3 py-2 hover:bg-zinc-800 border-b border-zinc-900 group cursor-pointer"><div class="flex items-center justify-between gap-1"><!></div> <div class="text-xs text-zinc-600 mt-0.5"> <!></div></div>'), kh = /* @__PURE__ */ ze('<div class="flex flex-col h-full"><div class="flex items-center justify-between p-3 border-b border-zinc-800"><h2 class="text-sm font-semibold text-zinc-300">Documents</h2> <button class="px-3 py-1 text-xs bg-indigo-600 hover:bg-indigo-500 text-white rounded disabled:opacity-50"> </button></div> <div class="flex-1 overflow-auto"><!></div></div>');
function Ds(n, e) {
  Ar(e, !0);
  let t = gr(e, "onSelect"), r = /* @__PURE__ */ G(Nn([])), i = /* @__PURE__ */ G(!0), s = /* @__PURE__ */ G(!1), o = /* @__PURE__ */ G(null), l = /* @__PURE__ */ G("");
  Di(() => a());
  async function a() {
    B(i, !0);
    try {
      B(r, await ch(), !0);
    } catch (w) {
      console.error("[scribe] Failed to list documents:", w);
    } finally {
      B(i, !1);
    }
  }
  async function c() {
    B(s, !0);
    try {
      const w = await fh("Untitled Document");
      await a(), t()(w);
    } catch (w) {
      console.error("[scribe] Failed to create document:", w);
    } finally {
      B(s, !1);
    }
  }
  async function u(w, _) {
    w.stopPropagation();
    try {
      await dh(_), await a();
    } catch (_e) {
      console.error("[scribe] Failed to archive:", _e);
    }
  }
  function f(w, _) {
    w.stopPropagation(), B(o, _.document_id, !0), B(l, _.title, !0);
  }
  async function d() {
    if (!N(o) || !N(l).trim()) {
      B(o, null);
      return;
    }
    try {
      await kc(N(o), N(l).trim()), await a();
    } catch (w) {
      console.error("[scribe] Failed to rename:", w);
    } finally {
      B(o, null);
    }
  }
  function p(w) {
    w.key === "Enter" && d(), w.key === "Escape" && B(o, null);
  }
  function h(w) {
    const _ = parseInt(w, 10);
    return isNaN(_) ? w : new Date(_).toLocaleDateString(void 0, {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit"
    });
  }
  var m = {
    refresh: a,
    get onSelect() {
      return t();
    },
    set onSelect(w) {
      t(w), pn();
    }
  }, g = kh(), y = U(g), k = q(U(y), 2), S = U(k, !0);
  J(k), J(y);
  var M = q(y, 2), A = U(M);
  {
    var E = (w) => {
      var _ = mh();
      ce(w, _);
    }, v = (w) => {
      var _ = gh();
      ce(w, _);
    }, T = (w) => {
      var _ = lc(), _e = oi(_);
      qd(_e, 17, () => N(r), Vd, (Ue, V) => {
        var dt = vh(), wt = U(dt), er = U(wt);
        {
          var I = (Me) => {
            var De = yh();
            mo(De), ao(De, !0), oc("blur", De, d), Z("keydown", De, p), Z("click", De, (ht) => ht.stopPropagation()), yc(De, () => N(l), (ht) => B(l, ht)), ce(Me, De);
          }, le = (Me) => {
            var De = bh(), ht = oi(De), mf = U(ht, !0);
            J(ht);
            var Fo = q(ht, 2), Vo = U(Fo), gf = q(Vo, 2);
            J(Fo), Zt(() => tn(mf, N(V).title)), Z("click", Vo, (Ji) => f(Ji, N(V))), Z("click", gf, (Ji) => u(Ji, N(V).document_id)), ce(Me, De);
          };
          Rn(er, (Me) => {
            N(o) === N(V).document_id ? Me(I) : Me(le, -1);
          });
        }
        J(wt);
        var Mn = q(wt, 2), Lo = U(Mn), hf = q(Lo);
        {
          var pf = (Me) => {
            var De = Od();
            Zt((ht) => tn(De, `· ${ht ?? ""}KB`), [() => Math.round(N(V).content_size / 1024)]), ce(Me, De);
          };
          Rn(hf, (Me) => {
            N(V).content_size > 0 && Me(pf);
          });
        }
        J(Mn), J(dt), Zt((Me) => tn(Lo, `${Me ?? ""} `), [() => h(N(V).updated_at)]), Z("click", dt, () => t()(N(V).document_id)), Z("keydown", dt, (Me) => {
          Me.key === "Enter" && t()(N(V).document_id);
        }), ce(Ue, dt);
      }), ce(w, _);
    };
    Rn(A, (w) => {
      N(i) ? w(E) : N(r).length === 0 ? w(v, 1) : w(T, -1);
    });
  }
  return J(M), J(g), Zt(() => {
    k.disabled = N(s), tn(S, N(s) ? "Creating..." : "+ New");
  }), Z("click", k, c), ce(n, g), _r(m);
}
Rr(["click", "keydown"]);
customElements.define("scribe-document-list", Ii(Ds, { onSelect: {} }, [], ["refresh"]));
function ae(n) {
  this.content = n;
}
ae.prototype = {
  constructor: ae,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n) return e;
    return -1;
  },
  // :: (string) → ?any
  // Retrieve the value stored under `key`, or return undefined when
  // no such key exists.
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  // :: (string, any, ?string) → OrderedMap
  // Create a new map by replacing the value of `key` with a new
  // value, or adding a binding to the end of the map. If `newKey` is
  // given, the key of the binding will be replaced with that key.
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), s = r.content.slice();
    return i == -1 ? s.push(t || n, e) : (s[i + 1] = e, t && (s[i] = t)), new ae(s);
  },
  // :: (string) → OrderedMap
  // Return a map with the given key removed, if it existed.
  remove: function(n) {
    var e = this.find(n);
    if (e == -1) return this;
    var t = this.content.slice();
    return t.splice(e, 2), new ae(t);
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the start of the map.
  addToStart: function(n, e) {
    return new ae([n, e].concat(this.remove(n).content));
  },
  // :: (string, any) → OrderedMap
  // Add a new key to the end of the map.
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new ae(t);
  },
  // :: (string, string, any) → OrderedMap
  // Add a key after the given key. If `place` is not found, the new
  // key is added to the end.
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), s = r.find(n);
    return i.splice(s == -1 ? i.length : s, 0, e, t), new ae(i);
  },
  // :: ((key: string, value: any))
  // Call the given function for each key/value pair in the map, in
  // order.
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by prepending the keys in this map that don't
  // appear in `map` before the keys in `map`.
  prepend: function(n) {
    return n = ae.from(n), n.size ? new ae(n.content.concat(this.subtract(n).content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a new map by appending the keys in this map that don't
  // appear in `map` after the keys in `map`.
  append: function(n) {
    return n = ae.from(n), n.size ? new ae(this.subtract(n).content.concat(n.content)) : this;
  },
  // :: (union<Object, OrderedMap>) → OrderedMap
  // Create a map containing all the keys in this map that don't
  // appear in `map`.
  subtract: function(n) {
    var e = this;
    n = ae.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  // :: () → Object
  // Turn ordered map into a plain object.
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  // :: number
  // The amount of keys in this map.
  get size() {
    return this.content.length >> 1;
  }
};
ae.from = function(n) {
  if (n instanceof ae) return n;
  var e = [];
  if (n) for (var t in n) e.push(t, n[t]);
  return new ae(e);
};
function xc(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), s = e.child(r);
    if (i == s) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(s))
      return t;
    if (i.isText && i.text != s.text) {
      for (let o = 0; i.text[o] == s.text[o]; o++)
        t++;
      return t;
    }
    if (i.content.size || s.content.size) {
      let o = xc(i.content, s.content, t + 1);
      if (o != null)
        return o;
    }
    t += i.nodeSize;
  }
}
function Sc(n, e, t, r) {
  for (let i = n.childCount, s = e.childCount; ; ) {
    if (i == 0 || s == 0)
      return i == s ? null : { a: t, b: r };
    let o = n.child(--i), l = e.child(--s), a = o.nodeSize;
    if (o == l) {
      t -= a, r -= a;
      continue;
    }
    if (!o.sameMarkup(l))
      return { a: t, b: r };
    if (o.isText && o.text != l.text) {
      let c = 0, u = Math.min(o.text.length, l.text.length);
      for (; c < u && o.text[o.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (o.content.size || l.content.size) {
      let c = Sc(o.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class b {
  /**
  @internal
  */
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  /**
  Invoke a callback for all descendant nodes between the given two
  positions (relative to start of this fragment). Doesn't descend
  into a node when the callback returns `false`.
  */
  nodesBetween(e, t, r, i = 0, s) {
    for (let o = 0, l = 0; l < t; o++) {
      let a = this.content[o], c = l + a.nodeSize;
      if (c > e && r(a, i + l, s || null, o) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  /**
  Call the given callback for every descendant node. `pos` will be
  relative to the start of the fragment. The callback may return
  `false` to prevent traversal of a given node's children.
  */
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  /**
  Extract the text between `from` and `to`. See the same method on
  [`Node`](https://prosemirror.net/docs/ref/#model.Node.textBetween).
  */
  textBetween(e, t, r, i) {
    let s = "", o = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (o ? o = !1 : s += r), s += c;
    }, 0), s;
  }
  /**
  Create a new fragment containing the combined content of this
  fragment and the other.
  */
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), s = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), s = 1); s < e.content.length; s++)
      i.push(e.content[s]);
    return new b(i, this.size + e.size);
  }
  /**
  Cut out the sub-fragment between the two given positions.
  */
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let s = 0, o = 0; o < t; s++) {
        let l = this.content[s], a = o + l.nodeSize;
        a > e && ((o < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - o), Math.min(l.text.length, t - o)) : l = l.cut(Math.max(0, e - o - 1), Math.min(l.content.size, t - o - 1))), r.push(l), i += l.nodeSize), o = a;
      }
    return new b(r, i);
  }
  /**
  @internal
  */
  cutByIndex(e, t) {
    return e == t ? b.empty : e == 0 && t == this.content.length ? this : new b(this.content.slice(e, t));
  }
  /**
  Create a new fragment in which the node at the given index is
  replaced by the given node.
  */
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), s = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new b(i, s);
  }
  /**
  Create a new fragment by prepending the given node to this
  fragment.
  */
  addToStart(e) {
    return new b([e].concat(this.content), this.size + e.nodeSize);
  }
  /**
  Create a new fragment by appending the given node to this
  fragment.
  */
  addToEnd(e) {
    return new b(this.content.concat(e), this.size + e.nodeSize);
  }
  /**
  Compare this fragment to another one.
  */
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  /**
  The first child of the fragment, or `null` if it is empty.
  */
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  /**
  The last child of the fragment, or `null` if it is empty.
  */
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  /**
  The number of child nodes in this fragment.
  */
  get childCount() {
    return this.content.length;
  }
  /**
  Get the child node at the given index. Raise an error when the
  index is out of range.
  */
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content[e] || null;
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  /**
  Find the first position at which this fragment and another
  fragment differ, or `null` if they are the same.
  */
  findDiffStart(e, t = 0) {
    return xc(this, e, t);
  }
  /**
  Find the first position, searching from the end, at which this
  fragment and the given fragment differ, or `null` if they are
  the same. Since this position will not be the same in both
  nodes, an object with two separate positions is returned.
  */
  findDiffEnd(e, t = this.size, r = e.size) {
    return Sc(this, e, t, r);
  }
  /**
  Find the index and inner offset corresponding to a given relative
  position in this fragment. The result object will be reused
  (overwritten) the next time the function is called. @internal
  */
  findIndex(e) {
    if (e == 0)
      return Hr(0, e);
    if (e == this.size)
      return Hr(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let t = 0, r = 0; ; t++) {
      let i = this.child(t), s = r + i.nodeSize;
      if (s >= e)
        return s == e ? Hr(t + 1, s) : Hr(t, r);
      r = s;
    }
  }
  /**
  Return a debugging string that describes this fragment.
  */
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  /**
  @internal
  */
  toStringInner() {
    return this.content.join(", ");
  }
  /**
  Create a JSON-serializeable representation of this fragment.
  */
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  /**
  Deserialize a fragment from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return b.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new b(t.map(e.nodeFromJSON));
  }
  /**
  Build a fragment from an array of nodes. Ensures that adjacent
  text nodes with the same marks are joined together.
  */
  static fromArray(e) {
    if (!e.length)
      return b.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      r += s.nodeSize, i && s.isText && e[i - 1].sameMarkup(s) ? (t || (t = e.slice(0, i)), t[t.length - 1] = s.withText(t[t.length - 1].text + s.text)) : t && t.push(s);
    }
    return new b(t || e, r);
  }
  /**
  Create a fragment from something that can be interpreted as a
  set of nodes. For `null`, it returns the empty fragment. For a
  fragment, the fragment itself. For a node or array of nodes, a
  fragment containing those nodes.
  */
  static from(e) {
    if (!e)
      return b.empty;
    if (e instanceof b)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new b([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
b.empty = new b([], 0);
const Xi = { index: 0, offset: 0 };
function Hr(n, e) {
  return Xi.index = n, Xi.offset = e, Xi;
}
function ai(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!ai(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !ai(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
let j = class Is {
  /**
  @internal
  */
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  /**
  Given a set of marks, create a new set which contains this one as
  well, in the right position. If this mark is already in the set,
  the set itself is returned. If any marks that are set to be
  [exclusive](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) with this mark are present,
  those are replaced by this one.
  */
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let s = e[i];
      if (this.eq(s))
        return e;
      if (this.type.excludes(s.type))
        t || (t = e.slice(0, i));
      else {
        if (s.type.excludes(this.type))
          return e;
        !r && s.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(s);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  /**
  Remove this mark from the given set, returning a new set. If this
  mark is not in the set, the set itself is returned.
  */
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  /**
  Test whether this mark is in the given set of marks.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  /**
  Test whether this mark has the same type and attributes as
  another mark.
  */
  eq(e) {
    return this == e || this.type == e.type && ai(this.attrs, e.attrs);
  }
  /**
  Convert this mark to a JSON-serializeable representation.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  /**
  Deserialize a mark from JSON.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = r.create(t.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  /**
  Test whether two sets of marks are identical.
  */
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  /**
  Create a properly sorted mark set from null, a single mark, or an
  unsorted array of marks.
  */
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return Is.none;
    if (e instanceof Is)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
};
j.none = [];
class ci extends Error {
}
class x {
  /**
  Create a slice. When specifying a non-zero open depth, you must
  make sure that there are nodes of at least that depth at the
  appropriate side of the fragment—i.e. if the fragment is an
  empty paragraph node, `openStart` and `openEnd` can't be greater
  than 1.
  
  It is not necessary for the content of open nodes to conform to
  the schema's content constraints, though it should be a valid
  start/end/middle for such a node, depending on which sides are
  open.
  */
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  /**
  The size this slice would add when inserted into a document.
  */
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  /**
  @internal
  */
  insertAt(e, t) {
    let r = Mc(this.content, e + this.openStart, t);
    return r && new x(r, this.openStart, this.openEnd);
  }
  /**
  @internal
  */
  removeBetween(e, t) {
    return new x(wc(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  /**
  Tests whether this slice is equal to another slice.
  */
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  /**
  @internal
  */
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  /**
  Convert a slice to a JSON-serializable representation.
  */
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  /**
  Deserialize a slice from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      return x.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new x(b.fromJSON(e, t.content), r, i);
  }
  /**
  Create a slice from a fragment by taking the maximum possible
  open value on both side of the fragment.
  */
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let s = e.firstChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.firstChild)
      r++;
    for (let s = e.lastChild; s && !s.isLeaf && (t || !s.type.spec.isolating); s = s.lastChild)
      i++;
    return new x(e, r, i);
  }
}
x.empty = new x(b.empty, 0, 0);
function wc(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), s = n.maybeChild(r), { index: o, offset: l } = n.findIndex(t);
  if (i == e || s.isText) {
    if (l != t && !n.child(o).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != o)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, s.copy(wc(s.content, e - i - 1, t - i - 1)));
}
function Mc(n, e, t, r) {
  let { index: i, offset: s } = n.findIndex(e), o = n.maybeChild(i);
  if (s == e || o.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = Mc(o.content, e - s - 1, t, o);
  return l && n.replaceChild(i, o.copy(l));
}
function xh(n, e, t) {
  if (t.openStart > n.depth)
    throw new ci("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new ci("Inconsistent open depths");
  return Cc(n, e, t, 0);
}
function Cc(n, e, t, r) {
  let i = n.index(r), s = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let o = Cc(n, e, t, r + 1);
    return s.copy(s.content.replaceChild(i, o));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let o = n.parent, l = o.content;
      return cn(o, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: o, end: l } = Sh(t, n);
      return cn(s, Ec(n, o, l, e, r));
    }
  else return cn(s, ui(n, e, r));
}
function Tc(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new ci("Cannot join " + e.type.name + " onto " + n.type.name);
}
function Rs(n, e, t) {
  let r = n.node(t);
  return Tc(r, e.node(t)), r;
}
function an(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function fr(n, e, t, r) {
  let i = (e || n).node(t), s = 0, o = e ? e.index(t) : i.childCount;
  n && (s = n.index(t), n.depth > t ? s++ : n.textOffset && (an(n.nodeAfter, r), s++));
  for (let l = s; l < o; l++)
    an(i.child(l), r);
  e && e.depth == t && e.textOffset && an(e.nodeBefore, r);
}
function cn(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function Ec(n, e, t, r, i) {
  let s = n.depth > i && Rs(n, e, i + 1), o = r.depth > i && Rs(t, r, i + 1), l = [];
  return fr(null, n, i, l), s && o && e.index(i) == t.index(i) ? (Tc(s, o), an(cn(s, Ec(n, e, t, r, i + 1)), l)) : (s && an(cn(s, ui(n, e, i + 1)), l), fr(e, t, i, l), o && an(cn(o, ui(t, r, i + 1)), l)), fr(r, null, i, l), new b(l);
}
function ui(n, e, t) {
  let r = [];
  if (fr(null, n, t, r), n.depth > t) {
    let i = Rs(n, e, t + 1);
    an(cn(i, ui(n, e, t + 1)), r);
  }
  return fr(e, null, t, r), new b(r);
}
function Sh(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let s = t - 1; s >= 0; s--)
    i = e.node(s).copy(b.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class yr {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  /**
  @internal
  */
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  /**
  The parent node that the position points into. Note that even if
  a position points into a text node, that node is not considered
  the parent—text nodes are ‘flat’ in this model, and have no content.
  */
  get parent() {
    return this.node(this.depth);
  }
  /**
  The root node in which the position was resolved.
  */
  get doc() {
    return this.node(0);
  }
  /**
  The ancestor node at the given level. `p.node(p.depth)` is the
  same as `p.parent`.
  */
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  /**
  The index into the ancestor at the given level. If this points
  at the 3rd node in the 2nd paragraph on the top level, for
  example, `p.index(0)` is 1 and `p.index(1)` is 2.
  */
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  /**
  The index pointing after this position into the ancestor at the
  given level.
  */
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  /**
  The (absolute) position at the start of the node at the given
  level.
  */
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  /**
  The (absolute) position at the end of the node at the given
  level.
  */
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  /**
  The (absolute) position directly before the wrapping node at the
  given level, or, when `depth` is `this.depth + 1`, the original
  position.
  */
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  /**
  The (absolute) position directly after the wrapping node at the
  given level, or the original position when `depth` is `this.depth + 1`.
  */
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  /**
  When this position points into a text node, this returns the
  distance between the position and the start of the text node.
  Will be zero for positions that point between nodes.
  */
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  /**
  Get the node directly after the position, if any. If the position
  points into a text node, only the part of that node after the
  position is returned.
  */
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  /**
  Get the node directly before the position, if any. If the
  position points into a text node, only the part of that node
  before the position is returned.
  */
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  /**
  Get the position at the given index in the parent node at the
  given depth (which defaults to `this.depth`).
  */
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let s = 0; s < e; s++)
      i += r.child(s).nodeSize;
    return i;
  }
  /**
  Get the marks at this position, factoring in the surrounding
  marks' [`inclusive`](https://prosemirror.net/docs/ref/#model.MarkSpec.inclusive) property. If the
  position is at the start of a non-empty node, the marks of the
  node after it (if any) are returned.
  */
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return j.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let s = r.marks;
    for (var o = 0; o < s.length; o++)
      s[o].type.spec.inclusive === !1 && (!i || !s[o].isInSet(i.marks)) && (s = s[o--].removeFromSet(s));
    return s;
  }
  /**
  Get the marks after the current position, if any, except those
  that are non-inclusive and not present at position `$end`. This
  is mostly useful for getting the set of marks to preserve after a
  deletion. Will return `null` if this position is at the end of
  its parent node or its parent node isn't a textblock (in which
  case no marks should be preserved).
  */
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var s = 0; s < r.length; s++)
      r[s].type.spec.inclusive === !1 && (!i || !r[s].isInSet(i.marks)) && (r = r[s--].removeFromSet(r));
    return r;
  }
  /**
  The depth up to which this position and the given (non-resolved)
  position share the same parent nodes.
  */
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  /**
  Returns a range based on the place where this position and the
  given position diverge around block content. If both point into
  the same textblock, for example, a range around that textblock
  will be returned. If they point into different blocks, the range
  around those blocks in their shared ancestor is returned. You can
  pass in an optional predicate that will be called with a parent
  node to see if a range into that parent is acceptable.
  */
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new fi(this, e, r);
    return null;
  }
  /**
  Query whether the given position shares the same parent node.
  */
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  /**
  Return the greater of this and the given position.
  */
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  /**
  Return the smaller of this and the given position.
  */
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  /**
  @internal
  */
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  /**
  @internal
  */
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, s = t;
    for (let o = e; ; ) {
      let { index: l, offset: a } = o.content.findIndex(s), c = s - a;
      if (r.push(o, l, i + a), !c || (o = o.child(l), o.isText))
        break;
      s = c - 1, i += a + 1;
    }
    return new yr(t, r, s);
  }
  /**
  @internal
  */
  static resolveCached(e, t) {
    let r = il.get(e);
    if (r)
      for (let s = 0; s < r.elts.length; s++) {
        let o = r.elts[s];
        if (o.pos == t)
          return o;
      }
    else
      il.set(e, r = new wh());
    let i = r.elts[r.i] = yr.resolve(e, t);
    return r.i = (r.i + 1) % Mh, i;
  }
}
class wh {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const Mh = 12, il = /* @__PURE__ */ new WeakMap();
class fi {
  /**
  Construct a node range. `$from` and `$to` should point into the
  same node until at least the given `depth`, since a node range
  denotes an adjacent set of nodes in a single parent node.
  */
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  /**
  The position at the start of the range.
  */
  get start() {
    return this.$from.before(this.depth + 1);
  }
  /**
  The position at the end of the range.
  */
  get end() {
    return this.$to.after(this.depth + 1);
  }
  /**
  The parent node that the range points into.
  */
  get parent() {
    return this.$from.node(this.depth);
  }
  /**
  The start index of the range in the parent node.
  */
  get startIndex() {
    return this.$from.index(this.depth);
  }
  /**
  The end index of the range in the parent node.
  */
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const Ch = /* @__PURE__ */ Object.create(null);
let Bt = class Ps {
  /**
  @internal
  */
  constructor(e, t, r, i = j.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || b.empty;
  }
  /**
  The array of this node's child nodes.
  */
  get children() {
    return this.content.content;
  }
  /**
  The size of this node, as defined by the integer-based [indexing
  scheme](https://prosemirror.net/docs/guide/#doc.indexing). For text nodes, this is the
  amount of characters. For other leaf nodes, it is one. For
  non-leaf nodes, it is the size of the content plus two (the
  start and end token).
  */
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  /**
  The number of children that the node has.
  */
  get childCount() {
    return this.content.childCount;
  }
  /**
  Get the child node at the given index. Raises an error when the
  index is out of range.
  */
  child(e) {
    return this.content.child(e);
  }
  /**
  Get the child node at the given index, if it exists.
  */
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  /**
  Call `f` for every child node, passing the node, its offset
  into this parent node, and its index.
  */
  forEach(e) {
    this.content.forEach(e);
  }
  /**
  Invoke a callback for all descendant nodes recursively between
  the given two positions that are relative to start of this
  node's content. The callback is invoked with the node, its
  position relative to the original node (method receiver),
  its parent node, and its child index. When the callback returns
  false for a given node, that node's children will not be
  recursed over. The last parameter can be used to specify a
  starting position to count from.
  */
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  /**
  Call the given callback for every descendant node. Doesn't
  descend into a node when the callback returns `false`.
  */
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  /**
  Concatenates all the text nodes found in this fragment and its
  children.
  */
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  /**
  Get all text between positions `from` and `to`. When
  `blockSeparator` is given, it will be inserted to separate text
  from different block nodes. If `leafText` is given, it'll be
  inserted for every non-text leaf node encountered, otherwise
  [`leafText`](https://prosemirror.net/docs/ref/#model.NodeSpec.leafText) will be used.
  */
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  /**
  Returns this node's first child, or `null` if there are no
  children.
  */
  get firstChild() {
    return this.content.firstChild;
  }
  /**
  Returns this node's last child, or `null` if there are no
  children.
  */
  get lastChild() {
    return this.content.lastChild;
  }
  /**
  Test whether two nodes represent the same piece of document.
  */
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  /**
  Compare the markup (type, attributes, and marks) of this node to
  those of another. Returns `true` if both have the same markup.
  */
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  /**
  Check whether this node's markup correspond to the given type,
  attributes, and marks.
  */
  hasMarkup(e, t, r) {
    return this.type == e && ai(this.attrs, t || e.defaultAttrs || Ch) && j.sameSet(this.marks, r || j.none);
  }
  /**
  Create a new node with the same markup as this node, containing
  the given content (or empty, if no content is given).
  */
  copy(e = null) {
    return e == this.content ? this : new Ps(this.type, this.attrs, e, this.marks);
  }
  /**
  Create a copy of this node, with the given set of marks instead
  of the node's own marks.
  */
  mark(e) {
    return e == this.marks ? this : new Ps(this.type, this.attrs, this.content, e);
  }
  /**
  Create a copy of this node with only the content between the
  given positions. If `to` is not given, it defaults to the end of
  the node.
  */
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  /**
  Cut out the part of the document between the given positions, and
  return it as a `Slice` object.
  */
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return x.empty;
    let i = this.resolve(e), s = this.resolve(t), o = r ? 0 : i.sharedDepth(t), l = i.start(o), c = i.node(o).content.cut(i.pos - l, s.pos - l);
    return new x(c, i.depth - o, s.depth - o);
  }
  /**
  Replace the part of the document between the given positions with
  the given slice. The slice must 'fit', meaning its open sides
  must be able to connect to the surrounding content, and its
  content nodes must be valid children for the node they are placed
  into. If any of this is violated, an error of type
  [`ReplaceError`](https://prosemirror.net/docs/ref/#model.ReplaceError) is thrown.
  */
  replace(e, t, r) {
    return xh(this.resolve(e), this.resolve(t), r);
  }
  /**
  Find the node directly after the given position.
  */
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  /**
  Find the (direct) child node after the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  /**
  Find the (direct) child node before the given offset, if any,
  and return it along with its index and offset relative to this
  node.
  */
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  /**
  Resolve the given position in the document, returning an
  [object](https://prosemirror.net/docs/ref/#model.ResolvedPos) with information about its context.
  */
  resolve(e) {
    return yr.resolveCached(this, e);
  }
  /**
  @internal
  */
  resolveNoCache(e) {
    return yr.resolve(this, e);
  }
  /**
  Test whether a given mark or mark type occurs in this document
  between the two given positions.
  */
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (s) => (r.isInSet(s.marks) && (i = !0), !i)), i;
  }
  /**
  True when this is a block (non-inline node)
  */
  get isBlock() {
    return this.type.isBlock;
  }
  /**
  True when this is a textblock node, a block node with inline
  content.
  */
  get isTextblock() {
    return this.type.isTextblock;
  }
  /**
  True when this node allows inline content.
  */
  get inlineContent() {
    return this.type.inlineContent;
  }
  /**
  True when this is an inline node (a text node or a node that can
  appear among text).
  */
  get isInline() {
    return this.type.isInline;
  }
  /**
  True when this is a text node.
  */
  get isText() {
    return this.type.isText;
  }
  /**
  True when this is a leaf node.
  */
  get isLeaf() {
    return this.type.isLeaf;
  }
  /**
  True when this is an atom, i.e. when it does not have directly
  editable content. This is usually the same as `isLeaf`, but can
  be configured with the [`atom` property](https://prosemirror.net/docs/ref/#model.NodeSpec.atom)
  on a node's spec (typically used when the node is displayed as
  an uneditable [node view](https://prosemirror.net/docs/ref/#view.NodeView)).
  */
  get isAtom() {
    return this.type.isAtom;
  }
  /**
  Return a string representation of this node for debugging
  purposes.
  */
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), Oc(this.marks, e);
  }
  /**
  Get the content match in this node at the given index.
  */
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  /**
  Test whether replacing the range between `from` and `to` (by
  child index) with the given replacement fragment (which defaults
  to the empty fragment) would leave the node's content valid. You
  can optionally pass `start` and `end` indices into the
  replacement fragment.
  */
  canReplace(e, t, r = b.empty, i = 0, s = r.childCount) {
    let o = this.contentMatchAt(e).matchFragment(r, i, s), l = o && o.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < s; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  /**
  Test whether replacing the range `from` to `to` (by index) with
  a node of the given type would leave the node's content valid.
  */
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let s = this.contentMatchAt(e).matchType(r), o = s && s.matchFragment(this.content, t);
    return o ? o.validEnd : !1;
  }
  /**
  Test whether the given node's content could be appended to this
  node. If that node is empty, this will only return true if there
  is at least one node type that can appear in both nodes (to avoid
  merging completely incompatible nodes).
  */
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  /**
  Check whether this node and its descendants conform to the
  schema, and raise an exception when they do not.
  */
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = j.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!j.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  /**
  Return a JSON-serializeable representation of this node.
  */
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  /**
  Deserialize a node from its JSON representation.
  */
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = b.fromJSON(e, t.content), s = e.nodeType(t.type).create(t.attrs, i, r);
    return s.type.checkAttrs(s.attrs), s;
  }
};
Bt.prototype.text = void 0;
class di extends Bt {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : Oc(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new di(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new di(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function Oc(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class gn {
  /**
  @internal
  */
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  /**
  @internal
  */
  static parse(e, t) {
    let r = new Th(e, t);
    if (r.next == null)
      return gn.empty;
    let i = Nc(r);
    r.next && r.err("Unexpected trailing text");
    let s = Ih(Dh(i));
    return Rh(s, r), s;
  }
  /**
  Match a node type, returning a match after that node if
  successful.
  */
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  /**
  Try to match a fragment. Returns the resulting match when
  successful.
  */
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let s = t; i && s < r; s++)
      i = i.matchType(e.child(s).type);
    return i;
  }
  /**
  @internal
  */
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  /**
  Get the first matching node type at this match position that can
  be generated.
  */
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  /**
  @internal
  */
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  /**
  Try to match the given fragment, and if that fails, see if it can
  be made to match by inserting nodes in front of it. When
  successful, return a fragment of inserted nodes (which may be
  empty if nothing had to be inserted). When `toEnd` is true, only
  return a fragment if the resulting match goes to the end of the
  content expression.
  */
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function s(o, l) {
      let a = o.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return b.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < o.next.length; c++) {
        let { type: u, next: f } = o.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(f) == -1) {
          i.push(f);
          let d = s(f, l.concat(u));
          if (d)
            return d;
        }
      }
      return null;
    }
    return s(this, []);
  }
  /**
  Find a set of wrapping node types that would allow a node of the
  given type to appear at this position. The result may be empty
  (when it fits directly) and will be null when no such wrapping
  exists.
  */
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  /**
  @internal
  */
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), s = i.match;
      if (s.matchType(e)) {
        let o = [];
        for (let l = i; l.type; l = l.via)
          o.push(l.type);
        return o.reverse();
      }
      for (let o = 0; o < s.next.length; o++) {
        let { type: l, next: a } = s.next[o];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  /**
  The number of outgoing edges this node has in the finite
  automaton that describes the content expression.
  */
  get edgeCount() {
    return this.next.length;
  }
  /**
  Get the _n_​th outgoing edge from this node in the finite
  automaton that describes the content expression.
  */
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  /**
  @internal
  */
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let s = i + (r.validEnd ? "*" : " ") + " ";
      for (let o = 0; o < r.next.length; o++)
        s += (o ? ", " : "") + r.next[o].type.name + "->" + e.indexOf(r.next[o].next);
      return s;
    }).join(`
`);
  }
}
gn.empty = new gn(!0);
class Th {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Nc(n) {
  let e = [];
  do
    e.push(Eh(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function Eh(n) {
  let e = [];
  do
    e.push(Oh(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function Oh(n) {
  let e = _h(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = Nh(n, e);
    else
      break;
  return e;
}
function sl(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function Nh(n, e) {
  let t = sl(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = sl(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function Ah(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let s in t) {
    let o = t[s];
    o.isInGroup(e) && i.push(o);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function _h(n) {
  if (n.eat("(")) {
    let e = Nc(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = Ah(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Dh(n) {
  let e = [[]];
  return i(s(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(o, l, a) {
    let c = { term: a, to: l };
    return e[o].push(c), c;
  }
  function i(o, l) {
    o.forEach((a) => a.to = l);
  }
  function s(o, l) {
    if (o.type == "choice")
      return o.exprs.reduce((a, c) => a.concat(s(c, l)), []);
    if (o.type == "seq")
      for (let a = 0; ; a++) {
        let c = s(o.exprs[a], l);
        if (a == o.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (o.type == "star") {
      let a = t();
      return r(l, a), i(s(o.expr, a), a), [r(a)];
    } else if (o.type == "plus") {
      let a = t();
      return i(s(o.expr, l), a), i(s(o.expr, a), a), [r(a)];
    } else {
      if (o.type == "opt")
        return [r(l)].concat(s(o.expr, l));
      if (o.type == "range") {
        let a = l;
        for (let c = 0; c < o.min; c++) {
          let u = t();
          i(s(o.expr, a), u), a = u;
        }
        if (o.max == -1)
          i(s(o.expr, a), a);
        else
          for (let c = o.min; c < o.max; c++) {
            let u = t();
            r(a, u), i(s(o.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (o.type == "name")
          return [r(l, void 0, o.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Ac(n, e) {
  return e - n;
}
function ol(n, e) {
  let t = [];
  return r(e), t.sort(Ac);
  function r(i) {
    let s = n[i];
    if (s.length == 1 && !s[0].term)
      return r(s[0].to);
    t.push(i);
    for (let o = 0; o < s.length; o++) {
      let { term: l, to: a } = s[o];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function Ih(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(ol(n, 0));
  function t(r) {
    let i = [];
    r.forEach((o) => {
      n[o].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < i.length; u++)
          i[u][0] == l && (c = i[u][1]);
        ol(n, a).forEach((u) => {
          c || i.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let s = e[r.join(",")] = new gn(r.indexOf(n.length - 1) > -1);
    for (let o = 0; o < i.length; o++) {
      let l = i[o][1].sort(Ac);
      s.next.push({ type: i[o][0], next: e[l.join(",")] || t(l) });
    }
    return s;
  }
}
function Rh(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], s = !i.validEnd, o = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      o.push(a.name), s && !(a.isText || a.hasRequiredAttrs()) && (s = !1), r.indexOf(c) == -1 && r.push(c);
    }
    s && e.err("Only non-generatable nodes (" + o.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function _c(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function Dc(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let s = n[r];
      if (s.hasDefault)
        i = s.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function Ic(n, e, t, r) {
  for (let i in e)
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in n) {
    let s = n[i];
    s.validate && s.validate(e[i]);
  }
}
function Rc(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new $h(n, r, e[r]);
  return t;
}
let ll = class Pc {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Rc(e, r.attrs), this.defaultAttrs = _c(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  /**
  True if this is an inline type.
  */
  get isInline() {
    return !this.isBlock;
  }
  /**
  True if this is a textblock type, a block that contains inline
  content.
  */
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  /**
  True for node types that allow no content.
  */
  get isLeaf() {
    return this.contentMatch == gn.empty;
  }
  /**
  True when this node is an atom, i.e. when it does not have
  directly editable content.
  */
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  /**
  Return true when this node type is part of the given
  [group](https://prosemirror.net/docs/ref/#model.NodeSpec.group).
  */
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  /**
  The node type's [whitespace](https://prosemirror.net/docs/ref/#model.NodeSpec.whitespace) option.
  */
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  /**
  Tells you whether this node type has any required attributes.
  */
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  /**
  Indicates whether this node allows some of the same content as
  the given node type.
  */
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  /**
  @internal
  */
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : Dc(this.attrs, e);
  }
  /**
  Create a `Node` of this type. The given attributes are
  checked and defaulted (you can pass `null` to use the type's
  defaults entirely, if no required attributes exist). `content`
  may be a `Fragment`, a node, an array of nodes, or
  `null`. Similarly `marks` may be `null` to default to the empty
  set of marks.
  */
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new Bt(this, this.computeAttrs(e), b.from(t), j.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but check the given content
  against the node type's content restrictions, and throw an error
  if it doesn't match.
  */
  createChecked(e = null, t, r) {
    return t = b.from(t), this.checkContent(t), new Bt(this, this.computeAttrs(e), t, j.setFrom(r));
  }
  /**
  Like [`create`](https://prosemirror.net/docs/ref/#model.NodeType.create), but see if it is
  necessary to add nodes to the start or end of the given fragment
  to make it fit the node. If no fitting wrapping can be found,
  return null. Note that, due to the fact that required nodes can
  always be created, this will always succeed if you pass null or
  `Fragment.empty` as content.
  */
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = b.from(t), t.size) {
      let o = this.contentMatch.fillBefore(t);
      if (!o)
        return null;
      t = o.append(t);
    }
    let i = this.contentMatch.matchFragment(t), s = i && i.fillBefore(b.empty, !0);
    return s ? new Bt(this, e, t.append(s), j.setFrom(r)) : null;
  }
  /**
  Returns true if the given fragment is valid content for this node
  type.
  */
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  /**
  Throws a RangeError if the given fragment is not valid content for this
  node type.
  @internal
  */
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Ic(this.attrs, e, "node", this.name);
  }
  /**
  Check whether the given mark type is allowed in this node.
  */
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  /**
  Test whether the given set of marks are allowed in this node.
  */
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  /**
  Removes the marks that are not allowed in this node from the given set.
  */
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : j.none : e;
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((s, o) => r[s] = new Pc(s, t, o));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let s in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
};
function Ph(n, e, t) {
  let r = t.split("|");
  return (i) => {
    let s = i === null ? "null" : typeof i;
    if (r.indexOf(s) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${s}`);
  };
}
class $h {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? Ph(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Ri {
  /**
  @internal
  */
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = Rc(e, i.attrs), this.excluded = null;
    let s = _c(this.attrs);
    this.instance = s ? new j(this, s) : null;
  }
  /**
  Create a mark of this type. `attrs` may be `null` or an object
  containing only some of the mark's attributes. The others, if
  they have defaults, will be added.
  */
  create(e = null) {
    return !e && this.instance ? this.instance : new j(this, Dc(this.attrs, e));
  }
  /**
  @internal
  */
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((s, o) => r[s] = new Ri(s, i++, t, o)), r;
  }
  /**
  When there is a mark of this type in the given set, a new set
  without it is returned. Otherwise, the input set is returned.
  */
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  /**
  Tests whether there is a mark of this type in the given set.
  */
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  /**
  @internal
  */
  checkAttrs(e) {
    Ic(this.attrs, e, "mark", this.name);
  }
  /**
  Queries whether a given mark type is
  [excluded](https://prosemirror.net/docs/ref/#model.MarkSpec.excludes) by this one.
  */
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class $c {
  /**
  Construct a schema from a schema [specification](https://prosemirror.net/docs/ref/#model.SchemaSpec).
  */
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = ae.from(e.nodes), t.marks = ae.from(e.marks || {}), this.nodes = ll.compile(this.spec.nodes, this), this.marks = Ri.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let s = this.nodes[i], o = s.spec.content || "", l = s.spec.marks;
      if (s.contentMatch = r[o] || (r[o] = gn.parse(o, this.nodes)), s.inlineContent = s.contentMatch.inlineContent, s.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!s.isInline || !s.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = s;
      }
      s.markSet = l == "_" ? null : l ? al(this, l.split(" ")) : l == "" || !s.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let s = this.marks[i], o = s.spec.excludes;
      s.excluded = o == null ? [s] : o == "" ? [] : al(this, o.split(" "));
    }
    this.nodeFromJSON = (i) => Bt.fromJSON(this, i), this.markFromJSON = (i) => j.fromJSON(this, i), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  /**
  Create a node in this schema. The `type` may be a string or a
  `NodeType` instance. Attributes will be extended with defaults,
  `content` may be a `Fragment`, `null`, a `Node`, or an array of
  nodes.
  */
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof ll) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  /**
  Create a text node in the schema. Empty text nodes are not
  allowed.
  */
  text(e, t) {
    let r = this.nodes.text;
    return new di(r, r.defaultAttrs, e, j.setFrom(t));
  }
  /**
  Create a mark with the given type and attributes.
  */
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  /**
  @internal
  */
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function al(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], s = n.marks[i], o = s;
    if (s)
      t.push(s);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(o = a);
      }
    if (!o)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function Bh(n) {
  return n.tag != null;
}
function zh(n) {
  return n.style != null;
}
class zt {
  /**
  Create a parser that targets the given schema, using the given
  parsing rules.
  */
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((i) => {
      if (Bh(i))
        this.tags.push(i);
      else if (zh(i)) {
        let s = /[^=]*/.exec(i.style)[0];
        r.indexOf(s) < 0 && r.push(s), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let s = e.nodes[i.node];
      return s.contentMatch.matchType(s);
    });
  }
  /**
  Parse a document from the content of a DOM node.
  */
  parse(e, t = {}) {
    let r = new ul(this, t, !1);
    return r.addAll(e, j.none, t.from, t.to), r.finish();
  }
  /**
  Parses the content of the given DOM node, like
  [`parse`](https://prosemirror.net/docs/ref/#model.DOMParser.parse), and takes the same set of
  options. But unlike that method, which produces a whole node,
  this one returns a slice that is open at the sides, meaning that
  the schema constraints aren't applied to the start of nodes to
  the left of the input and the end of nodes at the end.
  */
  parseSlice(e, t = {}) {
    let r = new ul(this, t, !0);
    return r.addAll(e, j.none, t.from, t.to), x.maxOpen(r.finish());
  }
  /**
  @internal
  */
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let s = this.tags[i];
      if (Vh(e, s.tag) && (s.namespace === void 0 || e.namespaceURI == s.namespace) && (!s.context || t.matchesContext(s.context))) {
        if (s.getAttrs) {
          let o = s.getAttrs(e);
          if (o === !1)
            continue;
          s.attrs = o || void 0;
        }
        return s;
      }
    }
  }
  /**
  @internal
  */
  matchStyle(e, t, r, i) {
    for (let s = i ? this.styles.indexOf(i) + 1 : 0; s < this.styles.length; s++) {
      let o = this.styles[s], l = o.style;
      if (!(l.indexOf(e) != 0 || o.context && !r.matchesContext(o.context) || // Test that the style string either precisely matches the prop,
      // or has an '=' sign after the prop, followed by the given
      // value.
      l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (o.getAttrs) {
          let a = o.getAttrs(t);
          if (a === !1)
            continue;
          o.attrs = a || void 0;
        }
        return o;
      }
    }
  }
  /**
  @internal
  */
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let s = i.priority == null ? 50 : i.priority, o = 0;
      for (; o < t.length; o++) {
        let l = t[o];
        if ((l.priority == null ? 50 : l.priority) < s)
          break;
      }
      t.splice(o, 0, i);
    }
    for (let i in e.marks) {
      let s = e.marks[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = fl(o)), o.mark || o.ignore || o.clearMark || (o.mark = i);
      });
    }
    for (let i in e.nodes) {
      let s = e.nodes[i].spec.parseDOM;
      s && s.forEach((o) => {
        r(o = fl(o)), o.node || o.ignore || o.mark || (o.node = i);
      });
    }
    return t;
  }
  /**
  Construct a DOM parser using the parsing rules listed in a
  schema's [node specs](https://prosemirror.net/docs/ref/#model.NodeSpec.parseDOM), reordered by
  [priority](https://prosemirror.net/docs/ref/#model.GenericParseRule.priority).
  */
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new zt(e, zt.schemaRules(e)));
  }
}
const Bc = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Lh = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, zc = { ol: !0, ul: !0 }, br = 1, $s = 2, dr = 4;
function cl(n, e, t) {
  return e != null ? (e ? br : 0) | (e === "full" ? $s : 0) : n && n.whitespace == "pre" ? br | $s : t & ~dr;
}
class qr {
  constructor(e, t, r, i, s, o) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = o, this.content = [], this.activeMarks = j.none, this.match = s || (o & dr ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(b.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & br)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let s = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = s.withText(s.text.slice(0, s.text.length - i[0].length));
      }
    }
    let t = b.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(b.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Bc.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class ul {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let i = t.topNode, s, o = cl(null, t.preserveWhitespace, 0) | (r ? dr : 0);
    i ? s = new qr(i.type, i.attrs, j.none, !0, t.topMatch || i.type.contentMatch, o) : r ? s = new qr(null, null, j.none, !0, null, o) : s = new qr(e.schema.topNodeType, null, j.none, !0, null, o), this.nodes = [s], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  // Add a DOM node to the content. Text is inserted as text node,
  // otherwise, the node is passed to `addElement` or, if it has a
  // `style` attribute, `addElementWithStyles`.
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let r = e.nodeValue, i = this.top, s = i.options & $s ? "full" : this.localPreserveWS || (i.options & br) > 0, { schema: o } = this.parser;
    if (s === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (s)
        if (s === "full")
          r = r.replace(/\r\n?/g, `
`);
        else if (o.linebreakReplacement && /[\r\n]/.test(r) && this.top.findWrapping(o.linebreakReplacement.create())) {
          let l = r.split(/\r?\n|\r/);
          for (let a = 0; a < l.length; a++)
            a && this.insertNode(o.linebreakReplacement.create(), t, !0), l[a] && this.insertNode(o.text(l[a]), t, !/\S/.test(l[a]));
          r = "";
        } else
          r = r.replace(/\r?\n|\r/g, " ");
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let l = i.content[i.content.length - 1], a = e.previousSibling;
        (!l || a && a.nodeName == "BR" || l.isText && /[ \t\r\n\u000c]$/.test(l.text)) && (r = r.slice(1));
      }
      r && this.insertNode(o.text(r), t, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  // Try to find a handler for the given tag and use that to parse. If
  // none is found, the element's content nodes are added directly.
  addElement(e, t, r) {
    let i = this.localPreserveWS, s = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let o = e.nodeName.toLowerCase(), l;
    zc.hasOwnProperty(o) && this.parser.normalizeLists && Fh(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e: if (a ? a.ignore : Lh.hasOwnProperty(o))
      this.findInside(e), this.ignoreFallback(e, t);
    else if (!a || a.skip || a.closeParent) {
      a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
      let c, u = this.needsBlock;
      if (Bc.hasOwnProperty(o))
        s.content.length && s.content[0].isInline && this.open && (this.open--, s = this.top), c = !0, s.type || (this.needsBlock = !0);
      else if (!e.firstChild) {
        this.leafFallback(e, t);
        break e;
      }
      let f = a && a.skip ? t : this.readStyles(e, t);
      f && this.addAll(e, f), c && this.sync(s), this.needsBlock = u;
    } else {
      let c = this.readStyles(e, t);
      c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
    }
    this.localPreserveWS = i;
  }
  // Called for leaf DOM nodes that would otherwise be ignored
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  // Called for ignored nodes
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
  }
  // Run any style parser associated with the node's styles. Either
  // return an updated array of marks, or null to indicate some of the
  // styles had a rule with `ignore` set.
  readStyles(e, t) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let s = this.parser.matchedStyles[i], o = r.getPropertyValue(s);
        if (o)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(s, o, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? t = t.filter((c) => !a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return t;
  }
  // Look up a handler for the given node. If none are found, return
  // false. Otherwise, apply it, use its return value to drive the way
  // the node's content is wrapped, and return true.
  addElementByRule(e, t, r, i) {
    let s, o;
    if (t.node)
      if (o = this.parser.schema.nodes[t.node], o.isLeaf)
        this.insertNode(o.create(t.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let a = this.enter(o, t.attrs || null, r, t.preserveWhitespace);
        a && (s = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      r = r.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (o && o.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    s && this.sync(l) && this.open--;
  }
  // Add all child nodes between `startIndex` and `endIndex` (or the
  // whole node, if not given). If `sync` is passed, use it to
  // synchronize after every block element.
  addAll(e, t, r, i) {
    let s = r || 0;
    for (let o = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; o != l; o = o.nextSibling, ++s)
      this.findAtPoint(e, s), this.addDOM(o, t);
    this.findAtPoint(e, s);
  }
  // Try to find a way to fit the given node type into the current
  // context. May add intermediate wrappers and/or leave non-solid
  // nodes that we're in.
  findPlace(e, t, r) {
    let i, s;
    for (let o = this.open, l = 0; o >= 0; o--) {
      let a = this.nodes[o], c = a.findWrapping(e);
      if (c && (!i || i.length > c.length + l) && (i = c, s = a, !c.length))
        break;
      if (a.solid) {
        if (r)
          break;
        l += 2;
      }
    }
    if (!i)
      return null;
    this.sync(s);
    for (let o = 0; o < i.length; o++)
      t = this.enterInner(i[o], null, t, !1);
    return t;
  }
  // Try to insert the given node, adjusting the context when needed.
  insertNode(e, t, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let s = this.textblockFromContext();
      s && (t = this.enterInner(s, null, t));
    }
    let i = this.findPlace(e, t, r);
    if (i) {
      this.closeExtra();
      let s = this.top;
      s.match && (s.match = s.match.matchType(e.type));
      let o = j.none;
      for (let l of i.concat(e.marks))
        (s.type ? s.type.allowsMarkType(l.type) : dl(l.type, e.type)) && (o = l.addToSet(o));
      return s.content.push(e.mark(o)), !0;
    }
    return !1;
  }
  // Try to start a node of the given type, adjusting the context when
  // necessary.
  enter(e, t, r, i) {
    let s = this.findPlace(e.create(t), r, !1);
    return s && (s = this.enterInner(e, t, r, !0, i)), s;
  }
  // Open a node of the given type
  enterInner(e, t, r, i = !1, s) {
    this.closeExtra();
    let o = this.top;
    o.match = o.match && o.match.matchType(e);
    let l = cl(e, s, o.options);
    o.options & dr && o.content.length == 0 && (l |= dr);
    let a = j.none;
    return r = r.filter((c) => (o.type ? o.type.allowsMarkType(c.type) : dl(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new qr(e, t, a, i, null, l)), this.open++, r;
  }
  // Make sure all nodes above this.open are finished and added to
  // their parents
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0;
      this.localPreserveWS && (this.nodes[t].options |= br);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  // Determines whether the given context string matches this context.
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), s = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), o = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= s; a--)
            if (o(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= s ? r.node(a - s).type : null;
          if (!u || u.name != c && !u.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return o(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function Fh(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && zc.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function Vh(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function fl(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function dl(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let s = [], o = (l) => {
      s.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || s.indexOf(u) < 0 && o(u))
          return !0;
      }
    };
    if (o(i.contentMatch))
      return !0;
  }
}
class wn {
  /**
  Create a serializer. `nodes` should map node names to functions
  that take a node and return a description of the corresponding
  DOM. `marks` does the same for mark names, but also gets an
  argument that tells it whether the mark's content is block or
  inline content (for typical use, it'll always be inline). A mark
  serializer may be `null` to indicate that marks of that type
  should not be serialized.
  */
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  /**
  Serialize the content of this fragment to a DOM fragment. When
  not in the browser, the `document` option, containing a DOM
  document, should be passed so that the serializer can create
  nodes.
  */
  serializeFragment(e, t = {}, r) {
    r || (r = Zi(t).createDocumentFragment());
    let i = r, s = [];
    return e.forEach((o) => {
      if (s.length || o.marks.length) {
        let l = 0, a = 0;
        for (; l < s.length && a < o.marks.length; ) {
          let c = o.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(s[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < s.length; )
          i = s.pop()[1];
        for (; a < o.marks.length; ) {
          let c = o.marks[a++], u = this.serializeMark(c, o.isInline, t);
          u && (s.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(o, t));
    }), r;
  }
  /**
  @internal
  */
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = Zr(Zi(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  /**
  Serialize this node to a DOM node. This can be useful when you
  need to serialize a part of a document, as opposed to the whole
  document. To serialize a whole document, use
  [`serializeFragment`](https://prosemirror.net/docs/ref/#model.DOMSerializer.serializeFragment) on
  its [content](https://prosemirror.net/docs/ref/#model.Node.content).
  */
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let s = this.serializeMark(e.marks[i], e.isInline, t);
      s && ((s.contentDOM || s.dom).appendChild(r), r = s.dom);
    }
    return r;
  }
  /**
  @internal
  */
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && Zr(Zi(r), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, i) {
    return Zr(e, t, r, i);
  }
  /**
  Build a serializer using the [`toDOM`](https://prosemirror.net/docs/ref/#model.NodeSpec.toDOM)
  properties in a schema's node and mark specs.
  */
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new wn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  /**
  Gather the serializers in a schema's node specs into an object.
  This can be useful as a base to build a custom serializer from.
  */
  static nodesFromSchema(e) {
    let t = hl(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  /**
  Gather the serializers in a schema's mark specs into an object.
  */
  static marksFromSchema(e) {
    return hl(e.marks);
  }
}
function hl(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function Zi(n) {
  return n.document || window.document;
}
const pl = /* @__PURE__ */ new WeakMap();
function Hh(n) {
  let e = pl.get(n);
  return e === void 0 && pl.set(n, e = qh(n)), e;
}
function qh(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            t(r[i]);
      else
        for (let i in r)
          t(r[i]);
  }
  return t(n), e;
}
function Zr(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], s;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (s = Hh(r)) && s.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let o = i.indexOf(" ");
  o > 0 && (t = i.slice(0, o), i = i.slice(o + 1));
  let l, a = t ? n.createElementNS(t, i) : n.createElement(i), c = e[1], u = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2;
    for (let f in c)
      if (c[f] != null) {
        let d = f.indexOf(" ");
        d > 0 ? a.setAttributeNS(f.slice(0, d), f.slice(d + 1), c[f]) : f == "style" && a.style ? a.style.cssText = c[f] : a.setAttribute(f, c[f]);
      }
  }
  for (let f = u; f < e.length; f++) {
    let d = e[f];
    if (d === 0) {
      if (f < e.length - 1 || f > u)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: p, contentDOM: h } = Zr(n, d, t, r);
      if (a.appendChild(p), h) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = h;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const Lc = 65535, Fc = Math.pow(2, 16);
function jh(n, e) {
  return n + e * Fc;
}
function ml(n) {
  return n & Lc;
}
function Wh(n) {
  return (n - (n & Lc)) / Fc;
}
const Vc = 1, Hc = 2, ei = 4, qc = 8;
class Bs {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  /**
  Tells you whether the position was deleted, that is, whether the
  step removed the token on the side queried (via the `assoc`)
  argument from the document.
  */
  get deleted() {
    return (this.delInfo & qc) > 0;
  }
  /**
  Tells you whether the token before the mapped position was deleted.
  */
  get deletedBefore() {
    return (this.delInfo & (Vc | ei)) > 0;
  }
  /**
  True when the token after the mapped position was deleted.
  */
  get deletedAfter() {
    return (this.delInfo & (Hc | ei)) > 0;
  }
  /**
  Tells whether any of the steps mapped through deletes across the
  position (including both the token before and after the
  position).
  */
  get deletedAcross() {
    return (this.delInfo & ei) > 0;
  }
}
class Re {
  /**
  Create a position map. The modifications to the document are
  represented as an array of numbers, in which each group of three
  represents a modified chunk as `[start, oldSize, newSize]`.
  */
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && Re.empty)
      return Re.empty;
  }
  /**
  @internal
  */
  recover(e) {
    let t = 0, r = ml(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + Wh(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0, s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = this.ranges[l + o], f = a + c;
      if (e <= f) {
        let d = c ? e == a ? -1 : e == f ? 1 : t : t, p = a + i + (d < 0 ? 0 : u);
        if (r)
          return p;
        let h = e == (t < 0 ? a : f) ? null : jh(l / 3, e - a), m = e == a ? Hc : e == f ? Vc : ei;
        return (t < 0 ? e != a : e != f) && (m |= qc), new Bs(p, m, h);
      }
      i += u - c;
    }
    return r ? e + i : new Bs(e + i, 0, null);
  }
  /**
  @internal
  */
  touches(e, t) {
    let r = 0, i = ml(t), s = this.inverted ? 2 : 1, o = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + s], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      r += this.ranges[l + o] - c;
    }
    return !1;
  }
  /**
  Calls the given function on each of the changed ranges included in
  this map.
  */
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, s = 0; i < this.ranges.length; i += 3) {
      let o = this.ranges[i], l = o - (this.inverted ? s : 0), a = o + (this.inverted ? 0 : s), c = this.ranges[i + t], u = this.ranges[i + r];
      e(l, l + c, a, a + u), s += u - c;
    }
  }
  /**
  Create an inverted version of this map. The result can be used to
  map positions in the post-step document to the pre-step document.
  */
  invert() {
    return new Re(this.ranges, !this.inverted);
  }
  /**
  @internal
  */
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  /**
  Create a map that moves all positions by offset `n` (which may be
  negative). This can be useful when applying steps meant for a
  sub-document to a larger document, or vice-versa.
  */
  static offset(e) {
    return e == 0 ? Re.empty : new Re(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
Re.empty = new Re([]);
class vr {
  /**
  Create a new mapping with the given position maps.
  */
  constructor(e, t, r = 0, i = e ? e.length : 0) {
    this.mirror = t, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || t);
  }
  /**
  The step maps in this mapping.
  */
  get maps() {
    return this._maps;
  }
  /**
  Create a mapping that maps only through a part of this one.
  */
  slice(e = 0, t = this.maps.length) {
    return new vr(this._maps, this.mirror, e, t);
  }
  /**
  Add a step map to the end of this mapping. If `mirrors` is
  given, it should be the index of the step map that is the mirror
  image of this one.
  */
  appendMap(e, t) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
  }
  /**
  Add all the step maps in a given mapping to this one (preserving
  mirroring information).
  */
  appendMapping(e) {
    for (let t = 0, r = this._maps.length; t < e._maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  /**
  Finds the offset of the step map that mirrors the map at the
  given offset, in this mapping (as per the second argument to
  `appendMap`).
  */
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  /**
  @internal
  */
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  /**
  Append the inverse of the given mapping to this one.
  */
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this._maps.length + e._maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  /**
  Create an inverted version of this mapping.
  */
  invert() {
    let e = new vr();
    return e.appendMappingInverted(this), e;
  }
  /**
  Map a position through this mapping.
  */
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, t);
    return e;
  }
  /**
  Map a position through this mapping, returning a mapping
  result.
  */
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  /**
  @internal
  */
  _map(e, t, r) {
    let i = 0;
    for (let s = this.from; s < this.to; s++) {
      let o = this._maps[s], l = o.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(s);
        if (a != null && a > s && a < this.to) {
          s = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Bs(e, i, null);
  }
}
const es = /* @__PURE__ */ Object.create(null);
class ve {
  /**
  Get the step map that represents the changes made by this step,
  and which can be used to transform between positions in the old
  and the new document.
  */
  getMap() {
    return Re.empty;
  }
  /**
  Try to merge this step with another one, to be applied directly
  after it. Returns the merged step when possible, null if the
  steps can't be merged.
  */
  merge(e) {
    return null;
  }
  /**
  Deserialize a step from its JSON representation. Will call
  through to the step class' own implementation of this method.
  */
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = es[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to serialize steps to JSON, each step needs a string
  ID to attach to its JSON representation. Use this method to
  register an ID for your step classes. Try to pick something
  that's unlikely to clash with steps from other modules.
  */
  static jsonID(e, t) {
    if (e in es)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return es[e] = t, t.prototype.jsonID = e, t;
  }
}
class X {
  /**
  @internal
  */
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  /**
  Create a successful step result.
  */
  static ok(e) {
    return new X(e, null);
  }
  /**
  Create a failed step result.
  */
  static fail(e) {
    return new X(null, e);
  }
  /**
  Call [`Node.replace`](https://prosemirror.net/docs/ref/#model.Node.replace) with the given
  arguments. Create a successful result if it succeeds, and a
  failed one if it throws a `ReplaceError`.
  */
  static fromReplace(e, t, r, i) {
    try {
      return X.ok(e.replace(t, r, i));
    } catch (s) {
      if (s instanceof ci)
        return X.fail(s.message);
      throw s;
    }
  }
}
function go(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let s = n.child(i);
    s.content.size && (s = s.copy(go(s.content, e, s))), s.isInline && (s = e(s, t, i)), r.push(s);
  }
  return b.fromArray(r);
}
class _t extends ve {
  /**
  Create a mark step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), s = new x(go(t.content, (o, l) => !o.isAtom || !l.type.allowsMarkType(this.mark.type) ? o : o.mark(this.mark.addToSet(o.marks)), i), t.openStart, t.openEnd);
    return X.fromReplace(e, this.from, this.to, s);
  }
  invert() {
    return new st(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new _t(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof _t && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new _t(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new _t(t.from, t.to, e.markFromJSON(t.mark));
  }
}
ve.jsonID("addMark", _t);
class st extends ve {
  /**
  Create a mark-removing step.
  */
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new x(go(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return X.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new _t(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new st(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof st && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new st(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new st(t.from, t.to, e.markFromJSON(t.mark));
  }
}
ve.jsonID("removeMark", st);
class Dt extends ve {
  /**
  Create a node mark step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return X.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return X.fromReplace(e, this.pos, this.pos + 1, new x(b.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new Dt(this.pos, t.marks[i]);
        return new Dt(this.pos, this.mark);
      }
    }
    return new yn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Dt(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new Dt(t.pos, e.markFromJSON(t.mark));
  }
}
ve.jsonID("addNodeMark", Dt);
class yn extends ve {
  /**
  Create a mark-removing step.
  */
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return X.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return X.fromReplace(e, this.pos, this.pos + 1, new x(b.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new Dt(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new yn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new yn(t.pos, e.markFromJSON(t.mark));
  }
}
ve.jsonID("removeNodeMark", yn);
class ne extends ve {
  /**
  The given `slice` should fit the 'gap' between `from` and
  `to`—the depths must line up, and the surrounding nodes must be
  able to be joined with the open sides of the slice. When
  `structure` is true, the step will fail if the content between
  from and to is not just a sequence of closing and then opening
  tokens (this is to guard against rebased replace steps
  overwriting something they weren't supposed to).
  */
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && zs(e, this.from, this.to) ? X.fail("Structure replace would overwrite content") : X.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new Re([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new ne(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new ne(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof ne) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? x.empty : new x(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new ne(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? x.empty : new x(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new ne(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new ne(t.from, t.to, x.fromJSON(e, t.slice), !!t.structure);
  }
}
ve.jsonID("replace", ne);
class ie extends ve {
  /**
  Create a replace-around step with the given range and gap.
  `insert` should be the point in the slice into which the content
  of the gap should be moved. `structure` has the same meaning as
  it has in the [`ReplaceStep`](https://prosemirror.net/docs/ref/#transform.ReplaceStep) class.
  */
  constructor(e, t, r, i, s, o, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = s, this.insert = o, this.structure = l;
  }
  apply(e) {
    if (this.structure && (zs(e, this.from, this.gapFrom) || zs(e, this.gapTo, this.to)))
      return X.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return X.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? X.fromReplace(e, this.from, this.to, r) : X.fail("Content does not fit in gap");
  }
  getMap() {
    return new Re([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new ie(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), s = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || s > r.pos ? null : new ie(t.pos, r.pos, i, s, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new ie(t.from, t.to, t.gapFrom, t.gapTo, x.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
ve.jsonID("replaceAround", ie);
function zs(n, e, t) {
  let r = n.resolve(e), i = t - e, s = r.depth;
  for (; i > 0 && s > 0 && r.indexAfter(s) == r.node(s).childCount; )
    s--, i--;
  if (i > 0) {
    let o = r.node(s).maybeChild(r.indexAfter(s));
    for (; i > 0; ) {
      if (!o || o.isLeaf)
        return !0;
      o = o.firstChild, i--;
    }
  }
  return !1;
}
function Kh(n, e, t, r) {
  let i = [], s = [], o, l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let f = a.marks;
    if (!r.isInSet(f) && u.type.allowsMarkType(r.type)) {
      let d = Math.max(c, e), p = Math.min(c + a.nodeSize, t), h = r.addToSet(f);
      for (let m = 0; m < f.length; m++)
        f[m].isInSet(h) || (o && o.to == d && o.mark.eq(f[m]) ? o.to = p : i.push(o = new st(d, p, f[m])));
      l && l.to == d ? l.to = p : s.push(l = new _t(d, p, r));
    }
  }), i.forEach((a) => n.step(a)), s.forEach((a) => n.step(a));
}
function Jh(n, e, t, r) {
  let i = [], s = 0;
  n.doc.nodesBetween(e, t, (o, l) => {
    if (!o.isInline)
      return;
    s++;
    let a = null;
    if (r instanceof Ri) {
      let c = o.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else r ? r.isInSet(o.marks) && (a = [r]) : a = o.marks;
    if (a && a.length) {
      let c = Math.min(l + o.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let f = a[u], d;
        for (let p = 0; p < i.length; p++) {
          let h = i[p];
          h.step == s - 1 && f.eq(i[p].style) && (d = h);
        }
        d ? (d.to = c, d.step = s) : i.push({ style: f, from: Math.max(l, e), to: c, step: s });
      }
    }
  }), i.forEach((o) => n.step(new st(o.from, o.to, o.style)));
}
function yo(n, e, t, r = t.contentMatch, i = !0) {
  let s = n.doc.nodeAt(e), o = [], l = e + 1;
  for (let a = 0; a < s.childCount; a++) {
    let c = s.child(a), u = l + c.nodeSize, f = r.matchType(c.type);
    if (!f)
      o.push(new ne(l, u, x.empty));
    else {
      r = f;
      for (let d = 0; d < c.marks.length; d++)
        t.allowsMarkType(c.marks[d].type) || n.step(new st(l, u, c.marks[d]));
      if (i && c.isText && t.whitespace != "pre") {
        let d, p = /\r?\n|\r/g, h;
        for (; d = p.exec(c.text); )
          h || (h = new x(b.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), o.push(new ne(l + d.index, l + d.index + d[0].length, h));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(b.empty, !0);
    n.replace(l, l, new x(a, 0, 0));
  }
  for (let a = o.length - 1; a >= 0; a--)
    n.step(o[a]);
}
function Uh(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function Zn(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth, i = 0, s = 0; ; --r) {
    let o = n.$from.node(r), l = n.$from.index(r) + i, a = n.$to.indexAfter(r) - s;
    if (r < n.depth && o.canReplace(l, a, t))
      return r;
    if (r == 0 || o.type.spec.isolating || !Uh(o, l, a))
      break;
    l && (i = 1), a < o.childCount && (s = 1);
  }
  return null;
}
function Gh(n, e, t) {
  let { $from: r, $to: i, depth: s } = e, o = r.before(s + 1), l = i.after(s + 1), a = o, c = l, u = b.empty, f = 0;
  for (let h = s, m = !1; h > t; h--)
    m || r.index(h) > 0 ? (m = !0, u = b.from(r.node(h).copy(u)), f++) : a--;
  let d = b.empty, p = 0;
  for (let h = s, m = !1; h > t; h--)
    m || i.after(h + 1) < i.end(h) ? (m = !0, d = b.from(i.node(h).copy(d)), p++) : c++;
  n.step(new ie(a, c, o, l, new x(u.append(d), f, p), u.size - f, !0));
}
function bo(n, e, t = null, r = n) {
  let i = Yh(n, e), s = i && Qh(r, e);
  return s ? i.map(gl).concat({ type: e, attrs: t }).concat(s.map(gl)) : null;
}
function gl(n) {
  return { type: n, attrs: null };
}
function Yh(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.contentMatchAt(r).findWrapping(e);
  if (!s)
    return null;
  let o = s.length ? s[0] : e;
  return t.canReplaceWith(r, i, o) ? s : null;
}
function Qh(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, s = t.child(r), o = e.contentMatch.findWrapping(s.type);
  if (!o)
    return null;
  let a = (o.length ? o[o.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : o;
}
function Xh(n, e, t) {
  let r = b.empty;
  for (let o = t.length - 1; o >= 0; o--) {
    if (r.size) {
      let l = t[o].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = b.from(t[o].type.create(t[o].attrs, r));
  }
  let i = e.start, s = e.end;
  n.step(new ie(i, s, i, s, new x(r, 0, 0), t.length, !0));
}
function Zh(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let s = n.steps.length;
  n.doc.nodesBetween(e, t, (o, l) => {
    let a = typeof i == "function" ? i(o) : i;
    if (o.isTextblock && !o.hasMarkup(r, a) && ep(n.doc, n.mapping.slice(s).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let p = r.whitespace == "pre", h = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        p && !h ? c = !1 : !p && h && (c = !0);
      }
      c === !1 && Wc(n, o, l, s), yo(n, n.mapping.slice(s).map(l, 1), r, void 0, c === null);
      let u = n.mapping.slice(s), f = u.map(l, 1), d = u.map(l + o.nodeSize, 1);
      return n.step(new ie(f, d, f + 1, d - 1, new x(b.from(r.create(a, null, o.marks)), 0, 0), 1, !0)), c === !0 && jc(n, o, l, s), !1;
    }
  });
}
function jc(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.isText) {
      let o, l = /\r?\n|\r/g;
      for (; o = l.exec(i.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + s + o.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function Wc(n, e, t, r) {
  e.forEach((i, s) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let o = n.mapping.slice(r).map(t + 1 + s);
      n.replaceWith(o, o + 1, e.type.schema.text(`
`));
    }
  });
}
function ep(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function tp(n, e, t, r, i) {
  let s = n.doc.nodeAt(e);
  if (!s)
    throw new RangeError("No node at given position");
  t || (t = s.type);
  let o = t.create(r, null, i || s.marks);
  if (s.isLeaf)
    return n.replaceWith(e, e + s.nodeSize, o);
  if (!t.validContent(s.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new ie(e, e + s.nodeSize, e + 1, e + s.nodeSize - 1, new x(b.from(o), 0, 0), 1, !0));
}
function kt(n, e, t = 1, r) {
  let i = n.resolve(e), s = i.depth - t, o = r && r[r.length - 1] || i.parent;
  if (s < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !o.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > s; c--, u--) {
    let f = i.node(c), d = i.index(c);
    if (f.type.spec.isolating)
      return !1;
    let p = f.content.cutByIndex(d, f.childCount), h = r && r[u + 1];
    h && (p = p.replaceChild(0, h.type.create(h.attrs)));
    let m = r && r[u] || f;
    if (!f.canReplace(d + 1, f.childCount) || !m.type.validContent(p))
      return !1;
  }
  let l = i.indexAfter(s), a = r && r[0];
  return i.node(s).canReplaceWith(l, l, a ? a.type : i.node(s + 1).type);
}
function np(n, e, t = 1, r) {
  let i = n.doc.resolve(e), s = b.empty, o = b.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    s = b.from(i.node(l).copy(s));
    let u = r && r[c];
    o = b.from(u ? u.type.create(u.attrs, o) : i.node(l).copy(o));
  }
  n.step(new ne(e, e, new x(s.append(o), t, t), !0));
}
function Kt(n, e) {
  let t = n.resolve(e), r = t.index();
  return Kc(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function rp(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let s = e.child(i), o = s.type == r ? n.type.schema.nodes.text : s.type;
    if (t = t.matchType(o), !t || !n.type.allowsMarks(s.marks))
      return !1;
  }
  return t.validEnd;
}
function Kc(n, e) {
  return !!(n && e && !n.isLeaf && rp(n, e));
}
function Pi(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let s, o, l = r.index(i);
    if (i == r.depth ? (s = r.nodeBefore, o = r.nodeAfter) : t > 0 ? (s = r.node(i + 1), l++, o = r.node(i).maybeChild(l)) : (s = r.node(i).maybeChild(l - 1), o = r.node(i + 1)), s && !s.isTextblock && Kc(s, o) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function ip(n, e, t) {
  let r = null, { linebreakReplacement: i } = n.doc.type.schema, s = n.doc.resolve(e - t), o = s.node().type;
  if (i && o.inlineContent) {
    let u = o.whitespace == "pre", f = !!o.contentMatch.matchType(i);
    u && !f ? r = !1 : !u && f && (r = !0);
  }
  let l = n.steps.length;
  if (r === !1) {
    let u = n.doc.resolve(e + t);
    Wc(n, u.node(), u.before(), l);
  }
  o.inlineContent && yo(n, e + t - 1, o, s.node().contentMatchAt(s.index()), r == null);
  let a = n.mapping.slice(l), c = a.map(e - t);
  if (n.step(new ne(c, a.map(e + t, -1), x.empty, !0)), r === !0) {
    let u = n.doc.resolve(c);
    jc(n, u.node(), u.before(), n.steps.length);
  }
  return n;
}
function sp(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.index(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.before(i + 1);
      if (s > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let s = r.indexAfter(i);
      if (r.node(i).canReplaceWith(s, s, t))
        return r.after(i + 1);
      if (s < r.node(i).childCount)
        return null;
    }
  return null;
}
function Jc(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let s = 0; s < t.openStart; s++)
    i = i.firstChild.content;
  for (let s = 1; s <= (t.openStart == 0 && t.size ? 2 : 1); s++)
    for (let o = r.depth; o >= 0; o--) {
      let l = o == r.depth ? 0 : r.pos <= (r.start(o + 1) + r.end(o + 1)) / 2 ? -1 : 1, a = r.index(o) + (l > 0 ? 1 : 0), c = r.node(o), u = !1;
      if (s == 1)
        u = c.canReplace(a, a, i);
      else {
        let f = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        u = f && c.canReplaceWith(a, a, f[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(o + 1) : r.after(o + 1);
    }
  return null;
}
function $i(n, e, t = e, r = x.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), s = n.resolve(t);
  return Uc(i, s, r) ? new ne(e, t, r) : new op(i, s, r).fit();
}
function Uc(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class op {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = b.empty;
    for (let i = 0; i <= e.depth; i++) {
      let s = e.node(i);
      this.frontier.push({
        type: s.type,
        match: s.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = b.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let s = this.placed, o = r.depth, l = i.depth;
    for (; o && l && s.childCount == 1; )
      s = s.firstChild.content, o--, l--;
    let a = new x(s, o, l);
    return e > -1 ? new ie(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new ne(r.pos, i.pos, a) : null;
  }
  // Find a position on the start spine of `this.unplaced` that has
  // content that can be moved somewhere on the frontier. Returns two
  // depths, one for the slice and one for the frontier.
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let s = t.firstChild;
      if (t.childCount > 1 && (i = 0), s.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = s.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, s = null;
        r ? (s = ts(this.unplaced.content, r - 1).firstChild, i = s.content) : i = this.unplaced.content;
        let o = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, f = null;
          if (t == 1 && (o ? c.matchType(o.type) || (f = c.fillBefore(b.from(o), !1)) : s && a.compatibleContent(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, inject: f };
          if (t == 2 && o && (u = c.findWrapping(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: s, wrap: u };
          if (s && c.matchType(s.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = ts(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new x(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = ts(e, t);
    if (i.childCount <= 1 && t > 0) {
      let s = e.size - t <= t + i.size;
      this.unplaced = new x(or(e, t - 1, 1), t - 1, s ? t - 1 : r);
    } else
      this.unplaced = new x(or(e, t, 1), t, r);
  }
  // Move content from the unplaced slice at `sliceDepth` to the
  // frontier node at `frontierDepth`. Close that frontier node when
  // applicable.
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: s }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (s)
      for (let m = 0; m < s.length; m++)
        this.openFrontierNode(s[m]);
    let o = this.unplaced, l = r ? r.content : o.content, a = o.openStart - e, c = 0, u = [], { match: f, type: d } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        u.push(i.child(m));
      f = f.matchFragment(i);
    }
    let p = l.size + e - (o.content.size - o.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = f.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (f = g, u.push(Gc(m.mark(d.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? p : -1)));
    }
    let h = c == l.childCount;
    h || (p = -1), this.placed = lr(this.placed, t, b.from(u)), this.frontier[t].match = f, h && p < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < p; m++) {
      let y = g.lastChild;
      this.frontier.push({ type: y.type, match: y.contentMatchAt(y.childCount) }), g = y.content;
    }
    this.unplaced = h ? e == 0 ? x.empty : new x(or(o.content, e - 1, 1), e - 1, p < 0 ? o.openEnd : e - 1) : new x(or(o.content, e, c), o.openStart, o.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !ns(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e: for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
      let { match: r, type: i } = this.frontier[t], s = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), o = ns(e, t, i, r, s);
      if (o) {
        for (let l = t - 1; l >= 0; l--) {
          let { match: a, type: c } = this.frontier[l], u = ns(e, l, c, a, !0);
          if (!u || u.childCount)
            continue e;
        }
        return { depth: t, fit: o, move: s ? e.doc.resolve(e.after(t + 1)) : e };
      }
    }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = lr(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), s = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, s);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = lr(this.placed, this.depth, b.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(b.empty, !0);
    t.childCount && (this.placed = lr(this.placed, this.frontier.length, t));
  }
}
function or(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(or(n.firstChild.content, e - 1, t)));
}
function lr(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(lr(n.lastChild.content, e - 1, t)));
}
function ts(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function Gc(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, Gc(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(b.empty, !0)))), n.copy(r);
}
function ns(n, e, t, r, i) {
  let s = n.node(e), o = i ? n.indexAfter(e) : n.index(e);
  if (o == s.childCount && !t.compatibleContent(s.type))
    return null;
  let l = r.fillBefore(s.content, !0, o);
  return l && !lp(t, s.content, o) ? l : null;
}
function lp(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function ap(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function cp(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), s = n.doc.resolve(t);
  if (Uc(i, s, r))
    return n.step(new ne(e, t, r));
  let o = Qc(i, s);
  o[o.length - 1] == 0 && o.pop();
  let l = -(i.depth + 1);
  o.unshift(l);
  for (let d = i.depth, p = i.pos - 1; d > 0; d--, p--) {
    let h = i.node(d).type.spec;
    if (h.defining || h.definingAsContext || h.isolating)
      break;
    o.indexOf(d) > -1 ? l = d : i.before(d) == p && o.splice(1, 0, -d);
  }
  let a = o.indexOf(l), c = [], u = r.openStart;
  for (let d = r.content, p = 0; ; p++) {
    let h = d.firstChild;
    if (c.push(h), p == r.openStart)
      break;
    d = h.content;
  }
  for (let d = u - 1; d >= 0; d--) {
    let p = c[d], h = ap(p.type);
    if (h && !p.sameMarkup(i.node(Math.abs(l) - 1)))
      u = d;
    else if (h || !p.type.isTextblock)
      break;
  }
  for (let d = r.openStart; d >= 0; d--) {
    let p = (d + u + 1) % (r.openStart + 1), h = c[p];
    if (h)
      for (let m = 0; m < o.length; m++) {
        let g = o[(m + a) % o.length], y = !0;
        g < 0 && (y = !1, g = -g);
        let k = i.node(g - 1), S = i.index(g - 1);
        if (k.canReplaceWith(S, S, h.type, h.marks))
          return n.replace(i.before(g), y ? s.after(g) : t, new x(Yc(r.content, 0, r.openStart, p), p, r.openEnd));
      }
  }
  let f = n.steps.length;
  for (let d = o.length - 1; d >= 0 && (n.replace(e, t, r), !(n.steps.length > f)); d--) {
    let p = o[d];
    p < 0 || (e = i.before(p), t = s.after(p));
  }
}
function Yc(n, e, t, r, i) {
  if (e < t) {
    let s = n.firstChild;
    n = n.replaceChild(0, s.copy(Yc(s.content, e + 1, t, r, s)));
  }
  if (e > r) {
    let s = i.contentMatchAt(0), o = s.fillBefore(n).append(n);
    n = o.append(s.matchFragment(o).fillBefore(b.empty, !0));
  }
  return n;
}
function up(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = sp(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new x(b.from(r), 0, 0));
}
function fp(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), s = Qc(r, i);
  for (let o = 0; o < s.length; o++) {
    let l = s[o], a = o == s.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let o = 1; o <= r.depth && o <= i.depth; o++)
    if (e - r.start(o) == r.depth - o && t > r.end(o) && i.end(o) - t != i.depth - o && r.start(o - 1) == i.start(o - 1) && r.node(o - 1).canReplace(r.index(o - 1), i.index(o - 1)))
      return n.delete(r.before(o), t);
  n.delete(e, t);
}
function Qc(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let s = n.start(i);
    if (s < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (s == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == s - 1) && t.push(i);
  }
  return t;
}
class Pn extends ve {
  /**
  Construct an attribute step.
  */
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return X.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let s in t.attrs)
      r[s] = t.attrs[s];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return X.fromReplace(e, this.pos, this.pos + 1, new x(b.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return Re.empty;
  }
  invert(e) {
    return new Pn(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Pn(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new Pn(t.pos, t.attr, t.value);
  }
}
ve.jsonID("attr", Pn);
class kr extends ve {
  /**
  Construct an attribute step.
  */
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return X.ok(r);
  }
  getMap() {
    return Re.empty;
  }
  invert(e) {
    return new kr(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new kr(t.attr, t.value);
  }
}
ve.jsonID("docAttr", kr);
let Kn = class extends Error {
};
Kn = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
Kn.prototype = Object.create(Error.prototype);
Kn.prototype.constructor = Kn;
Kn.prototype.name = "TransformError";
class dp {
  /**
  Create a transform that starts with the given document.
  */
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new vr();
  }
  /**
  The starting document.
  */
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  /**
  Apply a new step in this transform, saving the result. Throws an
  error when the step fails.
  */
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new Kn(t.failed);
    return this;
  }
  /**
  Try to apply a step in this transformation, ignoring it if it
  fails. Returns the step result.
  */
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  /**
  True when the document has been changed (when there are any
  steps).
  */
  get docChanged() {
    return this.steps.length > 0;
  }
  /**
  Return a single range, in post-transform document positions,
  that covers all content changed by this transform. Returns null
  if no replacements are made. Note that this will ignore changes
  that add/remove marks without replacing the underlying content.
  */
  changedRange() {
    let e = 1e9, t = -1e9;
    for (let r = 0; r < this.mapping.maps.length; r++) {
      let i = this.mapping.maps[r];
      r && (e = i.map(e, 1), t = i.map(t, -1)), i.forEach((s, o, l, a) => {
        e = Math.min(e, l), t = Math.max(t, a);
      });
    }
    return e == 1e9 ? null : { from: e, to: t };
  }
  /**
  @internal
  */
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  /**
  Replace the part of the document between `from` and `to` with the
  given `slice`.
  */
  replace(e, t = e, r = x.empty) {
    let i = $i(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  /**
  Replace the given range with the given content, which may be a
  fragment, node, or array of nodes.
  */
  replaceWith(e, t, r) {
    return this.replace(e, t, new x(b.from(r), 0, 0));
  }
  /**
  Delete the content between the given positions.
  */
  delete(e, t) {
    return this.replace(e, t, x.empty);
  }
  /**
  Insert the given content at the given position.
  */
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  /**
  Replace a range of the document with a given slice, using
  `from`, `to`, and the slice's
  [`openStart`](https://prosemirror.net/docs/ref/#model.Slice.openStart) property as hints, rather
  than fixed start and end points. This method may grow the
  replaced area or close open nodes in the slice in order to get a
  fit that is more in line with WYSIWYG expectations, by dropping
  fully covered parent nodes of the replaced region when they are
  marked [non-defining as
  context](https://prosemirror.net/docs/ref/#model.NodeSpec.definingAsContext), or including an
  open parent node from the slice that _is_ marked as [defining
  its content](https://prosemirror.net/docs/ref/#model.NodeSpec.definingForContent).
  
  This is the method, for example, to handle paste. The similar
  [`replace`](https://prosemirror.net/docs/ref/#transform.Transform.replace) method is a more
  primitive tool which will _not_ move the start and end of its given
  range, and is useful in situations where you need more precise
  control over what happens.
  */
  replaceRange(e, t, r) {
    return cp(this, e, t, r), this;
  }
  /**
  Replace the given range with a node, but use `from` and `to` as
  hints, rather than precise positions. When from and to are the same
  and are at the start or end of a parent node in which the given
  node doesn't fit, this method may _move_ them out towards a parent
  that does allow the given node to be placed. When the given range
  completely covers a parent node, this method may completely replace
  that parent node.
  */
  replaceRangeWith(e, t, r) {
    return up(this, e, t, r), this;
  }
  /**
  Delete the given range, expanding it to cover fully covered
  parent nodes until a valid replace is found.
  */
  deleteRange(e, t) {
    return fp(this, e, t), this;
  }
  /**
  Split the content in the given range off from its parent, if there
  is sibling content before or after it, and move it up the tree to
  the depth specified by `target`. You'll probably want to use
  [`liftTarget`](https://prosemirror.net/docs/ref/#transform.liftTarget) to compute `target`, to make
  sure the lift is valid.
  */
  lift(e, t) {
    return Gh(this, e, t), this;
  }
  /**
  Join the blocks around the given position. If depth is 2, their
  last and first siblings are also joined, and so on.
  */
  join(e, t = 1) {
    return ip(this, e, t), this;
  }
  /**
  Wrap the given [range](https://prosemirror.net/docs/ref/#model.NodeRange) in the given set of wrappers.
  The wrappers are assumed to be valid in this position, and should
  probably be computed with [`findWrapping`](https://prosemirror.net/docs/ref/#transform.findWrapping).
  */
  wrap(e, t) {
    return Xh(this, e, t), this;
  }
  /**
  Set the type of all textblocks (partly) between `from` and `to` to
  the given node type with the given attributes.
  */
  setBlockType(e, t = e, r, i = null) {
    return Zh(this, e, t, r, i), this;
  }
  /**
  Change the type, attributes, and/or marks of the node at `pos`.
  When `type` isn't given, the existing node type is preserved,
  */
  setNodeMarkup(e, t, r = null, i) {
    return tp(this, e, t, r, i), this;
  }
  /**
  Set a single attribute on a given node to a new value.
  The `pos` addresses the document content. Use `setDocAttribute`
  to set attributes on the document itself.
  */
  setNodeAttribute(e, t, r) {
    return this.step(new Pn(e, t, r)), this;
  }
  /**
  Set a single attribute on the document to a new value.
  */
  setDocAttribute(e, t) {
    return this.step(new kr(e, t)), this;
  }
  /**
  Add a mark to the node at position `pos`.
  */
  addNodeMark(e, t) {
    return this.step(new Dt(e, t)), this;
  }
  /**
  Remove a mark (or all marks of the given type) from the node at
  position `pos`.
  */
  removeNodeMark(e, t) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (t instanceof j)
      t.isInSet(r.marks) && this.step(new yn(e, t));
    else {
      let i = r.marks, s, o = [];
      for (; s = t.isInSet(i); )
        o.push(new yn(e, s)), i = s.removeFromSet(i);
      for (let l = o.length - 1; l >= 0; l--)
        this.step(o[l]);
    }
    return this;
  }
  /**
  Split the node at the given position, and optionally, if `depth` is
  greater than one, any number of nodes above that. By default, the
  parts split off will inherit the node type of the original node.
  This can be changed by passing an array of types and attributes to
  use after the split (with the outermost nodes coming first).
  */
  split(e, t = 1, r) {
    return np(this, e, t, r), this;
  }
  /**
  Add the given mark to the inline content between `from` and `to`.
  */
  addMark(e, t, r) {
    return Kh(this, e, t, r), this;
  }
  /**
  Remove marks from inline nodes between `from` and `to`. When
  `mark` is a single mark, remove precisely that mark. When it is
  a mark type, remove all marks of that type. When it is null,
  remove all marks of any type.
  */
  removeMark(e, t, r) {
    return Jh(this, e, t, r), this;
  }
  /**
  Removes all marks and nodes from the content of the node at
  `pos` that don't match the given new parent node type. Accepts
  an optional starting [content match](https://prosemirror.net/docs/ref/#model.ContentMatch) as
  third argument.
  */
  clearIncompatible(e, t, r) {
    return yo(this, e, t, r), this;
  }
}
const rs = /* @__PURE__ */ Object.create(null);
class R {
  /**
  Initialize a selection with the head and anchor and ranges. If no
  ranges are given, constructs a single range across `$anchor` and
  `$head`.
  */
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new hp(e.min(t), e.max(t))];
  }
  /**
  The selection's anchor, as an unresolved position.
  */
  get anchor() {
    return this.$anchor.pos;
  }
  /**
  The selection's head.
  */
  get head() {
    return this.$head.pos;
  }
  /**
  The lower bound of the selection's main range.
  */
  get from() {
    return this.$from.pos;
  }
  /**
  The upper bound of the selection's main range.
  */
  get to() {
    return this.$to.pos;
  }
  /**
  The resolved lower  bound of the selection's main range.
  */
  get $from() {
    return this.ranges[0].$from;
  }
  /**
  The resolved upper bound of the selection's main range.
  */
  get $to() {
    return this.ranges[0].$to;
  }
  /**
  Indicates whether the selection contains any content.
  */
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  /**
  Get the content of this selection as a slice.
  */
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  /**
  Replace the selection with a slice or, if no slice is given,
  delete the selection. Will append to the given transaction.
  */
  replace(e, t = x.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let s = e.steps.length, o = this.ranges;
    for (let l = 0; l < o.length; l++) {
      let { $from: a, $to: c } = o[l], u = e.mapping.slice(s);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? x.empty : t), l == 0 && vl(e, s, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  /**
  Replace the selection with the given node, appending the changes
  to the given transaction.
  */
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let s = 0; s < i.length; s++) {
      let { $from: o, $to: l } = i[s], a = e.mapping.slice(r), c = a.map(o.pos), u = a.map(l.pos);
      s ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), vl(e, r, t.isInline ? -1 : 1));
    }
  }
  /**
  Find a valid cursor or leaf node selection starting at the given
  position and searching back if `dir` is negative, and forward if
  positive. When `textOnly` is true, only consider cursor
  selections. Will return null when no valid selection position is
  found.
  */
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new D(e) : En(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let s = e.depth - 1; s >= 0; s--) {
      let o = t < 0 ? En(e.node(0), e.node(s), e.before(s + 1), e.index(s), t, r) : En(e.node(0), e.node(s), e.after(s + 1), e.index(s) + 1, t, r);
      if (o)
        return o;
    }
    return null;
  }
  /**
  Find a valid cursor or leaf node selection near the given
  position. Searches forward first by default, but if `bias` is
  negative, it will search backwards first.
  */
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new $e(e.node(0));
  }
  /**
  Find the cursor or leaf node selection closest to the start of
  the given document. Will return an
  [`AllSelection`](https://prosemirror.net/docs/ref/#state.AllSelection) if no valid position
  exists.
  */
  static atStart(e) {
    return En(e, e, 0, 0, 1) || new $e(e);
  }
  /**
  Find the cursor or leaf node selection closest to the end of the
  given document.
  */
  static atEnd(e) {
    return En(e, e, e.content.size, e.childCount, -1) || new $e(e);
  }
  /**
  Deserialize the JSON representation of a selection. Must be
  implemented for custom classes (as a static class method).
  */
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = rs[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  /**
  To be able to deserialize selections from JSON, custom selection
  classes must register themselves with an ID string, so that they
  can be disambiguated. Try to pick something that's unlikely to
  clash with classes from other modules.
  */
  static jsonID(e, t) {
    if (e in rs)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return rs[e] = t, t.prototype.jsonID = e, t;
  }
  /**
  Get a [bookmark](https://prosemirror.net/docs/ref/#state.SelectionBookmark) for this selection,
  which is a value that can be mapped without having access to a
  current document, and later resolved to a real selection for a
  given document again. (This is used mostly by the history to
  track and restore old selections.) The default implementation of
  this method just converts the selection to a text selection and
  returns the bookmark for that.
  */
  getBookmark() {
    return D.between(this.$anchor, this.$head).getBookmark();
  }
}
R.prototype.visible = !0;
class hp {
  /**
  Create a range.
  */
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let yl = !1;
function bl(n) {
  !yl && !n.parent.inlineContent && (yl = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class D extends R {
  /**
  Construct a text selection between the given points.
  */
  constructor(e, t = e) {
    bl(e), bl(t), super(e, t);
  }
  /**
  Returns a resolved position if this is a cursor selection (an
  empty text selection), and null otherwise.
  */
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return R.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new D(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = x.empty) {
    if (super.replace(e, t), t == x.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof D && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Bi(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new D(e.resolve(t.anchor), e.resolve(t.head));
  }
  /**
  Create a text selection from non-resolved positions.
  */
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  /**
  Return a text selection that spans the given positions or, if
  they aren't text positions, find a text selection near them.
  `bias` determines whether the method searches forward (default)
  or backwards (negative number) first. Will fall back to calling
  [`Selection.near`](https://prosemirror.net/docs/ref/#state.Selection^near) when the document
  doesn't contain a valid text position.
  */
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let s = R.findFrom(t, r, !0) || R.findFrom(t, -r, !0);
      if (s)
        t = s.$head;
      else
        return R.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (R.findFrom(e, -r, !0) || R.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new D(e, t);
  }
}
R.jsonID("text", D);
class Bi {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Bi(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return D.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class O extends R {
  /**
  Create a node selection. Does not verify the validity of its
  argument.
  */
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), s = e.resolve(i);
    return r ? R.near(s) : new O(s);
  }
  content() {
    return new x(b.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof O && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new vo(this.anchor);
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new O(e.resolve(t.anchor));
  }
  /**
  Create a node selection from non-resolved positions.
  */
  static create(e, t) {
    return new O(e.resolve(t));
  }
  /**
  Determines whether the given node may be selected as a node
  selection.
  */
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
O.prototype.visible = !1;
R.jsonID("node", O);
class vo {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new Bi(r, r) : new vo(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && O.isSelectable(r) ? new O(t) : R.near(t);
  }
}
class $e extends R {
  /**
  Create an all-selection over the given document.
  */
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = x.empty) {
    if (t == x.empty) {
      e.delete(0, e.doc.content.size);
      let r = R.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  /**
  @internal
  */
  static fromJSON(e) {
    return new $e(e);
  }
  map(e) {
    return new $e(e);
  }
  eq(e) {
    return e instanceof $e;
  }
  getBookmark() {
    return pp;
  }
}
R.jsonID("all", $e);
const pp = {
  map() {
    return this;
  },
  resolve(n) {
    return new $e(n);
  }
};
function En(n, e, t, r, i, s = !1) {
  if (e.inlineContent)
    return D.create(n, t);
  for (let o = r - (i > 0 ? 0 : 1); i > 0 ? o < e.childCount : o >= 0; o += i) {
    let l = e.child(o);
    if (l.isAtom) {
      if (!s && O.isSelectable(l))
        return O.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = En(n, l, t + i, i < 0 ? l.childCount : 0, i, s);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function vl(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof ne || i instanceof ie))
    return;
  let s = n.mapping.maps[r], o;
  s.forEach((l, a, c, u) => {
    o == null && (o = u);
  }), n.setSelection(R.near(n.doc.resolve(o), t));
}
const kl = 1, jr = 2, xl = 4;
class mp extends dp {
  /**
  @internal
  */
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  /**
  The transaction's current selection. This defaults to the editor
  selection [mapped](https://prosemirror.net/docs/ref/#state.Selection.map) through the steps in the
  transaction, but can be overwritten with
  [`setSelection`](https://prosemirror.net/docs/ref/#state.Transaction.setSelection).
  */
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  /**
  Update the transaction's current selection. Will determine the
  selection that the editor gets when the transaction is applied.
  */
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | kl) & ~jr, this.storedMarks = null, this;
  }
  /**
  Whether the selection was explicitly updated by this transaction.
  */
  get selectionSet() {
    return (this.updated & kl) > 0;
  }
  /**
  Set the current stored marks.
  */
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= jr, this;
  }
  /**
  Make sure the current stored marks or, if that is null, the marks
  at the selection, match the given set of marks. Does nothing if
  this is already the case.
  */
  ensureMarks(e) {
    return j.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  /**
  Add a mark to the set of stored marks.
  */
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Remove a mark or mark type from the set of stored marks.
  */
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  /**
  Whether the stored marks were explicitly set for this transaction.
  */
  get storedMarksSet() {
    return (this.updated & jr) > 0;
  }
  /**
  @internal
  */
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~jr, this.storedMarks = null;
  }
  /**
  Update the timestamp for the transaction.
  */
  setTime(e) {
    return this.time = e, this;
  }
  /**
  Replace the current selection with the given slice.
  */
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  /**
  Replace the selection with the given node. When `inheritMarks` is
  true and the content is inline, it inherits the marks from the
  place where it is inserted.
  */
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || j.none))), r.replaceWith(this, e), this;
  }
  /**
  Delete the selection.
  */
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  /**
  Replace the given range, or the selection if no range is given,
  with a text node containing the given string.
  */
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), !e)
        return this.deleteRange(t, r);
      let s = this.storedMarks;
      if (!s) {
        let o = this.doc.resolve(t);
        s = r == t ? o.marks() : o.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, s)), !this.selection.empty && this.selection.to == t + e.length && this.setSelection(R.near(this.selection.$to)), this;
    }
  }
  /**
  Store a metadata property in this transaction, keyed either by
  name or by plugin.
  */
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  /**
  Retrieve a metadata property for a given name or plugin.
  */
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  /**
  Returns true if this transaction doesn't contain any metadata,
  and can thus safely be extended.
  */
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  /**
  Indicate that the editor should scroll the selection into view
  when updated to the state produced by this transaction.
  */
  scrollIntoView() {
    return this.updated |= xl, this;
  }
  /**
  True when this transaction has had `scrollIntoView` called on it.
  */
  get scrolledIntoView() {
    return (this.updated & xl) > 0;
  }
}
function Sl(n, e) {
  return !e || !n ? n : n.bind(e);
}
class ar {
  constructor(e, t, r) {
    this.name = e, this.init = Sl(t.init, r), this.apply = Sl(t.apply, r);
  }
}
const gp = [
  new ar("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new ar("selection", {
    init(n, e) {
      return n.selection || R.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new ar("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new ar("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class is {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = gp.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new ar(r.key, r.spec.state, r));
    });
  }
}
class An {
  /**
  @internal
  */
  constructor(e) {
    this.config = e;
  }
  /**
  The schema of the state's document.
  */
  get schema() {
    return this.config.schema;
  }
  /**
  The plugins that are active in this state.
  */
  get plugins() {
    return this.config.plugins;
  }
  /**
  Apply the given transaction to produce a new state.
  */
  apply(e) {
    return this.applyTransaction(e).state;
  }
  /**
  @internal
  */
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  /**
  Verbose variant of [`apply`](https://prosemirror.net/docs/ref/#state.EditorState.apply) that
  returns the precise transactions that were applied (which might
  be influenced by the [transaction
  hooks](https://prosemirror.net/docs/ref/#state.PluginSpec.filterTransaction) of
  plugins) along with the new state.
  */
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let s = !1;
      for (let o = 0; o < this.config.plugins.length; o++) {
        let l = this.config.plugins[o];
        if (l.spec.appendTransaction) {
          let a = i ? i[o].n : 0, c = i ? i[o].state : this, u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (u && r.filterTransaction(u, o)) {
            if (u.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let f = 0; f < this.config.plugins.length; f++)
                i.push(f < o ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(u), r = r.applyInner(u), s = !0;
          }
          i && (i[o] = { state: r, n: t.length });
        }
      }
      if (!s)
        return { state: r, transactions: t };
    }
  }
  /**
  @internal
  */
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new An(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let s = r[i];
      t[s.name] = s.apply(e, this[s.name], this, t);
    }
    return t;
  }
  /**
  Accessor that constructs and returns a new [transaction](https://prosemirror.net/docs/ref/#state.Transaction) from this state.
  */
  get tr() {
    return new mp(this);
  }
  /**
  Create a new state.
  */
  static create(e) {
    let t = new is(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new An(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  /**
  Create a new state based on this one, but with an adjusted set
  of active plugins. State fields that exist in both sets of
  plugins are kept unchanged. Those that no longer exist are
  dropped, and those that are new are initialized using their
  [`init`](https://prosemirror.net/docs/ref/#state.StateField.init) method, passing in the new
  configuration object..
  */
  reconfigure(e) {
    let t = new is(this.schema, e.plugins), r = t.fields, i = new An(t);
    for (let s = 0; s < r.length; s++) {
      let o = r[s].name;
      i[o] = this.hasOwnProperty(o) ? this[o] : r[s].init(e, i);
    }
    return i;
  }
  /**
  Serialize this state to JSON. If you want to serialize the state
  of plugins, pass an object mapping property names to use in the
  resulting JSON object to plugin objects. The argument may also be
  a string or number, in which case it is ignored, to support the
  way `JSON.stringify` calls `toString` methods.
  */
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], s = i.spec.state;
        s && s.toJSON && (t[r] = s.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  /**
  Deserialize a JSON representation of a state. `config` should
  have at least a `schema` field, and should contain array of
  plugins to initialize the state with. `pluginFields` can be used
  to deserialize the state of plugins, by associating plugin
  instances with the property names they use in the JSON object.
  */
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new is(e.schema, e.plugins), s = new An(i);
    return i.fields.forEach((o) => {
      if (o.name == "doc")
        s.doc = Bt.fromJSON(e.schema, t.doc);
      else if (o.name == "selection")
        s.selection = R.fromJSON(s.doc, t.selection);
      else if (o.name == "storedMarks")
        t.storedMarks && (s.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == o.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              s[o.name] = c.fromJSON.call(a, e, t[l], s);
              return;
            }
          }
        s[o.name] = o.init(e, s);
      }
    }), s;
  }
}
function Xc(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = Xc(i, e, {})), t[r] = i;
  }
  return t;
}
class ke {
  /**
  Create a plugin.
  */
  constructor(e) {
    this.spec = e, this.props = {}, e.props && Xc(e.props, this, this.props), this.key = e.key ? e.key.key : Zc("plugin");
  }
  /**
  Extract the plugin's state field from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ss = /* @__PURE__ */ Object.create(null);
function Zc(n) {
  return n in ss ? n + "$" + ++ss[n] : (ss[n] = 0, n + "$");
}
class Je {
  /**
  Create a plugin key.
  */
  constructor(e = "key") {
    this.key = Zc(e);
  }
  /**
  Get the active plugin with this key, if any, from an editor
  state.
  */
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  /**
  Get the plugin's state from an editor state.
  */
  getState(e) {
    return e[this.key];
  }
}
const ue = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Jn = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Ls = null;
const gt = function(n, e, t) {
  let r = Ls || (Ls = document.createRange());
  return r.setEnd(n, t ?? n.nodeValue.length), r.setStart(n, e || 0), r;
}, yp = function() {
  Ls = null;
}, bn = function(n, e, t, r) {
  return t && (wl(n, e, t, r, -1) || wl(n, e, t, r, 1));
}, bp = /^(img|br|input|textarea|hr)$/i;
function wl(n, e, t, r, i) {
  for (var s; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : Ve(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || Pr(n) || bp.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = ue(n) + (i < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      let o = n.childNodes[e + (i < 0 ? -1 : 0)];
      if (o.nodeType == 1 && o.contentEditable == "false")
        if (!((s = o.pmViewDesc) === null || s === void 0) && s.ignoreForSelection)
          e += i;
        else
          return !1;
      else
        n = o, e = i < 0 ? Ve(n) : 0;
    } else
      return !1;
  }
}
function Ve(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function vp(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = Ve(n);
    } else if (n.parentNode && !Pr(n))
      e = ue(n), n = n.parentNode;
    else
      return null;
  }
}
function kp(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !Pr(n))
      e = ue(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function xp(n, e, t) {
  for (let r = e == 0, i = e == Ve(n); r || i; ) {
    if (n == t)
      return !0;
    let s = ue(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && s == 0, i = i && s == Ve(n);
  }
}
function Pr(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const zi = function(n) {
  return n.focusNode && bn(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function Gt(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function Sp(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function wp(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(Ve(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(Ve(r.startContainer), r.startOffset) };
  }
}
const ct = typeof navigator < "u" ? navigator : null, Ml = typeof document < "u" ? document : null, Jt = ct && ct.userAgent || "", Fs = /Edge\/(\d+)/.exec(Jt), eu = /MSIE \d/.exec(Jt), Vs = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Jt), Oe = !!(eu || Vs || Fs), Lt = eu ? document.documentMode : Vs ? +Vs[1] : Fs ? +Fs[1] : 0, je = !Oe && /gecko\/(\d+)/i.test(Jt);
je && +(/Firefox\/(\d+)/.exec(Jt) || [0, 0])[1];
const Hs = !Oe && /Chrome\/(\d+)/.exec(Jt), de = !!Hs, tu = Hs ? +Hs[1] : 0, ye = !Oe && !!ct && /Apple Computer/.test(ct.vendor), Un = ye && (/Mobile\/\w+/.test(Jt) || !!ct && ct.maxTouchPoints > 2), Fe = Un || (ct ? /Mac/.test(ct.platform) : !1), nu = ct ? /Win/.test(ct.platform) : !1, bt = /Android \d/.test(Jt), $r = !!Ml && "webkitFontSmoothing" in Ml.documentElement.style, Mp = $r ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function Cp(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function pt(n, e) {
  return typeof n == "number" ? n : n[e];
}
function Tp(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Cl(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, s = n.dom.ownerDocument;
  for (let o = t || n.dom; o; ) {
    if (o.nodeType != 1) {
      o = Jn(o);
      continue;
    }
    let l = o, a = l == s.body, c = a ? Cp(s) : Tp(l), u = 0, f = 0;
    if (e.top < c.top + pt(r, "top") ? f = -(c.top - e.top + pt(i, "top")) : e.bottom > c.bottom - pt(r, "bottom") && (f = e.bottom - e.top > c.bottom - c.top ? e.top + pt(i, "top") - c.top : e.bottom - c.bottom + pt(i, "bottom")), e.left < c.left + pt(r, "left") ? u = -(c.left - e.left + pt(i, "left")) : e.right > c.right - pt(r, "right") && (u = e.right - c.right + pt(i, "right")), u || f)
      if (a)
        s.defaultView.scrollBy(u, f);
      else {
        let p = l.scrollLeft, h = l.scrollTop;
        f && (l.scrollTop += f), u && (l.scrollLeft += u);
        let m = l.scrollLeft - p, g = l.scrollTop - h;
        e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g };
      }
    let d = a ? "fixed" : getComputedStyle(o).position;
    if (/^(fixed|sticky)$/.test(d))
      break;
    o = d == "absolute" ? o.offsetParent : Jn(o);
  }
}
function Ep(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let s = (e.left + e.right) / 2, o = t + 1; o < Math.min(innerHeight, e.bottom); o += 5) {
    let l = n.root.elementFromPoint(s, o);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: ru(n.dom) };
}
function ru(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Jn(r))
    ;
  return e;
}
function Op({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  iu(t, r == 0 ? 0 : r - e);
}
function iu(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: s } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != s && (r.scrollLeft = s);
  }
}
let Cn = null;
function Np(n) {
  if (n.setActive)
    return n.setActive();
  if (Cn)
    return n.focus(Cn);
  let e = ru(n);
  n.focus(Cn == null ? {
    get preventScroll() {
      return Cn = { preventScroll: !0 }, !0;
    }
  } : void 0), Cn || (Cn = !1, iu(e, 0));
}
function su(n, e) {
  let t, r = 2e8, i, s = 0, o = e.top, l = e.top, a, c;
  for (let u = n.firstChild, f = 0; u; u = u.nextSibling, f++) {
    let d;
    if (u.nodeType == 1)
      d = u.getClientRects();
    else if (u.nodeType == 3)
      d = gt(u).getClientRects();
    else
      continue;
    for (let p = 0; p < d.length; p++) {
      let h = d[p];
      if (h.top <= o && h.bottom >= l) {
        o = Math.max(h.bottom, o), l = Math.min(h.top, l);
        let m = h.left > e.left ? h.left - e.left : h.right < e.left ? e.left - h.right : 0;
        if (m < r) {
          t = u, r = m, i = m && t.nodeType == 3 ? {
            left: h.right < e.left ? h.right : h.left,
            top: e.top
          } : e, u.nodeType == 1 && m && (s = f + (e.left >= (h.left + h.right) / 2 ? 1 : 0));
          continue;
        }
      } else h.top > e.top && !a && h.left <= e.left && h.right >= e.left && (a = u, c = { left: Math.max(h.left, Math.min(h.right, e.left)), top: h.top });
      !t && (e.left >= h.right && e.top >= h.top || e.left >= h.left && e.top >= h.bottom) && (s = f + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? Ap(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: s } : su(t, i);
}
function Ap(n, e) {
  let t = n.nodeValue.length, r = document.createRange(), i;
  for (let s = 0; s < t; s++) {
    r.setEnd(n, s + 1), r.setStart(n, s);
    let o = Tt(r, 1);
    if (o.top != o.bottom && ko(e, o)) {
      i = { node: n, offset: s + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
      break;
    }
  }
  return r.detach(), i || { node: n, offset: 0 };
}
function ko(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function _p(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function Dp(n, e, t) {
  let { node: r, offset: i } = su(e, t), s = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let o = r.getBoundingClientRect();
    s = o.left != o.right && t.left > (o.left + o.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, s);
}
function Ip(n, e, t, r) {
  let i = -1;
  for (let s = e, o = !1; s != n.dom; ) {
    let l = n.docView.nearestDesc(s, !0), a;
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && // Ignore elements with zero-size bounding rectangles
    ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && !/^T(R|BODY|HEAD|FOOT)$/.test(l.dom.nodeName) && (!o && a.left > r.left || a.top > r.top ? i = l.posBefore : (!o && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), o = !0), !l.contentDOM && i < 0 && !l.node.isText))
      return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    s = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function ou(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), s = i; ; ) {
      let o = n.childNodes[s];
      if (o.nodeType == 1) {
        let l = o.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (ko(e, c))
            return ou(o, e, c);
        }
      }
      if ((s = (s + 1) % r) == i)
        break;
    }
  return n;
}
function Rp(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, s = wp(t, e.left, e.top);
  s && ({ node: r, offset: i } = s);
  let o = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!o || !n.dom.contains(o.nodeType != 1 ? o.parentNode : o)) {
    let c = n.dom.getBoundingClientRect();
    if (!ko(e, c) || (o = ou(n.dom, e, c), !o))
      return null;
  }
  if (ye)
    for (let c = o; r && c; c = Jn(c))
      c.draggable && (r = void 0);
  if (o = _p(o, e), r) {
    if (je && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let u = r.childNodes[i], f;
      u.nodeName == "IMG" && (f = u.getBoundingClientRect()).right <= e.left && f.bottom > e.top && i++;
    }
    let c;
    $r && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = Ip(n, r, i, e));
  }
  l == null && (l = Dp(n, o, e));
  let a = n.docView.nearestDesc(o, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Tl(n) {
  return n.top < n.bottom || n.left < n.right;
}
function Tt(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (Tl(r))
      return r;
  }
  return Array.prototype.find.call(t, Tl) || n.getBoundingClientRect();
}
const Pp = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function lu(n, e, t) {
  let { node: r, offset: i, atom: s } = n.docView.domFromPos(e, t < 0 ? -1 : 1), o = $r || je;
  if (r.nodeType == 3)
    if (o && (Pp.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = Tt(gt(r, i, i), t);
      if (je && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = Tt(gt(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let u = Tt(gt(r, i, i + 1), -1);
          if (u.top != a.top)
            return rr(u, u.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, u = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, u = -1) : t >= 0 && i == r.nodeValue.length ? (a--, u = 1) : t < 0 ? a-- : c++, rr(Tt(gt(r, a, c), u), u < 0);
    }
  if (!n.state.doc.resolve(e - (s || 0)).parent.inlineContent) {
    if (s == null && i && (t < 0 || i == Ve(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return ls(a.getBoundingClientRect(), !1);
    }
    if (s == null && i < Ve(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return ls(a.getBoundingClientRect(), !0);
    }
    return ls(r.getBoundingClientRect(), t >= 0);
  }
  if (s == null && i && (t < 0 || i == Ve(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? gt(a, Ve(a) - (o ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return rr(Tt(c, 1), !1);
  }
  if (s == null && i < Ve(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? gt(a, 0, o ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return rr(Tt(c, -1), !0);
  }
  return rr(Tt(r.nodeType == 3 ? gt(r) : r, -t), t >= 0);
}
function rr(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function ls(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function au(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function $p(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return au(n, e, () => {
    let { node: s } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(s, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        s = l.contentDOM || l.dom;
        break;
      }
      s = l.dom.parentNode;
    }
    let o = lu(n, i.pos, 1);
    for (let l = s.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = gt(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let u = a[c];
        if (u.bottom > u.top + 1 && (t == "up" ? o.top - u.top > (u.bottom - o.top) * 2 : u.bottom - o.bottom > (o.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const Bp = /[\u0590-\u08ac]/;
function zp(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, s = !i, o = i == r.parent.content.size, l = n.domSelection();
  return l ? !Bp.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? s : o : au(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: f } = n.domSelectionRange(), d = l.caretBidiLevel;
    l.modify("move", t, "character");
    let p = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: h, focusOffset: m } = n.domSelectionRange(), g = h && !p.contains(h.nodeType == 1 ? h : h.parentNode) || a == h && c == m;
    try {
      l.collapse(u, f), a && (a != u || c != f) && l.extend && l.extend(a, c);
    } catch {
    }
    return d != null && (l.caretBidiLevel = d), g;
  }) : r.pos == r.start() || r.pos == r.end();
}
let El = null, Ol = null, Nl = !1;
function Lp(n, e, t) {
  return El == e && Ol == t ? Nl : (El = e, Ol = t, Nl = t == "up" || t == "down" ? $p(n, e, t) : zp(n, e, t));
}
const We = 0, Al = 1, nn = 2, ut = 3;
class Br {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = We, r.pmViewDesc = this;
  }
  // Used to check whether a given description corresponds to a
  // widget/mark/node.
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  // When parsing in-editor content (in domchange.js), we allow
  // descriptions to determine the parse rules that should be used to
  // parse them.
  parseRule() {
    return null;
  }
  // Used by the editor's event handler to ignore events that come
  // from certain descs.
  stopEvent(e) {
    return !1;
  }
  // The size of the content represented by this desc.
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  // For block nodes, this represents the space taken up by their
  // start/end tokens.
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.previousSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.previousSibling;
        return s ? this.posBeforeChild(o) + o.size : this.posAtStart;
      } else {
        let s, o;
        if (e == this.contentDOM)
          s = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          s = e.nextSibling;
        }
        for (; s && !((o = s.pmViewDesc) && o.parent == this); )
          s = s.nextSibling;
        return s ? this.posBeforeChild(o) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > ue(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !1;
            break;
          }
          if (s.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let s = e; ; s = s.parentNode) {
          if (s == this.dom) {
            i = !0;
            break;
          }
          if (s.nextSibling)
            break;
        }
    }
    return i ?? r > 0 ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let s = this.getDesc(i), o;
      if (s && (!t || s.node))
        if (r && (o = s.nodeDOM) && !(o.nodeType == 1 ? o.contains(e.nodeType == 1 ? e : e.parentNode) : o == e))
          r = !1;
        else
          return s;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let s = this.getDesc(i);
      if (s)
        return s.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  // Find the desc for the node after the given pos, if any. (When a
  // parent node overrode rendering, there might not be one.)
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], s = r + i.size;
      if (r == e && s != r) {
        for (; !i.border && i.children.length; )
          for (let o = 0; o < i.children.length; o++) {
            let l = i.children[o];
            if (l.size) {
              i = l;
              break;
            }
          }
        return i;
      }
      if (e < s)
        return i.descAt(e - r - i.border);
      r = s;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let s = 0; r < this.children.length; r++) {
      let o = this.children[r], l = s + o.size;
      if (l > e || o instanceof uu) {
        i = e - s;
        break;
      }
      s = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let s; r && !(s = this.children[r - 1]).size && s instanceof cu && s.side >= 0; r--)
      ;
    if (t <= 0) {
      let s, o = !0;
      for (; s = r ? this.children[r - 1] : null, !(!s || s.dom.parentNode == this.contentDOM); r--, o = !1)
        ;
      return s && t && o && !s.border && !s.domAtom ? s.domFromPos(s.size, t) : { node: this.contentDOM, offset: s ? ue(s.dom) + 1 : 0 };
    } else {
      let s, o = !0;
      for (; s = r < this.children.length ? this.children[r] : null, !(!s || s.dom.parentNode == this.contentDOM); r++, o = !1)
        ;
      return s && o && !s.border && !s.domAtom ? s.domFromPos(0, t) : { node: this.contentDOM, offset: s ? ue(s.dom) : this.contentDOM.childNodes.length };
    }
  }
  // Used to find a DOM range in a single parent for a given changed
  // range.
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, s = -1;
    for (let o = r, l = 0; ; l++) {
      let a = this.children[l], c = o + a.size;
      if (i == -1 && e <= c) {
        let u = o + a.border;
        if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, u);
        e = o;
        for (let f = l; f > 0; f--) {
          let d = this.children[f - 1];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(1)) {
            i = ue(d.dom) + 1;
            break;
          }
          e -= d.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let u = l + 1; u < this.children.length; u++) {
          let f = this.children[u];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(-1)) {
            s = ue(f.dom);
            break;
          }
          t += f.size;
        }
        s == -1 && (s = this.contentDOM.childNodes.length);
        break;
      }
      o = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: s };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  // View descs are responsible for setting any selection that falls
  // entirely inside of them, so that custom implementations can do
  // custom things with the selection. Note that this falls apart when
  // a selection starts in such a node and ends in another, in which
  // case we just use whatever domFromPos produces as a best effort.
  setSelection(e, t, r, i = !1) {
    let s = Math.min(e, t), o = Math.max(e, t);
    for (let p = 0, h = 0; p < this.children.length; p++) {
      let m = this.children[p], g = h + m.size;
      if (s > h && o < g)
        return m.setSelection(e - h - m.border, t - h - m.border, r, i);
      h = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.root.getSelection(), u = r.domSelectionRange(), f = !1;
    if ((je || ye) && e == t) {
      let { node: p, offset: h } = l;
      if (p.nodeType == 3) {
        if (f = !!(h && p.nodeValue[h - 1] == `
`), f && h == p.nodeValue.length)
          for (let m = p, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: ue(g) + 1 });
              break;
            }
            let y = m.pmViewDesc;
            if (y && y.node && y.node.isBlock)
              break;
          }
      } else {
        let m = p.childNodes[h - 1];
        f = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (je && u.focusNode && u.focusNode != a.node && u.focusNode.nodeType == 1) {
      let p = u.focusNode.childNodes[u.focusOffset];
      p && p.contentEditable == "false" && (i = !0);
    }
    if (!(i || f && ye) && bn(l.node, l.offset, u.anchorNode, u.anchorOffset) && bn(a.node, a.offset, u.focusNode, u.focusOffset))
      return;
    let d = !1;
    if ((c.extend || e == t) && !(f && je)) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), d = !0;
      } catch {
      }
    }
    if (!d) {
      if (e > t) {
        let h = l;
        l = a, a = h;
      }
      let p = document.createRange();
      p.setEnd(a.node, a.offset), p.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(p);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  // Remove a subtree of the element tree that has been touched
  // by a DOM change, so that the next update will redraw it.
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let s = this.children[i], o = r + s.size;
      if (r == o ? e <= o && t >= r : e < o && t > r) {
        let l = r + s.border, a = o - s.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == o ? nn : Al, e == l && t == a && (s.contentLost || s.dom.parentNode != this.contentDOM) ? s.dirty = ut : s.markDirty(e - l, t - l);
          return;
        } else
          s.dirty = s.dom == s.contentDOM && s.dom.parentNode == this.contentDOM && !s.children.length ? nn : ut;
      }
      r = o;
    }
    this.dirty = nn;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? nn : Al;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  get ignoreForSelection() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class cu extends Br {
  constructor(e, t, r, i) {
    let s, o = t.type.toDOM;
    if (typeof o == "function" && (o = o(r, () => {
      if (!s)
        return i;
      if (s.parent)
        return s.parent.posBeforeChild(s);
    })), !t.type.spec.raw) {
      if (o.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(o), o = l;
      }
      o.contentEditable = "false", o.classList.add("ProseMirror-widget");
    }
    super(e, [], o, null), this.widget = t, this.widget = t, s = this;
  }
  matchesWidget(e) {
    return this.dirty == We && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get ignoreForSelection() {
    return !!this.widget.type.spec.relaxedSide;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Fp extends Br {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class vn extends Br {
  constructor(e, t, r, i, s) {
    super(e, [], r, i), this.mark = t, this.spec = s;
  }
  static create(e, t, r, i) {
    let s = i.nodeViews[t.type.name], o = s && s(t, i, r);
    return (!o || !o.dom) && (o = wn.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new vn(e, t, o.dom, o.contentDOM || o.dom, o);
  }
  parseRule() {
    return this.dirty & ut || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != ut && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != We) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = We;
    }
  }
  slice(e, t, r) {
    let i = vn.create(this.parent, this.mark, !0, r), s = this.children, o = this.size;
    t < o && (s = js(s, t, o, r)), e > 0 && (s = js(s, 0, e, r));
    for (let l = 0; l < s.length; l++)
      s[l].parent = i;
    return i.children = s, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class Ft extends Br {
  constructor(e, t, r, i, s, o, l, a, c) {
    super(e, [], s, o), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  // By default, a node is rendered using the `toDOM` method from the
  // node type spec. But client code can use the `nodeViews` spec to
  // supply a custom node view, which can influence various aspects of
  // the way the node works.
  //
  // (Using subclassing for this was intentionally decided against,
  // since it'd require exposing a whole slew of finicky
  // implementation details to the user code that they probably will
  // never need.)
  static create(e, t, r, i, s, o) {
    let l = s.nodeViews[t.type.name], a, c = l && l(t, s, () => {
      if (!a)
        return o;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), u = c && c.dom, f = c && c.contentDOM;
    if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else u || ({ dom: u, contentDOM: f } = wn.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !f && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
    let d = u;
    return u = hu(u, r, t), c ? a = new Vp(e, t, r, i, u, f || null, d, c, s, o + 1) : t.isText ? new Li(e, t, r, i, u, d, s) : new Ft(e, t, r, i, u, f || null, d, s, o + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => b.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == We && e.eq(this.node) && hi(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  // Syncs `this.children` to match `this.node.content` and the local
  // decorations, possibly introducing nesting for marks. Then, in a
  // separate step, syncs the DOM inside `this.contentDOM` to
  // `this.children`.
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, s = e.composing ? this.localCompositionInfo(e, t) : null, o = s && s.pos > -1 ? s : null, l = s && s.pos < 0, a = new qp(this, o && o.node, e);
    Kp(this.node, this.innerDeco, (c, u, f) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e, u) : c.type.side >= 0 && !f && a.syncToMarks(u == this.node.childCount ? j.none : this.node.child(u).marks, r, e, u), a.placeWidget(c, e, i);
    }, (c, u, f, d) => {
      a.syncToMarks(c.marks, r, e, d);
      let p;
      a.findNodeMatch(c, u, f, d) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (p = a.findIndexWithChild(s.node)) > -1 && a.updateNodeAt(c, u, f, p, e) || a.updateNextNode(c, u, f, e, d, i) || a.addNode(c, u, f, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e, 0), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == nn) && (o && this.protectLocalComposition(e, o), fu(this.contentDOM, this.children, e), Un && Jp(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof D) || r < t || i > t + this.node.content.size)
      return null;
    let s = e.input.compositionNode;
    if (!s || !this.dom.contains(s.parentNode))
      return null;
    if (this.node.inlineContent) {
      let o = s.nodeValue, l = Up(this.node.content, o, r - t, i - t);
      return l < 0 ? null : { node: s, pos: l, text: o };
    } else
      return { node: s, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let s = t;
    for (; s.parentNode != this.contentDOM; s = s.parentNode) {
      for (; s.previousSibling; )
        s.parentNode.removeChild(s.previousSibling);
      for (; s.nextSibling; )
        s.parentNode.removeChild(s.nextSibling);
      s.pmViewDesc && (s.pmViewDesc = void 0);
    }
    let o = new Fp(this, s, t, i);
    e.input.compositionNodes.push(o), this.children = js(this.children, r, r + i.length, e, o);
  }
  // If this desc must be updated to match the given node decoration,
  // do so and return true.
  update(e, t, r, i) {
    return this.dirty == ut || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = We;
  }
  updateOuterDeco(e) {
    if (hi(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = du(this.dom, this.nodeDOM, qs(this.outerDeco, this.node, t), qs(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  // Mark this node as being the selected node.
  selectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.nodeDOM.draggable = !0));
  }
  // Remove selected node marking from this node.
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.nodeDOM.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function _l(n, e, t, r, i) {
  hu(r, e, n);
  let s = new Ft(void 0, n, e, t, r, r, r, i, 0);
  return s.contentDOM && s.updateChildren(i, 0), s;
}
class Li extends Ft {
  constructor(e, t, r, i, s, o, l) {
    super(e, t, r, i, s, null, o, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == ut || this.dirty != We && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != We || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = We, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), s = document.createTextNode(i.text);
    return new Li(this.parent, i, this.outerDeco, this.innerDeco, s, s, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = ut);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class uu extends Br {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == We && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Vp extends Ft {
  constructor(e, t, r, i, s, o, l, a, c, u) {
    super(e, t, r, i, s, o, l, c, u), this.spec = a;
  }
  // A custom `update` method gets to decide whether the update goes
  // through. If it does, and there's a `contentDOM` node, our logic
  // updates the children.
  update(e, t, r, i) {
    if (this.dirty == ut)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let s = this.spec.update(e, t, r);
      return s && this.updateInner(e, t, r, i), s;
    } else return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function fu(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let s = 0; s < e.length; s++) {
    let o = e[s], l = o.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = Dl(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (o instanceof vn) {
      let a = r ? r.previousSibling : n.lastChild;
      fu(o.contentDOM, o.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = Dl(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const hr = function(n) {
  n && (this.nodeName = n);
};
hr.prototype = /* @__PURE__ */ Object.create(null);
const rn = [new hr()];
function qs(n, e, t) {
  if (n.length == 0)
    return rn;
  let r = t ? rn[0] : new hr(), i = [r];
  for (let s = 0; s < n.length; s++) {
    let o = n[s].type.attrs;
    if (o) {
      o.nodeName && i.push(r = new hr(o.nodeName));
      for (let l in o) {
        let a = o[l];
        a != null && (t && i.length == 1 && i.push(r = new hr(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function du(n, e, t, r) {
  if (t == rn && r == rn)
    return e;
  let i = e;
  for (let s = 0; s < r.length; s++) {
    let o = r[s], l = t[s];
    if (s) {
      let a;
      l && l.nodeName == o.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == o.nodeName || (a = document.createElement(o.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = rn[0]), i = a;
    }
    Hp(i, l || rn[0], o);
  }
  return i;
}
function Hp(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let s = 0; s < r.length; s++)
      i.indexOf(r[s]) == -1 && n.classList.remove(r[s]);
    for (let s = 0; s < i.length; s++)
      r.indexOf(i[s]) == -1 && n.classList.add(i[s]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function hu(n, e, t) {
  return du(n, n, rn, qs(e, t, n.nodeType != 1));
}
function hi(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function Dl(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class qp {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = jp(e.node.content, e);
  }
  // Destroy and remove the children between the given indices in
  // `this.top`.
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  // Destroy all remaining children in `this.top`.
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  // Sync the current stack of mark descs with the given array of
  // marks, reusing existing mark descs when possible.
  syncToMarks(e, t, r, i) {
    let s = 0, o = this.stack.length >> 1, l = Math.min(o, e.length);
    for (; s < l && (s == o - 1 ? this.top : this.stack[s + 1 << 1]).matchesMark(e[s]) && e[s].type.spec.spanning !== !1; )
      s++;
    for (; s < o; )
      this.destroyRest(), this.top.dirty = We, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let a = -1, c = this.top.children.length;
      i < this.preMatch.index && (c = Math.min(this.index + 3, c));
      for (let u = this.index; u < c; u++) {
        let f = this.top.children[u];
        if (f.matchesMark(e[o]) && !this.isLocked(f.dom)) {
          a = u;
          break;
        }
      }
      if (a > -1)
        a > this.index && (this.changed = !0, this.destroyBetween(this.index, a)), this.top = this.top.children[this.index];
      else {
        let u = vn.create(this.top, e[o], t, r);
        this.top.children.splice(this.index, 0, u), this.top = u, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  // Try to find a node desc matching the given data. Skip over it and
  // return true when successful.
  findNodeMatch(e, t, r, i) {
    let s = -1, o;
    if (i >= this.preMatch.index && (o = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && o.matchesNode(e, t, r))
      s = this.top.children.indexOf(o, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          s = l;
          break;
        }
      }
    return s < 0 ? !1 : (this.destroyBetween(this.index, s), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, s) {
    let o = this.top.children[i];
    return o.dirty == ut && o.dom == o.contentDOM && (o.dirty = nn), o.update(e, t, r, s) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  // Try to update the next node, if any, to the given data. Checks
  // pre-matches to avoid overwriting nodes that could still be used.
  updateNextNode(e, t, r, i, s, o) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof Ft) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != s)
          return !1;
        let u = a.dom, f, d = this.isLocked(u) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != ut && hi(t, a.outerDeco));
        if (!d && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != u && (this.changed = !0), this.index++, !0;
        if (!d && (f = this.recreateWrapper(a, e, t, r, i, o)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = f, f.contentDOM && (f.dirty = nn, f.updateChildren(i, o + 1), f.dirty = We), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  // When a node with content is replaced by a different node with
  // identical content, move over its children.
  recreateWrapper(e, t, r, i, s, o) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !hi(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let l = Ft.create(this.top, t, r, i, s, o);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  // Insert the node as a newly created node desc.
  addNode(e, t, r, i, s) {
    let o = Ft.create(this.top, e, t, r, i, s);
    o.contentDOM && o.updateChildren(i, s + 1), this.top.children.splice(this.index++, 0, o), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let s = new cu(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, s), this.changed = !0;
    }
  }
  // Make sure a textblock looks and behaves correctly in
  // contentEditable.
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof vn; )
      t = e, e = t.children[t.children.length - 1];
    (!e || // Empty textblock
    !(e instanceof Li) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((ye || de) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new uu(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function jp(n, e) {
  let t = e, r = t.children.length, i = n.childCount, s = /* @__PURE__ */ new Map(), o = [];
  e: for (; i > 0; ) {
    let l;
    for (; ; )
      if (r) {
        let c = t.children[r - 1];
        if (c instanceof vn)
          t = c, r = c.children.length;
        else {
          l = c, r--;
          break;
        }
      } else {
        if (t == e)
          break e;
        r = t.parent.children.indexOf(t), t = t.parent;
      }
    let a = l.node;
    if (a) {
      if (a != n.child(i - 1))
        break;
      --i, s.set(l, i), o.push(l);
    }
  }
  return { index: i, matched: s, matches: o.reverse() };
}
function Wp(n, e) {
  return n.type.side - e.type.side;
}
function Kp(n, e, t, r) {
  let i = e.locals(n), s = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let u = n.child(c);
      r(u, i, e.forChild(s, u), c), s += u.nodeSize;
    }
    return;
  }
  let o = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let u, f;
    for (; o < i.length && i[o].to == s; ) {
      let g = i[o++];
      g.widget && (u ? (f || (f = [u])).push(g) : u = g);
    }
    if (u)
      if (f) {
        f.sort(Wp);
        for (let g = 0; g < f.length; g++)
          t(f[g], c, !!a);
      } else
        t(u, c, !!a);
    let d, p;
    if (a)
      p = -1, d = a, a = null;
    else if (c < n.childCount)
      p = c, d = n.child(c++);
    else
      break;
    for (let g = 0; g < l.length; g++)
      l[g].to <= s && l.splice(g--, 1);
    for (; o < i.length && i[o].from <= s && i[o].to > s; )
      l.push(i[o++]);
    let h = s + d.nodeSize;
    if (d.isText) {
      let g = h;
      o < i.length && i[o].from < g && (g = i[o].from);
      for (let y = 0; y < l.length; y++)
        l[y].to < g && (g = l[y].to);
      g < h && (a = d.cut(g - s), d = d.cut(0, g - s), h = g, p = -1);
    } else
      for (; o < i.length && i[o].to < h; )
        o++;
    let m = d.isInline && !d.isLeaf ? l.filter((g) => !g.inline) : l.slice();
    r(d, m, e.forChild(s, d), p), s = h;
  }
}
function Jp(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function Up(n, e, t, r) {
  for (let i = 0, s = 0; i < n.childCount && s <= r; ) {
    let o = n.child(i++), l = s;
    if (s += o.nodeSize, !o.isText)
      continue;
    let a = o.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (s += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (s >= t) {
      if (s >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function js(n, e, t, r, i) {
  let s = [];
  for (let o = 0, l = 0; o < n.length; o++) {
    let a = n[o], c = l, u = l += a.size;
    c >= t || u <= e ? s.push(a) : (c < e && s.push(a.slice(0, e - c, r)), i && (s.push(i), i = void 0), u > t && s.push(a.slice(t - c, a.size, r)));
  }
  return s;
}
function xo(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), s = i && i.size == 0, o = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (o < 0)
    return null;
  let l = r.resolve(o), a, c;
  if (zi(t)) {
    for (a = o; i && !i.node; )
      i = i.parent;
    let f = i.node;
    if (i && f.isAtom && O.isSelectable(f) && i.parent && !(f.isInline && xp(t.focusNode, t.focusOffset, i.dom))) {
      let d = i.posBefore;
      c = new O(o == d ? l : r.resolve(d));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let f = o, d = o;
      for (let p = 0; p < t.rangeCount; p++) {
        let h = t.getRangeAt(p);
        f = Math.min(f, n.docView.posFromDOM(h.startContainer, h.startOffset, 1)), d = Math.max(d, n.docView.posFromDOM(h.endContainer, h.endOffset, -1));
      }
      if (f < 0)
        return null;
      [a, o] = d == n.state.selection.anchor ? [d, f] : [f, d], l = r.resolve(o);
    } else
      a = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let u = r.resolve(a);
  if (!c) {
    let f = e == "pointer" || n.state.selection.head < l.pos && !s ? 1 : -1;
    c = So(n, u, l, f);
  }
  return c;
}
function pu(n) {
  return n.editable ? n.hasFocus() : gu(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function xt(n, e = !1) {
  let t = n.state.selection;
  if (mu(n, t), !!pu(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && de) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && bn(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      Yp(n);
    else {
      let { anchor: r, head: i } = t, s, o;
      Il && !(t instanceof D) && (t.$from.parent.inlineContent || (s = Rl(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (o = Rl(n, t.to))), n.docView.setSelection(r, i, n, e), Il && (s && Pl(s), o && Pl(o)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Gp(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const Il = ye || de && tu < 63;
function Rl(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, s = r ? t.childNodes[r - 1] : null;
  if (ye && i && i.contentEditable == "false")
    return as(i);
  if ((!i || i.contentEditable == "false") && (!s || s.contentEditable == "false")) {
    if (i)
      return as(i);
    if (s)
      return as(s);
  }
}
function as(n) {
  return n.contentEditable = "true", ye && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function Pl(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Gp(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!pu(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Yp(n) {
  let e = n.domSelection();
  if (!e)
    return;
  let t = n.cursorWrapper.dom, r = t.nodeName == "IMG";
  r ? e.collapse(t.parentNode, ue(t) + 1) : e.collapse(t, 0), !r && !n.state.selection.visible && Oe && Lt <= 11 && (t.disabled = !0, t.disabled = !1);
}
function mu(n, e) {
  if (e instanceof O) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && ($l(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    $l(n);
}
function $l(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function So(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || D.between(e, t, r);
}
function Bl(n) {
  return n.editable && !n.hasFocus() ? !1 : gu(n);
}
function gu(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Qp(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return bn(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function Ws(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), s = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return s && R.findFrom(s, e);
}
function Et(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function zl(n, e, t) {
  let r = n.state.selection;
  if (r instanceof D)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!s || s.isText || !s.isLeaf)
        return !1;
      let o = n.state.doc.resolve(i.pos + s.nodeSize * (e < 0 ? -1 : 1));
      return Et(n, new D(r.$anchor, o));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = Ws(n.state, e);
        return i && i instanceof O ? Et(n, i) : !1;
      } else if (!(Fe && t.indexOf("m") > -1)) {
        let i = r.$head, s = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, o;
        if (!s || s.isText)
          return !1;
        let l = e < 0 ? i.pos - s.nodeSize : i.pos;
        return s.isAtom || (o = n.docView.descAt(l)) && !o.contentDOM ? O.isSelectable(s) ? Et(n, new O(e < 0 ? n.state.doc.resolve(i.pos - s.nodeSize) : i)) : $r ? Et(n, new D(n.state.doc.resolve(e < 0 ? l : l + s.nodeSize))) : !1 : !1;
      }
    } else return !1;
  else {
    if (r instanceof O && r.node.isInline)
      return Et(n, new D(e > 0 ? r.$to : r.$from));
    {
      let i = Ws(n.state, e);
      return i ? Et(n, i) : !1;
    }
  }
}
function pi(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function pr(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function Tn(n, e) {
  return e < 0 ? Xp(n) : Zp(n);
}
function Xp(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, s, o = !1;
  for (je && t.nodeType == 1 && r < pi(t) && pr(t.childNodes[r], -1) && (o = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (pr(l, -1))
          i = t, s = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (yu(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && pr(l, -1); )
          i = t.parentNode, s = ue(l), l = l.previousSibling;
        if (l)
          t = l, r = pi(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  o ? Ks(n, t, r) : i && Ks(n, i, s);
}
function Zp(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = pi(t), s, o;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (pr(l, 1))
        s = t, o = ++r;
      else
        break;
    } else {
      if (yu(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && pr(l, 1); )
          s = l.parentNode, o = ue(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = pi(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  s && Ks(n, s, o);
}
function yu(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function em(n, e) {
  for (; n && e == n.childNodes.length && !Pr(n); )
    e = ue(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function tm(n, e) {
  for (; n && !e && !Pr(n); )
    e = ue(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function Ks(n, e, t) {
  if (e.nodeType != 3) {
    let s, o;
    (o = em(e, t)) ? (e = o, t = 0) : (s = tm(e, t)) && (e = s, t = s.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (zi(r)) {
    let s = document.createRange();
    s.setEnd(e, t), s.setStart(e, t), r.removeAllRanges(), r.addRange(s);
  } else r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && xt(n);
  }, 50);
}
function Ll(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(de || nu) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let s = n.coordsAtPos(e - 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let s = n.coordsAtPos(e + 1), o = (s.top + s.bottom) / 2;
      if (o > i.top && o < i.bottom && Math.abs(s.left - i.left) > 1)
        return s.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function Fl(n, e, t) {
  let r = n.state.selection;
  if (r instanceof D && !r.empty || t.indexOf("s") > -1 || Fe && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: s } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let o = Ws(n.state, e);
    if (o && o instanceof O)
      return Et(n, o);
  }
  if (!i.parent.inlineContent) {
    let o = e < 0 ? i : s, l = r instanceof $e ? R.near(o, e) : R.findFrom(o, e);
    return l ? Et(n, l) : !1;
  }
  return !1;
}
function Vl(n, e) {
  if (!(n.state.selection instanceof D))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let s = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (s && !s.isText) {
    let o = n.state.tr;
    return e < 0 ? o.delete(t.pos - s.nodeSize, t.pos) : o.delete(t.pos, t.pos + s.nodeSize), n.dispatch(o), !0;
  }
  return !1;
}
function Hl(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function nm(n) {
  if (!ye || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    Hl(n, r, "true"), setTimeout(() => Hl(n, r, "false"), 20);
  }
  return !1;
}
function rm(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function im(n, e) {
  let t = e.keyCode, r = rm(e);
  if (t == 8 || Fe && t == 72 && r == "c")
    return Vl(n, -1) || Tn(n, -1);
  if (t == 46 && !e.shiftKey || Fe && t == 68 && r == "c")
    return Vl(n, 1) || Tn(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || Fe && t == 66 && r == "c") {
    let i = t == 37 ? Ll(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return zl(n, i, r) || Tn(n, i);
  } else if (t == 39 || Fe && t == 70 && r == "c") {
    let i = t == 39 ? Ll(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return zl(n, i, r) || Tn(n, i);
  } else {
    if (t == 38 || Fe && t == 80 && r == "c")
      return Fl(n, -1, r) || Tn(n, -1);
    if (t == 40 || Fe && t == 78 && r == "c")
      return nm(n) || Fl(n, 1, r) || Tn(n, 1);
    if (r == (Fe ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function wo(n, e) {
  n.someProp("transformCopied", (p) => {
    e = p(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: s } = e;
  for (; i > 1 && s > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, s--;
    let p = r.firstChild;
    t.push(p.type.name, p.attrs != p.type.defaultAttrs ? p.attrs : null), r = p.content;
  }
  let o = n.someProp("clipboardSerializer") || wn.fromSchema(n.state.schema), l = wu(), a = l.createElement("div");
  a.appendChild(o.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, f = 0;
  for (; c && c.nodeType == 1 && (u = Su[c.nodeName.toLowerCase()]); ) {
    for (let p = u.length - 1; p >= 0; p--) {
      let h = l.createElement(u[p]);
      for (; a.firstChild; )
        h.appendChild(a.firstChild);
      a.appendChild(h), f++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${s}${f ? ` -${f}` : ""} ${JSON.stringify(t)}`);
  let d = n.someProp("clipboardTextSerializer", (p) => p(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: d, slice: e };
}
function bu(n, e, t, r, i) {
  let s = i.parent.type.spec.code, o, l;
  if (!t && !e)
    return null;
  let a = !!e && (r || s || !t);
  if (a) {
    if (n.someProp("transformPastedText", (d) => {
      e = d(e, s || r, n);
    }), s)
      return l = new x(b.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0), n.someProp("transformPasted", (d) => {
        l = d(l, n, !0);
      }), l;
    let f = n.someProp("clipboardTextParser", (d) => d(e, i, r, n));
    if (f)
      l = f;
    else {
      let d = i.marks(), { schema: p } = n.state, h = wn.fromSchema(p);
      o = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = o.appendChild(document.createElement("p"));
        m && g.appendChild(h.serializeNode(p.text(m, d)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (f) => {
      t = f(t, n);
    }), o = am(t), $r && cm(o);
  let c = o && o.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let f = +u[3]; f > 0; f--) {
      let d = o.firstChild;
      for (; d && d.nodeType != 1; )
        d = d.nextSibling;
      if (!d)
        break;
      o = d;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || zt.fromSchema(n.state.schema)).parseSlice(o, {
    preserveWhitespace: !!(a || u),
    context: i,
    ruleFromNode(d) {
      return d.nodeName == "BR" && !d.nextSibling && d.parentNode && !sm.test(d.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = um(ql(l, +u[1], +u[2]), u[4]);
  else if (l = x.maxOpen(om(l.content, i), !0), l.openStart || l.openEnd) {
    let f = 0, d = 0;
    for (let p = l.content.firstChild; f < l.openStart && !p.type.spec.isolating; f++, p = p.firstChild)
      ;
    for (let p = l.content.lastChild; d < l.openEnd && !p.type.spec.isolating; d++, p = p.lastChild)
      ;
    l = ql(l, f, d);
  }
  return n.someProp("transformPasted", (f) => {
    l = f(l, n, a);
  }), l;
}
const sm = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function om(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), s, o = [];
    if (n.forEach((l) => {
      if (!o)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return o = null;
      if (c = o.length && s.length && ku(a, s, l, o[o.length - 1], 0))
        o[o.length - 1] = c;
      else {
        o.length && (o[o.length - 1] = xu(o[o.length - 1], s.length));
        let u = vu(l, a);
        o.push(u), i = i.matchType(u.type), s = a;
      }
    }), o)
      return b.from(o);
  }
  return n;
}
function vu(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, b.from(n));
  return n;
}
function ku(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let s = ku(n, e, t, r.lastChild, i + 1);
    if (s)
      return r.copy(r.content.replaceChild(r.childCount - 1, s));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(b.from(vu(t, n, i + 1))));
  }
}
function xu(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, xu(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(b.empty, !0);
  return n.copy(t.append(r));
}
function Js(n, e, t, r, i, s) {
  let o = e < 0 ? n.firstChild : n.lastChild, l = o.content;
  return n.childCount > 1 && (s = 0), i < r - 1 && (l = Js(l, e, t, r, i + 1, s)), i >= t && (l = e < 0 ? o.contentMatchAt(0).fillBefore(l, s <= i).append(l) : l.append(o.contentMatchAt(o.childCount).fillBefore(b.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, o.copy(l));
}
function ql(n, e, t) {
  return e < n.openStart && (n = new x(Js(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new x(Js(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Su = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let jl = null;
function wu() {
  return jl || (jl = document.implementation.createHTMLDocument("title"));
}
let cs = null;
function lm(n) {
  let e = window.trustedTypes;
  return e ? (cs || (cs = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (t) => t })), cs.createHTML(n)) : n;
}
function am(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = wu().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && Su[r[1].toLowerCase()]) && (n = i.map((s) => "<" + s + ">").join("") + n + i.map((s) => "</" + s + ">").reverse().join("")), t.innerHTML = lm(n), i)
    for (let s = 0; s < i.length; s++)
      t = t.querySelector(i[s]) || t;
  return t;
}
function cm(n) {
  let e = n.querySelectorAll(de ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == " " && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function um(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: s, openEnd: o } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = b.from(a.create(r[l + 1], i)), s++, o++;
  }
  return new x(i, s, o);
}
const Se = {}, we = {}, fm = { touchstart: !0, touchmove: !0 };
class dm {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.badSafariComposition = !1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function hm(n) {
  for (let e in Se) {
    let t = Se[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      mm(n, r) && !Mo(n, r) && (n.editable || !(r.type in we)) && t(n, r);
    }, fm[e] ? { passive: !0 } : void 0);
  }
  ye && n.dom.addEventListener("input", () => null), Us(n);
}
function It(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function pm(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function Us(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => Mo(n, r));
  });
}
function Mo(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function mm(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function gm(n, e) {
  !Mo(n, e) && Se[e.type] && (n.editable || !(e.type in we)) && Se[e.type](n, e);
}
we.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !Cu(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(bt && de && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), Un && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, Gt(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else n.someProp("handleKeyDown", (r) => r(n, t)) || im(n, t) ? t.preventDefault() : It(n, "key");
};
we.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
we.keypress = (n, e) => {
  let t = e;
  if (Cu(n, t) || !t.charCode || t.ctrlKey && !t.altKey || Fe && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof D) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode), s = () => n.state.tr.insertText(i).scrollIntoView();
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, i, s)) && n.dispatch(s()), t.preventDefault();
  }
};
function Fi(n) {
  return { left: n.clientX, top: n.clientY };
}
function ym(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function Co(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let s = n.state.doc.resolve(r);
  for (let o = s.depth + 1; o > 0; o--)
    if (n.someProp(e, (l) => o > s.depth ? l(n, t, s.nodeAfter, s.before(o), i, !0) : l(n, t, s.node(o), s.before(o), i, !1)))
      return !0;
  return !1;
}
function $n(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  r.setMeta("pointer", !0), n.dispatch(r);
}
function bm(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && O.isSelectable(r) ? ($n(n, new O(t)), !0) : !1;
}
function vm(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof O && (r = t.node);
  let s = n.state.doc.resolve(e);
  for (let o = s.depth + 1; o > 0; o--) {
    let l = o > s.depth ? s.nodeAfter : s.node(o);
    if (O.isSelectable(l)) {
      r && t.$from.depth > 0 && o >= t.$from.depth && s.before(t.$from.depth + 1) == t.$from.pos ? i = s.before(t.$from.depth) : i = s.before(o);
      break;
    }
  }
  return i != null ? ($n(n, O.create(n.state.doc, i)), !0) : !1;
}
function km(n, e, t, r, i) {
  return Co(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (s) => s(n, e, r)) || (i ? vm(n, t) : bm(n, t));
}
function xm(n, e, t, r) {
  return Co(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function Sm(n, e, t, r) {
  return Co(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || wm(n, t, r);
}
function wm(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? ($n(n, D.create(r, 0, r.content.size)), !0) : !1;
  let i = r.resolve(e);
  for (let s = i.depth + 1; s > 0; s--) {
    let o = s > i.depth ? i.nodeAfter : i.node(s), l = i.before(s);
    if (o.inlineContent)
      $n(n, D.create(r, l + 1, l + 1 + o.content.size));
    else if (O.isSelectable(o))
      $n(n, O.create(r, l));
    else
      continue;
    return !0;
  }
}
function To(n) {
  return mi(n);
}
const Mu = Fe ? "metaKey" : "ctrlKey";
Se.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = To(n), i = Date.now(), s = "singleClick";
  i - n.input.lastClick.time < 500 && ym(t, n.input.lastClick) && !t[Mu] && n.input.lastClick.button == t.button && (n.input.lastClick.type == "singleClick" ? s = "doubleClick" : n.input.lastClick.type == "doubleClick" && (s = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: s, button: t.button };
  let o = n.posAtCoords(Fi(t));
  o && (s == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new Mm(n, o, t, !!r)) : (s == "doubleClick" ? xm : Sm)(n, o.pos, o.inside, t) ? t.preventDefault() : It(n, "pointer"));
};
class Mm {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Mu], this.allowDefault = r.shiftKey;
    let s, o;
    if (t.inside > -1)
      s = e.state.doc.nodeAt(t.inside), o = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      s = u.parent, o = u.depth ? u.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.nodeDOM.nodeType == 1 ? a.nodeDOM : null;
    let { selection: c } = e.state;
    (r.button == 0 && s.type.spec.draggable && s.type.spec.selectable !== !1 || c instanceof O && c.from <= o && c.to > o) && (this.mightDrag = {
      node: s,
      pos: o,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && je && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), It(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => xt(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(Fi(e))), this.updateAllowDefault(e), this.allowDefault || !t ? It(this.view, "pointer") : km(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || // Safari ignores clicks on draggable elements
    ye && this.mightDrag && !this.mightDrag.node.isAtom || // Chrome will sometimes treat a node selection as a
    // cursor, but still report that the node is selected
    // when asked through getSelection. You'll then get a
    // situation where clicking at the point where that
    // (hidden) cursor is doesn't change the selection, and
    // thus doesn't get a reaction from ProseMirror. This
    // works around that.
    de && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? ($n(this.view, R.near(this.view.state.doc.resolve(t.pos))), e.preventDefault()) : It(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), It(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
Se.touchstart = (n) => {
  n.input.lastTouch = Date.now(), To(n), It(n, "pointer");
};
Se.touchmove = (n) => {
  n.input.lastTouch = Date.now(), It(n, "pointer");
};
Se.contextmenu = (n) => To(n);
function Cu(n, e) {
  return n.composing ? !0 : ye && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const Cm = bt ? 5e3 : -1;
we.compositionstart = we.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof D && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1) || de && nu && Tm(n)))
      n.markCursor = n.state.storedMarks || t.marks(), mi(n, !0), n.markCursor = null;
    else if (mi(n, !e.selection.empty), je && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, s = r.focusOffset; i && i.nodeType == 1 && s != 0; ) {
        let o = s < 0 ? i.lastChild : i.childNodes[s - 1];
        if (!o)
          break;
        if (o.nodeType == 3) {
          let l = n.domSelection();
          l && l.collapse(o, o.nodeValue.length);
          break;
        } else
          i = o, s = -1;
      }
    }
    n.input.composing = !0;
  }
  Tu(n, Cm);
};
function Tm(n) {
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (!e || e.nodeType != 1 || t >= e.childNodes.length)
    return !1;
  let r = e.childNodes[t];
  return r.nodeType == 1 && r.contentEditable == "false";
}
we.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.badSafariComposition ? n.domObserver.forceFlush() : n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, Tu(n, 20));
};
function Tu(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => mi(n), e));
}
function Eu(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = Om()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function Em(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = vp(e.focusNode, e.focusOffset), r = kp(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, s = n.domObserver.lastChangedTextNode;
    if (t == s || r == s)
      return s;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let o = t.pmViewDesc;
      if (!(!o || !o.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function Om() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function mi(n, e = !1) {
  if (!(bt && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Eu(n), e || n.docView && n.docView.dirty) {
      let t = xo(n), r = n.state.selection;
      return t && !t.eq(r) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function Nm(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const xr = Oe && Lt < 15 || Un && Mp < 604;
Se.copy = we.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let s = xr ? null : t.clipboardData, o = r.content(), { dom: l, text: a } = wo(n, o);
  s ? (t.preventDefault(), s.clearData(), s.setData("text/html", l.innerHTML), s.setData("text/plain", a)) : Nm(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Am(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function _m(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? Sr(n, r.value, null, i, e) : Sr(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Sr(n, e, t, r, i) {
  let s = bu(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, s || x.empty)))
    return !0;
  if (!s)
    return !1;
  let o = Am(s), l = o ? n.state.tr.replaceSelectionWith(o, r) : n.state.tr.replaceSelection(s);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Ou(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
we.paste = (n, e) => {
  let t = e;
  if (n.composing && !bt)
    return;
  let r = xr ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && Sr(n, Ou(r), r.getData("text/html"), i, t) ? t.preventDefault() : _m(n, t);
};
class Nu {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const Dm = Fe ? "altKey" : "ctrlKey";
function Au(n, e) {
  let t = n.someProp("dragCopies", (r) => !r(e));
  return t ?? !e[Dm];
}
Se.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, s = i.empty ? null : n.posAtCoords(Fi(t)), o;
  if (!(s && s.pos >= i.from && s.pos <= (i instanceof O ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      o = O.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let f = n.docView.nearestDesc(t.target, !0);
      f && f.node.type.spec.draggable && f != n.docView && (o = O.create(n.state.doc, f.posBefore));
    }
  }
  let l = (o || n.state.selection).content(), { dom: a, text: c, slice: u } = wo(n, l);
  (!t.dataTransfer.files.length || !de || tu > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(xr ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", xr || t.dataTransfer.setData("text/plain", c), n.dragging = new Nu(u, Au(n, t), o);
};
Se.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
we.dragover = we.dragenter = (n, e) => e.preventDefault();
we.drop = (n, e) => {
  try {
    Im(n, e, n.dragging);
  } finally {
    n.dragging = null;
  }
};
function Im(n, e, t) {
  if (!e.dataTransfer)
    return;
  let r = n.posAtCoords(Fi(e));
  if (!r)
    return;
  let i = n.state.doc.resolve(r.pos), s = t && t.slice;
  s ? n.someProp("transformPasted", (p) => {
    s = p(s, n, !1);
  }) : s = bu(n, Ou(e.dataTransfer), xr ? null : e.dataTransfer.getData("text/html"), !1, i);
  let o = !!(t && Au(n, e));
  if (n.someProp("handleDrop", (p) => p(n, e, s || x.empty, o))) {
    e.preventDefault();
    return;
  }
  if (!s)
    return;
  e.preventDefault();
  let l = s ? Jc(n.state.doc, i.pos, s) : i.pos;
  l == null && (l = i.pos);
  let a = n.state.tr;
  if (o) {
    let { node: p } = t;
    p ? p.replace(a) : a.deleteSelection();
  }
  let c = a.mapping.map(l), u = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, f = a.doc;
  if (u ? a.replaceRangeWith(c, c, s.content.firstChild) : a.replaceRange(c, c, s), a.doc.eq(f))
    return;
  let d = a.doc.resolve(c);
  if (u && O.isSelectable(s.content.firstChild) && d.nodeAfter && d.nodeAfter.sameMarkup(s.content.firstChild))
    a.setSelection(new O(d));
  else {
    let p = a.mapping.map(l);
    a.mapping.maps[a.mapping.maps.length - 1].forEach((h, m, g, y) => p = y), a.setSelection(So(n, d, a.doc.resolve(p)));
  }
  n.focus(), n.dispatch(a.setMeta("uiEvent", "drop"));
}
Se.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && xt(n);
  }, 20));
};
Se.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
Se.beforeinput = (n, e) => {
  if (de && bt && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (s) => s(n, Gt(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in we)
  Se[n] = we[n];
function wr(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class gi {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || un, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: s, deleted: o } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return o ? null : new Pe(s - r, s - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof gi && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && wr(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class Vt {
  constructor(e, t) {
    this.attrs = e, this.spec = t || un;
  }
  map(e, t, r, i) {
    let s = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, o = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return s >= o ? null : new Pe(s, o, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof Vt && wr(this.attrs, e.attrs) && wr(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof Vt;
  }
  destroy() {
  }
}
class Eo {
  constructor(e, t) {
    this.attrs = e, this.spec = t || un;
  }
  map(e, t, r, i) {
    let s = e.mapResult(t.from + i, 1);
    if (s.deleted)
      return null;
    let o = e.mapResult(t.to + i, -1);
    return o.deleted || o.pos <= s.pos ? null : new Pe(s.pos - r, o.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), s;
    return i == t.from && !(s = e.child(r)).isText && i + s.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Eo && wr(this.attrs, e.attrs) && wr(this.spec, e.spec);
  }
  destroy() {
  }
}
class Pe {
  /**
  @internal
  */
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  /**
  @internal
  */
  copy(e, t) {
    return new Pe(e, t, this.type);
  }
  /**
  @internal
  */
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  /**
  @internal
  */
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  /**
  Creates a widget decoration, which is a DOM node that's shown in
  the document at the given position. It is recommended that you
  delay rendering the widget by passing a function that will be
  called when the widget is actually drawn in a view, but you can
  also directly pass a DOM node. `getPos` can be used to find the
  widget's current document position.
  */
  static widget(e, t, r) {
    return new Pe(e, e, new gi(t, r));
  }
  /**
  Creates an inline decoration, which adds the given attributes to
  each inline node between `from` and `to`.
  */
  static inline(e, t, r, i) {
    return new Pe(e, t, new Vt(r, i));
  }
  /**
  Creates a node decoration. `from` and `to` should point precisely
  before and after a node in the document. That node, and only that
  node, will receive the given attributes.
  */
  static node(e, t, r, i) {
    return new Pe(e, t, new Eo(r, i));
  }
  /**
  The spec provided when creating this decoration. Can be useful
  if you've stored extra information in that object.
  */
  get spec() {
    return this.type.spec;
  }
  /**
  @internal
  */
  get inline() {
    return this.type instanceof Vt;
  }
  /**
  @internal
  */
  get widget() {
    return this.type instanceof gi;
  }
}
const On = [], un = {};
class Q {
  /**
  @internal
  */
  constructor(e, t) {
    this.local = e.length ? e : On, this.children = t.length ? t : On;
  }
  /**
  Create a set of decorations, using the structure of the given
  document. This will consume (modify) the `decorations` array, so
  you must make a copy if you want need to preserve that.
  */
  static create(e, t) {
    return t.length ? yi(t, e, 0, un) : ge;
  }
  /**
  Find all decorations in this set which touch the given range
  (including decorations that start or end directly at the
  boundaries) and match the given predicate on their spec. When
  `start` and `end` are omitted, all decorations in the set are
  considered. When `predicate` isn't given, all decorations are
  assumed to match.
  */
  find(e, t, r) {
    let i = [];
    return this.findInner(e ?? 0, t ?? 1e9, i, 0, r), i;
  }
  findInner(e, t, r, i, s) {
    for (let o = 0; o < this.local.length; o++) {
      let l = this.local[o];
      l.from <= t && l.to >= e && (!s || s(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let o = 0; o < this.children.length; o += 3)
      if (this.children[o] < t && this.children[o + 1] > e) {
        let l = this.children[o] + 1;
        this.children[o + 2].findInner(e - l, t - l, r, i + l, s);
      }
  }
  /**
  Map the set of decorations in response to a change in the
  document.
  */
  map(e, t, r) {
    return this == ge || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || un);
  }
  /**
  @internal
  */
  mapInner(e, t, r, i, s) {
    let o;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (o || (o = [])).push(a) : s.onRemove && s.onRemove(this.local[l].spec);
    }
    return this.children.length ? Rm(this.children, o || [], e, t, r, i, s) : o ? new Q(o.sort(fn), On) : ge;
  }
  /**
  Add the given array of decorations to the ones in the set,
  producing a new set. Consumes the `decorations` array. Needs
  access to the current document to create the appropriate tree
  structure.
  */
  add(e, t) {
    return t.length ? this == ge ? Q.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, s = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (u = Du(t, l, c)) {
        for (i || (i = this.children.slice()); s < i.length && i[s] < a; )
          s += 3;
        i[s] == a ? i[s + 2] = i[s + 2].addInner(l, u, c + 1) : i.splice(s, 0, a, a + l.nodeSize, yi(u, l, c + 1, un)), s += 3;
      }
    });
    let o = _u(s ? Iu(t) : t, -r);
    for (let l = 0; l < o.length; l++)
      o[l].type.valid(e, o[l]) || o.splice(l--, 1);
    return new Q(o.length ? this.local.concat(o).sort(fn) : this.local, i || this.children);
  }
  /**
  Create a new set that contains the decorations in this set, minus
  the ones in the given array.
  */
  remove(e) {
    return e.length == 0 || this == ge ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let s = 0; s < r.length; s += 3) {
      let o, l = r[s] + t, a = r[s + 1] + t;
      for (let u = 0, f; u < e.length; u++)
        (f = e[u]) && f.from > l && f.to < a && (e[u] = null, (o || (o = [])).push(f));
      if (!o)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[s + 2].removeInner(o, l + 1);
      c != ge ? r[s + 2] = c : (r.splice(s, 3), s -= 3);
    }
    if (i.length) {
      for (let s = 0, o; s < e.length; s++)
        if (o = e[s])
          for (let l = 0; l < i.length; l++)
            i[l].eq(o, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new Q(i, r) : ge;
  }
  forChild(e, t) {
    if (this == ge)
      return this;
    if (t.isLeaf)
      return Q.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let s = e + 1, o = s + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < o && a.to > s && a.type instanceof Vt) {
        let c = Math.max(s, a.from) - s, u = Math.min(o, a.to) - s;
        c < u && (i || (i = [])).push(a.copy(c, u));
      }
    }
    if (i) {
      let l = new Q(i.sort(fn), On);
      return r ? new Nt([l, r]) : l;
    }
    return r || ge;
  }
  /**
  @internal
  */
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof Q) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  /**
  @internal
  */
  locals(e) {
    return Oo(this.localsInner(e));
  }
  /**
  @internal
  */
  localsInner(e) {
    if (this == ge)
      return On;
    if (e.inlineContent || !this.local.some(Vt.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof Vt || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
Q.empty = new Q([], []);
Q.removeOverlap = Oo;
const ge = Q.empty;
class Nt {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, un));
    return Nt.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return Q.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].forChild(e, t);
      s != ge && (s instanceof Nt ? r = r.concat(s.members) : r.push(s));
    }
    return Nt.from(r);
  }
  eq(e) {
    if (!(e instanceof Nt) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let s = this.members[i].localsInner(e);
      if (s.length)
        if (!t)
          t = s;
        else {
          r && (t = t.slice(), r = !1);
          for (let o = 0; o < s.length; o++)
            t.push(s[o]);
        }
    }
    return t ? Oo(r ? t : t.sort(fn)) : On;
  }
  // Create a group for the given array of decoration sets, or return
  // a single set when possible.
  static from(e) {
    switch (e.length) {
      case 0:
        return ge;
      case 1:
        return e[0];
      default:
        return new Nt(e.every((t) => t instanceof Q) ? e : e.reduce((t, r) => t.concat(r instanceof Q ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function Rm(n, e, t, r, i, s, o) {
  let l = n.slice();
  for (let c = 0, u = s; c < t.maps.length; c++) {
    let f = 0;
    t.maps[c].forEach((d, p, h, m) => {
      let g = m - h - (p - d);
      for (let y = 0; y < l.length; y += 3) {
        let k = l[y + 1];
        if (k < 0 || d > k + u - f)
          continue;
        let S = l[y] + u - f;
        p >= S ? l[y + 1] = d <= S ? -2 : -1 : d >= u && g && (l[y] += g, l[y + 1] += g);
      }
      f += g;
    }), u = t.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + s), f = u - i;
      if (f < 0 || f >= r.content.size) {
        a = !0;
        continue;
      }
      let d = t.map(n[c + 1] + s, -1), p = d - i, { index: h, offset: m } = r.content.findIndex(f), g = r.maybeChild(h);
      if (g && m == f && m + g.nodeSize == p) {
        let y = l[c + 2].mapInner(t, g, u + 1, n[c] + s + 1, o);
        y != ge ? (l[c] = f, l[c + 1] = p, l[c + 2] = y) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = Pm(l, n, e, t, i, s, o), u = yi(c, r, 0, o);
    e = u.local;
    for (let f = 0; f < l.length; f += 3)
      l[f + 1] < 0 && (l.splice(f, 3), f -= 3);
    for (let f = 0, d = 0; f < u.children.length; f += 3) {
      let p = u.children[f];
      for (; d < l.length && l[d] < p; )
        d += 3;
      l.splice(d, 0, u.children[f], u.children[f + 1], u.children[f + 2]);
    }
  }
  return new Q(e.sort(fn), l);
}
function _u(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new Pe(i.from + e, i.to + e, i.type));
  }
  return t;
}
function Pm(n, e, t, r, i, s, o) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let f = a.local[u].map(r, i, c);
      f ? t.push(f) : o.onRemove && o.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + s + 1);
  return t;
}
function Du(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let s = 0, o; s < n.length; s++)
    (o = n[s]) && o.from > t && o.to < r && ((i || (i = [])).push(o), n[s] = null);
  return i;
}
function Iu(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function yi(n, e, t, r) {
  let i = [], s = !1;
  e.forEach((l, a) => {
    let c = Du(n, l, a + t);
    if (c) {
      s = !0;
      let u = yi(c, l, t + a + 1, r);
      u != ge && i.push(a, a + l.nodeSize, u);
    }
  });
  let o = _u(s ? Iu(n) : n, -t).sort(fn);
  for (let l = 0; l < o.length; l++)
    o[l].type.valid(e, o[l]) || (r.onRemove && r.onRemove(o[l].spec), o.splice(l--, 1));
  return o.length || i.length ? new Q(o, i) : ge;
}
function fn(n, e) {
  return n.from - e.from || n.to - e.to;
}
function Oo(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let s = e[i];
        if (s.from == r.from) {
          s.to != r.to && (e == n && (e = n.slice()), e[i] = s.copy(s.from, r.to), Wl(e, i + 1, s.copy(r.to, s.to)));
          continue;
        } else {
          s.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, s.from), Wl(e, i, r.copy(s.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function Wl(n, e, t) {
  for (; e < n.length && fn(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function us(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != ge && e.push(r);
  }), n.cursorWrapper && e.push(Q.create(n.state.doc, [n.cursorWrapper.deco])), Nt.from(e);
}
const $m = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, Bm = Oe && Lt <= 11;
class zm {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class Lm {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new zm(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      Oe && Lt <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : ye && e.composing && r.some((i) => i.type == "childList" && i.target.nodeName == "TR") ? (e.input.badSafariComposition = !0, this.flushSoon()) : this.flush();
    }), Bm && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, $m)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (Bl(this.view)) {
      if (this.suppressingSelectionUpdates)
        return xt(this.view);
      if (Oe && Lt <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && bn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let s = e.focusNode; s; s = Jn(s))
      t.add(s);
    for (let s = e.anchorNode; s; s = Jn(s))
      if (t.has(s)) {
        r = s;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && Bl(e) && !this.ignoreSelectionChange(r), s = -1, o = -1, l = !1, a = [];
    if (e.editable)
      for (let u = 0; u < t.length; u++) {
        let f = this.registerMutation(t[u], a);
        f && (s = s < 0 ? f.from : Math.min(f.from, s), o = o < 0 ? f.to : Math.max(f.to, o), f.typeOver && (l = !0));
      }
    if (a.some((u) => u.nodeName == "BR") && (e.input.lastKeyCode == 8 || e.input.lastKeyCode == 46)) {
      for (let u of a)
        if (u.nodeName == "BR" && u.parentNode) {
          let f = u.nextSibling;
          f && f.nodeType == 1 && f.contentEditable == "false" && u.parentNode.removeChild(u);
        }
    } else if (je && a.length) {
      let u = a.filter((f) => f.nodeName == "BR");
      if (u.length == 2) {
        let [f, d] = u;
        f.parentNode && f.parentNode.parentNode == d.parentNode ? d.remove() : f.remove();
      } else {
        let { focusNode: f } = this.currentSelection;
        for (let d of u) {
          let p = d.parentNode;
          p && p.nodeName == "LI" && (!f || Hm(e, f) != p) && d.remove();
        }
      }
    }
    let c = null;
    s < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && zi(r) && (c = xo(e)) && c.eq(R.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, xt(e), this.currentSelection.set(r), e.scrollToSelection()) : (s > -1 || i) && (s > -1 && (e.docView.markDirty(s, o), Fm(e)), e.input.badSafariComposition && (e.input.badSafariComposition = !1, qm(e, a)), this.handleDOMChange(s, o, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || xt(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || // Firefox sometimes fires spurious events for null/empty styles
    e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++) {
        let f = e.addedNodes[u];
        t.push(f), f.nodeType == 3 && (this.lastChangedTextNode = f);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, s = e.nextSibling;
      if (Oe && Lt <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: f, nextSibling: d } = e.addedNodes[u];
          (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (i = f), (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (s = d);
        }
      let o = i && i.parentNode == e.target ? ue(i) + 1 : 0, l = r.localPosFromDOM(e.target, o, -1), a = s && s.parentNode == e.target ? ue(s) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
      from: r.posAtStart,
      to: r.posAtEnd,
      // An event was generated for a text change that didn't change
      // any text. Mark the dom change to fall back to assuming the
      // selection was typed over with an identical value if it can't
      // find another change.
      typeOver: e.target.nodeValue == e.oldValue
    });
  }
}
let Kl = /* @__PURE__ */ new WeakMap(), Jl = !1;
function Fm(n) {
  if (!Kl.has(n) && (Kl.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = je, Jl)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), Jl = !0;
  }
}
function Ul(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, s = e.endOffset, o = n.domAtPos(n.state.selection.anchor);
  return bn(o.node, o.offset, i, s) && ([t, r, i, s] = [i, s, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: s };
}
function Vm(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return Ul(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? Ul(n, t) : null;
}
function Hm(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function qm(n, e) {
  var t;
  let { focusNode: r, focusOffset: i } = n.domSelectionRange();
  for (let s of e)
    if (((t = s.parentNode) === null || t === void 0 ? void 0 : t.nodeName) == "TR") {
      let o = s.nextSibling;
      for (; o && o.nodeName != "TD" && o.nodeName != "TH"; )
        o = o.nextSibling;
      if (o) {
        let l = o;
        for (; ; ) {
          let a = l.firstChild;
          if (!a || a.nodeType != 1 || a.contentEditable == "false" || /^(BR|IMG)$/.test(a.nodeName))
            break;
          l = a;
        }
        l.insertBefore(s, l.firstChild), r == s && n.domSelection().collapse(s, i);
      } else
        s.parentNode.removeChild(s);
    }
}
function jm(n, e, t) {
  let { node: r, fromOffset: i, toOffset: s, from: o, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, u = a.anchorNode;
  if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: a.anchorOffset }], zi(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), de && n.input.lastKeyCode === 8)
    for (let g = s; g > i; g--) {
      let y = r.childNodes[g - 1], k = y.pmViewDesc;
      if (y.nodeName == "BR" && !k) {
        s = g;
        break;
      }
      if (!k || k.size)
        break;
    }
  let f = n.state.doc, d = n.someProp("domParser") || zt.fromSchema(n.state.schema), p = f.resolve(o), h = null, m = d.parse(r, {
    topNode: p.parent,
    topMatch: p.parent.contentMatchAt(p.index()),
    topOpen: !0,
    from: i,
    to: s,
    preserveWhitespace: p.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: Wm,
    context: p
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, y = c[1] && c[1].pos;
    y == null && (y = g), h = { anchor: g + o, head: y + o };
  }
  return { doc: m, sel: h, from: o, to: l };
}
function Wm(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (ye && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || ye && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Km = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|img|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function Jm(n, e, t, r, i) {
  let s = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let v = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, T = xo(n, v);
    if (T && !n.state.selection.eq(T)) {
      if (de && bt && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (_) => _(n, Gt(13, "Enter"))))
        return;
      let w = n.state.tr.setSelection(T);
      v == "pointer" ? w.setMeta("pointer", !0) : v == "key" && w.scrollIntoView(), s && w.setMeta("composition", s), n.dispatch(w);
    }
    return;
  }
  let o = n.state.doc.resolve(e), l = o.sharedDepth(t);
  e = o.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = jm(n, e, t), u = n.state.doc, f = u.slice(c.from, c.to), d, p;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (d = n.state.selection.to, p = "end") : (d = n.state.selection.from, p = "start"), n.input.lastKeyCode = null;
  let h = Ym(f.content, c.doc.content, c.from, d, p);
  if (h && n.input.domChangeCount++, (Un && n.input.lastIOSEnter > Date.now() - 225 || bt) && i.some((v) => v.nodeType == 1 && !Km.test(v.nodeName)) && (!h || h.endA >= h.endB) && n.someProp("handleKeyDown", (v) => v(n, Gt(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!h)
    if (r && a instanceof D && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      h = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let v = Gl(n, n.state.doc, c.sel);
        if (v && !v.eq(n.state.selection)) {
          let T = n.state.tr.setSelection(v);
          s && T.setMeta("composition", s), n.dispatch(T);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && h.start == h.endB && n.state.selection instanceof D && (h.start > n.state.selection.from && h.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? h.start = n.state.selection.from : h.endA < n.state.selection.to && h.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (h.endB += n.state.selection.to - h.endA, h.endA = n.state.selection.to)), Oe && Lt <= 11 && h.endB == h.start + 1 && h.endA == h.start && h.start > c.from && c.doc.textBetween(h.start - c.from - 1, h.start - c.from + 1) == "  " && (h.start--, h.endA--, h.endB--);
  let m = c.doc.resolveNoCache(h.start - c.from), g = c.doc.resolveNoCache(h.endB - c.from), y = u.resolve(h.start), k = m.sameParent(g) && m.parent.inlineContent && y.end() >= h.endA;
  if ((Un && n.input.lastIOSEnter > Date.now() - 225 && (!k || i.some((v) => v.nodeName == "DIV" || v.nodeName == "P")) || !k && m.pos < c.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && m.pos < g.pos && !/\S/.test(c.doc.textBetween(m.pos, g.pos, "", ""))) && n.someProp("handleKeyDown", (v) => v(n, Gt(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > h.start && Gm(u, h.start, h.endA, m, g) && n.someProp("handleKeyDown", (v) => v(n, Gt(8, "Backspace")))) {
    bt && de && n.domObserver.suppressSelectionUpdates();
    return;
  }
  de && h.endB == h.start && (n.input.lastChromeDelete = Date.now()), bt && !k && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == h.endA && (h.endB -= 2, g = c.doc.resolveNoCache(h.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(v) {
      return v(n, Gt(13, "Enter"));
    });
  }, 20));
  let S = h.start, M = h.endA, A = (v) => {
    let T = v || n.state.tr.replace(S, M, c.doc.slice(h.start - c.from, h.endB - c.from));
    if (c.sel) {
      let w = Gl(n, T.doc, c.sel);
      w && !(de && n.composing && w.empty && (h.start != h.endB || n.input.lastChromeDelete < Date.now() - 100) && (w.head == S || w.head == T.mapping.map(M) - 1) || Oe && w.empty && w.head == S) && T.setSelection(w);
    }
    return s && T.setMeta("composition", s), T.scrollIntoView();
  }, E;
  if (k)
    if (m.pos == g.pos) {
      Oe && Lt <= 11 && m.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => xt(n), 20));
      let v = A(n.state.tr.delete(S, M)), T = u.resolve(h.start).marksAcross(u.resolve(h.endA));
      T && v.ensureMarks(T), n.dispatch(v);
    } else if (
      // Adding or removing a mark
      h.endA == h.endB && (E = Um(m.parent.content.cut(m.parentOffset, g.parentOffset), y.parent.content.cut(y.parentOffset, h.endA - y.start())))
    ) {
      let v = A(n.state.tr);
      E.type == "add" ? v.addMark(S, M, E.mark) : v.removeMark(S, M, E.mark), n.dispatch(v);
    } else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let v = m.parent.textBetween(m.parentOffset, g.parentOffset), T = () => A(n.state.tr.insertText(v, S, M));
      n.someProp("handleTextInput", (w) => w(n, S, M, v, T)) || n.dispatch(T());
    } else
      n.dispatch(A());
  else
    n.dispatch(A());
}
function Gl(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : So(n, e.resolve(t.anchor), e.resolve(t.head));
}
function Um(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, s = r, o, l, a;
  for (let u = 0; u < r.length; u++)
    i = r[u].removeFromSet(i);
  for (let u = 0; u < t.length; u++)
    s = t[u].removeFromSet(s);
  if (i.length == 1 && s.length == 0)
    l = i[0], o = "add", a = (u) => u.mark(l.addToSet(u.marks));
  else if (i.length == 0 && s.length == 1)
    l = s[0], o = "remove", a = (u) => u.mark(l.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(a(e.child(u)));
  if (b.from(c).eq(n))
    return { mark: l, type: o };
}
function Gm(n, e, t, r, i) {
  if (
    // The content must have shrunk
    t - e <= i.pos - r.pos || // newEnd must point directly at or after the end of the block that newStart points into
    fs(r, !0, !1) < i.pos
  )
    return !1;
  let s = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = s.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (s.parentOffset < s.parent.content.size || !s.parent.isTextblock)
    return !1;
  let o = n.resolve(fs(s, !0, !0));
  return !o.parent.isTextblock || o.pos > t || fs(o, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(o.parent.content);
}
function fs(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let s = n.node(r).maybeChild(n.indexAfter(r));
    for (; s && !s.isLeaf; )
      s = s.firstChild, i++;
  }
  return i;
}
function Ym(n, e, t, r, i) {
  let s = n.findDiffStart(e, t);
  if (s == null)
    return null;
  let { a: o, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, s - Math.min(o, l));
    r -= o + a - s;
  }
  if (o < s && n.size < e.size) {
    let a = r <= s && r >= o ? s - r : 0;
    s -= a, s && s < e.size && Yl(e.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), l = s + (l - o), o = s;
  } else if (l < s) {
    let a = r <= s && r >= l ? s - r : 0;
    s -= a, s && s < n.size && Yl(n.textBetween(s - 1, s + 1)) && (s += a ? 1 : -1), o = s + (o - l), l = s;
  }
  return { start: s, endA: o, endB: l };
}
function Yl(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class Ru {
  /**
  Create a view. `place` may be a DOM node that the editor should
  be appended to, a function that will place it into the document,
  or an object whose `mount` property holds the node to use as the
  document container. If it is `null`, the editor will not be
  added to the document.
  */
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new dm(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(ta), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Zl(this), Xl(this), this.nodeViews = ea(this), this.docView = _l(this.state.doc, Ql(this), us(this), this.dom, this), this.domObserver = new Lm(this, (r, i, s, o) => Jm(this, r, i, s, o)), this.domObserver.start(), hm(this), this.updatePluginViews();
  }
  /**
  Holds `true` when a
  [composition](https://w3c.github.io/uievents/#events-compositionevents)
  is active.
  */
  get composing() {
    return this.input.composing;
  }
  /**
  The view's current [props](https://prosemirror.net/docs/ref/#view.EditorProps).
  */
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  /**
  Update the view's props. Will immediately cause an update to
  the DOM.
  */
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && Us(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(ta), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  /**
  Update the view by updating existing props object with the object
  given as argument. Equivalent to `view.update(Object.assign({},
  view.props, props))`.
  */
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  /**
  Update the editor's `state` prop, without touching any of the
  other props.
  */
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, s = !1, o = !1;
    e.storedMarks && this.composing && (Eu(this), o = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let p = ea(this);
      Xm(p, this.nodeViews) && (this.nodeViews = p, s = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && Us(this), this.editable = Zl(this), Xl(this);
    let a = us(this), c = Ql(this), u = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", f = s || !this.docView.matchesNode(e.doc, c, a);
    (f || !e.selection.eq(i.selection)) && (o = !0);
    let d = u == "preserve" && o && this.dom.style.overflowAnchor == null && Ep(this);
    if (o) {
      this.domObserver.stop();
      let p = f && (Oe || de) && !this.composing && !i.selection.empty && !e.selection.empty && Qm(i.selection, e.selection);
      if (f) {
        let h = de ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = Em(this)), (s || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = _l(e.doc, c, a, this.dom, this)), h && (!this.trackWrites || !this.dom.contains(this.trackWrites)) && (p = !0);
      }
      p || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Qp(this)) ? xt(this, p) : (mu(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), !((r = this.dragging) === null || r === void 0) && r.node && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), u == "reset" ? this.dom.scrollTop = 0 : u == "to selection" ? this.scrollToSelection() : d && Op(d);
  }
  /**
  @internal
  */
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (t) => t(this))) if (this.state.selection instanceof O) {
        let t = this.docView.domAfterPos(this.state.selection.from);
        t.nodeType == 1 && Cl(this, t.getBoundingClientRect(), e);
      } else
        Cl(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let s = r.from + (this.state.doc.content.size - t.doc.content.size);
      (s > 0 && this.state.doc.nodeAt(s)) == r.node && (i = s);
    }
    this.dragging = new Nu(e.slice, e.move, i < 0 ? void 0 : O.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let o = 0; o < this.directPlugins.length; o++) {
      let l = this.directPlugins[o].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let s = this.state.plugins;
    if (s)
      for (let o = 0; o < s.length; o++) {
        let l = s[o].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  /**
  Query whether the view has focus.
  */
  hasFocus() {
    if (Oe) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  /**
  Focus the editor.
  */
  focus() {
    this.domObserver.stop(), this.editable && Np(this.dom), xt(this), this.domObserver.start();
  }
  /**
  Get the document root in which the editor exists. This will
  usually be the top-level `document`, but might be a [shadow
  DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
  root if the editor is inside one.
  */
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  /**
  When an existing editor view is moved to a new document or
  shadow tree, call this to make it recompute its root.
  */
  updateRoot() {
    this._root = null;
  }
  /**
  Given a pair of viewport coordinates, return the document
  position that corresponds to them. May return null if the given
  coordinates aren't inside of the editor. When an object is
  returned, its `pos` property is the position nearest to the
  coordinates, and its `inside` property holds the position of the
  inner node that the position falls inside of, or -1 if it is at
  the top level, not in any node.
  */
  posAtCoords(e) {
    return Rp(this, e);
  }
  /**
  Returns the viewport rectangle at a given document position.
  `left` and `right` will be the same number, as this returns a
  flat cursor-ish rectangle. If the position is between two things
  that aren't directly adjacent, `side` determines which element
  is used. When < 0, the element before the position is used,
  otherwise the element after.
  */
  coordsAtPos(e, t = 1) {
    return lu(this, e, t);
  }
  /**
  Find the DOM position that corresponds to the given document
  position. When `side` is negative, find the position as close as
  possible to the content before the position. When positive,
  prefer positions close to the content after the position. When
  zero, prefer as shallow a position as possible.
  
  Note that you should **not** mutate the editor's internal DOM,
  only inspect it (and even that is usually not necessary).
  */
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  /**
  Find the DOM node that represents the document node after the
  given position. May return `null` when the position doesn't point
  in front of a node or if the node is inside an opaque node view.
  
  This is intended to be able to call things like
  `getBoundingClientRect` on that DOM node. Do **not** mutate the
  editor DOM directly, or add styling this way, since that will be
  immediately overriden by the editor as it redraws the node.
  */
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  /**
  Find the document position that corresponds to a given DOM
  position. (Whenever possible, it is preferable to inspect the
  document structure directly, rather than poking around in the
  DOM, but sometimes—for example when interpreting an event
  target—you don't have a choice.)
  
  The `bias` parameter can be used to influence which side of a DOM
  node to use when the position is inside a leaf node.
  */
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  /**
  Find out whether the selection is at the end of a textblock when
  moving in a given direction. When, for example, given `"left"`,
  it will return true if moving left from the current cursor
  position would leave that position's parent textblock. Will apply
  to the view's current state by default, but it is possible to
  pass a different state.
  */
  endOfTextblock(e, t) {
    return Lp(this, t || this.state, e);
  }
  /**
  Run the editor's paste logic with the given HTML string. The
  `event`, if given, will be passed to the
  [`handlePaste`](https://prosemirror.net/docs/ref/#view.EditorProps.handlePaste) hook.
  */
  pasteHTML(e, t) {
    return Sr(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  /**
  Run the editor's paste logic with the given plain-text input.
  */
  pasteText(e, t) {
    return Sr(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  /**
  Serialize the given slice as it would be if it was copied from
  this editor. Returns a DOM element that contains a
  representation of the slice as its children, a textual
  representation, and the transformed slice (which can be
  different from the given input due to hooks like
  [`transformCopied`](https://prosemirror.net/docs/ref/#view.EditorProps.transformCopied)).
  */
  serializeForClipboard(e) {
    return wo(this, e);
  }
  /**
  Removes the editor from the DOM and destroys all [node
  views](https://prosemirror.net/docs/ref/#view.NodeView).
  */
  destroy() {
    this.docView && (pm(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], us(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, yp());
  }
  /**
  This is true when the view has been
  [destroyed](https://prosemirror.net/docs/ref/#view.EditorView.destroy) (and thus should not be
  used anymore).
  */
  get isDestroyed() {
    return this.docView == null;
  }
  /**
  Used for testing.
  */
  dispatchEvent(e) {
    return gm(this, e);
  }
  /**
  @internal
  */
  domSelectionRange() {
    let e = this.domSelection();
    return e ? ye && this.root.nodeType === 11 && Sp(this.dom.ownerDocument) == this.dom && Vm(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  /**
  @internal
  */
  domSelection() {
    return this.root.getSelection();
  }
}
Ru.prototype.dispatch = function(n) {
  let e = this._props.dispatchTransaction;
  e ? e.call(this, n) : this.updateState(this.state.apply(n));
};
function Ql(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [Pe.node(0, n.state.doc.content.size, e)];
}
function Xl(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: Pe.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Zl(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function Qm(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function ea(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function Xm(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function ta(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var qt = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
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
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, bi = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Zm = typeof navigator < "u" && /Mac/.test(navigator.platform), eg = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var fe = 0; fe < 10; fe++) qt[48 + fe] = qt[96 + fe] = String(fe);
for (var fe = 1; fe <= 24; fe++) qt[fe + 111] = "F" + fe;
for (var fe = 65; fe <= 90; fe++)
  qt[fe] = String.fromCharCode(fe + 32), bi[fe] = String.fromCharCode(fe);
for (var ds in qt) bi.hasOwnProperty(ds) || (bi[ds] = qt[ds]);
function tg(n) {
  var e = Zm && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || eg && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? bi : qt)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const ng = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), rg = typeof navigator < "u" && /Win/.test(navigator.platform);
function ig(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      ng ? o = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), o && (t = "Meta-" + t), s && (t = "Shift-" + t), t;
}
function sg(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[ig(t)] = n[t];
  return e;
}
function hs(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function og(n) {
  return new ke({ props: { handleKeyDown: Pu(n) } });
}
function Pu(n) {
  let e = sg(n);
  return function(t, r) {
    let i = tg(r), s, o = e[hs(i, r)];
    if (o && o(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[hs(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && // Ctrl-Alt may be used for AltGr on Windows
      !(rg && r.ctrlKey && r.altKey) && (s = qt[r.keyCode]) && s != i) {
        let l = e[hs(s, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const No = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function $u(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const Bu = (n, e, t) => {
  let r = $u(n, t);
  if (!r)
    return !1;
  let i = Ao(r);
  if (!i) {
    let o = r.blockRange(), l = o && Zn(o);
    return l == null ? !1 : (e && e(n.tr.lift(o, l).scrollIntoView()), !0);
  }
  let s = i.nodeBefore;
  if (Ku(n, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Gn(s, "end") || O.isSelectable(s)))
    for (let o = r.depth; ; o--) {
      let l = $i(n.doc, r.before(o), r.after(o), x.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(Gn(s, "end") ? R.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : O.create(a.doc, i.pos - s.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (o == 1 || r.node(o - 1).childCount > 1)
        break;
    }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - s.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, lg = (n, e, t) => {
  let r = $u(n, t);
  if (!r)
    return !1;
  let i = Ao(r);
  return i ? zu(n, i, e) : !1;
}, ag = (n, e, t) => {
  let r = Fu(n, t);
  if (!r)
    return !1;
  let i = _o(r);
  return i ? zu(n, i, e) : !1;
};
function zu(n, e, t) {
  let r = e.nodeBefore, i = r, s = e.pos - 1;
  for (; !i.isTextblock; s--) {
    if (i.type.spec.isolating)
      return !1;
    let u = i.lastChild;
    if (!u)
      return !1;
    i = u;
  }
  let o = e.nodeAfter, l = o, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = $i(n.doc, s, a, x.empty);
  if (!c || c.from != s || c instanceof ne && c.slice.size >= a - s)
    return !1;
  if (t) {
    let u = n.tr.step(c);
    u.setSelection(D.create(u.doc, s)), t(u.scrollIntoView());
  }
  return !0;
}
function Gn(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const Lu = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    s = Ao(r);
  }
  let o = s && s.nodeBefore;
  return !o || !O.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(O.create(n.doc, s.pos - o.nodeSize)).scrollIntoView()), !0);
};
function Ao(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Fu(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const Vu = (n, e, t) => {
  let r = Fu(n, t);
  if (!r)
    return !1;
  let i = _o(r);
  if (!i)
    return !1;
  let s = i.nodeAfter;
  if (Ku(n, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Gn(s, "start") || O.isSelectable(s))) {
    let o = $i(n.doc, r.before(), r.after(), x.empty);
    if (o && o.slice.size < o.to - o.from) {
      if (e) {
        let l = n.tr.step(o);
        l.setSelection(Gn(s, "start") ? R.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : O.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return s.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + s.nodeSize).scrollIntoView()), !0) : !1;
}, Hu = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, s = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    s = _o(r);
  }
  let o = s && s.nodeAfter;
  return !o || !O.isSelectable(o) ? !1 : (e && e(n.tr.setSelection(O.create(n.doc, s.pos)).scrollIntoView()), !0);
};
function _o(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const cg = (n, e) => {
  let t = n.selection, r = t instanceof O, i;
  if (r) {
    if (t.node.isTextblock || !Kt(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Pi(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let s = n.tr.join(i);
    r && s.setSelection(O.create(s.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(s.scrollIntoView());
  }
  return !0;
}, ug = (n, e) => {
  let t = n.selection, r;
  if (t instanceof O) {
    if (t.node.isTextblock || !Kt(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Pi(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, fg = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), s = i && Zn(i);
  return s == null ? !1 : (e && e(n.tr.lift(i, s).scrollIntoView()), !0);
}, qu = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function Do(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const dg = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), s = t.indexAfter(-1), o = Do(i.contentMatchAt(s));
  if (!o || !i.canReplaceWith(s, s, o))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, o.createAndFill());
    a.setSelection(R.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, ju = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof $e || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let s = Do(i.parent.contentMatchAt(i.indexAfter()));
  if (!s || !s.isTextblock)
    return !1;
  if (e) {
    let o = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(o, s.createAndFill());
    l.setSelection(D.create(l.doc, o + 1)), e(l.scrollIntoView());
  }
  return !0;
}, Wu = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let s = t.before();
    if (kt(n.doc, s))
      return e && e(n.tr.split(s).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && Zn(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
};
function hg(n) {
  return (e, t) => {
    let { $from: r, $to: i } = e.selection;
    if (e.selection instanceof O && e.selection.node.isBlock)
      return !r.parentOffset || !kt(e.doc, r.pos) ? !1 : (t && t(e.tr.split(r.pos).scrollIntoView()), !0);
    if (!r.depth)
      return !1;
    let s = [], o, l, a = !1, c = !1;
    for (let p = r.depth; ; p--)
      if (r.node(p).isBlock) {
        a = r.end(p) == r.pos + (r.depth - p), c = r.start(p) == r.pos - (r.depth - p), l = Do(r.node(p - 1).contentMatchAt(r.indexAfter(p - 1))), s.unshift(a && l ? { type: l } : null), o = p;
        break;
      } else {
        if (p == 1)
          return !1;
        s.unshift(null);
      }
    let u = e.tr;
    (e.selection instanceof D || e.selection instanceof $e) && u.deleteSelection();
    let f = u.mapping.map(r.pos), d = kt(u.doc, f, s.length, s);
    if (d || (s[0] = l ? { type: l } : null, d = kt(u.doc, f, s.length, s)), !d)
      return !1;
    if (u.split(f, s.length, s), !a && c && r.node(o).type != l) {
      let p = u.mapping.map(r.before(o)), h = u.doc.resolve(p);
      l && r.node(o - 1).canReplaceWith(h.index(), h.index() + 1, l) && u.setNodeMarkup(u.mapping.map(r.before(o)), l);
    }
    return t && t(u.scrollIntoView()), !0;
  };
}
const pg = hg(), mg = (n, e) => {
  let { $from: t, to: r } = n.selection, i, s = t.sharedDepth(r);
  return s == 0 ? !1 : (i = t.before(s), e && e(n.tr.setSelection(O.create(n.doc, i))), !0);
};
function gg(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, s = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(s - 1, s) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(s, s + 1) || !(i.isTextblock || Kt(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function Ku(n, e, t, r) {
  let i = e.nodeBefore, s = e.nodeAfter, o, l, a = i.type.spec.isolating || s.type.spec.isolating;
  if (!a && gg(n, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (o = (l = i.contentMatchAt(i.childCount)).findWrapping(s.type)) && l.matchType(o[0] || s.type).validEnd) {
    if (t) {
      let p = e.pos + s.nodeSize, h = b.empty;
      for (let y = o.length - 1; y >= 0; y--)
        h = b.from(o[y].create(null, h));
      h = b.from(i.copy(h));
      let m = n.tr.step(new ie(e.pos - 1, p, e.pos, p, new x(h, 1, 0), o.length, !0)), g = m.doc.resolve(p + 2 * o.length);
      g.nodeAfter && g.nodeAfter.type == i.type && Kt(m.doc, g.pos) && m.join(g.pos), t(m.scrollIntoView());
    }
    return !0;
  }
  let u = s.type.spec.isolating || r > 0 && a ? null : R.findFrom(e, 1), f = u && u.$from.blockRange(u.$to), d = f && Zn(f);
  if (d != null && d >= e.depth)
    return t && t(n.tr.lift(f, d).scrollIntoView()), !0;
  if (c && Gn(s, "start", !0) && Gn(i, "end")) {
    let p = i, h = [];
    for (; h.push(p), !p.isTextblock; )
      p = p.lastChild;
    let m = s, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (p.canReplace(p.childCount, p.childCount, m.content)) {
      if (t) {
        let y = b.empty;
        for (let S = h.length - 1; S >= 0; S--)
          y = b.from(h[S].copy(y));
        let k = n.tr.step(new ie(e.pos - h.length, e.pos + s.nodeSize, e.pos + g, e.pos + s.nodeSize - g, new x(y, h.length, 0), 0, !0));
        t(k.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Ju(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, s = i.depth;
    for (; i.node(s).isInline; ) {
      if (!s)
        return !1;
      s--;
    }
    return i.node(s).isTextblock ? (t && t(e.tr.setSelection(D.create(e.doc, n < 0 ? i.start(s) : i.end(s)))), !0) : !1;
  };
}
const yg = Ju(-1), bg = Ju(1);
function vg(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s), l = o && bo(o, n, e);
    return l ? (r && r(t.tr.wrap(o, l).scrollIntoView()), !0) : !1;
  };
}
function na(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let s = 0; s < t.selection.ranges.length && !i; s++) {
      let { $from: { pos: o }, $to: { pos: l } } = t.selection.ranges[s];
      t.doc.nodesBetween(o, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let u = t.doc.resolve(c), f = u.index();
            i = u.parent.canReplaceWith(f, f + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let s = t.tr;
      for (let o = 0; o < t.selection.ranges.length; o++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[o];
        s.setBlockType(l, a, n, e);
      }
      r(s.scrollIntoView());
    }
    return !0;
  };
}
function Io(...n) {
  return function(e, t, r) {
    for (let i = 0; i < n.length; i++)
      if (n[i](e, t, r))
        return !0;
    return !1;
  };
}
Io(No, Bu, Lu);
Io(No, Vu, Hu);
Io(qu, ju, Wu, pg);
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function kg(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: s } = t.selection, o = i.blockRange(s);
    if (!o)
      return !1;
    let l = r ? t.tr : null;
    return xg(l, o, n, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function xg(n, e, t, r = null) {
  let i = !1, s = e, o = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = o.resolve(e.start - 2);
    s = new fi(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new fi(e.$from, o.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let l = bo(s, t, r, e);
  return l ? (n && Sg(n, e, l, i, t), !0) : !1;
}
function Sg(n, e, t, r, i) {
  let s = b.empty;
  for (let u = t.length - 1; u >= 0; u--)
    s = b.from(t[u].type.create(t[u].attrs, s));
  n.step(new ie(e.start - (r ? 2 : 0), e.end, e.start, e.end, new x(s, 0, 0), t.length, !0));
  let o = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == i && (o = u + 1);
  let l = t.length - o, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, f = e.endIndex, d = !0; u < f; u++, d = !1)
    !d && kt(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return n;
}
function wg(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (o) => o.childCount > 0 && o.firstChild.type == n);
    return s ? t ? r.node(s.depth - 1).type == n ? Mg(e, t, n, s) : Cg(e, t, s) : !0 : !1;
  };
}
function Mg(n, e, t, r) {
  let i = n.tr, s = r.end, o = r.$to.end(r.depth);
  s < o && (i.step(new ie(s - 1, o, s, o, new x(b.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new fi(i.doc.resolve(r.$from.pos), i.doc.resolve(o), r.depth));
  const l = Zn(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.doc.resolve(i.mapping.map(s, -1) - 1);
  return Kt(i.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && i.join(a.pos), e(i.scrollIntoView()), !0;
}
function Cg(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let p = t.end, h = t.endIndex - 1, m = t.startIndex; h > m; h--)
    p -= i.child(h).nodeSize, r.delete(p - 1, p + 1);
  let s = r.doc.resolve(t.start), o = s.nodeAfter;
  if (r.mapping.map(t.end) != t.start + s.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = s.node(-1), u = s.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, o.content.append(a ? b.empty : b.from(i))))
    return !1;
  let f = s.pos, d = f + o.nodeSize;
  return r.step(new ie(f - (l ? 1 : 0), d + (a ? 1 : 0), f + 1, d - 1, new x((l ? b.empty : b.from(i.copy(b.empty))).append(a ? b.empty : b.from(i.copy(b.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function Tg(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, s = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!s)
      return !1;
    let o = s.startIndex;
    if (o == 0)
      return !1;
    let l = s.parent, a = l.child(o - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, u = b.from(c ? n.create() : null), f = new x(b.from(n.create(null, b.from(l.type.create(null, u)))), c ? 3 : 1, 0), d = s.start, p = s.end;
      t(e.tr.step(new ie(d - (c ? 3 : 1), p, d, p, f, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function Vi(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: s } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return s;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, s = t.storedMarks, t;
    }
  };
}
class Hi {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: s } = r, o = this.buildProps(s);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...u) => {
      const f = a(...u)(o);
      return !s.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(s), f;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = [], a = !!e, c = e || s.tr, u = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && o.dispatch(c), l.every((d) => d === !0)), f = {
      ...Object.fromEntries(Object.entries(r).map(([d, p]) => [d, (...m) => {
        const g = this.buildProps(c, t), y = p(...m)(g);
        return l.push(y), f;
      }])),
      run: u
    };
    return f;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, s = e || r.tr, o = this.buildProps(s, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...u) => c(...u)({ ...o, dispatch: void 0 })])),
      chain: () => this.createChain(s, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: s } = this, { view: o } = i, l = {
      tr: e,
      editor: i,
      view: o,
      state: Vi({
        state: s,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...u) => c(...u)(l)]));
      }
    };
    return l;
  }
}
class Eg {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  once(e, t) {
    const r = (...i) => {
      this.off(e, r), t.apply(this, i);
    };
    return this.on(e, r);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function C(n, e, t) {
  return n.config[e] === void 0 && n.parent ? C(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? C(n.parent, e, t) : null
  }) : n.config[e];
}
function qi(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function Uu(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = qi(n), i = [...t, ...r], s = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage,
      extensions: i
    }, a = C(o, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((u) => {
      u.types.forEach((f) => {
        Object.entries(u.attributes).forEach(([d, p]) => {
          e.push({
            type: f,
            name: d,
            attribute: {
              ...s,
              ...p
            }
          });
        });
      });
    });
  }), i.forEach((o) => {
    const l = {
      name: o.name,
      options: o.options,
      storage: o.storage
    }, a = C(o, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([u, f]) => {
      const d = {
        ...s,
        ...f
      };
      typeof d?.default == "function" && (d.default = d.default()), d?.isRequired && d?.default === void 0 && delete d.default, e.push({
        type: o.name,
        name: u,
        attribute: d
      });
    });
  }), e;
}
function oe(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function be(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, s]) => {
      if (!r[i]) {
        r[i] = s;
        return;
      }
      if (i === "class") {
        const l = s ? String(s).split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[i] = [...a, ...c].join(" ");
      } else if (i === "style") {
        const l = s ? s.split(";").map((u) => u.trim()).filter(Boolean) : [], a = r[i] ? r[i].split(";").map((u) => u.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((u) => {
          const [f, d] = u.split(":").map((p) => p.trim());
          c.set(f, d);
        }), l.forEach((u) => {
          const [f, d] = u.split(":").map((p) => p.trim());
          c.set(f, d);
        }), r[i] = Array.from(c.entries()).map(([u, f]) => `${u}: ${f}`).join("; ");
      } else
        r[i] = s;
    }), r;
  }, {});
}
function Gs(n, e) {
  return e.filter((t) => t.type === n.type.name).filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => be(t, r), {});
}
function Gu(n) {
  return typeof n == "function";
}
function P(n, e = void 0, ...t) {
  return Gu(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function Og(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function Ng(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function ra(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((s, o) => {
        const l = o.attribute.parseHTML ? o.attribute.parseHTML(t) : Ng(t.getAttribute(o.name));
        return l == null ? s : {
          ...s,
          [o.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function ia(n) {
  return Object.fromEntries(
    // @ts-ignore
    Object.entries(n).filter(([e, t]) => e === "attrs" && Og(t) ? !1 : t != null)
  );
}
function Ag(n, e) {
  var t;
  const r = Uu(n), { nodeExtensions: i, markExtensions: s } = qi(n), o = (t = i.find((c) => C(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(i.map((c) => {
    const u = r.filter((y) => y.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, d = n.reduce((y, k) => {
      const S = C(k, "extendNodeSchema", f);
      return {
        ...y,
        ...S ? S(c) : {}
      };
    }, {}), p = ia({
      ...d,
      content: P(C(c, "content", f)),
      marks: P(C(c, "marks", f)),
      group: P(C(c, "group", f)),
      inline: P(C(c, "inline", f)),
      atom: P(C(c, "atom", f)),
      selectable: P(C(c, "selectable", f)),
      draggable: P(C(c, "draggable", f)),
      code: P(C(c, "code", f)),
      whitespace: P(C(c, "whitespace", f)),
      linebreakReplacement: P(C(c, "linebreakReplacement", f)),
      defining: P(C(c, "defining", f)),
      isolating: P(C(c, "isolating", f)),
      attrs: Object.fromEntries(u.map((y) => {
        var k;
        return [y.name, { default: (k = y?.attribute) === null || k === void 0 ? void 0 : k.default }];
      }))
    }), h = P(C(c, "parseHTML", f));
    h && (p.parseDOM = h.map((y) => ra(y, u)));
    const m = C(c, "renderHTML", f);
    m && (p.toDOM = (y) => m({
      node: y,
      HTMLAttributes: Gs(y, u)
    }));
    const g = C(c, "renderText", f);
    return g && (p.toText = g), [c.name, p];
  })), a = Object.fromEntries(s.map((c) => {
    const u = r.filter((g) => g.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, d = n.reduce((g, y) => {
      const k = C(y, "extendMarkSchema", f);
      return {
        ...g,
        ...k ? k(c) : {}
      };
    }, {}), p = ia({
      ...d,
      inclusive: P(C(c, "inclusive", f)),
      excludes: P(C(c, "excludes", f)),
      group: P(C(c, "group", f)),
      spanning: P(C(c, "spanning", f)),
      code: P(C(c, "code", f)),
      attrs: Object.fromEntries(u.map((g) => {
        var y;
        return [g.name, { default: (y = g?.attribute) === null || y === void 0 ? void 0 : y.default }];
      }))
    }), h = P(C(c, "parseHTML", f));
    h && (p.parseDOM = h.map((g) => ra(g, u)));
    const m = C(c, "renderHTML", f);
    return m && (p.toDOM = (g) => m({
      mark: g,
      HTMLAttributes: Gs(g, u)
    })), [c.name, p];
  }));
  return new $c({
    topNode: o,
    nodes: l,
    marks: a
  });
}
function ps(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function sa(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
function Ro(n, e) {
  const t = wn.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
const _g = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, s, o, l) => {
    var a, c;
    const u = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: s,
      parent: o,
      index: l
    })) || i.textContent || "%leaf%";
    t += i.isAtom && !i.isText ? u : u.slice(0, Math.max(0, r - s));
  }), t;
};
function Po(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class zr {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const Dg = (n, e) => {
  if (Po(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function Wr(n) {
  var e;
  const { editor: t, from: r, to: i, text: s, rules: o, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (
    // check for code node
    c.parent.type.spec.code || !((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((d) => d.type.spec.code)
  )
    return !1;
  let u = !1;
  const f = _g(c) + s;
  return o.forEach((d) => {
    if (u)
      return;
    const p = Dg(f, d.find);
    if (!p)
      return;
    const h = a.state.tr, m = Vi({
      state: a.state,
      transaction: h
    }), g = {
      from: r - (p[0].length - s.length),
      to: i
    }, { commands: y, chain: k, can: S } = new Hi({
      editor: t,
      state: m
    });
    d.handler({
      state: m,
      range: g,
      match: p,
      commands: y,
      chain: k,
      can: S
    }) === null || !h.steps.length || (h.setMeta(l, {
      transform: h,
      from: r,
      to: i,
      text: s
    }), a.dispatch(h), u = !0);
  }), u;
}
function Ig(n) {
  const { editor: e, rules: t } = n, r = new ke({
    state: {
      init() {
        return null;
      },
      apply(i, s, o) {
        const l = i.getMeta(r);
        if (l)
          return l;
        const a = i.getMeta("applyInputRules");
        return a && setTimeout(() => {
          let { text: u } = a;
          typeof u == "string" ? u = u : u = Ro(b.from(u), o.schema);
          const { from: f } = a, d = f + u.length;
          Wr({
            editor: e,
            from: f,
            to: d,
            text: u,
            rules: t,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : s;
      }
    },
    props: {
      handleTextInput(i, s, o, l) {
        return Wr({
          editor: e,
          from: s,
          to: o,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: s } = i.state.selection;
          s && Wr({
            editor: e,
            from: s.pos,
            to: s.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      // add support for input rules to trigger on enter
      // this is useful for example for code blocks
      handleKeyDown(i, s) {
        if (s.key !== "Enter")
          return !1;
        const { $cursor: o } = i.state.selection;
        return o ? Wr({
          editor: e,
          from: o.pos,
          to: o.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    // @ts-ignore
    isInputRules: !0
  });
  return r;
}
function Rg(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function Kr(n) {
  return Rg(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function ji(n, e) {
  const t = { ...n };
  return Kr(n) && Kr(e) && Object.keys(e).forEach((r) => {
    Kr(e[r]) && Kr(n[r]) ? t[r] = ji(n[r], e[r]) : t[r] = e[r];
  }), t;
}
class St {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = P(C(this, "addOptions", {
      name: this.name
    }))), this.storage = P(C(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new St(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => ji(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new St(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = P(C(t, "addOptions", {
      name: t.name
    })), t.storage = P(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const o = i.marks();
      if (!!!o.find((c) => c?.type.name === t.name))
        return !1;
      const a = o.find((c) => c?.type.name === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
function Pg(n) {
  return typeof n == "number";
}
class $g {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const Bg = (n, e, t) => {
  if (Po(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const s = [i.text];
    return s.index = i.index, s.input = n, s.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), s.push(i.replaceWith)), s;
  }) : [];
};
function zg(n) {
  const { editor: e, state: t, from: r, to: i, rule: s, pasteEvent: o, dropEvent: l } = n, { commands: a, chain: c, can: u } = new Hi({
    editor: e,
    state: t
  }), f = [];
  return t.doc.nodesBetween(r, i, (p, h) => {
    if (!p.isTextblock || p.type.spec.code)
      return;
    const m = Math.max(r, h), g = Math.min(i, h + p.content.size), y = p.textBetween(m - h, g - h, void 0, "￼");
    Bg(y, s.find, o).forEach((S) => {
      if (S.index === void 0)
        return;
      const M = m + S.index + 1, A = M + S[0].length, E = {
        from: t.tr.mapping.map(M),
        to: t.tr.mapping.map(A)
      }, v = s.handler({
        state: t,
        range: E,
        match: S,
        commands: a,
        chain: c,
        can: u,
        pasteEvent: o,
        dropEvent: l
      });
      f.push(v);
    });
  }), f.every((p) => p !== null);
}
let Jr = null;
const Lg = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function Fg(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, s = !1, o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({ state: u, from: f, to: d, rule: p, pasteEvt: h }) => {
    const m = u.tr, g = Vi({
      state: u,
      transaction: m
    });
    if (!(!zg({
      editor: e,
      state: g,
      from: Math.max(f - 1, 0),
      to: d.b - 1,
      rule: p,
      pasteEvent: h,
      dropEvent: l
    }) || !m.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return o = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  };
  return t.map((u) => new ke({
    // we register a global drag handler to track the current drag source element
    view(f) {
      const d = (h) => {
        var m;
        r = !((m = f.dom.parentElement) === null || m === void 0) && m.contains(h.target) ? f.dom.parentElement : null, r && (Jr = e);
      }, p = () => {
        Jr && (Jr = null);
      };
      return window.addEventListener("dragstart", d), window.addEventListener("dragend", p), {
        destroy() {
          window.removeEventListener("dragstart", d), window.removeEventListener("dragend", p);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (f, d) => {
          if (s = r === f.dom.parentElement, l = d, !s) {
            const p = Jr;
            p?.isEditable && setTimeout(() => {
              const h = p.state.selection;
              h && p.commands.deleteRange({ from: h.from, to: h.to });
            }, 10);
          }
          return !1;
        },
        paste: (f, d) => {
          var p;
          const h = (p = d.clipboardData) === null || p === void 0 ? void 0 : p.getData("text/html");
          return o = d, i = !!h?.includes("data-pm-slice"), !1;
        }
      }
    },
    appendTransaction: (f, d, p) => {
      const h = f[0], m = h.getMeta("uiEvent") === "paste" && !i, g = h.getMeta("uiEvent") === "drop" && !s, y = h.getMeta("applyPasteRules"), k = !!y;
      if (!m && !g && !k)
        return;
      if (k) {
        let { text: A } = y;
        typeof A == "string" ? A = A : A = Ro(b.from(A), p.schema);
        const { from: E } = y, v = E + A.length, T = Lg(A);
        return a({
          rule: u,
          state: p,
          from: E,
          to: { b: v },
          pasteEvt: T
        });
      }
      const S = d.doc.content.findDiffStart(p.doc.content), M = d.doc.content.findDiffEnd(p.doc.content);
      if (!(!Pg(S) || !M || S === M.b))
        return a({
          rule: u,
          state: p,
          from: S,
          to: M,
          pasteEvt: o
        });
    }
  }));
}
function Vg(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
class _n {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = _n.resolve(e), this.schema = Ag(this.extensions, t), this.setupExtensions();
  }
  /**
   * Returns a flattened and sorted extension list while
   * also checking for duplicated extensions and warns the user.
   * @param extensions An array of Tiptap extensions
   * @returns An flattened and sorted array of Tiptap extensions
   */
  static resolve(e) {
    const t = _n.sort(_n.flatten(e)), r = Vg(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  /**
   * Create a flattened array of extensions by traversing the `addExtensions` field.
   * @param extensions An array of Tiptap extensions
   * @returns A flattened array of Tiptap extensions
   */
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = C(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  /**
   * Sort extensions by priority.
   * @param extensions An array of Tiptap extensions
   * @returns A sorted array of Tiptap extensions by priority
   */
  static sort(e) {
    return e.sort((r, i) => {
      const s = C(r, "priority") || 100, o = C(i, "priority") || 100;
      return s > o ? -1 : s < o ? 1 : 0;
    });
  }
  /**
   * Get all commands from the extensions.
   * @returns An object with all commands where the key is the command name and the value is the command function
   */
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: ps(t.name, this.schema)
      }, i = C(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  /**
   * Get all registered Prosemirror plugins from the extensions.
   * @returns An array of Prosemirror plugins
   */
  get plugins() {
    const { editor: e } = this, t = _n.sort([...this.extensions].reverse()), r = [], i = [], s = t.map((o) => {
      const l = {
        name: o.name,
        options: o.options,
        storage: o.storage,
        editor: e,
        type: ps(o.name, this.schema)
      }, a = [], c = C(o, "addKeyboardShortcuts", l);
      let u = {};
      if (o.type === "mark" && C(o, "exitable", l) && (u.ArrowRight = () => St.handleExit({ editor: e, mark: o })), c) {
        const m = Object.fromEntries(Object.entries(c()).map(([g, y]) => [g, () => y({ editor: e })]));
        u = { ...u, ...m };
      }
      const f = og(u);
      a.push(f);
      const d = C(o, "addInputRules", l);
      sa(o, e.options.enableInputRules) && d && r.push(...d());
      const p = C(o, "addPasteRules", l);
      sa(o, e.options.enablePasteRules) && p && i.push(...p());
      const h = C(o, "addProseMirrorPlugins", l);
      if (h) {
        const m = h();
        a.push(...m);
      }
      return a;
    }).flat();
    return [
      Ig({
        editor: e,
        rules: r
      }),
      ...Fg({
        editor: e,
        rules: i
      }),
      ...s
    ];
  }
  /**
   * Get all attributes from the extensions.
   * @returns An array of attributes
   */
  get attributes() {
    return Uu(this.extensions);
  }
  /**
   * Get all node views from the extensions.
   * @returns An object with all node views where the key is the node name and the value is the node view function
   */
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = qi(this.extensions);
    return Object.fromEntries(t.filter((r) => !!C(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((a) => a.type === r.name), s = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: oe(r.name, this.schema)
      }, o = C(r, "addNodeView", s);
      if (!o)
        return [];
      const l = (a, c, u, f, d) => {
        const p = Gs(a, i);
        return o()({
          // pass-through
          node: a,
          view: c,
          getPos: u,
          decorations: f,
          innerDecorations: d,
          // tiptap-specific
          editor: e,
          extension: r,
          HTMLAttributes: p
        });
      };
      return [r.name, l];
    }));
  }
  /**
   * Go through all extensions, create extension storages & setup marks
   * & bind editor event listener.
   */
  setupExtensions() {
    this.extensions.forEach((e) => {
      var t;
      this.editor.extensionStorage[e.name] = e.storage;
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: ps(e.name, this.schema)
      };
      e.type === "mark" && (!((t = P(C(e, "keepOnSplit", r))) !== null && t !== void 0) || t) && this.splittableMarks.push(e.name);
      const i = C(e, "onBeforeCreate", r), s = C(e, "onCreate", r), o = C(e, "onUpdate", r), l = C(e, "onSelectionUpdate", r), a = C(e, "onTransaction", r), c = C(e, "onFocus", r), u = C(e, "onBlur", r), f = C(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), s && this.editor.on("create", s), o && this.editor.on("update", o), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), u && this.editor.on("blur", u), f && this.editor.on("destroy", f);
    });
  }
}
class ee {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = P(C(this, "addOptions", {
      name: this.name
    }))), this.storage = P(C(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new ee(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => ji(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new ee({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = P(C(t, "addOptions", {
      name: t.name
    })), t.storage = P(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Yu(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: s = `

`, textSerializers: o = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, i, (a, c, u, f) => {
    var d;
    a.isBlock && c > r && (l += s);
    const p = o?.[a.type.name];
    if (p)
      return u && (l += p({
        node: a,
        pos: c,
        parent: u,
        index: f,
        range: e
      })), !1;
    a.isText && (l += (d = a?.text) === null || d === void 0 ? void 0 : d.slice(Math.max(r, c) - c, i - c));
  }), l;
}
function Qu(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const Hg = ee.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new ke({
        key: new Je("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: s } = i, o = Math.min(...s.map((u) => u.$from.pos)), l = Math.max(...s.map((u) => u.$to.pos)), a = Qu(t);
            return Yu(r, { from: o, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), qg = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window?.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), jg = (n = !1) => ({ commands: e }) => e.setContent("", n), Wg = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: s, $to: o }) => {
    n.doc.nodesBetween(s.pos, o.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, f = c.resolve(u.map(a)), d = c.resolve(u.map(a + l.nodeSize)), p = f.blockRange(d);
      if (!p)
        return;
      const h = Zn(p);
      if (l.type.isTextblock) {
        const { defaultType: m } = f.parent.contentMatchAt(f.index());
        e.setNodeMarkup(p.start, m);
      }
      (h || h === 0) && e.lift(p, h);
    });
  }), !0;
}, Kg = (n) => (e) => n(e), Jg = () => ({ state: n, dispatch: e }) => ju(n, e), Ug = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, s = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const o = r.mapping.map(e);
  return r.insert(o, s.content), r.setSelection(new D(r.doc.resolve(Math.max(o - 1, 0)))), !0;
}, Gg = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let s = i.depth; s > 0; s -= 1)
    if (i.node(s).type === r.type) {
      if (e) {
        const l = i.before(s), a = i.after(s);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Yg = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = oe(n, t.schema), s = e.selection.$anchor;
  for (let o = s.depth; o > 0; o -= 1)
    if (s.node(o).type === i) {
      if (r) {
        const a = s.before(o), c = s.after(o);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Qg = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, Xg = () => ({ state: n, dispatch: e }) => No(n, e), Zg = () => ({ commands: n }) => n.keyboardShortcut("Enter"), ey = () => ({ state: n, dispatch: e }) => dg(n, e);
function vi(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : Po(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function Xu(n, e, t = {}) {
  return n.find((r) => r.type === e && vi(
    // Only check equality for the attributes that are provided
    Object.fromEntries(Object.keys(t).map((i) => [i, r.attrs[i]])),
    t
  ));
}
function oa(n, e, t = {}) {
  return !!Xu(n, e, t);
}
function $o(n, e, t) {
  var r;
  if (!n || !e)
    return;
  let i = n.parent.childAfter(n.parentOffset);
  if ((!i.node || !i.node.marks.some((u) => u.type === e)) && (i = n.parent.childBefore(n.parentOffset)), !i.node || !i.node.marks.some((u) => u.type === e) || (t = t || ((r = i.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !Xu([...i.node.marks], e, t)))
    return;
  let o = i.index, l = n.start() + i.offset, a = o + 1, c = l + i.node.nodeSize;
  for (; o > 0 && oa([...n.parent.child(o - 1).marks], e, t); )
    o -= 1, l -= n.parent.child(o).nodeSize;
  for (; a < n.parent.childCount && oa([...n.parent.child(a).marks], e, t); )
    c += n.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function Ut(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const ty = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const s = Ut(n, r.schema), { doc: o, selection: l } = t, { $from: a, from: c, to: u } = l;
  if (i) {
    const f = $o(a, s, e);
    if (f && f.from <= c && f.to >= u) {
      const d = D.create(o, f.from, f.to);
      t.setSelection(d);
    }
  }
  return !0;
}, ny = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function Zu(n) {
  return n instanceof D;
}
function sn(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function ef(n, e = null) {
  if (!e)
    return null;
  const t = R.atStart(n), r = R.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, s = r.to;
  return e === "all" ? D.create(n, sn(0, i, s), sn(n.content.size, i, s)) : D.create(n, sn(e, i, s), sn(e, i, s));
}
function la() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function ki() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
function ry() {
  return typeof navigator < "u" ? /^((?!chrome|android).)*safari/i.test(navigator.userAgent) : !1;
}
const iy = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: s }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const o = () => {
    (ki() || la()) && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), ry() && !ki() && !la() && r.dom.focus({ preventScroll: !0 }));
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (s && n === null && !Zu(t.state.selection))
    return o(), !0;
  const l = ef(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return s && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), o()), !0;
}, sy = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), oy = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), tf = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && tf(r);
  }
  return n;
};
function Ur(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return tf(t);
}
function Mr(n, e, t) {
  if (n instanceof Bt || n instanceof b)
    return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, i = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return b.fromArray(n.map((l) => e.nodeFromJSON(l)));
      const o = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && o.check(), o;
    } catch (s) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: s });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", s), Mr("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let o = !1, l = "";
      const a = new $c({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        // Prosemirror's schemas are executed such that: the last to execute, matches last
        // This means that we can add a catch-all node at the end of the schema to catch any content that we don't know how to handle
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (o = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? zt.fromSchema(a).parseSlice(Ur(n), t.parseOptions) : zt.fromSchema(a).parse(Ur(n), t.parseOptions), t.errorOnInvalidContent && o)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${l}`) });
    }
    const s = zt.fromSchema(e);
    return t.slice ? s.parseSlice(Ur(n), t.parseOptions).content : s.parse(Ur(n), t.parseOptions);
  }
  return Mr("", e, t);
}
function ly(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof ne || i instanceof ie))
    return;
  const s = n.mapping.maps[r];
  let o = 0;
  s.forEach((l, a, c, u) => {
    o === 0 && (o = u);
  }), n.setSelection(R.near(n.doc.resolve(o), t));
}
const ay = (n) => !("type" in n), cy = (n, e, t) => ({ tr: r, dispatch: i, editor: s }) => {
  var o;
  if (i) {
    t = {
      parseOptions: s.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    const a = (g) => {
      s.emit("contentError", {
        editor: s,
        error: g,
        disableCollaboration: () => {
          s.storage.collaboration && (s.storage.collaboration.isDisabled = !0);
        }
      });
    }, c = {
      preserveWhitespace: "full",
      ...t.parseOptions
    };
    if (!t.errorOnInvalidContent && !s.options.enableContentCheck && s.options.emitContentError)
      try {
        Mr(e, s.schema, {
          parseOptions: c,
          errorOnInvalidContent: !0
        });
      } catch (g) {
        a(g);
      }
    try {
      l = Mr(e, s.schema, {
        parseOptions: c,
        errorOnInvalidContent: (o = t.errorOnInvalidContent) !== null && o !== void 0 ? o : s.options.enableContentCheck
      });
    } catch (g) {
      return a(g), !1;
    }
    let { from: u, to: f } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, d = !0, p = !0;
    if ((ay(l) ? l : [l]).forEach((g) => {
      g.check(), d = d ? g.isText && g.marks.length === 0 : !1, p = p ? g.isBlock : !1;
    }), u === f && p) {
      const { parent: g } = r.doc.resolve(u);
      g.isTextblock && !g.type.spec.code && !g.childCount && (u -= 1, f += 1);
    }
    let m;
    if (d) {
      if (Array.isArray(e))
        m = e.map((g) => g.text || "").join("");
      else if (e instanceof b) {
        let g = "";
        e.forEach((y) => {
          y.text && (g += y.text);
        }), m = g;
      } else typeof e == "object" && e && e.text ? m = e.text : m = e;
      r.insertText(m, u, f);
    } else
      m = l, r.replaceWith(u, f, m);
    t.updateSelection && ly(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: u, text: m }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: u, text: m });
  }
  return !0;
}, uy = () => ({ state: n, dispatch: e }) => cg(n, e), fy = () => ({ state: n, dispatch: e }) => ug(n, e), dy = () => ({ state: n, dispatch: e }) => Bu(n, e), hy = () => ({ state: n, dispatch: e }) => Vu(n, e), py = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Pi(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, my = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Pi(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, gy = () => ({ state: n, dispatch: e }) => lg(n, e), yy = () => ({ state: n, dispatch: e }) => ag(n, e);
function nf() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function by(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, s, o;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      o = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      s = !0;
    else if (/^mod$/i.test(a))
      ki() || nf() ? o = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), o && (t = `Meta-${t}`), s && (t = `Shift-${t}`), t;
}
const vy = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const s = by(n).split(/-(?!$)/), o = s.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: o === "Space" ? " " : o,
    altKey: s.includes("Alt"),
    ctrlKey: s.includes("Ctrl"),
    metaKey: s.includes("Meta"),
    shiftKey: s.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a?.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && i && r.maybeStep(u);
  }), !0;
};
function Cr(n, e, t = {}) {
  const { from: r, to: i, empty: s } = n.selection, o = e ? oe(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (f, d) => {
    if (f.isText)
      return;
    const p = Math.max(r, d), h = Math.min(i, d + f.nodeSize);
    l.push({
      node: f,
      from: p,
      to: h
    });
  });
  const a = i - r, c = l.filter((f) => o ? o.name === f.node.type.name : !0).filter((f) => vi(f.node.attrs, t, { strict: !1 }));
  return s ? !!c.length : c.reduce((f, d) => f + d.to - d.from, 0) >= a;
}
const ky = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = oe(n, t.schema);
  return Cr(t, i, e) ? fg(t, r) : !1;
}, xy = () => ({ state: n, dispatch: e }) => Wu(n, e), Sy = (n) => ({ state: e, dispatch: t }) => {
  const r = oe(n, e.schema);
  return wg(r)(e, t);
}, wy = () => ({ state: n, dispatch: e }) => qu(n, e);
function Wi(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function aa(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const My = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = Wi(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = oe(n, r.schema)), l === "mark" && (o = Ut(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => {
      s && s === c.type && t.setNodeMarkup(u, void 0, aa(c.attrs, e)), o && c.marks.length && c.marks.forEach((f) => {
        o === f.type && t.addMark(u, u + c.nodeSize, o.create(aa(f.attrs, e)));
      });
    });
  }), !0) : !1;
}, Cy = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), Ty = () => ({ tr: n, dispatch: e }) => {
  if (e) {
    const t = new $e(n.doc);
    n.setSelection(t);
  }
  return !0;
}, Ey = () => ({ state: n, dispatch: e }) => Lu(n, e), Oy = () => ({ state: n, dispatch: e }) => Hu(n, e), Ny = () => ({ state: n, dispatch: e }) => mg(n, e), Ay = () => ({ state: n, dispatch: e }) => bg(n, e), _y = () => ({ state: n, dispatch: e }) => yg(n, e);
function Ys(n, e, t = {}, r = {}) {
  return Mr(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const Dy = (n, e = !1, t = {}, r = {}) => ({ editor: i, tr: s, dispatch: o, commands: l }) => {
  var a, c;
  const { doc: u } = s;
  if (t.preserveWhitespace !== "full") {
    const f = Ys(n, i.schema, t, {
      errorOnInvalidContent: (a = r.errorOnInvalidContent) !== null && a !== void 0 ? a : i.options.enableContentCheck
    });
    return o && s.replaceWith(0, u.content.size, f).setMeta("preventUpdate", !e), !0;
  }
  return o && s.setMeta("preventUpdate", !e), l.insertContentAt({ from: 0, to: u.content.size }, n, {
    parseOptions: t,
    errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : i.options.enableContentCheck
  });
};
function rf(n, e) {
  const t = Ut(e, n.schema), { from: r, to: i, empty: s } = n.selection, o = [];
  s ? (n.storedMarks && o.push(...n.storedMarks), o.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    o.push(...a.marks);
  });
  const l = o.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function Iy(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function Ry(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function Bo(n) {
  return (e) => Ry(e.$from, n);
}
function Py(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return Yu(n, t, e);
}
function $y(n, e) {
  const t = oe(e, n.schema), { from: r, to: i } = n.selection, s = [];
  n.doc.nodesBetween(r, i, (l) => {
    s.push(l);
  });
  const o = s.reverse().find((l) => l.type.name === t.name);
  return o ? { ...o.attrs } : {};
}
function By(n, e) {
  const t = Wi(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? $y(n, e) : t === "mark" ? rf(n, e) : {};
}
function sf(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const s = t.resolve(n), o = $o(s, i.type);
    o && r.push({
      mark: i,
      ...o
    });
  }) : t.nodesBetween(n, e, (i, s) => {
    !i || i?.nodeSize === void 0 || r.push(...i.marks.map((o) => ({
      from: s,
      to: s + i.nodeSize,
      mark: o
    })));
  }), r;
}
function ti(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((s) => s.type === e && s.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function Qs(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, s = e ? Ut(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((f) => s ? s.name === f.type.name : !0).find((f) => vi(f.attrs, t, { strict: !1 }));
  let o = 0;
  const l = [];
  if (i.forEach(({ $from: f, $to: d }) => {
    const p = f.pos, h = d.pos;
    n.doc.nodesBetween(p, h, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const y = Math.max(p, g), k = Math.min(h, g + m.nodeSize), S = k - y;
      o += S, l.push(...m.marks.map((M) => ({
        mark: M,
        from: y,
        to: k
      })));
    });
  }), o === 0)
    return !1;
  const a = l.filter((f) => s ? s.name === f.mark.type.name : !0).filter((f) => vi(f.mark.attrs, t, { strict: !1 })).reduce((f, d) => f + d.to - d.from, 0), c = l.filter((f) => s ? f.mark.type !== s && f.mark.type.excludes(s) : !0).reduce((f, d) => f + d.to - d.from, 0);
  return (a > 0 ? a + c : a) >= o;
}
function zy(n, e, t = {}) {
  if (!e)
    return Cr(n, null, t) || Qs(n, null, t);
  const r = Wi(e, n.schema);
  return r === "node" ? Cr(n, e, t) : r === "mark" ? Qs(n, e, t) : !1;
}
function ca(n, e) {
  const { nodeExtensions: t } = qi(e), r = t.find((o) => o.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, s = P(C(r, "group", i));
  return typeof s != "string" ? !1 : s.split(" ").includes("list");
}
function Ki(n, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
  var r;
  if (t) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((r = n.text) !== null && r !== void 0 ? r : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return n.content.forEach((s) => {
      i !== !1 && (Ki(s, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function Ly(n) {
  return n instanceof O;
}
function Fy(n, e, t) {
  var r;
  const { selection: i } = e;
  let s = null;
  if (Zu(i) && (s = i.$cursor), s) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : s.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: o } = i;
  return o.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (u, f, d) => {
      if (c)
        return !1;
      if (u.isInline) {
        const p = !d || d.type.allowsMarkType(t), h = !!t.isInSet(u.marks) || !u.marks.some((m) => m.type.excludes(t));
        c = p && h;
      }
      return !c;
    }), c;
  });
}
const Vy = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: s } = t, { empty: o, ranges: l } = s, a = Ut(n, r.schema);
  if (i)
    if (o) {
      const c = rf(r, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const u = c.$from.pos, f = c.$to.pos;
        r.doc.nodesBetween(u, f, (d, p) => {
          const h = Math.max(p, u), m = Math.min(p + d.nodeSize, f);
          d.marks.find((y) => y.type === a) ? d.marks.forEach((y) => {
            a === y.type && t.addMark(h, m, a.create({
              ...y.attrs,
              ...e
            }));
          }) : t.addMark(h, m, a.create(e));
        });
      });
  return Fy(r, t, a);
}, Hy = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), qy = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const s = oe(n, t.schema);
  let o;
  return t.selection.$anchor.sameParent(t.selection.$head) && (o = t.selection.$anchor.parent.attrs), s.isTextblock ? i().command(({ commands: l }) => na(s, { ...o, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => na(s, { ...o, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, jy = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = sn(n, 0, r.content.size), s = O.create(r, i);
    e.setSelection(s);
  }
  return !0;
}, Wy = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: s } = typeof n == "number" ? { from: n, to: n } : n, o = D.atStart(r).from, l = D.atEnd(r).to, a = sn(i, o, l), c = sn(s, o, l), u = D.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, Ky = (n) => ({ state: e, dispatch: t }) => {
  const r = oe(n, e.schema);
  return Tg(r)(e, t);
};
function ua(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e?.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const Jy = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: s, doc: o } = e, { $from: l, $to: a } = s, c = i.extensionManager.attributes, u = ti(c, l.node().type.name, l.node().attrs);
  if (s instanceof O && s.node.isBlock)
    return !l.parentOffset || !kt(o, l.pos) ? !1 : (r && (n && ua(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const f = a.parentOffset === a.parent.content.size, d = l.depth === 0 ? void 0 : Iy(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let p = f && d ? [
    {
      type: d,
      attrs: u
    }
  ] : void 0, h = kt(e.doc, e.mapping.map(l.pos), 1, p);
  if (!p && !h && kt(e.doc, e.mapping.map(l.pos), 1, d ? [{ type: d }] : void 0) && (h = !0, p = d ? [
    {
      type: d,
      attrs: u
    }
  ] : void 0), r) {
    if (h && (s instanceof D && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, p), d && !f && !l.parentOffset && l.parent.type !== d)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, d) && e.setNodeMarkup(e.mapping.map(l.before()), d);
    }
    n && ua(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return h;
}, Uy = (n, e = {}) => ({ tr: t, state: r, dispatch: i, editor: s }) => {
  var o;
  const l = oe(n, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
  if (u && u.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const f = a.node(-1);
  if (f.type !== l)
    return !1;
  const d = s.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (i) {
      let y = b.empty;
      const k = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let T = a.depth - k; T >= a.depth - 3; T -= 1)
        y = b.from(a.node(T).copy(y));
      const S = a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3, M = {
        ...ti(d, a.node().type.name, a.node().attrs),
        ...e
      }, A = ((o = l.contentMatch.defaultType) === null || o === void 0 ? void 0 : o.createAndFill(M)) || void 0;
      y = y.append(b.from(l.createAndFill(null, A) || void 0));
      const E = a.before(a.depth - (k - 1));
      t.replace(E, a.after(-S), new x(y, 4 - k, 0));
      let v = -1;
      t.doc.nodesBetween(E, t.doc.content.size, (T, w) => {
        if (v > -1)
          return !1;
        T.isTextblock && T.content.size === 0 && (v = w + 1);
      }), v > -1 && t.setSelection(D.near(t.doc.resolve(v))), t.scrollIntoView();
    }
    return !0;
  }
  const p = c.pos === a.end() ? f.contentMatchAt(0).defaultType : null, h = {
    ...ti(d, f.type.name, f.attrs),
    ...e
  }, m = {
    ...ti(d, a.node().type.name, a.node().attrs),
    ...e
  };
  t.delete(a.pos, c.pos);
  const g = p ? [
    { type: l, attrs: h },
    { type: p, attrs: m }
  ] : [{ type: l, attrs: h }];
  if (!kt(t.doc, a.pos, 2))
    return !1;
  if (i) {
    const { selection: y, storedMarks: k } = r, { splittableMarks: S } = s.extensionManager, M = k || y.$to.parentOffset && y.$from.marks();
    if (t.split(a.pos, 2, g).scrollIntoView(), !M || !i)
      return !0;
    const A = M.filter((E) => S.includes(E.type.name));
    t.ensureMarks(A);
  }
  return !0;
}, ms = (n, e) => {
  const t = Bo((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === i?.type && Kt(n.doc, t.pos) && n.join(t.pos), !0;
}, gs = (n, e) => {
  const t = Bo((o) => o.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === i?.type && Kt(n.doc, r) && n.join(r), !0;
}, Gy = (n, e, t, r = {}) => ({ editor: i, tr: s, state: o, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: f, splittableMarks: d } = i.extensionManager, p = oe(n, o.schema), h = oe(e, o.schema), { selection: m, storedMarks: g } = o, { $from: y, $to: k } = m, S = y.blockRange(k), M = g || m.$to.parentOffset && m.$from.marks();
  if (!S)
    return !1;
  const A = Bo((E) => ca(E.type.name, f))(m);
  if (S.depth >= 1 && A && S.depth - A.depth <= 1) {
    if (A.node.type === p)
      return c.liftListItem(h);
    if (ca(A.node.type.name, f) && p.validContent(A.node.content) && l)
      return a().command(() => (s.setNodeMarkup(A.pos, p), !0)).command(() => ms(s, p)).command(() => gs(s, p)).run();
  }
  return !t || !M || !l ? a().command(() => u().wrapInList(p, r) ? !0 : c.clearNodes()).wrapInList(p, r).command(() => ms(s, p)).command(() => gs(s, p)).run() : a().command(() => {
    const E = u().wrapInList(p, r), v = M.filter((T) => d.includes(T.type.name));
    return s.ensureMarks(v), E ? !0 : c.clearNodes();
  }).wrapInList(p, r).command(() => ms(s, p)).command(() => gs(s, p)).run();
}, Yy = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: s = !1 } = t, o = Ut(n, r.schema);
  return Qs(r, o, e) ? i.unsetMark(o, { extendEmptyMarkRange: s }) : i.setMark(o, e);
}, Qy = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const s = oe(n, r.schema), o = oe(e, r.schema), l = Cr(r, s, t);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? i.setNode(o, a) : i.setNode(s, { ...a, ...t });
}, Xy = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = oe(n, t.schema);
  return Cr(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, Zy = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let s;
    if (i.spec.isInputRules && (s = i.getState(n))) {
      if (e) {
        const o = n.tr, l = s.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          o.step(l.steps[a].invert(l.docs[a]));
        if (s.text) {
          const a = o.doc.resolve(s.from).marks();
          o.replaceWith(s.from, s.to, n.schema.text(s.text, a));
        } else
          o.delete(s.from, s.to);
      }
      return !0;
    }
  }
  return !1;
}, e0 = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((s) => {
    n.removeMark(s.$from.pos, s.$to.pos);
  }), !0;
}, t0 = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var s;
  const { extendEmptyMarkRange: o = !1 } = e, { selection: l } = t, a = Ut(n, r.schema), { $from: c, empty: u, ranges: f } = l;
  if (!i)
    return !0;
  if (u && o) {
    let { from: d, to: p } = l;
    const h = (s = c.marks().find((g) => g.type === a)) === null || s === void 0 ? void 0 : s.attrs, m = $o(c, a, h);
    m && (d = m.from, p = m.to), t.removeMark(d, p, a);
  } else
    f.forEach((d) => {
      t.removeMark(d.$from.pos, d.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, n0 = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let s = null, o = null;
  const l = Wi(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (s = oe(n, r.schema)), l === "mark" && (o = Ut(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, u = a.$to.pos;
    let f, d, p, h;
    t.selection.empty ? r.doc.nodesBetween(c, u, (m, g) => {
      s && s === m.type && (p = Math.max(g, c), h = Math.min(g + m.nodeSize, u), f = g, d = m);
    }) : r.doc.nodesBetween(c, u, (m, g) => {
      g < c && s && s === m.type && (p = Math.max(g, c), h = Math.min(g + m.nodeSize, u), f = g, d = m), g >= c && g <= u && (s && s === m.type && t.setNodeMarkup(g, void 0, {
        ...m.attrs,
        ...e
      }), o && m.marks.length && m.marks.forEach((y) => {
        if (o === y.type) {
          const k = Math.max(g, c), S = Math.min(g + m.nodeSize, u);
          t.addMark(k, S, o.create({
            ...y.attrs,
            ...e
          }));
        }
      }));
    }), d && (f !== void 0 && t.setNodeMarkup(f, void 0, {
      ...d.attrs,
      ...e
    }), o && d.marks.length && d.marks.forEach((m) => {
      o === m.type && t.addMark(p, h, o.create({
        ...m.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, r0 = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = oe(n, t.schema);
  return vg(i, e)(t, r);
}, i0 = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = oe(n, t.schema);
  return kg(i, e)(t, r);
};
var s0 = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: qg,
  clearContent: jg,
  clearNodes: Wg,
  command: Kg,
  createParagraphNear: Jg,
  cut: Ug,
  deleteCurrentNode: Gg,
  deleteNode: Yg,
  deleteRange: Qg,
  deleteSelection: Xg,
  enter: Zg,
  exitCode: ey,
  extendMarkRange: ty,
  first: ny,
  focus: iy,
  forEach: sy,
  insertContent: oy,
  insertContentAt: cy,
  joinBackward: dy,
  joinDown: fy,
  joinForward: hy,
  joinItemBackward: py,
  joinItemForward: my,
  joinTextblockBackward: gy,
  joinTextblockForward: yy,
  joinUp: uy,
  keyboardShortcut: vy,
  lift: ky,
  liftEmptyBlock: xy,
  liftListItem: Sy,
  newlineInCode: wy,
  resetAttributes: My,
  scrollIntoView: Cy,
  selectAll: Ty,
  selectNodeBackward: Ey,
  selectNodeForward: Oy,
  selectParentNode: Ny,
  selectTextblockEnd: Ay,
  selectTextblockStart: _y,
  setContent: Dy,
  setMark: Vy,
  setMeta: Hy,
  setNode: qy,
  setNodeSelection: jy,
  setTextSelection: Wy,
  sinkListItem: Ky,
  splitBlock: Jy,
  splitListItem: Uy,
  toggleList: Gy,
  toggleMark: Yy,
  toggleNode: Qy,
  toggleWrap: Xy,
  undoInputRule: Zy,
  unsetAllMarks: e0,
  unsetMark: t0,
  updateAttributes: n0,
  wrapIn: r0,
  wrapInList: i0
});
const o0 = ee.create({
  name: "commands",
  addCommands() {
    return {
      ...s0
    };
  }
}), l0 = ee.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new ke({
        key: new Je("tiptapDrop"),
        props: {
          handleDrop: (n, e, t, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: r
            });
          }
        }
      })
    ];
  }
}), a0 = ee.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new ke({
        key: new Je("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), c0 = new Je("focusEvents"), u0 = ee.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new ke({
        key: c0,
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), f0 = ee.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: o }) => [
      () => o.undoInputRule(),
      // maybe convert first text block node to default node
      () => o.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: f } = a, { pos: d, parent: p } = f, h = f.parent.isTextblock && d > 0 ? l.doc.resolve(d - 1) : f, m = h.parent.type.spec.isolating, g = f.pos - f.parentOffset, y = m && h.parent.childCount === 1 ? g === f.pos : R.atStart(c).from === d;
        return !u || !p.type.isTextblock || p.textContent.length || !y || y && f.parent.type.name === "paragraph" ? !1 : o.clearNodes();
      }),
      () => o.deleteSelection(),
      () => o.joinBackward(),
      () => o.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: o }) => [
      () => o.deleteSelection(),
      () => o.deleteCurrentNode(),
      () => o.joinForward(),
      () => o.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: o }) => [
        () => o.newlineInCode(),
        () => o.createParagraphNear(),
        () => o.liftEmptyBlock(),
        () => o.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, s = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return ki() || nf() ? s : i;
  },
  addProseMirrorPlugins() {
    return [
      // With this plugin we check if the whole document was selected and deleted.
      // In this case we will additionally call `clearNodes()` to convert e.g. a heading
      // to a paragraph if necessary.
      // This is an alternative to ProseMirror's `AllSelection`, which doesn’t work well
      // with many other commands.
      new ke({
        key: new Je("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (n.some((m) => m.getMeta("composition")))
            return;
          const r = n.some((m) => m.docChanged) && !e.doc.eq(t.doc), i = n.some((m) => m.getMeta("preventClearDocument"));
          if (!r || i)
            return;
          const { empty: s, from: o, to: l } = e.selection, a = R.atStart(e.doc).from, c = R.atEnd(e.doc).to;
          if (s || !(o === a && l === c) || !Ki(t.doc))
            return;
          const d = t.tr, p = Vi({
            state: t,
            transaction: d
          }), { commands: h } = new Hi({
            editor: this.editor,
            state: p
          });
          if (h.clearNodes(), !!d.steps.length)
            return d;
        }
      })
    ];
  }
}), d0 = ee.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new ke({
        key: new Je("tiptapPaste"),
        props: {
          handlePaste: (n, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
}), h0 = ee.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new ke({
        key: new Je("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class Yt {
  get name() {
    return this.node.type.name;
  }
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can’t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new Yt(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new Yt(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new Yt(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, s = t.isAtom && !t.isText, o = this.pos + r + (s ? 0 : 1);
      if (o < 0 || o > this.resolvedPos.doc.nodeSize - 2)
        return;
      const l = this.resolvedPos.doc.resolve(o);
      if (!i && l.depth <= this.depth)
        return;
      const a = new Yt(l, this.editor, i, i ? t : null);
      i && (a.actualDepth = this.depth + 1), e.push(new Yt(l, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const s = i.node.attrs, o = Object.keys(t);
          for (let l = 0; l < o.length; l += 1) {
            const a = o[l];
            if (s[a] !== t[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const s = Object.keys(t);
    return this.children.forEach((o) => {
      r && i.length > 0 || (o.node.type.name === e && s.every((a) => t[a] === o.node.attrs[a]) && i.push(o), !(r && i.length > 0) && (i = i.concat(o.querySelectorAll(e, t, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: t } = this.editor.state;
    t.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(t);
  }
}
const p0 = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function m0(n, e, t) {
  const r = document.querySelector("style[data-tiptap-style]");
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute("data-tiptap-style", ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
class g0 extends Eg {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      emitContentError: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: t }) => {
        throw t;
      },
      onPaste: () => null,
      onDrop: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: t, slice: r, moved: i }) => this.options.onDrop(t, r, i)), this.on("paste", ({ event: t, slice: r }) => this.options.onPaste(t, r)), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  /**
   * Returns the editor storage.
   */
  get storage() {
    return this.extensionStorage;
  }
  /**
   * An object of all registered commands.
   */
  get commands() {
    return this.commandManager.commands;
  }
  /**
   * Create a command chain to call multiple commands at once.
   */
  chain() {
    return this.commandManager.chain();
  }
  /**
   * Check if a command or a command chain can be executed. Without executing it.
   */
  can() {
    return this.commandManager.can();
  }
  /**
   * Inject CSS styles.
   */
  injectCSS() {
    this.options.injectCSS && document && (this.css = m0(p0, this.options.injectNonce));
  }
  /**
   * Update editor options.
   *
   * @param options A list of options
   */
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  /**
   * Update editable state of the editor.
   */
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  /**
   * Returns whether the editor is editable.
   */
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  /**
   * Returns the editor state.
   */
  get state() {
    return this.view.state;
  }
  /**
   * Register a ProseMirror plugin.
   *
   * @param plugin A ProseMirror plugin
   * @param handlePlugins Control how to merge the plugin into the existing plugins.
   * @returns The new editor state
   */
  registerPlugin(e, t) {
    const r = Gu(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    return this.view.updateState(i), i;
  }
  /**
   * Unregister a ProseMirror plugin.
   *
   * @param nameOrPluginKeyToRemove The plugins name
   * @returns The new editor state or undefined if the editor is destroyed
   */
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = this.state.plugins;
    let r = t;
    if ([].concat(e).forEach((s) => {
      const o = typeof s == "string" ? `${s}$` : s.key;
      r = r.filter((l) => !l.key.startsWith(o));
    }), t.length === r.length)
      return;
    const i = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(i), i;
  }
  /**
   * Creates an extension manager.
   */
  createExtensionManager() {
    var e, t;
    const i = [...this.options.enableCoreExtensions ? [
      a0,
      Hg.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      o0,
      u0,
      f0,
      h0,
      l0,
      d0
    ].filter((s) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[s.name] !== !1 : !0) : [], ...this.options.extensions].filter((s) => ["extension", "node", "mark"].includes(s?.type));
    this.extensionManager = new _n(i, this);
  }
  /**
   * Creates an command manager.
   */
  createCommandManager() {
    this.commandManager = new Hi({
      editor: this
    });
  }
  /**
   * Creates a ProseMirror schema.
   */
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  /**
   * Creates a ProseMirror view.
   */
  createView() {
    var e;
    let t;
    try {
      t = Ys(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (o) {
      if (!(o instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(o.message))
        throw o;
      this.emit("contentError", {
        editor: this,
        error: o,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((l) => l.name !== "collaboration"), this.createExtensionManager();
        }
      }), t = Ys(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const r = ef(t, this.options.autofocus);
    this.view = new Ru(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        // add `role="textbox"` to the editor element
        role: "textbox",
        ...(e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: An.create({
        doc: t,
        selection: r || void 0
      })
    });
    const i = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(i), this.createNodeViews(), this.prependClass();
    const s = this.view.dom;
    s.editor = this;
  }
  /**
   * Creates all node views.
   */
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  /**
   * Prepend class name to element.
   */
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  /**
   * The callback over which to send transactions (state updates) produced by the view.
   *
   * @param transaction An editor state transaction
   */
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((o) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(o);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: t
    }), this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), s = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), s && this.emit("blur", {
      editor: this,
      event: s.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  /**
   * Get attributes of the currently selected node or mark.
   */
  getAttributes(e) {
    return By(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return zy(this.state, r, i);
  }
  /**
   * Get the document as JSON.
   */
  getJSON() {
    return this.state.doc.toJSON();
  }
  /**
   * Get the document as HTML.
   */
  getHTML() {
    return Ro(this.state.doc.content, this.schema);
  }
  /**
   * Get the document as text.
   */
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return Py(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...Qu(this.schema),
        ...r
      }
    });
  }
  /**
   * Check if there is no content.
   */
  get isEmpty() {
    return Ki(this.state.doc);
  }
  /**
   * Get the number of characters for the current document.
   *
   * @deprecated
   */
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  /**
   * Destroy the editor.
   */
  destroy() {
    if (this.emit("destroy"), this.view) {
      const e = this.view.dom;
      e && e.editor && delete e.editor, this.view.destroy();
    }
    this.removeAllListeners();
  }
  /**
   * Check if the editor is already destroyed.
   */
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new Yt(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
}
function Yn(n) {
  return new zr({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = P(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: s } = e, o = r[r.length - 1], l = r[0];
      if (o) {
        const a = l.search(/\S/), c = t.from + l.indexOf(o), u = c + o.length;
        if (sf(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((m) => m === n.type && m !== p.mark.type)).filter((p) => p.to > c).length)
          return null;
        u < t.to && s.delete(u, t.to), c > t.from && s.delete(t.from + a, c);
        const d = t.from + a + o.length;
        s.addMark(t.from + a, d, n.type.create(i || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
function y0(n) {
  return new zr({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = P(n.getAttributes, void 0, r) || {}, { tr: s } = e, o = t.from;
      let l = t.to;
      const a = n.type.create(i);
      if (r[1]) {
        const c = r[0].lastIndexOf(r[1]);
        let u = o + c;
        u > l ? u = l : l = u + r[1].length;
        const f = r[0][r[0].length - 1];
        s.insertText(f, o + r[0].length - 1), s.replaceWith(u, l, a);
      } else if (r[0]) {
        const c = n.type.isInline ? o : o - 1;
        s.insert(c, n.type.create(i)).delete(s.mapping.map(o), s.mapping.map(l));
      }
      s.scrollIntoView();
    }
  });
}
function Xs(n) {
  return new zr({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = e.doc.resolve(t.from), s = P(n.getAttributes, void 0, r) || {};
      if (!i.node(-1).canReplaceWith(i.index(-1), i.indexAfter(-1), n.type))
        return null;
      e.tr.delete(t.from, t.to).setBlockType(t.from, t.from, n.type, s);
    }
  });
}
function K(n) {
  return new zr({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      let i = n.replace, s = t.from;
      const o = t.to;
      if (r[1]) {
        const l = r[0].lastIndexOf(r[1]);
        i += r[0].slice(l + r[1].length), s += l;
        const a = s - o;
        a > 0 && (i = r[0].slice(l - a, l) + i, s = o);
      }
      e.tr.insertText(i, s, o);
    }
  });
}
function Tr(n) {
  return new zr({
    find: n.find,
    handler: ({ state: e, range: t, match: r, chain: i }) => {
      const s = P(n.getAttributes, void 0, r) || {}, o = e.tr.delete(t.from, t.to), a = o.doc.resolve(t.from).blockRange(), c = a && bo(a, n.type, s);
      if (!c)
        return null;
      if (o.wrap(a, c), n.keepMarks && n.editor) {
        const { selection: f, storedMarks: d } = e, { splittableMarks: p } = n.editor.extensionManager, h = d || f.$to.parentOffset && f.$from.marks();
        if (h) {
          const m = h.filter((g) => p.includes(g.type.name));
          o.ensureMarks(m);
        }
      }
      if (n.keepAttributes) {
        const f = n.type.name === "bulletList" || n.type.name === "orderedList" ? "listItem" : "taskList";
        i().updateAttributes(f, s).run();
      }
      const u = o.doc.resolve(t.from - 1).nodeBefore;
      u && u.type === n.type && Kt(o.doc, t.from - 1) && (!n.joinPredicate || n.joinPredicate(r, u)) && o.join(t.from - 1);
    }
  });
}
let nt = class Zs {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = P(C(this, "addOptions", {
      name: this.name
    }))), this.storage = P(C(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Zs(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => ji(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new Zs(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = P(C(t, "addOptions", {
      name: t.name
    })), t.storage = P(C(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
};
function Qn(n) {
  return new $g({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const s = P(n.getAttributes, void 0, r, i);
      if (s === !1 || s === null)
        return null;
      const { tr: o } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const u = a.search(/\S/), f = t.from + a.indexOf(l), d = f + l.length;
        if (sf(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((g) => g === n.type && g !== h.mark.type)).filter((h) => h.to > f).length)
          return null;
        d < t.to && o.delete(d, t.to), f > t.from && o.delete(t.from + u, f), c = t.from + u + l.length, o.addMark(t.from + u, c, n.type.create(s || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
function b0(n, e) {
  const { selection: t } = n, { $from: r } = t;
  if (t instanceof O) {
    const s = r.index();
    return r.parent.canReplaceWith(s, s + 1, e);
  }
  let i = r.depth;
  for (; i >= 0; ) {
    const s = r.index(i);
    if (r.node(i).contentMatchAt(s).matchType(e))
      return !0;
    i -= 1;
  }
  return !1;
}
const v0 = /^\s*>\s$/, k0 = nt.create({
  name: "blockquote",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  content: "block+",
  group: "block",
  defining: !0,
  parseHTML() {
    return [
      { tag: "blockquote" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["blockquote", be(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBlockquote: () => ({ commands: n }) => n.wrapIn(this.name),
      toggleBlockquote: () => ({ commands: n }) => n.toggleWrap(this.name),
      unsetBlockquote: () => ({ commands: n }) => n.lift(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-b": () => this.editor.commands.toggleBlockquote()
    };
  },
  addInputRules() {
    return [
      Tr({
        find: v0,
        type: this.type
      })
    ];
  }
}), x0 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, S0 = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, w0 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, M0 = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, C0 = St.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", be(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      Yn({
        find: x0,
        type: this.type
      }),
      Yn({
        find: w0,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Qn({
        find: S0,
        type: this.type
      }),
      Qn({
        find: M0,
        type: this.type
      })
    ];
  }
}), T0 = "listItem", fa = "textStyle", da = /^\s*([-+*])\s$/, E0 = nt.create({
  name: "bulletList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  parseHTML() {
    return [
      { tag: "ul" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["ul", be(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleBulletList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(T0, this.editor.getAttributes(fa)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-8": () => this.editor.commands.toggleBulletList()
    };
  },
  addInputRules() {
    let n = Tr({
      find: da,
      type: this.type
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Tr({
      find: da,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: () => this.editor.getAttributes(fa),
      editor: this.editor
    })), [
      n
    ];
  }
}), O0 = /(^|[^`])`([^`]+)`(?!`)/, N0 = /(^|[^`])`([^`]+)`(?!`)/g, A0 = St.create({
  name: "code",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  excludes: "_",
  code: !0,
  exitable: !0,
  parseHTML() {
    return [
      { tag: "code" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["code", be(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setCode: () => ({ commands: n }) => n.setMark(this.name),
      toggleCode: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetCode: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-e": () => this.editor.commands.toggleCode()
    };
  },
  addInputRules() {
    return [
      Yn({
        find: O0,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Qn({
        find: N0,
        type: this.type
      })
    ];
  }
}), _0 = /^```([a-z]+)?[\s\n]$/, D0 = /^~~~([a-z]+)?[\s\n]$/, I0 = nt.create({
  name: "codeBlock",
  addOptions() {
    return {
      languageClassPrefix: "language-",
      exitOnTripleEnter: !0,
      exitOnArrowDown: !0,
      defaultLanguage: null,
      HTMLAttributes: {}
    };
  },
  content: "text*",
  marks: "",
  group: "block",
  code: !0,
  defining: !0,
  addAttributes() {
    return {
      language: {
        default: this.options.defaultLanguage,
        parseHTML: (n) => {
          var e;
          const { languageClassPrefix: t } = this.options, s = [...((e = n.firstElementChild) === null || e === void 0 ? void 0 : e.classList) || []].filter((o) => o.startsWith(t)).map((o) => o.replace(t, ""))[0];
          return s || null;
        },
        rendered: !1
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "pre",
        preserveWhitespace: "full"
      }
    ];
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [
      "pre",
      be(this.options.HTMLAttributes, e),
      [
        "code",
        {
          class: n.attrs.language ? this.options.languageClassPrefix + n.attrs.language : null
        },
        0
      ]
    ];
  },
  addCommands() {
    return {
      setCodeBlock: (n) => ({ commands: e }) => e.setNode(this.name, n),
      toggleCodeBlock: (n) => ({ commands: e }) => e.toggleNode(this.name, "paragraph", n)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-c": () => this.editor.commands.toggleCodeBlock(),
      // remove code block when at start of document or code block is empty
      Backspace: () => {
        const { empty: n, $anchor: e } = this.editor.state.selection, t = e.pos === 1;
        return !n || e.parent.type.name !== this.name ? !1 : t || !e.parent.textContent.length ? this.editor.commands.clearNodes() : !1;
      },
      // exit node on triple enter
      Enter: ({ editor: n }) => {
        if (!this.options.exitOnTripleEnter)
          return !1;
        const { state: e } = n, { selection: t } = e, { $from: r, empty: i } = t;
        if (!i || r.parent.type !== this.type)
          return !1;
        const s = r.parentOffset === r.parent.nodeSize - 2, o = r.parent.textContent.endsWith(`

`);
        return !s || !o ? !1 : n.chain().command(({ tr: l }) => (l.delete(r.pos - 2, r.pos), !0)).exitCode().run();
      },
      // exit node on arrow down
      ArrowDown: ({ editor: n }) => {
        if (!this.options.exitOnArrowDown)
          return !1;
        const { state: e } = n, { selection: t, doc: r } = e, { $from: i, empty: s } = t;
        if (!s || i.parent.type !== this.type || !(i.parentOffset === i.parent.nodeSize - 2))
          return !1;
        const l = i.after();
        return l === void 0 ? !1 : r.nodeAt(l) ? n.commands.command(({ tr: c }) => (c.setSelection(R.near(r.resolve(l))), !0)) : n.commands.exitCode();
      }
    };
  },
  addInputRules() {
    return [
      Xs({
        find: _0,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      }),
      Xs({
        find: D0,
        type: this.type,
        getAttributes: (n) => ({
          language: n[1]
        })
      })
    ];
  },
  addProseMirrorPlugins() {
    return [
      // this plugin creates a code block for pasted content from VS Code
      // we can also detect the copied code language
      new ke({
        key: new Je("codeBlockVSCodeHandler"),
        props: {
          handlePaste: (n, e) => {
            if (!e.clipboardData || this.editor.isActive(this.type.name))
              return !1;
            const t = e.clipboardData.getData("text/plain"), r = e.clipboardData.getData("vscode-editor-data"), i = r ? JSON.parse(r) : void 0, s = i?.mode;
            if (!t || !s)
              return !1;
            const { tr: o, schema: l } = n.state, a = l.text(t.replace(/\r\n?/g, `
`));
            return o.replaceSelectionWith(this.type.create({ language: s }, a)), o.selection.$from.parent.type !== this.type && o.setSelection(D.near(o.doc.resolve(Math.max(0, o.selection.from - 2)))), o.setMeta("paste", !0), n.dispatch(o), !0;
          }
        }
      })
    ];
  }
}), R0 = nt.create({
  name: "doc",
  topNode: !0,
  content: "block+"
});
function P0(n = {}) {
  return new ke({
    view(e) {
      return new $0(e, n);
    }
  });
}
class $0 {
  constructor(e, t) {
    var r;
    this.editorView = e, this.cursorPos = null, this.element = null, this.timeout = -1, this.width = (r = t.width) !== null && r !== void 0 ? r : 1, this.color = t.color === !1 ? void 0 : t.color || "black", this.class = t.class, this.handlers = ["dragover", "dragend", "drop", "dragleave"].map((i) => {
      let s = (o) => {
        this[i](o);
      };
      return e.dom.addEventListener(i, s), { name: i, handler: s };
    });
  }
  destroy() {
    this.handlers.forEach(({ name: e, handler: t }) => this.editorView.dom.removeEventListener(e, t));
  }
  update(e, t) {
    this.cursorPos != null && t.doc != e.state.doc && (this.cursorPos > e.state.doc.content.size ? this.setCursor(null) : this.updateOverlay());
  }
  setCursor(e) {
    e != this.cursorPos && (this.cursorPos = e, e == null ? (this.element.parentNode.removeChild(this.element), this.element = null) : this.updateOverlay());
  }
  updateOverlay() {
    let e = this.editorView.state.doc.resolve(this.cursorPos), t = !e.parent.inlineContent, r, i = this.editorView.dom, s = i.getBoundingClientRect(), o = s.width / i.offsetWidth, l = s.height / i.offsetHeight;
    if (t) {
      let f = e.nodeBefore, d = e.nodeAfter;
      if (f || d) {
        let p = this.editorView.nodeDOM(this.cursorPos - (f ? f.nodeSize : 0));
        if (p) {
          let h = p.getBoundingClientRect(), m = f ? h.bottom : h.top;
          f && d && (m = (m + this.editorView.nodeDOM(this.cursorPos).getBoundingClientRect().top) / 2);
          let g = this.width / 2 * l;
          r = { left: h.left, right: h.right, top: m - g, bottom: m + g };
        }
      }
    }
    if (!r) {
      let f = this.editorView.coordsAtPos(this.cursorPos), d = this.width / 2 * o;
      r = { left: f.left - d, right: f.left + d, top: f.top, bottom: f.bottom };
    }
    let a = this.editorView.dom.offsetParent;
    this.element || (this.element = a.appendChild(document.createElement("div")), this.class && (this.element.className = this.class), this.element.style.cssText = "position: absolute; z-index: 50; pointer-events: none;", this.color && (this.element.style.backgroundColor = this.color)), this.element.classList.toggle("prosemirror-dropcursor-block", t), this.element.classList.toggle("prosemirror-dropcursor-inline", !t);
    let c, u;
    if (!a || a == document.body && getComputedStyle(a).position == "static")
      c = -pageXOffset, u = -pageYOffset;
    else {
      let f = a.getBoundingClientRect(), d = f.width / a.offsetWidth, p = f.height / a.offsetHeight;
      c = f.left - a.scrollLeft * d, u = f.top - a.scrollTop * p;
    }
    this.element.style.left = (r.left - c) / o + "px", this.element.style.top = (r.top - u) / l + "px", this.element.style.width = (r.right - r.left) / o + "px", this.element.style.height = (r.bottom - r.top) / l + "px";
  }
  scheduleRemoval(e) {
    clearTimeout(this.timeout), this.timeout = setTimeout(() => this.setCursor(null), e);
  }
  dragover(e) {
    if (!this.editorView.editable)
      return;
    let t = this.editorView.posAtCoords({ left: e.clientX, top: e.clientY }), r = t && t.inside >= 0 && this.editorView.state.doc.nodeAt(t.inside), i = r && r.type.spec.disableDropCursor, s = typeof i == "function" ? i(this.editorView, t, e) : i;
    if (t && !s) {
      let o = t.pos;
      if (this.editorView.dragging && this.editorView.dragging.slice) {
        let l = Jc(this.editorView.state.doc, o, this.editorView.dragging.slice);
        l != null && (o = l);
      }
      this.setCursor(o), this.scheduleRemoval(5e3);
    }
  }
  dragend() {
    this.scheduleRemoval(20);
  }
  drop() {
    this.scheduleRemoval(20);
  }
  dragleave(e) {
    this.editorView.dom.contains(e.relatedTarget) || this.setCursor(null);
  }
}
const B0 = ee.create({
  name: "dropCursor",
  addOptions() {
    return {
      color: "currentColor",
      width: 1,
      class: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      P0(this.options)
    ];
  }
});
class W extends R {
  /**
  Create a gap cursor.
  */
  constructor(e) {
    super(e, e);
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    return W.valid(r) ? new W(r) : R.near(r);
  }
  content() {
    return x.empty;
  }
  eq(e) {
    return e instanceof W && e.head == this.head;
  }
  toJSON() {
    return { type: "gapcursor", pos: this.head };
  }
  /**
  @internal
  */
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for GapCursor.fromJSON");
    return new W(e.resolve(t.pos));
  }
  /**
  @internal
  */
  getBookmark() {
    return new zo(this.anchor);
  }
  /**
  @internal
  */
  static valid(e) {
    let t = e.parent;
    if (t.isTextblock || !z0(e) || !L0(e))
      return !1;
    let r = t.type.spec.allowGapCursor;
    if (r != null)
      return r;
    let i = t.contentMatchAt(e.index()).defaultType;
    return i && i.isTextblock;
  }
  /**
  @internal
  */
  static findGapCursorFrom(e, t, r = !1) {
    e: for (; ; ) {
      if (!r && W.valid(e))
        return e;
      let i = e.pos, s = null;
      for (let o = e.depth; ; o--) {
        let l = e.node(o);
        if (t > 0 ? e.indexAfter(o) < l.childCount : e.index(o) > 0) {
          s = l.child(t > 0 ? e.indexAfter(o) : e.index(o) - 1);
          break;
        } else if (o == 0)
          return null;
        i += t;
        let a = e.doc.resolve(i);
        if (W.valid(a))
          return a;
      }
      for (; ; ) {
        let o = t > 0 ? s.firstChild : s.lastChild;
        if (!o) {
          if (s.isAtom && !s.isText && !O.isSelectable(s)) {
            e = e.doc.resolve(i + s.nodeSize * t), r = !1;
            continue e;
          }
          break;
        }
        s = o, i += t;
        let l = e.doc.resolve(i);
        if (W.valid(l))
          return l;
      }
      return null;
    }
  }
}
W.prototype.visible = !1;
W.findFrom = W.findGapCursorFrom;
R.jsonID("gapcursor", W);
class zo {
  constructor(e) {
    this.pos = e;
  }
  map(e) {
    return new zo(e.map(this.pos));
  }
  resolve(e) {
    let t = e.resolve(this.pos);
    return W.valid(t) ? new W(t) : R.near(t);
  }
}
function of(n) {
  return n.isAtom || n.spec.isolating || n.spec.createGapCursor;
}
function z0(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.index(e), r = n.node(e);
    if (t == 0) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t - 1); ; i = i.lastChild) {
      if (i.childCount == 0 && !i.inlineContent || of(i.type))
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function L0(n) {
  for (let e = n.depth; e >= 0; e--) {
    let t = n.indexAfter(e), r = n.node(e);
    if (t == r.childCount) {
      if (r.type.spec.isolating)
        return !0;
      continue;
    }
    for (let i = r.child(t); ; i = i.firstChild) {
      if (i.childCount == 0 && !i.inlineContent || of(i.type))
        return !0;
      if (i.inlineContent)
        return !1;
    }
  }
  return !0;
}
function F0() {
  return new ke({
    props: {
      decorations: j0,
      createSelectionBetween(n, e, t) {
        return e.pos == t.pos && W.valid(t) ? new W(t) : null;
      },
      handleClick: H0,
      handleKeyDown: V0,
      handleDOMEvents: { beforeinput: q0 }
    }
  });
}
const V0 = Pu({
  ArrowLeft: Gr("horiz", -1),
  ArrowRight: Gr("horiz", 1),
  ArrowUp: Gr("vert", -1),
  ArrowDown: Gr("vert", 1)
});
function Gr(n, e) {
  const t = n == "vert" ? e > 0 ? "down" : "up" : e > 0 ? "right" : "left";
  return function(r, i, s) {
    let o = r.selection, l = e > 0 ? o.$to : o.$from, a = o.empty;
    if (o instanceof D) {
      if (!s.endOfTextblock(t) || l.depth == 0)
        return !1;
      a = !1, l = r.doc.resolve(e > 0 ? l.after() : l.before());
    }
    let c = W.findGapCursorFrom(l, e, a);
    return c ? (i && i(r.tr.setSelection(new W(c))), !0) : !1;
  };
}
function H0(n, e, t) {
  if (!n || !n.editable)
    return !1;
  let r = n.state.doc.resolve(e);
  if (!W.valid(r))
    return !1;
  let i = n.posAtCoords({ left: t.clientX, top: t.clientY });
  return i && i.inside > -1 && O.isSelectable(n.state.doc.nodeAt(i.inside)) ? !1 : (n.dispatch(n.state.tr.setSelection(new W(r))), !0);
}
function q0(n, e) {
  if (e.inputType != "insertCompositionText" || !(n.state.selection instanceof W))
    return !1;
  let { $from: t } = n.state.selection, r = t.parent.contentMatchAt(t.index()).findWrapping(n.state.schema.nodes.text);
  if (!r)
    return !1;
  let i = b.empty;
  for (let o = r.length - 1; o >= 0; o--)
    i = b.from(r[o].createAndFill(null, i));
  let s = n.state.tr.replace(t.pos, t.pos, new x(i, 0, 0));
  return s.setSelection(D.near(s.doc.resolve(t.pos + 1))), n.dispatch(s), !1;
}
function j0(n) {
  if (!(n.selection instanceof W))
    return null;
  let e = document.createElement("div");
  return e.className = "ProseMirror-gapcursor", Q.create(n.doc, [Pe.widget(n.selection.head, e, { key: "gapcursor" })]);
}
const W0 = ee.create({
  name: "gapCursor",
  addProseMirrorPlugins() {
    return [
      F0()
    ];
  },
  extendNodeSchema(n) {
    var e;
    const t = {
      name: n.name,
      options: n.options,
      storage: n.storage
    };
    return {
      allowGapCursor: (e = P(C(n, "allowGapCursor", t))) !== null && e !== void 0 ? e : null
    };
  }
}), K0 = nt.create({
  name: "hardBreak",
  addOptions() {
    return {
      keepMarks: !0,
      HTMLAttributes: {}
    };
  },
  inline: !0,
  group: "inline",
  selectable: !1,
  linebreakReplacement: !0,
  parseHTML() {
    return [
      { tag: "br" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["br", be(this.options.HTMLAttributes, n)];
  },
  renderText() {
    return `
`;
  },
  addCommands() {
    return {
      setHardBreak: () => ({ commands: n, chain: e, state: t, editor: r }) => n.first([
        () => n.exitCode(),
        () => n.command(() => {
          const { selection: i, storedMarks: s } = t;
          if (i.$from.parent.type.spec.isolating)
            return !1;
          const { keepMarks: o } = this.options, { splittableMarks: l } = r.extensionManager, a = s || i.$to.parentOffset && i.$from.marks();
          return e().insertContent({ type: this.name }).command(({ tr: c, dispatch: u }) => {
            if (u && a && o) {
              const f = a.filter((d) => l.includes(d.type.name));
              c.ensureMarks(f);
            }
            return !0;
          }).run();
        })
      ])
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Enter": () => this.editor.commands.setHardBreak(),
      "Shift-Enter": () => this.editor.commands.setHardBreak()
    };
  }
}), J0 = nt.create({
  name: "heading",
  addOptions() {
    return {
      levels: [1, 2, 3, 4, 5, 6],
      HTMLAttributes: {}
    };
  },
  content: "inline*",
  group: "block",
  defining: !0,
  addAttributes() {
    return {
      level: {
        default: 1,
        rendered: !1
      }
    };
  },
  parseHTML() {
    return this.options.levels.map((n) => ({
      tag: `h${n}`,
      attrs: { level: n }
    }));
  },
  renderHTML({ node: n, HTMLAttributes: e }) {
    return [`h${this.options.levels.includes(n.attrs.level) ? n.attrs.level : this.options.levels[0]}`, be(this.options.HTMLAttributes, e), 0];
  },
  addCommands() {
    return {
      setHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.setNode(this.name, n) : !1,
      toggleHeading: (n) => ({ commands: e }) => this.options.levels.includes(n.level) ? e.toggleNode(this.name, "paragraph", n) : !1
    };
  },
  addKeyboardShortcuts() {
    return this.options.levels.reduce((n, e) => ({
      ...n,
      [`Mod-Alt-${e}`]: () => this.editor.commands.toggleHeading({ level: e })
    }), {});
  },
  addInputRules() {
    return this.options.levels.map((n) => Xs({
      find: new RegExp(`^(#{${Math.min(...this.options.levels)},${n}})\\s$`),
      type: this.type,
      getAttributes: {
        level: n
      }
    }));
  }
});
var xi = 200, se = function() {
};
se.prototype.append = function(e) {
  return e.length ? (e = se.from(e), !this.length && e || e.length < xi && this.leafAppend(e) || this.length < xi && e.leafPrepend(this) || this.appendInner(e)) : this;
};
se.prototype.prepend = function(e) {
  return e.length ? se.from(e).append(this) : this;
};
se.prototype.appendInner = function(e) {
  return new U0(this, e);
};
se.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? se.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
se.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
se.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
se.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(s, o) {
    return i.push(e(s, o));
  }, t, r), i;
};
se.from = function(e) {
  return e instanceof se ? e : e && e.length ? new lf(e) : se.empty;
};
var lf = /* @__PURE__ */ (function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, s) {
    return i == 0 && s == this.length ? this : new e(this.values.slice(i, s));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, s, o, l) {
    for (var a = s; a < o; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, s, o, l) {
    for (var a = s - 1; a >= o; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= xi)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= xi)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
})(se);
se.empty = new lf([]);
var U0 = /* @__PURE__ */ (function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(s, l), o) === !1 || s > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, s) - l, o + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, s, o) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(s, l) - l, o + l) === !1 || s < l && this.left.forEachInvertedInner(r, Math.min(i, l), s, o) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var s = this.left.length;
    return i <= s ? this.left.slice(r, i) : r >= s ? this.right.slice(r - s, i - s) : this.left.slice(r, s).append(this.right.slice(0, i - s));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
})(se);
const G0 = 500;
class Ye {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  // Pop the latest event off the branch's history and apply it
  // to a document transform.
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, s;
    t && (i = this.remapping(r, this.items.length), s = i.maps.length);
    let o = e.tr, l, a, c = [], u = [];
    return this.items.forEach((f, d) => {
      if (!f.step) {
        i || (i = this.remapping(r, d + 1), s = i.maps.length), s--, u.push(f);
        return;
      }
      if (i) {
        u.push(new rt(f.map));
        let p = f.step.map(i.slice(s)), h;
        p && o.maybeStep(p).doc && (h = o.mapping.maps[o.mapping.maps.length - 1], c.push(new rt(h, void 0, void 0, c.length + u.length))), s--, h && i.appendMap(h, s);
      } else
        o.maybeStep(f.step);
      if (f.selection)
        return l = i ? f.selection.map(i.slice(s)) : f.selection, a = new Ye(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: o, selection: l };
  }
  // Create a new branch with the given transform added.
  addTransform(e, t, r, i) {
    let s = [], o = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let f = e.steps[u].invert(e.docs[u]), d = new rt(e.mapping.maps[u], f, t), p;
      (p = a && a.merge(d)) && (d = p, u ? s.pop() : l = l.slice(0, l.length - 1)), s.push(d), t && (o++, t = void 0), i || (a = d);
    }
    let c = o - r.depth;
    return c > Q0 && (l = Y0(l, c), o -= c), new Ye(l.append(s), o);
  }
  remapping(e, t) {
    let r = new vr();
    return this.items.forEach((i, s) => {
      let o = i.mirrorOffset != null && s - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, o);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new Ye(this.items.append(e.map((t) => new rt(t))), this.eventCount);
  }
  // When the collab module receives remote changes, the history has
  // to know about those, so that it can adjust the steps that were
  // rebased on top of the remote changes, and include the position
  // maps for the remote changes in its array of items.
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), s = e.mapping, o = e.steps.length, l = this.eventCount;
    this.items.forEach((d) => {
      d.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((d) => {
      let p = s.getMirror(--a);
      if (p == null)
        return;
      o = Math.min(o, p);
      let h = s.maps[p];
      if (d.step) {
        let m = e.steps[p].invert(e.docs[p]), g = d.selection && d.selection.map(s.slice(a + 1, p));
        g && l++, r.push(new rt(h, m, g));
      } else
        r.push(new rt(h));
    }, i);
    let c = [];
    for (let d = t; d < o; d++)
      c.push(new rt(s.maps[d]));
    let u = this.items.slice(0, i).append(c).append(r), f = new Ye(u, l);
    return f.emptyItemCount() > G0 && (f = f.compress(this.items.length - r.length)), f;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  // Compressing a branch means rewriting it to push the air (map-only
  // items) out. During collaboration, these naturally accumulate
  // because each remote change adds one. The `upto` argument is used
  // to ensure that only the items below a given level are compressed,
  // because `rebased` relies on a clean, untouched set of items in
  // order to associate old items with rebased steps.
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], s = 0;
    return this.items.forEach((o, l) => {
      if (l >= e)
        i.push(o), o.selection && s++;
      else if (o.step) {
        let a = o.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let u = o.selection && o.selection.map(t.slice(r));
          u && s++;
          let f = new rt(c.invert(), a, u), d, p = i.length - 1;
          (d = i.length && i[p].merge(f)) ? i[p] = d : i.push(f);
        }
      } else o.map && r--;
    }, this.items.length, 0), new Ye(se.from(i.reverse()), s);
  }
}
Ye.empty = new Ye(se.empty, 0);
function Y0(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class rt {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new rt(t.getMap().invert(), t, this.selection);
    }
  }
}
class Ot {
  constructor(e, t, r, i, s) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = s;
  }
}
const Q0 = 20;
function X0(n, e, t, r) {
  let i = t.getMeta(dn), s;
  if (i)
    return i.historyState;
  t.getMeta(tb) && (n = new Ot(n.done, n.undone, null, 0, -1));
  let o = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (o && o.getMeta(dn))
    return o.getMeta(dn).redo ? new Ot(n.done.addTransform(t, void 0, r, ni(e)), n.undone, ha(t.mapping.maps), n.prevTime, n.prevComposition) : new Ot(n.done, n.undone.addTransform(t, void 0, r, ni(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(o && o.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !o && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !Z0(t, n.prevRanges)), c = o ? ys(n.prevRanges, t.mapping) : ha(t.mapping.maps);
    return new Ot(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, ni(e)), Ye.empty, c, t.time, l ?? n.prevComposition);
  } else return (s = t.getMeta("rebased")) ? new Ot(n.done.rebased(t, s), n.undone.rebased(t, s), ys(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new Ot(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), ys(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function Z0(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let s = 0; s < e.length; s += 2)
      r <= e[s + 1] && i >= e[s] && (t = !0);
  }), t;
}
function ha(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, i, s, o) => e.push(s, o));
  return e;
}
function ys(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), s = e.map(n[r + 1], -1);
    i <= s && t.push(i, s);
  }
  return t;
}
function eb(n, e, t) {
  let r = ni(e), i = dn.get(e).spec.config, s = (t ? n.undone : n.done).popEvent(e, r);
  if (!s)
    return null;
  let o = s.selection.resolve(s.transform.doc), l = (t ? n.done : n.undone).addTransform(s.transform, e.selection.getBookmark(), i, r), a = new Ot(t ? l : s.remaining, t ? s.remaining : l, null, 0, -1);
  return s.transform.setSelection(o).setMeta(dn, { redo: t, historyState: a });
}
let bs = !1, pa = null;
function ni(n) {
  let e = n.plugins;
  if (pa != e) {
    bs = !1, pa = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        bs = !0;
        break;
      }
  }
  return bs;
}
const dn = new Je("history"), tb = new Je("closeHistory");
function nb(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new ke({
    key: dn,
    state: {
      init() {
        return new Ot(Ye.empty, Ye.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return X0(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? cf : r == "historyRedo" ? uf : null;
          return !i || !e.editable ? !1 : (t.preventDefault(), i(e.state, e.dispatch));
        }
      }
    }
  });
}
function af(n, e) {
  return (t, r) => {
    let i = dn.getState(t);
    if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let s = eb(i, t, n);
      s && r(e ? s.scrollIntoView() : s);
    }
    return !0;
  };
}
const cf = af(!1, !0), uf = af(!0, !0), rb = ee.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => cf(n, e),
      redo: () => ({ state: n, dispatch: e }) => uf(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      nb(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      // Russian keyboard layouts
      "Mod-я": () => this.editor.commands.undo(),
      "Shift-Mod-я": () => this.editor.commands.redo()
    };
  }
}), ib = nt.create({
  name: "horizontalRule",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  parseHTML() {
    return [{ tag: "hr" }];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["hr", be(this.options.HTMLAttributes, n)];
  },
  addCommands() {
    return {
      setHorizontalRule: () => ({ chain: n, state: e }) => {
        if (!b0(e, e.schema.nodes[this.name]))
          return !1;
        const { selection: t } = e, { $from: r, $to: i } = t, s = n();
        return r.parentOffset === 0 ? s.insertContentAt({
          from: Math.max(r.pos - 1, 0),
          to: i.pos
        }, {
          type: this.name
        }) : Ly(t) ? s.insertContentAt(i.pos, {
          type: this.name
        }) : s.insertContent({ type: this.name }), s.command(({ tr: o, dispatch: l }) => {
          var a;
          if (l) {
            const { $to: c } = o.selection, u = c.end();
            if (c.nodeAfter)
              c.nodeAfter.isTextblock ? o.setSelection(D.create(o.doc, c.pos + 1)) : c.nodeAfter.isBlock ? o.setSelection(O.create(o.doc, c.pos)) : o.setSelection(D.create(o.doc, c.pos));
            else {
              const f = (a = c.parent.type.contentMatch.defaultType) === null || a === void 0 ? void 0 : a.create();
              f && (o.insert(u, f), o.setSelection(D.create(o.doc, u + 1)));
            }
            o.scrollIntoView();
          }
          return !0;
        }).run();
      }
    };
  },
  addInputRules() {
    return [
      y0({
        find: /^(?:---|—-|___\s|\*\*\*\s)$/,
        type: this.type
      })
    ];
  }
}), sb = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, ob = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, lb = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, ab = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, cb = St.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", be(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      Yn({
        find: sb,
        type: this.type
      }),
      Yn({
        find: lb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Qn({
        find: ob,
        type: this.type
      }),
      Qn({
        find: ab,
        type: this.type
      })
    ];
  }
}), ub = nt.create({
  name: "listItem",
  addOptions() {
    return {
      HTMLAttributes: {},
      bulletListTypeName: "bulletList",
      orderedListTypeName: "orderedList"
    };
  },
  content: "paragraph block*",
  defining: !0,
  parseHTML() {
    return [
      {
        tag: "li"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["li", be(this.options.HTMLAttributes, n), 0];
  },
  addKeyboardShortcuts() {
    return {
      Enter: () => this.editor.commands.splitListItem(this.name),
      Tab: () => this.editor.commands.sinkListItem(this.name),
      "Shift-Tab": () => this.editor.commands.liftListItem(this.name)
    };
  }
}), fb = "listItem", ma = "textStyle", ga = /^(\d+)\.\s$/, db = nt.create({
  name: "orderedList",
  addOptions() {
    return {
      itemTypeName: "listItem",
      HTMLAttributes: {},
      keepMarks: !1,
      keepAttributes: !1
    };
  },
  group: "block list",
  content() {
    return `${this.options.itemTypeName}+`;
  },
  addAttributes() {
    return {
      start: {
        default: 1,
        parseHTML: (n) => n.hasAttribute("start") ? parseInt(n.getAttribute("start") || "", 10) : 1
      },
      type: {
        default: null,
        parseHTML: (n) => n.getAttribute("type")
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "ol"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    const { start: e, ...t } = n;
    return e === 1 ? ["ol", be(this.options.HTMLAttributes, t), 0] : ["ol", be(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      toggleOrderedList: () => ({ commands: n, chain: e }) => this.options.keepAttributes ? e().toggleList(this.name, this.options.itemTypeName, this.options.keepMarks).updateAttributes(fb, this.editor.getAttributes(ma)).run() : n.toggleList(this.name, this.options.itemTypeName, this.options.keepMarks)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-7": () => this.editor.commands.toggleOrderedList()
    };
  },
  addInputRules() {
    let n = Tr({
      find: ga,
      type: this.type,
      getAttributes: (e) => ({ start: +e[1] }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1]
    });
    return (this.options.keepMarks || this.options.keepAttributes) && (n = Tr({
      find: ga,
      type: this.type,
      keepMarks: this.options.keepMarks,
      keepAttributes: this.options.keepAttributes,
      getAttributes: (e) => ({ start: +e[1], ...this.editor.getAttributes(ma) }),
      joinPredicate: (e, t) => t.childCount + t.attrs.start === +e[1],
      editor: this.editor
    })), [
      n
    ];
  }
}), hb = nt.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", be(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), pb = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))$/, mb = /(?:^|\s)(~~(?!\s+~~)((?:[^~]+))~~(?!\s+~~))/g, gb = St.create({
  name: "strike",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "s"
      },
      {
        tag: "del"
      },
      {
        tag: "strike"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("line-through") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["s", be(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setStrike: () => ({ commands: n }) => n.setMark(this.name),
      toggleStrike: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetStrike: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-s": () => this.editor.commands.toggleStrike()
    };
  },
  addInputRules() {
    return [
      Yn({
        find: pb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Qn({
        find: mb,
        type: this.type
      })
    ];
  }
}), yb = nt.create({
  name: "text",
  group: "inline"
}), bb = ee.create({
  name: "starterKit",
  addExtensions() {
    const n = [];
    return this.options.bold !== !1 && n.push(C0.configure(this.options.bold)), this.options.blockquote !== !1 && n.push(k0.configure(this.options.blockquote)), this.options.bulletList !== !1 && n.push(E0.configure(this.options.bulletList)), this.options.code !== !1 && n.push(A0.configure(this.options.code)), this.options.codeBlock !== !1 && n.push(I0.configure(this.options.codeBlock)), this.options.document !== !1 && n.push(R0.configure(this.options.document)), this.options.dropcursor !== !1 && n.push(B0.configure(this.options.dropcursor)), this.options.gapcursor !== !1 && n.push(W0.configure(this.options.gapcursor)), this.options.hardBreak !== !1 && n.push(K0.configure(this.options.hardBreak)), this.options.heading !== !1 && n.push(J0.configure(this.options.heading)), this.options.history !== !1 && n.push(rb.configure(this.options.history)), this.options.horizontalRule !== !1 && n.push(ib.configure(this.options.horizontalRule)), this.options.italic !== !1 && n.push(cb.configure(this.options.italic)), this.options.listItem !== !1 && n.push(ub.configure(this.options.listItem)), this.options.orderedList !== !1 && n.push(db.configure(this.options.orderedList)), this.options.paragraph !== !1 && n.push(hb.configure(this.options.paragraph)), this.options.strike !== !1 && n.push(gb.configure(this.options.strike)), this.options.text !== !1 && n.push(yb.configure(this.options.text)), n;
  }
}), vb = St.create({
  name: "underline",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "u"
      },
      {
        style: "text-decoration",
        consuming: !1,
        getAttrs: (n) => n.includes("underline") ? {} : !1
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["u", be(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setUnderline: () => ({ commands: n }) => n.setMark(this.name),
      toggleUnderline: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetUnderline: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-u": () => this.editor.commands.toggleUnderline(),
      "Mod-U": () => this.editor.commands.toggleUnderline()
    };
  }
}), kb = ee.create({
  name: "textAlign",
  addOptions() {
    return {
      types: [],
      alignments: ["left", "center", "right", "justify"],
      defaultAlignment: null
    };
  },
  addGlobalAttributes() {
    return [
      {
        types: this.options.types,
        attributes: {
          textAlign: {
            default: this.options.defaultAlignment,
            parseHTML: (n) => {
              const e = n.style.textAlign;
              return this.options.alignments.includes(e) ? e : this.options.defaultAlignment;
            },
            renderHTML: (n) => n.textAlign ? { style: `text-align: ${n.textAlign}` } : {}
          }
        }
      }
    ];
  },
  addCommands() {
    return {
      setTextAlign: (n) => ({ commands: e }) => this.options.alignments.includes(n) ? this.options.types.map((t) => e.updateAttributes(t, { textAlign: n })).every((t) => t) : !1,
      unsetTextAlign: () => ({ commands: n }) => this.options.types.map((e) => n.resetAttributes(e, "textAlign")).every((e) => e),
      toggleTextAlign: (n) => ({ editor: e, commands: t }) => this.options.alignments.includes(n) ? e.isActive({ textAlign: n }) ? t.unsetTextAlign() : t.setTextAlign(n) : !1
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Shift-l": () => this.editor.commands.setTextAlign("left"),
      "Mod-Shift-e": () => this.editor.commands.setTextAlign("center"),
      "Mod-Shift-r": () => this.editor.commands.setTextAlign("right"),
      "Mod-Shift-j": () => this.editor.commands.setTextAlign("justify")
    };
  }
}), xb = ee.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something …",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new ke({
        key: new Je("placeholder"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            const t = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!t)
              return null;
            const s = this.editor.isEmpty;
            return n.descendants((o, l) => {
              const a = r >= l && r <= l + o.nodeSize, c = !o.isLeaf && Ki(o);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const u = [this.options.emptyNodeClass];
                s && u.push(this.options.emptyEditorClass);
                const f = Pe.node(l, l + o.nodeSize, {
                  class: u.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: o,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                i.push(f);
              }
              return this.options.includeChildren;
            }), Q.create(n, i);
          }
        }
      })
    ];
  }
}), Sb = ee.create({
  name: "characterCount",
  addOptions() {
    return {
      limit: null,
      mode: "textSize",
      textCounter: (n) => n.length,
      wordCounter: (n) => n.split(" ").filter((e) => e !== "").length
    };
  },
  addStorage() {
    return {
      characters: () => 0,
      words: () => 0
    };
  },
  onBeforeCreate() {
    this.storage.characters = (n) => {
      const e = n?.node || this.editor.state.doc;
      if ((n?.mode || this.options.mode) === "textSize") {
        const r = e.textBetween(0, e.content.size, void 0, " ");
        return this.options.textCounter(r);
      }
      return e.nodeSize;
    }, this.storage.words = (n) => {
      const e = n?.node || this.editor.state.doc, t = e.textBetween(0, e.content.size, " ", " ");
      return this.options.wordCounter(t);
    };
  },
  addProseMirrorPlugins() {
    let n = !1;
    return [
      new ke({
        key: new Je("characterCount"),
        appendTransaction: (e, t, r) => {
          if (n)
            return;
          const i = this.options.limit;
          if (i == null || i === 0) {
            n = !0;
            return;
          }
          const s = this.storage.characters({ node: r.doc });
          if (s > i) {
            const o = s - i, l = 0, a = o;
            console.warn(`[CharacterCount] Initial content exceeded limit of ${i} characters. Content was automatically trimmed.`);
            const c = r.tr.deleteRange(l, a);
            return n = !0, c;
          }
          n = !0;
        },
        filterTransaction: (e, t) => {
          const r = this.options.limit;
          if (!e.docChanged || r === 0 || r === null || r === void 0)
            return !0;
          const i = this.storage.characters({ node: t.doc }), s = this.storage.characters({ node: e.doc });
          if (s <= r || i > r && s > r && s <= i)
            return !0;
          if (i > r && s > r && s > i || !e.getMeta("paste"))
            return !1;
          const l = e.selection.$head.pos, a = s - r, c = l - a, u = l;
          return e.deleteRange(c, u), !(this.storage.characters({ node: e.doc }) > r);
        }
      })
    ];
  }
}), wb = (n) => K({
  find: /--$/,
  replace: n ?? "—"
}), Mb = (n) => K({
  find: /\.\.\.$/,
  replace: n ?? "…"
}), Cb = (n) => K({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(")$/,
  replace: n ?? "“"
}), Tb = (n) => K({
  find: /"$/,
  replace: n ?? "”"
}), Eb = (n) => K({
  find: /(?:^|[\s{[(<'"\u2018\u201C])(')$/,
  replace: n ?? "‘"
}), Ob = (n) => K({
  find: /'$/,
  replace: n ?? "’"
}), Nb = (n) => K({
  find: /<-$/,
  replace: n ?? "←"
}), Ab = (n) => K({
  find: /->$/,
  replace: n ?? "→"
}), _b = (n) => K({
  find: /\(c\)$/,
  replace: n ?? "©"
}), Db = (n) => K({
  find: /\(tm\)$/,
  replace: n ?? "™"
}), Ib = (n) => K({
  find: /\(sm\)$/,
  replace: n ?? "℠"
}), Rb = (n) => K({
  find: /\(r\)$/,
  replace: n ?? "®"
}), Pb = (n) => K({
  find: /(?:^|\s)(1\/2)\s$/,
  replace: n ?? "½"
}), $b = (n) => K({
  find: /\+\/-$/,
  replace: n ?? "±"
}), Bb = (n) => K({
  find: /!=$/,
  replace: n ?? "≠"
}), zb = (n) => K({
  find: /<<$/,
  replace: n ?? "«"
}), Lb = (n) => K({
  find: />>$/,
  replace: n ?? "»"
}), Fb = (n) => K({
  find: /\d+\s?([*x])\s?\d+$/,
  replace: n ?? "×"
}), Vb = (n) => K({
  find: /\^2$/,
  replace: n ?? "²"
}), Hb = (n) => K({
  find: /\^3$/,
  replace: n ?? "³"
}), qb = (n) => K({
  find: /(?:^|\s)(1\/4)\s$/,
  replace: n ?? "¼"
}), jb = (n) => K({
  find: /(?:^|\s)(3\/4)\s$/,
  replace: n ?? "¾"
}), Wb = ee.create({
  name: "typography",
  addOptions() {
    return {
      closeDoubleQuote: "”",
      closeSingleQuote: "’",
      copyright: "©",
      ellipsis: "…",
      emDash: "—",
      laquo: "«",
      leftArrow: "←",
      multiplication: "×",
      notEqual: "≠",
      oneHalf: "½",
      oneQuarter: "¼",
      openDoubleQuote: "“",
      openSingleQuote: "‘",
      plusMinus: "±",
      raquo: "»",
      registeredTrademark: "®",
      rightArrow: "→",
      servicemark: "℠",
      superscriptThree: "³",
      superscriptTwo: "²",
      threeQuarters: "¾",
      trademark: "™"
    };
  },
  addInputRules() {
    const n = [];
    return this.options.emDash !== !1 && n.push(wb(this.options.emDash)), this.options.ellipsis !== !1 && n.push(Mb(this.options.ellipsis)), this.options.openDoubleQuote !== !1 && n.push(Cb(this.options.openDoubleQuote)), this.options.closeDoubleQuote !== !1 && n.push(Tb(this.options.closeDoubleQuote)), this.options.openSingleQuote !== !1 && n.push(Eb(this.options.openSingleQuote)), this.options.closeSingleQuote !== !1 && n.push(Ob(this.options.closeSingleQuote)), this.options.leftArrow !== !1 && n.push(Nb(this.options.leftArrow)), this.options.rightArrow !== !1 && n.push(Ab(this.options.rightArrow)), this.options.copyright !== !1 && n.push(_b(this.options.copyright)), this.options.trademark !== !1 && n.push(Db(this.options.trademark)), this.options.servicemark !== !1 && n.push(Ib(this.options.servicemark)), this.options.registeredTrademark !== !1 && n.push(Rb(this.options.registeredTrademark)), this.options.oneHalf !== !1 && n.push(Pb(this.options.oneHalf)), this.options.plusMinus !== !1 && n.push($b(this.options.plusMinus)), this.options.notEqual !== !1 && n.push(Bb(this.options.notEqual)), this.options.laquo !== !1 && n.push(zb(this.options.laquo)), this.options.raquo !== !1 && n.push(Lb(this.options.raquo)), this.options.multiplication !== !1 && n.push(Fb(this.options.multiplication)), this.options.superscriptTwo !== !1 && n.push(Vb(this.options.superscriptTwo)), this.options.superscriptThree !== !1 && n.push(Hb(this.options.superscriptThree)), this.options.oneQuarter !== !1 && n.push(qb(this.options.oneQuarter)), this.options.threeQuarters !== !1 && n.push(jb(this.options.threeQuarters)), n;
  }
});
function Kb() {
  return [
    bb.configure({
      heading: { levels: [1, 2, 3] }
    }),
    vb,
    kb.configure({
      types: ["heading", "paragraph"]
    }),
    xb.configure({
      placeholder: "Start writing..."
    }),
    Sb,
    Wb
  ];
}
var Jb = /* @__PURE__ */ ze('<div class="toolbar flex flex-wrap gap-1 p-2 border-b border-zinc-700 bg-zinc-900"><button><strong>B</strong></button> <button><em>I</em></button> <button><u>U</u></button> <button><s>S</s></button> <span class="w-px h-6 bg-zinc-700 mx-1"></span> <button title="Heading 1">H1</button> <button title="Heading 2">H2</button> <button title="Heading 3">H3</button> <span class="w-px h-6 bg-zinc-700 mx-1"></span> <button>&bull;</button> <button>1.</button> <button>&ldquo;</button> <button>&lt;/&gt;</button> <span class="w-px h-6 bg-zinc-700 mx-1"></span> <button title="Align Left" class="svelte-igq982">&#8676;</button> <button title="Align Center" class="svelte-igq982">&#8596;</button> <button title="Align Right" class="svelte-igq982">&#8677;</button> <span class="w-px h-6 bg-zinc-700 mx-1"></span> <button title="Undo" class="svelte-igq982">&#8617;</button> <button title="Redo" class="svelte-igq982">&#8618;</button></div>');
const Ub = {
  hash: "svelte-igq982",
  code: "button.svelte-igq982 {padding:0.25rem 0.5rem;border-radius:0.25rem;font-size:0.875rem;color:#d4d4d8;background:transparent;border:1px solid transparent;cursor:pointer;min-width:2rem;text-align:center;}button.svelte-igq982:hover {background:#3f3f46;border-color:#52525b;}button.active.svelte-igq982, button.svelte-igq982.active {background:#4f46e5;color:white;border-color:#6366f1;}button.svelte-igq982:disabled {opacity:0.4;cursor:not-allowed;}"
};
function ff(n, e) {
  Ar(e, !0), fc(n, Ub);
  let t = gr(e, "editor");
  function r(a, c) {
    return {
      onclick: () => {
        t() && a();
      },
      class: t()?.isActive(c) ? "active" : ""
    };
  }
  var i = {
    get editor() {
      return t();
    },
    set editor(a) {
      t(a), pn();
    }
  }, s = lc(), o = oi(s);
  {
    var l = (a) => {
      var c = Jb(), u = U(c);
      Ct(
        u,
        (V) => ({ ...V, title: "Bold" }),
        [
          () => r(() => t().chain().focus().toggleBold().run(), "bold")
        ],
        void 0,
        void 0,
        "svelte-igq982"
      );
      var f = q(u, 2);
      Ct(
        f,
        (V) => ({ ...V, title: "Italic" }),
        [
          () => r(() => t().chain().focus().toggleItalic().run(), "italic")
        ],
        void 0,
        void 0,
        "svelte-igq982"
      );
      var d = q(f, 2);
      Ct(
        d,
        (V) => ({ ...V, title: "Underline" }),
        [
          () => r(() => t().chain().focus().toggleUnderline().run(), "underline")
        ],
        void 0,
        void 0,
        "svelte-igq982"
      );
      var p = q(d, 2);
      Ct(
        p,
        (V) => ({ ...V, title: "Strikethrough" }),
        [
          () => r(() => t().chain().focus().toggleStrike().run(), "strike")
        ],
        void 0,
        void 0,
        "svelte-igq982"
      );
      var h = q(p, 4);
      let m;
      var g = q(h, 2);
      let y;
      var k = q(g, 2);
      let S;
      var M = q(k, 4);
      Ct(
        M,
        (V) => ({ ...V, title: "Bullet List" }),
        [
          () => r(() => t().chain().focus().toggleBulletList().run(), "bulletList")
        ],
        void 0,
        void 0,
        "svelte-igq982"
      );
      var A = q(M, 2);
      Ct(
        A,
        (V) => ({ ...V, title: "Ordered List" }),
        [
          () => r(() => t().chain().focus().toggleOrderedList().run(), "orderedList")
        ],
        void 0,
        void 0,
        "svelte-igq982"
      );
      var E = q(A, 2);
      Ct(
        E,
        (V) => ({ ...V, title: "Blockquote" }),
        [
          () => r(() => t().chain().focus().toggleBlockquote().run(), "blockquote")
        ],
        void 0,
        void 0,
        "svelte-igq982"
      );
      var v = q(E, 2);
      Ct(
        v,
        (V) => ({ ...V, title: "Code Block" }),
        [
          () => r(() => t().chain().focus().toggleCodeBlock().run(), "codeBlock")
        ],
        void 0,
        void 0,
        "svelte-igq982"
      );
      var T = q(v, 4), w = q(T, 2), _ = q(w, 2), _e = q(_, 4), Ue = q(_e, 2);
      J(c), Zt(
        (V, dt, wt, er, I) => {
          m = Qr(h, 1, "svelte-igq982", null, m, V), y = Qr(g, 1, "svelte-igq982", null, y, dt), S = Qr(k, 1, "svelte-igq982", null, S, wt), _e.disabled = er, Ue.disabled = I;
        },
        [
          () => ({ active: t().isActive("heading", { level: 1 }) }),
          () => ({ active: t().isActive("heading", { level: 2 }) }),
          () => ({ active: t().isActive("heading", { level: 3 }) }),
          () => !t().can().undo(),
          () => !t().can().redo()
        ]
      ), Z("click", h, () => t().chain().focus().toggleHeading({ level: 1 }).run()), Z("click", g, () => t().chain().focus().toggleHeading({ level: 2 }).run()), Z("click", k, () => t().chain().focus().toggleHeading({ level: 3 }).run()), Z("click", T, () => t().chain().focus().setTextAlign("left").run()), Z("click", w, () => t().chain().focus().setTextAlign("center").run()), Z("click", _, () => t().chain().focus().setTextAlign("right").run()), Z("click", _e, () => t().chain().focus().undo().run()), Z("click", Ue, () => t().chain().focus().redo().run()), ce(a, c);
    };
    Rn(o, (a) => {
      t() && a(l);
    });
  }
  return ce(n, s), _r(i);
}
Rr(["click"]);
customElements.define("scribe-toolbar", Ii(ff, { editor: {} }, [], []));
var Gb = /* @__PURE__ */ ze('<input type="text" class="flex-1 text-sm font-semibold bg-zinc-800 text-zinc-200 border border-zinc-600 rounded px-2 py-1 outline-none focus:border-indigo-500"/>'), Yb = /* @__PURE__ */ ze('<button class="text-sm font-semibold text-zinc-300 hover:text-zinc-100 truncate text-left cursor-text" title="Click to rename"> </button>'), Qb = /* @__PURE__ */ ze('<div class="flex flex-col h-full bg-zinc-950 text-zinc-200"><div class="flex items-center gap-2 px-4 py-2 border-b border-zinc-800"><!></div> <!> <div class="flex-1 overflow-auto"><div></div></div> <div class="flex items-center justify-between px-4 py-1 text-xs text-zinc-500 border-t border-zinc-800"><span> </span> <span> </span></div></div>');
const Xb = {
  hash: "svelte-1di7jos",
  code: ".tiptap {min-height:400px;}.tiptap p.is-editor-empty:first-child::before {color:#71717a;content:attr(data-placeholder);float:left;height:0;pointer-events:none;}.tiptap h1 {font-size:2rem;font-weight:700;margin:1rem 0 0.5rem;}.tiptap h2 {font-size:1.5rem;font-weight:600;margin:0.75rem 0 0.5rem;}.tiptap h3 {font-size:1.25rem;font-weight:600;margin:0.5rem 0 0.25rem;}.tiptap ul {list-style:disc;padding-left:1.5rem;}.tiptap ol {list-style:decimal;padding-left:1.5rem;}.tiptap blockquote {border-left:3px solid #4f46e5;padding-left:1rem;margin:0.5rem 0;color:#a1a1aa;}.tiptap pre {background:#18181b;border-radius:0.5rem;padding:0.75rem;font-family:monospace;overflow-x:auto;}.tiptap code {background:#27272a;border-radius:0.25rem;padding:0.125rem 0.25rem;font-size:0.875em;}.tiptap hr {border:none;border-top:1px solid #3f3f46;margin:1rem 0;}"
};
function df(n, e) {
  Ar(e, !0), fc(n, Xb);
  let t = gr(e, "documentId"), r = gr(e, "onTitleChange"), i = /* @__PURE__ */ G(null), s, o = /* @__PURE__ */ G(!1), l = /* @__PURE__ */ G(0), a = null, c = /* @__PURE__ */ G(""), u = /* @__PURE__ */ G(!1), f = /* @__PURE__ */ G("");
  Di(async () => {
    B(
      i,
      new g0({
        element: s,
        extensions: Kb(),
        content: "",
        editorProps: {
          attributes: {
            class: "prose prose-invert max-w-none p-4 min-h-[400px] focus:outline-none"
          }
        },
        onUpdate: ({ editor: I }) => {
          B(l, I.storage.characterCount.characters(), !0), y();
        }
      }),
      !0
    ), await d();
  }), zd(() => {
    a && clearTimeout(a), N(i)?.destroy();
  });
  async function d() {
    try {
      const I = await uh(t());
      B(c, I.title, !0);
    } catch (I) {
      console.error("[scribe] Failed to load document:", I);
    }
    await p();
  }
  async function p() {
    try {
      const I = await hh(t());
      if (I.content && I.content !== "{}" && I.content !== "") {
        const le = JSON.parse(I.content);
        N(i)?.commands.setContent(le);
      }
    } catch (I) {
      console.error("[scribe] Failed to load content:", I);
    }
  }
  function h() {
    B(f, N(c), !0), B(u, !0);
  }
  async function m() {
    B(u, !1);
    const I = N(f).trim();
    if (!(!I || I === N(c)))
      try {
        await kc(t(), I), B(c, I, !0), r()?.(I);
      } catch (le) {
        console.error("[scribe] Failed to rename:", le);
      }
  }
  function g(I) {
    I.key === "Enter" && m(), I.key === "Escape" && B(u, !1);
  }
  function y() {
    a && clearTimeout(a), a = setTimeout(() => k(), 2e3);
  }
  async function k() {
    if (!(!N(i) || N(o))) {
      B(o, !0);
      try {
        const I = JSON.stringify(N(i).getJSON());
        await ph(t(), I);
      } catch (I) {
        console.error("[scribe] Failed to save:", I);
      } finally {
        B(o, !1);
      }
    }
  }
  var S = {
    get documentId() {
      return t();
    },
    set documentId(I) {
      t(I), pn();
    },
    get onTitleChange() {
      return r();
    },
    set onTitleChange(I) {
      r(I), pn();
    }
  }, M = Qb(), A = U(M), E = U(A);
  {
    var v = (I) => {
      var le = Gb();
      mo(le), ao(le, !0), oc("blur", le, m), Z("keydown", le, g), yc(le, () => N(f), (Mn) => B(f, Mn)), ce(I, le);
    }, T = (I) => {
      var le = Yb(), Mn = U(le, !0);
      J(le), Zt(() => tn(Mn, N(c) || "Untitled")), Z("click", le, h), ce(I, le);
    };
    Rn(E, (I) => {
      N(u) ? I(v) : I(T, -1);
    });
  }
  J(A);
  var w = q(A, 2);
  ff(w, {
    get editor() {
      return N(i);
    }
  });
  var _ = q(w, 2), _e = U(_);
  bc(_e, (I) => s = I, () => s), J(_);
  var Ue = q(_, 2), V = U(Ue), dt = U(V);
  J(V);
  var wt = q(V, 2), er = U(wt, !0);
  return J(wt), J(Ue), J(M), Zt(() => {
    tn(dt, `${N(l) ?? ""} characters`), tn(er, N(o) ? "Saving..." : "Saved");
  }), ce(n, M), _r(S);
}
Rr(["keydown", "click"]);
customElements.define("scribe-editor", Ii(df, { documentId: {}, onTitleChange: {} }, [], []));
var Zb = /* @__PURE__ */ ze('<div class="w-64 border-r border-zinc-800 flex-shrink-0 flex flex-col"><button class="px-3 py-2 text-xs text-zinc-400 hover:text-zinc-200 text-left border-b border-zinc-800">&#8592; Back to list</button> <!></div> <div class="flex-1 flex flex-col min-w-0"><!></div>', 1), ev = /* @__PURE__ */ ze('<div class="flex-1"><!></div>'), tv = /* @__PURE__ */ ze('<div class="flex h-full bg-zinc-950 text-zinc-200"><!></div>');
function nv(n, e) {
  Ar(e, !0);
  let t = gr(e, "api"), r = /* @__PURE__ */ G(null), i = /* @__PURE__ */ G(null);
  Di(() => {
    ah(t());
  });
  function s(p) {
    B(r, p, !0);
  }
  function o() {
    B(r, null);
  }
  function l() {
    N(i)?.refresh();
  }
  var a = {
    get api() {
      return t();
    },
    set api(p) {
      t(p), pn();
    }
  }, c = tv(), u = U(c);
  {
    var f = (p) => {
      var h = Zb(), m = oi(h), g = U(m), y = q(g, 2);
      bc(Ds(y, { onSelect: s }), (M) => B(i, M, !0), () => N(i)), J(m);
      var k = q(m, 2), S = U(k);
      Fd(S, () => N(r), (M) => {
        df(M, {
          get documentId() {
            return N(r);
          },
          onTitleChange: l
        });
      }), J(k), Z("click", g, o), ce(p, h);
    }, d = (p) => {
      var h = ev(), m = U(h);
      Ds(m, { onSelect: s }), J(h), ce(p, h);
    };
    Rn(u, (p) => {
      N(r) ? p(f) : p(d, -1);
    });
  }
  return J(c), ce(n, c), _r(a);
}
Rr(["click"]);
customElements.define("scribe-studio", Ii(nv, { api: {} }, [], []));
export {
  nv as default
};
