;(function(){
var g, m = this;
function n(a) {
  var b = typeof a;
  if ("object" == b) {
    if (a) {
      if (a instanceof Array) {
        return "array";
      }
      if (a instanceof Object) {
        return b;
      }
      var c = Object.prototype.toString.call(a);
      if ("[object Window]" == c) {
        return "object";
      }
      if ("[object Array]" == c || "number" == typeof a.length && "undefined" != typeof a.splice && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("splice")) {
        return "array";
      }
      if ("[object Function]" == c || "undefined" != typeof a.call && "undefined" != typeof a.propertyIsEnumerable && !a.propertyIsEnumerable("call")) {
        return "function";
      }
    } else {
      return "null";
    }
  } else {
    if ("function" == b && "undefined" == typeof a.call) {
      return "object";
    }
  }
  return b;
}
function aa(a) {
  var b = n(a);
  return "array" == b || "object" == b && "number" == typeof a.length;
}
function ba(a) {
  return "string" == typeof a;
}
function ca(a) {
  return "function" == n(a);
}
function da(a) {
  var b = typeof a;
  return "object" == b && null != a || "function" == b;
}
var ea = "closure_uid_" + (1E9 * Math.random() >>> 0), ga = 0;
function ha(a, b, c) {
  return a.call.apply(a.bind, arguments);
}
function ia(a, b, c) {
  if (!a) {
    throw Error();
  }
  if (2 < arguments.length) {
    var d = Array.prototype.slice.call(arguments, 2);
    return function() {
      var c = Array.prototype.slice.call(arguments);
      Array.prototype.unshift.apply(c, d);
      return a.apply(b, c);
    };
  }
  return function() {
    return a.apply(b, arguments);
  };
}
function ja(a, b, c) {
  ja = Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? ha : ia;
  return ja.apply(null, arguments);
}
var ka = Date.now || function() {
  return+new Date;
};
function la(a, b) {
  function c() {
  }
  c.prototype = b.prototype;
  a.Ud = b.prototype;
  a.prototype = new c;
  a.prototype.constructor = a;
  a.Nb = function(a, c, f) {
    var h = Array.prototype.slice.call(arguments, 2);
    b.prototype[c].apply(a, h);
  };
}
;function na(a, b) {
  for (var c = a.split("%s"), d = "", e = Array.prototype.slice.call(arguments, 1);e.length && 1 < c.length;) {
    d += c.shift() + e.shift();
  }
  return d + c.join("%s");
}
function oa(a) {
  if (!pa.test(a)) {
    return a;
  }
  -1 != a.indexOf("\x26") && (a = a.replace(qa, "\x26amp;"));
  -1 != a.indexOf("\x3c") && (a = a.replace(ra, "\x26lt;"));
  -1 != a.indexOf("\x3e") && (a = a.replace(ta, "\x26gt;"));
  -1 != a.indexOf('"') && (a = a.replace(ua, "\x26quot;"));
  -1 != a.indexOf("'") && (a = a.replace(va, "\x26#39;"));
  return a;
}
var qa = /&/g, ra = /</g, ta = />/g, ua = /"/g, va = /'/g, pa = /[&<>"']/;
Math.random();
function wa(a) {
  if (Error.captureStackTrace) {
    Error.captureStackTrace(this, wa);
  } else {
    var b = Error().stack;
    b && (this.stack = b);
  }
  a && (this.message = String(a));
}
la(wa, Error);
wa.prototype.name = "CustomError";
var xa;
function ya(a, b) {
  b.unshift(a);
  wa.call(this, na.apply(null, b));
  b.shift();
}
la(ya, wa);
ya.prototype.name = "AssertionError";
function za(a, b) {
  throw new ya("Failure" + (a ? ": " + a : ""), Array.prototype.slice.call(arguments, 1));
}
;var Aa = Array.prototype, Ba = Aa.indexOf ? function(a, b, c) {
  return Aa.indexOf.call(a, b, c);
} : function(a, b, c) {
  c = null == c ? 0 : 0 > c ? Math.max(0, a.length + c) : c;
  if (ba(a)) {
    return ba(b) && 1 == b.length ? a.indexOf(b, c) : -1;
  }
  for (;c < a.length;c++) {
    if (c in a && a[c] === b) {
      return c;
    }
  }
  return-1;
}, Ca = Aa.forEach ? function(a, b, c) {
  Aa.forEach.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ba(a) ? a.split("") : a, f = 0;f < d;f++) {
    f in e && b.call(c, e[f], f, a);
  }
}, Da = Aa.filter ? function(a, b, c) {
  return Aa.filter.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = [], f = 0, h = ba(a) ? a.split("") : a, k = 0;k < d;k++) {
    if (k in h) {
      var l = h[k];
      b.call(c, l, k, a) && (e[f++] = l);
    }
  }
  return e;
}, Ea = Aa.some ? function(a, b, c) {
  return Aa.some.call(a, b, c);
} : function(a, b, c) {
  for (var d = a.length, e = ba(a) ? a.split("") : a, f = 0;f < d;f++) {
    if (f in e && b.call(c, e[f], f, a)) {
      return!0;
    }
  }
  return!1;
};
function Ga(a) {
  var b = a.length;
  if (0 < b) {
    for (var c = Array(b), d = 0;d < b;d++) {
      c[d] = a[d];
    }
    return c;
  }
  return[];
}
;function Ha(a, b) {
  for (var c in a) {
    b.call(void 0, a[c], c, a);
  }
}
;function Ia(a, b) {
  null != a && this.append.apply(this, arguments);
}
Ia.prototype.ab = "";
Ia.prototype.append = function(a, b, c) {
  this.ab += a;
  if (null != b) {
    for (var d = 1;d < arguments.length;d++) {
      this.ab += arguments[d];
    }
  }
  return this;
};
Ia.prototype.toString = function() {
  return this.ab;
};
var Ja, Ka = null;
function La() {
  return new Ma(null, 5, [new q(null, "flush-on-newline", "flush-on-newline", 4338025857), !0, new q(null, "readably", "readably", 4441712502), !0, new q(null, "meta", "meta", 1017252215), !1, new q(null, "dup", "dup", 1014004081), !1, new q(null, "print-length", "print-length", 3960797560), null], null);
}
function r(a) {
  return null != a && !1 !== a;
}
function Na(a) {
  return r(a) ? !1 : !0;
}
function Oa(a) {
  return null != a ? a.constructor === Object : !1;
}
function s(a, b) {
  return a[n(null == b ? null : b)] ? !0 : a._ ? !0 : new q(null, "else", "else", 1017020587) ? !1 : null;
}
function Pa(a) {
  return null == a ? null : a.constructor;
}
function t(a, b) {
  var c = Pa.call(null, b), c = r(r(c) ? c.Zb : c) ? c.Yb : n(b);
  return Error(["No protocol method ", a, " defined for type ", c, ": ", b].join(""));
}
function Ra(a) {
  var b = a.Yb;
  return r(b) ? b : "" + w(a);
}
function x(a) {
  for (var b = a.length, c = Array(b), d = 0;;) {
    if (d < b) {
      c[d] = a[d], d += 1;
    } else {
      break;
    }
  }
  return c;
}
function Sa(a) {
  return Array.prototype.slice.call(arguments);
}
var Ta = {}, Ua = {};
function y(a) {
  if (a ? a.pa : a) {
    return a.pa(a);
  }
  var b;
  b = y[n(null == a ? null : a)];
  if (!b && (b = y._, !b)) {
    throw t.call(null, "ICounted.-count", a);
  }
  return b.call(null, a);
}
function Va(a) {
  if (a ? a.ia : a) {
    return a.ia(a);
  }
  var b;
  b = Va[n(null == a ? null : a)];
  if (!b && (b = Va._, !b)) {
    throw t.call(null, "IEmptyableCollection.-empty", a);
  }
  return b.call(null, a);
}
var Wa = {};
function Xa(a, b) {
  if (a ? a.ha : a) {
    return a.ha(a, b);
  }
  var c;
  c = Xa[n(null == a ? null : a)];
  if (!c && (c = Xa._, !c)) {
    throw t.call(null, "ICollection.-conj", a);
  }
  return c.call(null, a, b);
}
var Ya = {}, z = function() {
  function a(a, b, c) {
    if (a ? a.Ha : a) {
      return a.Ha(a, b, c);
    }
    var h;
    h = z[n(null == a ? null : a)];
    if (!h && (h = z._, !h)) {
      throw t.call(null, "IIndexed.-nth", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.Ga : a) {
      return a.Ga(a, b);
    }
    var c;
    c = z[n(null == a ? null : a)];
    if (!c && (c = z._, !c)) {
      throw t.call(null, "IIndexed.-nth", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.ba = a;
  return c;
}(), Za = {};
function A(a) {
  if (a ? a.va : a) {
    return a.va(a);
  }
  var b;
  b = A[n(null == a ? null : a)];
  if (!b && (b = A._, !b)) {
    throw t.call(null, "ISeq.-first", a);
  }
  return b.call(null, a);
}
function B(a) {
  if (a ? a.wa : a) {
    return a.wa(a);
  }
  var b;
  b = B[n(null == a ? null : a)];
  if (!b && (b = B._, !b)) {
    throw t.call(null, "ISeq.-rest", a);
  }
  return b.call(null, a);
}
var $a = {};
function ab(a) {
  if (a ? a.Ca : a) {
    return a.Ca(a);
  }
  var b;
  b = ab[n(null == a ? null : a)];
  if (!b && (b = ab._, !b)) {
    throw t.call(null, "INext.-next", a);
  }
  return b.call(null, a);
}
var bb = {}, C = function() {
  function a(a, b, c) {
    if (a ? a.ka : a) {
      return a.ka(a, b, c);
    }
    var h;
    h = C[n(null == a ? null : a)];
    if (!h && (h = C._, !h)) {
      throw t.call(null, "ILookup.-lookup", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.ja : a) {
      return a.ja(a, b);
    }
    var c;
    c = C[n(null == a ? null : a)];
    if (!c && (c = C._, !c)) {
      throw t.call(null, "ILookup.-lookup", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.ba = a;
  return c;
}();
function cb(a, b) {
  if (a ? a.Ab : a) {
    return a.Ab(a, b);
  }
  var c;
  c = cb[n(null == a ? null : a)];
  if (!c && (c = cb._, !c)) {
    throw t.call(null, "IAssociative.-contains-key?", a);
  }
  return c.call(null, a, b);
}
function db(a, b, c) {
  if (a ? a.bb : a) {
    return a.bb(a, b, c);
  }
  var d;
  d = db[n(null == a ? null : a)];
  if (!d && (d = db._, !d)) {
    throw t.call(null, "IAssociative.-assoc", a);
  }
  return d.call(null, a, b, c);
}
var eb = {}, gb = {};
function hb(a) {
  if (a ? a.Tb : a) {
    return a.Tb();
  }
  var b;
  b = hb[n(null == a ? null : a)];
  if (!b && (b = hb._, !b)) {
    throw t.call(null, "IMapEntry.-key", a);
  }
  return b.call(null, a);
}
function ib(a) {
  if (a ? a.Ub : a) {
    return a.Ub();
  }
  var b;
  b = ib[n(null == a ? null : a)];
  if (!b && (b = ib._, !b)) {
    throw t.call(null, "IMapEntry.-val", a);
  }
  return b.call(null, a);
}
var jb = {}, kb = {};
function lb(a, b, c) {
  if (a ? a.Gb : a) {
    return a.Gb(a, b, c);
  }
  var d;
  d = lb[n(null == a ? null : a)];
  if (!d && (d = lb._, !d)) {
    throw t.call(null, "IVector.-assoc-n", a);
  }
  return d.call(null, a, b, c);
}
function mb(a) {
  if (a ? a.tc : a) {
    return a.state;
  }
  var b;
  b = mb[n(null == a ? null : a)];
  if (!b && (b = mb._, !b)) {
    throw t.call(null, "IDeref.-deref", a);
  }
  return b.call(null, a);
}
var nb = {};
function ob(a) {
  if (a ? a.la : a) {
    return a.la(a);
  }
  var b;
  b = ob[n(null == a ? null : a)];
  if (!b && (b = ob._, !b)) {
    throw t.call(null, "IMeta.-meta", a);
  }
  return b.call(null, a);
}
var pb = {};
function qb(a, b) {
  if (a ? a.oa : a) {
    return a.oa(a, b);
  }
  var c;
  c = qb[n(null == a ? null : a)];
  if (!c && (c = qb._, !c)) {
    throw t.call(null, "IWithMeta.-with-meta", a);
  }
  return c.call(null, a, b);
}
var rb = {}, sb = function() {
  function a(a, b, c) {
    if (a ? a.ta : a) {
      return a.ta(a, b, c);
    }
    var h;
    h = sb[n(null == a ? null : a)];
    if (!h && (h = sb._, !h)) {
      throw t.call(null, "IReduce.-reduce", a);
    }
    return h.call(null, a, b, c);
  }
  function b(a, b) {
    if (a ? a.sa : a) {
      return a.sa(a, b);
    }
    var c;
    c = sb[n(null == a ? null : a)];
    if (!c && (c = sb._, !c)) {
      throw t.call(null, "IReduce.-reduce", a);
    }
    return c.call(null, a, b);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.ba = a;
  return c;
}();
function tb(a, b) {
  if (a ? a.ca : a) {
    return a.ca(a, b);
  }
  var c;
  c = tb[n(null == a ? null : a)];
  if (!c && (c = tb._, !c)) {
    throw t.call(null, "IEquiv.-equiv", a);
  }
  return c.call(null, a, b);
}
function ub(a) {
  if (a ? a.ea : a) {
    return a.ea(a);
  }
  var b;
  b = ub[n(null == a ? null : a)];
  if (!b && (b = ub._, !b)) {
    throw t.call(null, "IHash.-hash", a);
  }
  return b.call(null, a);
}
var vb = {};
function wb(a) {
  if (a ? a.na : a) {
    return a.na(a);
  }
  var b;
  b = wb[n(null == a ? null : a)];
  if (!b && (b = wb._, !b)) {
    throw t.call(null, "ISeqable.-seq", a);
  }
  return b.call(null, a);
}
var xb = {}, yb = {};
function zb(a) {
  if (a ? a.qb : a) {
    return a.qb(a);
  }
  var b;
  b = zb[n(null == a ? null : a)];
  if (!b && (b = zb._, !b)) {
    throw t.call(null, "IReversible.-rseq", a);
  }
  return b.call(null, a);
}
function D(a, b) {
  if (a ? a.Xb : a) {
    return a.Xb(0, b);
  }
  var c;
  c = D[n(null == a ? null : a)];
  if (!c && (c = D._, !c)) {
    throw t.call(null, "IWriter.-write", a);
  }
  return c.call(null, a, b);
}
function Ab(a) {
  if (a ? a.Qc : a) {
    return null;
  }
  var b;
  b = Ab[n(null == a ? null : a)];
  if (!b && (b = Ab._, !b)) {
    throw t.call(null, "IWriter.-flush", a);
  }
  return b.call(null, a);
}
var Bb = {};
function Cb(a, b, c) {
  if (a ? a.fa : a) {
    return a.fa(a, b, c);
  }
  var d;
  d = Cb[n(null == a ? null : a)];
  if (!d && (d = Cb._, !d)) {
    throw t.call(null, "IPrintWithWriter.-pr-writer", a);
  }
  return d.call(null, a, b, c);
}
function Db(a) {
  if (a ? a.cb : a) {
    return a.cb(a);
  }
  var b;
  b = Db[n(null == a ? null : a)];
  if (!b && (b = Db._, !b)) {
    throw t.call(null, "IEditableCollection.-as-transient", a);
  }
  return b.call(null, a);
}
function Eb(a, b) {
  if (a ? a.fb : a) {
    return a.fb(a, b);
  }
  var c;
  c = Eb[n(null == a ? null : a)];
  if (!c && (c = Eb._, !c)) {
    throw t.call(null, "ITransientCollection.-conj!", a);
  }
  return c.call(null, a, b);
}
function Fb(a) {
  if (a ? a.gb : a) {
    return a.gb(a);
  }
  var b;
  b = Fb[n(null == a ? null : a)];
  if (!b && (b = Fb._, !b)) {
    throw t.call(null, "ITransientCollection.-persistent!", a);
  }
  return b.call(null, a);
}
function Gb(a, b, c) {
  if (a ? a.rb : a) {
    return a.rb(a, b, c);
  }
  var d;
  d = Gb[n(null == a ? null : a)];
  if (!d && (d = Gb._, !d)) {
    throw t.call(null, "ITransientAssociative.-assoc!", a);
  }
  return d.call(null, a, b, c);
}
function Hb(a, b, c) {
  if (a ? a.Wb : a) {
    return a.Wb(0, b, c);
  }
  var d;
  d = Hb[n(null == a ? null : a)];
  if (!d && (d = Hb._, !d)) {
    throw t.call(null, "ITransientVector.-assoc-n!", a);
  }
  return d.call(null, a, b, c);
}
function Ib(a, b) {
  if (a ? a.nb : a) {
    return a.nb(a, b);
  }
  var c;
  c = Ib[n(null == a ? null : a)];
  if (!c && (c = Ib._, !c)) {
    throw t.call(null, "IComparable.-compare", a);
  }
  return c.call(null, a, b);
}
function Jb(a) {
  if (a ? a.Pb : a) {
    return a.Pb();
  }
  var b;
  b = Jb[n(null == a ? null : a)];
  if (!b && (b = Jb._, !b)) {
    throw t.call(null, "IChunk.-drop-first", a);
  }
  return b.call(null, a);
}
function Kb(a) {
  if (a ? a.Cb : a) {
    return a.Cb(a);
  }
  var b;
  b = Kb[n(null == a ? null : a)];
  if (!b && (b = Kb._, !b)) {
    throw t.call(null, "IChunkedSeq.-chunked-first", a);
  }
  return b.call(null, a);
}
function Lb(a) {
  if (a ? a.Db : a) {
    return a.Db(a);
  }
  var b;
  b = Lb[n(null == a ? null : a)];
  if (!b && (b = Lb._, !b)) {
    throw t.call(null, "IChunkedSeq.-chunked-rest", a);
  }
  return b.call(null, a);
}
function Mb(a) {
  if (a ? a.Bb : a) {
    return a.Bb(a);
  }
  var b;
  b = Mb[n(null == a ? null : a)];
  if (!b && (b = Mb._, !b)) {
    throw t.call(null, "IChunkedNext.-chunked-next", a);
  }
  return b.call(null, a);
}
function Nb(a) {
  if (a ? a.Nc : a) {
    return a.name;
  }
  var b;
  b = Nb[n(null == a ? null : a)];
  if (!b && (b = Nb._, !b)) {
    throw t.call(null, "INamed.-name", a);
  }
  return b.call(null, a);
}
function Ob(a) {
  if (a ? a.Oc : a) {
    return a.Ma;
  }
  var b;
  b = Ob[n(null == a ? null : a)];
  if (!b && (b = Ob._, !b)) {
    throw t.call(null, "INamed.-namespace", a);
  }
  return b.call(null, a);
}
function Pb(a) {
  this.dd = a;
  this.u = 0;
  this.f = 1073741824;
}
Pb.prototype.Xb = function(a, b) {
  return this.dd.append(b);
};
Pb.prototype.Qc = function() {
  return null;
};
function E(a) {
  var b = new Ia, c = new Pb(b);
  Cb.call(null, a, c, La.call(null));
  Ab.call(null, c);
  return "" + w(b);
}
function Qb(a, b) {
  if (r(Rb.call(null, a, b))) {
    return 0;
  }
  var c = Na.call(null, a.Ma);
  if (r(c ? b.Ma : c)) {
    return-1;
  }
  if (r(a.Ma)) {
    if (Na.call(null, b.Ma)) {
      return 1;
    }
    c = Sb.call(null, a.Ma, b.Ma);
    return 0 === c ? Sb.call(null, a.name, b.name) : c;
  }
  return new q(null, "default", "default", 2558708147) ? Sb.call(null, a.name, b.name) : null;
}
function F(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 8388608 || a.Md)) {
    return wb.call(null, a);
  }
  if (a instanceof Array || "string" === typeof a) {
    return 0 === a.length ? null : new Tb(a, 0);
  }
  if (s.call(null, vb, a)) {
    return wb.call(null, a);
  }
  if (new q(null, "else", "else", 1017020587)) {
    throw Error([w(a), w("is not ISeqable")].join(""));
  }
  return null;
}
function H(a) {
  if (null == a) {
    return null;
  }
  if (a && (a.f & 64 || a.eb)) {
    return A.call(null, a);
  }
  a = F.call(null, a);
  return null == a ? null : A.call(null, a);
}
function I(a) {
  return null != a ? a && (a.f & 64 || a.eb) ? B.call(null, a) : (a = F.call(null, a)) ? B.call(null, a) : K : K;
}
function L(a) {
  return null == a ? null : a && (a.f & 128 || a.Vb) ? ab.call(null, a) : F.call(null, I.call(null, a));
}
var Rb = function() {
  function a(a, b) {
    return null == a ? null == b : a === b || tb.call(null, a, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (b.call(null, a, d)) {
          if (L.call(null, e)) {
            a = d, d = H.call(null, e), e = L.call(null, e);
          } else {
            return b.call(null, d, H.call(null, e));
          }
        } else {
          return!1;
        }
      }
    }
    a.o = 2;
    a.k = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.i = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 1:
        return!0;
      case 2:
        return a.call(this, b, e);
      default:
        return c.i(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.k = c.k;
  b.$ = function() {
    return!0;
  };
  b.q = a;
  b.i = c.i;
  return b;
}();
Ua["null"] = !0;
y["null"] = function() {
  return 0;
};
Date.prototype.ca = function(a, b) {
  return b instanceof Date && this.toString() === b.toString();
};
tb.number = function(a, b) {
  return a === b;
};
nb["function"] = !0;
ob["function"] = function() {
  return null;
};
Ta["function"] = !0;
ub._ = function(a) {
  return a[ea] || (a[ea] = ++ga);
};
function Ub() {
  return!1;
}
var Wb = function() {
  function a(a, b, c, d) {
    for (var l = y.call(null, a);;) {
      if (d < l) {
        c = b.call(null, c, z.call(null, a, d));
        if (Ub.call(null)) {
          return Vb.call(null, c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = y.call(null, a), l = 0;;) {
      if (l < d) {
        c = b.call(null, c, z.call(null, a, l));
        if (Ub.call(null)) {
          return Vb.call(null, c);
        }
        l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = y.call(null, a);
    if (0 === c) {
      return b.call(null);
    }
    for (var d = z.call(null, a, 0), l = 1;;) {
      if (l < c) {
        d = b.call(null, d, z.call(null, a, l));
        if (Ub.call(null)) {
          return Vb.call(null, d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.q = c;
  d.ba = b;
  d.Ba = a;
  return d;
}(), Xb = function() {
  function a(a, b, c, d) {
    for (var l = a.length;;) {
      if (d < l) {
        c = b.call(null, c, a[d]);
        if (Ub.call(null)) {
          return Vb.call(null, c);
        }
        d += 1;
      } else {
        return c;
      }
    }
  }
  function b(a, b, c) {
    for (var d = a.length, l = 0;;) {
      if (l < d) {
        c = b.call(null, c, a[l]);
        if (Ub.call(null)) {
          return Vb.call(null, c);
        }
        l += 1;
      } else {
        return c;
      }
    }
  }
  function c(a, b) {
    var c = a.length;
    if (0 === a.length) {
      return b.call(null);
    }
    for (var d = a[0], l = 1;;) {
      if (l < c) {
        d = b.call(null, d, a[l]);
        if (Ub.call(null)) {
          return Vb.call(null, d);
        }
        l += 1;
      } else {
        return d;
      }
    }
  }
  var d = null, d = function(d, f, h, k) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, f);
      case 3:
        return b.call(this, d, f, h);
      case 4:
        return a.call(this, d, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.q = c;
  d.ba = b;
  d.Ba = a;
  return d;
}();
function Yb(a) {
  return a ? a.f & 2 || a.sc ? !0 : a.f ? !1 : s.call(null, Ua, a) : s.call(null, Ua, a);
}
function Zb(a) {
  return a ? a.f & 16 || a.Rb ? !0 : a.f ? !1 : s.call(null, Ya, a) : s.call(null, Ya, a);
}
function Tb(a, b) {
  this.e = a;
  this.p = b;
  this.f = 166199550;
  this.u = 8192;
}
g = Tb.prototype;
g.ea = function() {
  return $b.call(null, this);
};
g.Ca = function() {
  return this.p + 1 < this.e.length ? new Tb(this.e, this.p + 1) : null;
};
g.ha = function(a, b) {
  return O.call(null, b, this);
};
g.qb = function() {
  var a = y.call(null, this);
  return 0 < a ? new ac(this, a - 1, null) : null;
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return Xb.call(null, this.e, b, this.e[this.p], this.p + 1);
};
g.ta = function(a, b, c) {
  return Xb.call(null, this.e, b, c, this.p);
};
g.na = function() {
  return this;
};
g.pa = function() {
  return this.e.length - this.p;
};
g.va = function() {
  return this.e[this.p];
};
g.wa = function() {
  return this.p + 1 < this.e.length ? new Tb(this.e, this.p + 1) : K;
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.Ga = function(a, b) {
  var c = b + this.p;
  return c < this.e.length ? this.e[c] : null;
};
g.Ha = function(a, b, c) {
  a = b + this.p;
  return a < this.e.length ? this.e[a] : c;
};
g.ia = function() {
  return K;
};
var cc = function() {
  function a(a, b) {
    return b < a.length ? new Tb(a, b) : null;
  }
  function b(a) {
    return c.call(null, a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.$ = b;
  c.q = a;
  return c;
}(), N = function() {
  function a(a, b) {
    return cc.call(null, a, b);
  }
  function b(a) {
    return cc.call(null, a, 0);
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.$ = b;
  c.q = a;
  return c;
}();
function ac(a, b, c) {
  this.mb = a;
  this.p = b;
  this.m = c;
  this.f = 32374990;
  this.u = 8192;
}
g = ac.prototype;
g.ea = function() {
  return $b.call(null, this);
};
g.Ca = function() {
  return 0 < this.p ? new ac(this.mb, this.p - 1, null) : null;
};
g.ha = function(a, b) {
  return O.call(null, b, this);
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return P.call(null, b, this);
};
g.ta = function(a, b, c) {
  return P.call(null, b, c, this);
};
g.na = function() {
  return this;
};
g.pa = function() {
  return this.p + 1;
};
g.va = function() {
  return z.call(null, this.mb, this.p);
};
g.wa = function() {
  return 0 < this.p ? new ac(this.mb, this.p - 1, null) : K;
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return new ac(this.mb, this.p, b);
};
g.la = function() {
  return this.m;
};
g.ia = function() {
  return dc.call(null, K, this.m);
};
function ec(a) {
  return H.call(null, L.call(null, a));
}
function fc(a) {
  return L.call(null, L.call(null, a));
}
tb._ = function(a, b) {
  return a === b;
};
var gc = function() {
  function a(a, b) {
    return null != a ? Xa.call(null, a, b) : Xa.call(null, K, b);
  }
  var b = null, c = function() {
    function a(b, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return c.call(this, b, d, l);
    }
    function c(a, d, e) {
      for (;;) {
        if (r(e)) {
          a = b.call(null, a, d), d = H.call(null, e), e = L.call(null, e);
        } else {
          return b.call(null, a, d);
        }
      }
    }
    a.o = 2;
    a.k = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return c(b, d, a);
    };
    a.i = c;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.i(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.k = c.k;
  b.q = a;
  b.i = c.i;
  return b;
}();
function hc(a) {
  return null == a ? null : Va.call(null, a);
}
function ic(a) {
  a = F.call(null, a);
  for (var b = 0;;) {
    if (Yb.call(null, a)) {
      return b + y.call(null, a);
    }
    a = L.call(null, a);
    b += 1;
  }
}
function Q(a) {
  return null != a ? a && (a.f & 2 || a.sc) ? y.call(null, a) : a instanceof Array ? a.length : "string" === typeof a ? a.length : s.call(null, Ua, a) ? y.call(null, a) : new q(null, "else", "else", 1017020587) ? ic.call(null, a) : null : 0;
}
var jc = function() {
  function a(a, b, c) {
    for (;;) {
      if (null == a) {
        return c;
      }
      if (0 === b) {
        return F.call(null, a) ? H.call(null, a) : c;
      }
      if (Zb.call(null, a)) {
        return z.call(null, a, b, c);
      }
      if (F.call(null, a)) {
        a = L.call(null, a), b -= 1;
      } else {
        return new q(null, "else", "else", 1017020587) ? c : null;
      }
    }
  }
  function b(a, b) {
    for (;;) {
      if (null == a) {
        throw Error("Index out of bounds");
      }
      if (0 === b) {
        if (F.call(null, a)) {
          return H.call(null, a);
        }
        throw Error("Index out of bounds");
      }
      if (Zb.call(null, a)) {
        return z.call(null, a, b);
      }
      if (F.call(null, a)) {
        var c = L.call(null, a), h = b - 1;
        a = c;
        b = h;
      } else {
        if (new q(null, "else", "else", 1017020587)) {
          throw Error("Index out of bounds");
        }
        return null;
      }
    }
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.ba = a;
  return c;
}(), R = function() {
  function a(a, b, c) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number.");
    }
    if (null == a) {
      return c;
    }
    if (a && (a.f & 16 || a.Rb)) {
      return z.call(null, a, b, c);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : c;
    }
    if (s.call(null, Ya, a)) {
      return z.call(null, a, b);
    }
    if (a ? a.f & 64 || a.eb || (a.f ? 0 : s.call(null, Za, a)) : s.call(null, Za, a)) {
      return jc.call(null, a, b, c);
    }
    if (new q(null, "else", "else", 1017020587)) {
      throw Error([w("nth not supported on this type "), w(Ra.call(null, Pa.call(null, a)))].join(""));
    }
    return null;
  }
  function b(a, b) {
    if ("number" !== typeof b) {
      throw Error("index argument to nth must be a number");
    }
    if (null == a) {
      return a;
    }
    if (a && (a.f & 16 || a.Rb)) {
      return z.call(null, a, b);
    }
    if (a instanceof Array || "string" === typeof a) {
      return b < a.length ? a[b] : null;
    }
    if (s.call(null, Ya, a)) {
      return z.call(null, a, b);
    }
    if (a ? a.f & 64 || a.eb || (a.f ? 0 : s.call(null, Za, a)) : s.call(null, Za, a)) {
      return jc.call(null, a, b);
    }
    if (new q(null, "else", "else", 1017020587)) {
      throw Error([w("nth not supported on this type "), w(Ra.call(null, Pa.call(null, a)))].join(""));
    }
    return null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.ba = a;
  return c;
}(), kc = function() {
  function a(a, b, c) {
    return null != a ? a && (a.f & 256 || a.Sb) ? C.call(null, a, b, c) : a instanceof Array ? b < a.length ? a[b] : c : "string" === typeof a ? b < a.length ? a[b] : c : s.call(null, bb, a) ? C.call(null, a, b, c) : new q(null, "else", "else", 1017020587) ? c : null : c;
  }
  function b(a, b) {
    return null == a ? null : a && (a.f & 256 || a.Sb) ? C.call(null, a, b) : a instanceof Array ? b < a.length ? a[b] : null : "string" === typeof a ? b < a.length ? a[b] : null : s.call(null, bb, a) ? C.call(null, a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.ba = a;
  return c;
}(), mc = function() {
  function a(a, b, c) {
    return null != a ? db.call(null, a, b, c) : lc.call(null, [b], [c]);
  }
  var b = null, c = function() {
    function a(b, d, k, l) {
      var p = null;
      3 < arguments.length && (p = N(Array.prototype.slice.call(arguments, 3), 0));
      return c.call(this, b, d, k, p);
    }
    function c(a, d, e, l) {
      for (;;) {
        if (a = b.call(null, a, d, e), r(l)) {
          d = H.call(null, l), e = ec.call(null, l), l = fc.call(null, l);
        } else {
          return a;
        }
      }
    }
    a.o = 3;
    a.k = function(a) {
      var b = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var l = H(a);
      a = I(a);
      return c(b, d, l, a);
    };
    a.i = c;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.i(b, e, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 3;
  b.k = c.k;
  b.ba = a;
  b.i = c.i;
  return b;
}();
function nc(a) {
  var b = ca(a);
  return b ? b : a ? r(r(null) ? null : a.rc) ? !0 : a.Hb ? !1 : s.call(null, Ta, a) : s.call(null, Ta, a);
}
var dc = function oc(b, c) {
  return nc.call(null, b) && !(b ? b.f & 262144 || b.Qd || (b.f ? 0 : s.call(null, pb, b)) : s.call(null, pb, b)) ? oc.call(null, function() {
    "undefined" === typeof Ja && (Ja = function(b, c, f, h) {
      this.m = b;
      this.Kb = c;
      this.fd = f;
      this.Zc = h;
      this.u = 0;
      this.f = 393217;
    }, Ja.Zb = !0, Ja.Yb = "cljs.core/t5320", Ja.Rc = function(b) {
      return D.call(null, b, "cljs.core/t5320");
    }, Ja.prototype.call = function() {
      function b(d, h) {
        d = this;
        var k = null;
        1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
        return c.call(this, d, k);
      }
      function c(b, d) {
        return pc.call(null, b.Kb, d);
      }
      b.o = 1;
      b.k = function(b) {
        var d = H(b);
        b = I(b);
        return c(d, b);
      };
      b.i = c;
      return b;
    }(), Ja.prototype.apply = function(b, c) {
      return this.call.apply(this, [this].concat(x.call(null, c)));
    }, Ja.prototype.q = function() {
      function b(d) {
        var h = null;
        0 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 0), 0));
        return c.call(this, h);
      }
      function c(b) {
        return pc.call(null, self__.Kb, b);
      }
      b.o = 0;
      b.k = function(b) {
        b = F(b);
        return c(b);
      };
      b.i = c;
      return b;
    }(), Ja.prototype.rc = !0, Ja.prototype.la = function() {
      return this.Zc;
    }, Ja.prototype.oa = function(b, c) {
      return new Ja(this.m, this.Kb, this.fd, c);
    });
    return new Ja(c, b, oc, null);
  }(), c) : null == b ? null : qb.call(null, b, c);
};
function qc(a) {
  var b = null != a;
  return(b ? a ? a.f & 131072 || a.Lc || (a.f ? 0 : s.call(null, nb, a)) : s.call(null, nb, a) : b) ? ob.call(null, a) : null;
}
var rc = {}, sc = 0;
function tc(a) {
  for (var b, c = b = 0;c < a.length;++c) {
    b = 31 * b + a.charCodeAt(c), b %= 4294967296;
  }
  rc[a] = b;
  sc += 1;
  return b;
}
function uc(a) {
  255 < sc && (rc = {}, sc = 0);
  var b = rc[a];
  return "number" === typeof b ? b : tc.call(null, a);
}
function S(a) {
  return a && (a.f & 4194304 || a.Jd) ? ub.call(null, a) : "number" === typeof a ? Math.floor(a) % 2147483647 : !0 === a ? 1 : !1 === a ? 0 : "string" === typeof a ? uc.call(null, a) : null == a ? 0 : new q(null, "else", "else", 1017020587) ? ub.call(null, a) : null;
}
function vc(a) {
  return null == a || Na.call(null, F.call(null, a));
}
function wc(a) {
  return null == a ? !1 : a ? a.f & 8 || a.Gd ? !0 : a.f ? !1 : s.call(null, Wa, a) : s.call(null, Wa, a);
}
function xc(a) {
  return null == a ? !1 : a ? a.f & 4096 || a.Od ? !0 : a.f ? !1 : s.call(null, jb, a) : s.call(null, jb, a);
}
function yc(a) {
  return a ? a.f & 16777216 || a.Nd ? !0 : a.f ? !1 : s.call(null, xb, a) : s.call(null, xb, a);
}
function zc(a) {
  return null == a ? !1 : a ? a.f & 1024 || a.Kd ? !0 : a.f ? !1 : s.call(null, eb, a) : s.call(null, eb, a);
}
function Ac(a) {
  return a ? a.f & 16384 || a.Pd ? !0 : a.f ? !1 : s.call(null, kb, a) : s.call(null, kb, a);
}
function U(a) {
  return a ? a.u & 512 || a.Fd ? !0 : !1 : !1;
}
function Bc(a) {
  var b = [];
  Ha(a, function(a) {
    return function(b, e) {
      return a.push(e);
    };
  }(b));
  return b;
}
function Cc(a, b, c, d, e) {
  for (;;) {
    if (0 === e) {
      return c;
    }
    c[d] = a[b];
    d += 1;
    e -= 1;
    b += 1;
  }
}
function Dc(a, b, c, d, e) {
  b += e - 1;
  for (d += e - 1;;) {
    if (0 === e) {
      return c;
    }
    c[d] = a[b];
    d -= 1;
    e -= 1;
    b -= 1;
  }
}
var Ec = {};
function Fc(a) {
  return null == a ? !1 : a ? a.f & 64 || a.eb ? !0 : a.f ? !1 : s.call(null, Za, a) : s.call(null, Za, a);
}
function Gc(a) {
  return r(a) ? !0 : !1;
}
function Hc(a, b) {
  return kc.call(null, a, b, Ec) === Ec ? !1 : !0;
}
function Sb(a, b) {
  if (a === b) {
    return 0;
  }
  if (null == a) {
    return-1;
  }
  if (null == b) {
    return 1;
  }
  if (Pa.call(null, a) === Pa.call(null, b)) {
    return a && (a.u & 2048 || a.Eb) ? Ib.call(null, a, b) : a > b ? 1 : a < b ? -1 : 0;
  }
  if (new q(null, "else", "else", 1017020587)) {
    throw Error("compare on non-nil objects of different types");
  }
  return null;
}
var Ic = function() {
  function a(a, b, c, h) {
    for (;;) {
      var k = Sb.call(null, R.call(null, a, h), R.call(null, b, h));
      if (0 === k && h + 1 < c) {
        h += 1;
      } else {
        return k;
      }
    }
  }
  function b(a, b) {
    var f = Q.call(null, a), h = Q.call(null, b);
    return f < h ? -1 : f > h ? 1 : new q(null, "else", "else", 1017020587) ? c.call(null, a, b, f, 0) : null;
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.Ba = a;
  return c;
}(), P = function() {
  function a(a, b, c) {
    for (c = F.call(null, c);;) {
      if (c) {
        b = a.call(null, b, H.call(null, c));
        if (Ub.call(null)) {
          return Vb.call(null, b);
        }
        c = L.call(null, c);
      } else {
        return b;
      }
    }
  }
  function b(a, b) {
    var c = F.call(null, b);
    return c ? V.call(null, a, H.call(null, c), L.call(null, c)) : a.call(null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.ba = a;
  return c;
}(), V = function() {
  function a(a, b, c) {
    return c && (c.f & 524288 || c.Pc) ? sb.call(null, c, a, b) : c instanceof Array ? Xb.call(null, c, a, b) : "string" === typeof c ? Xb.call(null, c, a, b) : s.call(null, rb, c) ? sb.call(null, c, a, b) : new q(null, "else", "else", 1017020587) ? P.call(null, a, b, c) : null;
  }
  function b(a, b) {
    return b && (b.f & 524288 || b.Pc) ? sb.call(null, b, a) : b instanceof Array ? Xb.call(null, b, a) : "string" === typeof b ? Xb.call(null, b, a) : s.call(null, rb, b) ? sb.call(null, b, a) : new q(null, "else", "else", 1017020587) ? P.call(null, a, b) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.ba = a;
  return c;
}(), Jc = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return V.call(null, a, b + c, d);
    }
    b.o = 2;
    b.k = function(a) {
      var b = H(a);
      a = L(a);
      var c = H(a);
      a = I(a);
      return d(b, c, a);
    };
    b.i = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 0:
        return 0;
      case 1:
        return a;
      case 2:
        return a + d;
      default:
        return b.i(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.o = 2;
  a.k = b.k;
  a.ob = function() {
    return 0;
  };
  a.$ = function(a) {
    return a;
  };
  a.q = function(a, b) {
    return a + b;
  };
  a.i = b.i;
  return a;
}(), Kc = function() {
  var a = null, b = function() {
    function b(a, c, h) {
      var k = null;
      2 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 2), 0));
      return d.call(this, a, c, k);
    }
    function d(b, c, d) {
      return V.call(null, a, b - c, d);
    }
    b.o = 2;
    b.k = function(a) {
      var b = H(a);
      a = L(a);
      var c = H(a);
      a = I(a);
      return d(b, c, a);
    };
    b.i = d;
    return b;
  }(), a = function(a, d, e) {
    switch(arguments.length) {
      case 1:
        return-a;
      case 2:
        return a - d;
      default:
        return b.i(a, d, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  a.o = 2;
  a.k = b.k;
  a.$ = function(a) {
    return-a;
  };
  a.q = function(a, b) {
    return a - b;
  };
  a.i = b.i;
  return a;
}();
function Lc(a) {
  return 0 <= a ? Math.floor.call(null, a) : Math.ceil.call(null, a);
}
function Mc(a, b) {
  return Lc.call(null, (a - a % b) / b);
}
var Nc = function() {
  function a(a) {
    return a * c.call(null);
  }
  function b() {
    return Math.random.call(null);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ob = b;
  c.$ = a;
  return c;
}();
function Oc(a) {
  return Lc.call(null, Nc.call(null, a));
}
function Pc(a) {
  a -= a >> 1 & 1431655765;
  a = (a & 858993459) + (a >> 2 & 858993459);
  return 16843009 * (a + (a >> 4) & 252645135) >> 24;
}
function Qc(a, b) {
  for (var c = b, d = F.call(null, a);;) {
    if (d && 0 < c) {
      c -= 1, d = L.call(null, d);
    } else {
      return d;
    }
  }
}
var w = function() {
  function a(a) {
    return null == a ? "" : a.toString();
  }
  var b = null, c = function() {
    function a(b, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return c.call(this, b, k);
    }
    function c(a, d) {
      for (var e = new Ia(b.call(null, a)), l = d;;) {
        if (r(l)) {
          e = e.append(b.call(null, H.call(null, l))), l = L.call(null, l);
        } else {
          return e.toString();
        }
      }
    }
    a.o = 1;
    a.k = function(a) {
      var b = H(a);
      a = I(a);
      return c(b, a);
    };
    a.i = c;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 0:
        return "";
      case 1:
        return a.call(this, b);
      default:
        return c.i(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 1;
  b.k = c.k;
  b.ob = function() {
    return "";
  };
  b.$ = a;
  b.i = c.i;
  return b;
}();
function bc(a, b) {
  return Gc.call(null, yc.call(null, b) ? function() {
    for (var c = F.call(null, a), d = F.call(null, b);;) {
      if (null == c) {
        return null == d;
      }
      if (null == d) {
        return!1;
      }
      if (Rb.call(null, H.call(null, c), H.call(null, d))) {
        c = L.call(null, c), d = L.call(null, d);
      } else {
        return new q(null, "else", "else", 1017020587) ? !1 : null;
      }
    }
  }() : null);
}
function Rc(a, b) {
  return a ^ b + 2654435769 + (a << 6) + (a >> 2);
}
function $b(a) {
  if (F.call(null, a)) {
    var b = S.call(null, H.call(null, a));
    for (a = L.call(null, a);;) {
      if (null == a) {
        return b;
      }
      b = Rc.call(null, b, S.call(null, H.call(null, a)));
      a = L.call(null, a);
    }
  } else {
    return 0;
  }
}
function Sc(a) {
  var b = 0;
  for (a = F.call(null, a);;) {
    if (a) {
      var c = H.call(null, a), b = (b + (S.call(null, Tc.call(null, c)) ^ S.call(null, Uc.call(null, c)))) % 4503599627370496;
      a = L.call(null, a);
    } else {
      return b;
    }
  }
}
function Vc(a) {
  var b = 0;
  for (a = F.call(null, a);;) {
    if (a) {
      var c = H.call(null, a), b = (b + S.call(null, c)) % 4503599627370496;
      a = L.call(null, a);
    } else {
      return b;
    }
  }
}
function Wc(a, b, c, d, e) {
  this.m = a;
  this.first = b;
  this.Na = c;
  this.count = d;
  this.n = e;
  this.f = 65937646;
  this.u = 8192;
}
g = Wc.prototype;
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
g.Ca = function() {
  return 1 === this.count ? null : this.Na;
};
g.ha = function(a, b) {
  return new Wc(this.m, b, this, this.count + 1, null);
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return P.call(null, b, this);
};
g.ta = function(a, b, c) {
  return P.call(null, b, c, this);
};
g.na = function() {
  return this;
};
g.pa = function() {
  return this.count;
};
g.va = function() {
  return this.first;
};
g.wa = function() {
  return 1 === this.count ? K : this.Na;
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return new Wc(b, this.first, this.Na, this.count, this.n);
};
g.la = function() {
  return this.m;
};
g.ia = function() {
  return K;
};
function Xc(a) {
  this.m = a;
  this.f = 65937614;
  this.u = 8192;
}
g = Xc.prototype;
g.ea = function() {
  return 0;
};
g.Ca = function() {
  return null;
};
g.ha = function(a, b) {
  return new Wc(this.m, b, null, 1, null);
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return P.call(null, b, this);
};
g.ta = function(a, b, c) {
  return P.call(null, b, c, this);
};
g.na = function() {
  return null;
};
g.pa = function() {
  return 0;
};
g.va = function() {
  return null;
};
g.wa = function() {
  return K;
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return new Xc(b);
};
g.la = function() {
  return this.m;
};
g.ia = function() {
  return this;
};
var K = new Xc(null);
function Yc(a) {
  return a ? a.f & 134217728 || a.Ld ? !0 : a.f ? !1 : s.call(null, yb, a) : s.call(null, yb, a);
}
function Zc(a) {
  return zb.call(null, a);
}
function $c(a) {
  return Yc.call(null, a) ? Zc.call(null, a) : V.call(null, gc, K, a);
}
function ad(a, b, c, d) {
  this.m = a;
  this.first = b;
  this.Na = c;
  this.n = d;
  this.f = 65929452;
  this.u = 8192;
}
g = ad.prototype;
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
g.Ca = function() {
  return null == this.Na ? null : F.call(null, this.Na);
};
g.ha = function(a, b) {
  return new ad(null, b, this, this.n);
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return P.call(null, b, this);
};
g.ta = function(a, b, c) {
  return P.call(null, b, c, this);
};
g.na = function() {
  return this;
};
g.va = function() {
  return this.first;
};
g.wa = function() {
  return null == this.Na ? K : this.Na;
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return new ad(b, this.first, this.Na, this.n);
};
g.la = function() {
  return this.m;
};
g.ia = function() {
  return dc.call(null, K, this.m);
};
function O(a, b) {
  var c = null == b;
  return(c ? c : b && (b.f & 64 || b.eb)) ? new ad(null, a, b, null) : new ad(null, a, F.call(null, b), null);
}
function q(a, b, c, d) {
  this.Ma = a;
  this.name = b;
  this.Qa = c;
  this.vb = d;
  this.f = 2153775105;
  this.u = 4096;
}
g = q.prototype;
g.fa = function(a, b) {
  return D.call(null, b, [w(":"), w(this.Qa)].join(""));
};
g.Nc = function() {
  return this.name;
};
g.Oc = function() {
  return this.Ma;
};
g.ea = function() {
  null == this.vb && (this.vb = Rc.call(null, S.call(null, this.Ma), S.call(null, this.name)) + 2654435769);
  return this.vb;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return kc.call(null, c, this);
      case 3:
        return kc.call(null, c, this, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x.call(null, b)));
};
g.$ = function(a) {
  return kc.call(null, a, this);
};
g.q = function(a, b) {
  return kc.call(null, a, this, b);
};
g.ca = function(a, b) {
  return b instanceof q ? this.Qa === b.Qa : !1;
};
g.toString = function() {
  return[w(":"), w(this.Qa)].join("");
};
function bd(a, b) {
  return a === b ? !0 : a instanceof q && b instanceof q ? a.Qa === b.Qa : !1;
}
function cd(a) {
  if (a && (a.u & 4096 || a.Mc)) {
    return Ob.call(null, a);
  }
  throw Error([w("Doesn't support namespace: "), w(a)].join(""));
}
var dd = function() {
  function a(a, b) {
    return new q(a, b, [w(r(a) ? [w(a), w("/")].join("") : null), w(b)].join(""), null);
  }
  function b(a) {
    if (a instanceof q) {
      return a;
    }
    if ("string" === typeof a) {
      var b = a.split("/");
      return 2 === b.length ? new q(b[0], b[1], a, null) : new q(null, b[0], a, null);
    }
    return null;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.$ = b;
  c.q = a;
  return c;
}();
function W(a, b, c, d) {
  this.m = a;
  this.Ya = b;
  this.s = c;
  this.n = d;
  this.u = 0;
  this.f = 32374988;
}
g = W.prototype;
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
g.Ca = function() {
  wb.call(null, this);
  return null == this.s ? null : L.call(null, this.s);
};
g.ha = function(a, b) {
  return O.call(null, b, this);
};
g.toString = function() {
  return E.call(null, this);
};
function ed(a) {
  null != a.Ya && (a.s = a.Ya.call(null), a.Ya = null);
  return a.s;
}
g.sa = function(a, b) {
  return P.call(null, b, this);
};
g.ta = function(a, b, c) {
  return P.call(null, b, c, this);
};
g.na = function() {
  ed(this);
  if (null == this.s) {
    return null;
  }
  for (var a = this.s;;) {
    if (a instanceof W) {
      a = ed(a);
    } else {
      return this.s = a, F.call(null, this.s);
    }
  }
};
g.va = function() {
  wb.call(null, this);
  return null == this.s ? null : H.call(null, this.s);
};
g.wa = function() {
  wb.call(null, this);
  return null != this.s ? I.call(null, this.s) : K;
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return new W(b, this.Ya, this.s, this.n);
};
g.la = function() {
  return this.m;
};
g.ia = function() {
  return dc.call(null, K, this.m);
};
function fd(a, b) {
  this.yb = a;
  this.end = b;
  this.u = 0;
  this.f = 2;
}
fd.prototype.pa = function() {
  return this.end;
};
fd.prototype.add = function(a) {
  this.yb[this.end] = a;
  return this.end += 1;
};
fd.prototype.La = function() {
  var a = new gd(this.yb, 0, this.end);
  this.yb = null;
  return a;
};
function hd(a) {
  return new fd(Array(a), 0);
}
function gd(a, b, c) {
  this.e = a;
  this.off = b;
  this.end = c;
  this.u = 0;
  this.f = 524306;
}
g = gd.prototype;
g.sa = function(a, b) {
  return Xb.call(null, this.e, b, this.e[this.off], this.off + 1);
};
g.ta = function(a, b, c) {
  return Xb.call(null, this.e, b, c, this.off);
};
g.Pb = function() {
  if (this.off === this.end) {
    throw Error("-drop-first of empty chunk");
  }
  return new gd(this.e, this.off + 1, this.end);
};
g.Ga = function(a, b) {
  return this.e[this.off + b];
};
g.Ha = function(a, b, c) {
  return 0 <= b && b < this.end - this.off ? this.e[this.off + b] : c;
};
g.pa = function() {
  return this.end - this.off;
};
var id = function() {
  function a(a, b, c) {
    return new gd(a, b, c);
  }
  function b(a, b) {
    return new gd(a, b, a.length);
  }
  function c(a) {
    return new gd(a, 0, a.length);
  }
  var d = null, d = function(d, f, h) {
    switch(arguments.length) {
      case 1:
        return c.call(this, d);
      case 2:
        return b.call(this, d, f);
      case 3:
        return a.call(this, d, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.$ = c;
  d.q = b;
  d.ba = a;
  return d;
}();
function jd(a, b, c, d) {
  this.La = a;
  this.Ia = b;
  this.m = c;
  this.n = d;
  this.f = 31850732;
  this.u = 1536;
}
g = jd.prototype;
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
g.Ca = function() {
  if (1 < y.call(null, this.La)) {
    return new jd(Jb.call(null, this.La), this.Ia, this.m, null);
  }
  var a = wb.call(null, this.Ia);
  return null == a ? null : a;
};
g.ha = function(a, b) {
  return O.call(null, b, this);
};
g.toString = function() {
  return E.call(null, this);
};
g.na = function() {
  return this;
};
g.va = function() {
  return z.call(null, this.La, 0);
};
g.wa = function() {
  return 1 < y.call(null, this.La) ? new jd(Jb.call(null, this.La), this.Ia, this.m, null) : null == this.Ia ? K : this.Ia;
};
g.Bb = function() {
  return null == this.Ia ? null : this.Ia;
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return new jd(this.La, this.Ia, b, this.n);
};
g.la = function() {
  return this.m;
};
g.ia = function() {
  return dc.call(null, K, this.m);
};
g.Cb = function() {
  return this.La;
};
g.Db = function() {
  return null == this.Ia ? K : this.Ia;
};
function kd(a, b) {
  return 0 === y.call(null, a) ? b : new jd(a, b, null, null);
}
function ld(a, b) {
  return a.add(b);
}
function md(a) {
  return a.La();
}
function nd(a) {
  return Kb.call(null, a);
}
function od(a) {
  return Lb.call(null, a);
}
function pd(a) {
  for (var b = [];;) {
    if (F.call(null, a)) {
      b.push(H.call(null, a)), a = L.call(null, a);
    } else {
      return b;
    }
  }
}
function qd(a, b) {
  if (Yb.call(null, a)) {
    return Q.call(null, a);
  }
  for (var c = a, d = b, e = 0;;) {
    if (0 < d && F.call(null, c)) {
      c = L.call(null, c), d -= 1, e += 1;
    } else {
      return e;
    }
  }
}
var sd = function rd(b) {
  return null == b ? null : null == L.call(null, b) ? F.call(null, H.call(null, b)) : new q(null, "else", "else", 1017020587) ? O.call(null, H.call(null, b), rd.call(null, L.call(null, b))) : null;
}, td = function() {
  function a(a, b) {
    return new W(null, function() {
      var c = F.call(null, a);
      return c ? U.call(null, c) ? kd.call(null, nd.call(null, c), d.call(null, od.call(null, c), b)) : O.call(null, H.call(null, c), d.call(null, I.call(null, c), b)) : b;
    }, null, null);
  }
  function b(a) {
    return new W(null, function() {
      return a;
    }, null, null);
  }
  function c() {
    return new W(null, function() {
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e) {
      var f = null;
      2 < arguments.length && (f = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, f);
    }
    function b(a, c, e) {
      return function v(a, b) {
        return new W(null, function() {
          var c = F.call(null, a);
          return c ? U.call(null, c) ? kd.call(null, nd.call(null, c), v.call(null, od.call(null, c), b)) : O.call(null, H.call(null, c), v.call(null, I.call(null, c), b)) : r(b) ? v.call(null, H.call(null, b), L.call(null, b)) : null;
        }, null, null);
      }.call(null, d.call(null, a, c), e);
    }
    a.o = 2;
    a.k = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return b(c, d, a);
    };
    a.i = b;
    return a;
  }(), d = function(d, h, k) {
    switch(arguments.length) {
      case 0:
        return c.call(this);
      case 1:
        return b.call(this, d);
      case 2:
        return a.call(this, d, h);
      default:
        return e.i(d, h, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.o = 2;
  d.k = e.k;
  d.ob = c;
  d.$ = b;
  d.q = a;
  d.i = e.i;
  return d;
}(), ud = function() {
  function a(a, b, c, d) {
    return O.call(null, a, O.call(null, b, O.call(null, c, d)));
  }
  function b(a, b, c) {
    return O.call(null, a, O.call(null, b, c));
  }
  function c(a, b) {
    return O.call(null, a, b);
  }
  function d(a) {
    return F.call(null, a);
  }
  var e = null, f = function() {
    function a(c, d, e, f, h) {
      var M = null;
      4 < arguments.length && (M = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, M);
    }
    function b(a, c, d, e, f) {
      return O.call(null, a, O.call(null, c, O.call(null, d, O.call(null, e, sd.call(null, f)))));
    }
    a.o = 4;
    a.k = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var f = H(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.i = b;
    return a;
  }(), e = function(e, k, l, p, u) {
    switch(arguments.length) {
      case 1:
        return d.call(this, e);
      case 2:
        return c.call(this, e, k);
      case 3:
        return b.call(this, e, k, l);
      case 4:
        return a.call(this, e, k, l, p);
      default:
        return f.i(e, k, l, p, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = 4;
  e.k = f.k;
  e.$ = d;
  e.q = c;
  e.ba = b;
  e.Ba = a;
  e.i = f.i;
  return e;
}();
function vd(a) {
  return Db.call(null, a);
}
function wd(a) {
  return Fb.call(null, a);
}
var xd = function() {
  function a(a, b) {
    return Eb.call(null, a, b);
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      for (;;) {
        if (a = Eb.call(null, a, c), r(d)) {
          c = H.call(null, d), d = L.call(null, d);
        } else {
          return a;
        }
      }
    }
    a.o = 2;
    a.k = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return b(c, d, a);
    };
    a.i = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.i(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.k = c.k;
  b.q = a;
  b.i = c.i;
  return b;
}(), yd = function() {
  function a(a, b, c) {
    return Gb.call(null, a, b, c);
  }
  var b = null, c = function() {
    function a(c, d, k, l) {
      var p = null;
      3 < arguments.length && (p = N(Array.prototype.slice.call(arguments, 3), 0));
      return b.call(this, c, d, k, p);
    }
    function b(a, c, d, e) {
      for (;;) {
        if (a = Gb.call(null, a, c, d), r(e)) {
          c = H.call(null, e), d = ec.call(null, e), e = fc.call(null, e);
        } else {
          return a;
        }
      }
    }
    a.o = 3;
    a.k = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var l = H(a);
      a = I(a);
      return b(c, d, l, a);
    };
    a.i = b;
    return a;
  }(), b = function(b, e, f, h) {
    switch(arguments.length) {
      case 3:
        return a.call(this, b, e, f);
      default:
        return c.i(b, e, f, N(arguments, 3));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 3;
  b.k = c.k;
  b.ba = a;
  b.i = c.i;
  return b;
}();
function zd(a, b, c) {
  var d = F.call(null, c);
  if (0 === b) {
    return a.call(null);
  }
  c = A.call(null, d);
  var e = B.call(null, d);
  if (1 === b) {
    return a.$ ? a.$(c) : a.call(null, c);
  }
  var d = A.call(null, e), f = B.call(null, e);
  if (2 === b) {
    return a.q ? a.q(c, d) : a.call(null, c, d);
  }
  var e = A.call(null, f), h = B.call(null, f);
  if (3 === b) {
    return a.ba ? a.ba(c, d, e) : a.call(null, c, d, e);
  }
  var f = A.call(null, h), k = B.call(null, h);
  if (4 === b) {
    return a.Ba ? a.Ba(c, d, e, f) : a.call(null, c, d, e, f);
  }
  var h = A.call(null, k), l = B.call(null, k);
  if (5 === b) {
    return a.pb ? a.pb(c, d, e, f, h) : a.call(null, c, d, e, f, h);
  }
  var k = A.call(null, l), p = B.call(null, l);
  if (6 === b) {
    return a.Fb ? a.Fb(c, d, e, f, h, k) : a.call(null, c, d, e, f, h, k);
  }
  var l = A.call(null, p), u = B.call(null, p);
  if (7 === b) {
    return a.Qb ? a.Qb(c, d, e, f, h, k, l) : a.call(null, c, d, e, f, h, k, l);
  }
  var p = A.call(null, u), v = B.call(null, u);
  if (8 === b) {
    return a.Ic ? a.Ic(c, d, e, f, h, k, l, p) : a.call(null, c, d, e, f, h, k, l, p);
  }
  var u = A.call(null, v), G = B.call(null, v);
  if (9 === b) {
    return a.Jc ? a.Jc(c, d, e, f, h, k, l, p, u) : a.call(null, c, d, e, f, h, k, l, p, u);
  }
  var v = A.call(null, G), M = B.call(null, G);
  if (10 === b) {
    return a.xc ? a.xc(c, d, e, f, h, k, l, p, u, v) : a.call(null, c, d, e, f, h, k, l, p, u, v);
  }
  var G = A.call(null, M), J = B.call(null, M);
  if (11 === b) {
    return a.yc ? a.yc(c, d, e, f, h, k, l, p, u, v, G) : a.call(null, c, d, e, f, h, k, l, p, u, v, G);
  }
  var M = A.call(null, J), T = B.call(null, J);
  if (12 === b) {
    return a.zc ? a.zc(c, d, e, f, h, k, l, p, u, v, G, M) : a.call(null, c, d, e, f, h, k, l, p, u, v, G, M);
  }
  var J = A.call(null, T), fa = B.call(null, T);
  if (13 === b) {
    return a.Ac ? a.Ac(c, d, e, f, h, k, l, p, u, v, G, M, J) : a.call(null, c, d, e, f, h, k, l, p, u, v, G, M, J);
  }
  var T = A.call(null, fa), ma = B.call(null, fa);
  if (14 === b) {
    return a.Bc ? a.Bc(c, d, e, f, h, k, l, p, u, v, G, M, J, T) : a.call(null, c, d, e, f, h, k, l, p, u, v, G, M, J, T);
  }
  var fa = A.call(null, ma), sa = B.call(null, ma);
  if (15 === b) {
    return a.Cc ? a.Cc(c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa) : a.call(null, c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa);
  }
  var ma = A.call(null, sa), Fa = B.call(null, sa);
  if (16 === b) {
    return a.Dc ? a.Dc(c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa, ma) : a.call(null, c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa, ma);
  }
  var sa = A.call(null, Fa), fb = B.call(null, Fa);
  if (17 === b) {
    return a.Ec ? a.Ec(c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa, ma, sa) : a.call(null, c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa, ma, sa);
  }
  var Fa = A.call(null, fb), Qa = B.call(null, fb);
  if (18 === b) {
    return a.Fc ? a.Fc(c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa, ma, sa, Fa) : a.call(null, c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa, ma, sa, Fa);
  }
  fb = A.call(null, Qa);
  Qa = B.call(null, Qa);
  if (19 === b) {
    return a.Gc ? a.Gc(c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa, ma, sa, Fa, fb) : a.call(null, c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa, ma, sa, Fa, fb);
  }
  var He = A.call(null, Qa);
  B.call(null, Qa);
  if (20 === b) {
    return a.Hc ? a.Hc(c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa, ma, sa, Fa, fb, He) : a.call(null, c, d, e, f, h, k, l, p, u, v, G, M, J, T, fa, ma, sa, Fa, fb, He);
  }
  throw Error("Only up to 20 arguments supported on functions");
}
var pc = function() {
  function a(a, b, c, d, e) {
    b = ud.call(null, b, c, d, e);
    c = a.o;
    return a.k ? (d = qd.call(null, b, c + 1), d <= c ? zd.call(null, a, d, b) : a.k(b)) : a.apply(a, pd.call(null, b));
  }
  function b(a, b, c, d) {
    b = ud.call(null, b, c, d);
    c = a.o;
    return a.k ? (d = qd.call(null, b, c + 1), d <= c ? zd.call(null, a, d, b) : a.k(b)) : a.apply(a, pd.call(null, b));
  }
  function c(a, b, c) {
    b = ud.call(null, b, c);
    c = a.o;
    if (a.k) {
      var d = qd.call(null, b, c + 1);
      return d <= c ? zd.call(null, a, d, b) : a.k(b);
    }
    return a.apply(a, pd.call(null, b));
  }
  function d(a, b) {
    var c = a.o;
    if (a.k) {
      var d = qd.call(null, b, c + 1);
      return d <= c ? zd.call(null, a, d, b) : a.k(b);
    }
    return a.apply(a, pd.call(null, b));
  }
  var e = null, f = function() {
    function a(c, d, e, f, h, M) {
      var J = null;
      5 < arguments.length && (J = N(Array.prototype.slice.call(arguments, 5), 0));
      return b.call(this, c, d, e, f, h, J);
    }
    function b(a, c, d, e, f, h) {
      c = O.call(null, c, O.call(null, d, O.call(null, e, O.call(null, f, sd.call(null, h)))));
      d = a.o;
      return a.k ? (e = qd.call(null, c, d + 1), e <= d ? zd.call(null, a, e, c) : a.k(c)) : a.apply(a, pd.call(null, c));
    }
    a.o = 5;
    a.k = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var f = H(a);
      a = L(a);
      var h = H(a);
      a = I(a);
      return b(c, d, e, f, h, a);
    };
    a.i = b;
    return a;
  }(), e = function(e, k, l, p, u, v) {
    switch(arguments.length) {
      case 2:
        return d.call(this, e, k);
      case 3:
        return c.call(this, e, k, l);
      case 4:
        return b.call(this, e, k, l, p);
      case 5:
        return a.call(this, e, k, l, p, u);
      default:
        return f.i(e, k, l, p, u, N(arguments, 5));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  e.o = 5;
  e.k = f.k;
  e.q = d;
  e.ba = c;
  e.Ba = b;
  e.pb = a;
  e.i = f.i;
  return e;
}();
function Ad(a, b) {
  for (;;) {
    if (null == F.call(null, b)) {
      return!0;
    }
    if (r(a.call(null, H.call(null, b)))) {
      var c = a, d = L.call(null, b);
      a = c;
      b = d;
    } else {
      return new q(null, "else", "else", 1017020587) ? !1 : null;
    }
  }
}
function Bd(a, b) {
  for (;;) {
    if (F.call(null, b)) {
      var c = a.call(null, H.call(null, b));
      if (r(c)) {
        return c;
      }
      var c = a, d = L.call(null, b);
      a = c;
      b = d;
    } else {
      return null;
    }
  }
}
function Cd(a) {
  return a;
}
function Dd(a, b) {
  return function d(b, f) {
    return new W(null, function() {
      var h = F.call(null, f);
      if (h) {
        if (U.call(null, h)) {
          for (var k = nd.call(null, h), l = Q.call(null, k), p = hd.call(null, l), u = 0;;) {
            if (u < l) {
              var v = a.call(null, b + u, z.call(null, k, u));
              null != v && ld.call(null, p, v);
              u += 1;
            } else {
              break;
            }
          }
          return kd.call(null, md.call(null, p), d.call(null, b + l, od.call(null, h)));
        }
        k = a.call(null, b, H.call(null, h));
        return null == k ? d.call(null, b + 1, I.call(null, h)) : O.call(null, k, d.call(null, b + 1, I.call(null, h)));
      }
      return null;
    }, null, null);
  }.call(null, 0, b);
}
var Ed = function() {
  function a(a, b, c, e) {
    return new W(null, function() {
      var p = F.call(null, b), u = F.call(null, c), v = F.call(null, e);
      return p && u && v ? O.call(null, a.call(null, H.call(null, p), H.call(null, u), H.call(null, v)), d.call(null, a, I.call(null, p), I.call(null, u), I.call(null, v))) : null;
    }, null, null);
  }
  function b(a, b, c) {
    return new W(null, function() {
      var e = F.call(null, b), p = F.call(null, c);
      return e && p ? O.call(null, a.call(null, H.call(null, e), H.call(null, p)), d.call(null, a, I.call(null, e), I.call(null, p))) : null;
    }, null, null);
  }
  function c(a, b) {
    return new W(null, function() {
      var c = F.call(null, b);
      if (c) {
        if (U.call(null, c)) {
          for (var e = nd.call(null, c), p = Q.call(null, e), u = hd.call(null, p), v = 0;;) {
            if (v < p) {
              ld.call(null, u, a.call(null, z.call(null, e, v))), v += 1;
            } else {
              break;
            }
          }
          return kd.call(null, md.call(null, u), d.call(null, a, od.call(null, c)));
        }
        return O.call(null, a.call(null, H.call(null, c)), d.call(null, a, I.call(null, c)));
      }
      return null;
    }, null, null);
  }
  var d = null, e = function() {
    function a(c, d, e, f, v) {
      var G = null;
      4 < arguments.length && (G = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, G);
    }
    function b(a, c, e, f, h) {
      var G = function J(a) {
        return new W(null, function() {
          var b = d.call(null, F, a);
          return Ad.call(null, Cd, b) ? O.call(null, d.call(null, H, b), J.call(null, d.call(null, I, b))) : null;
        }, null, null);
      };
      return d.call(null, function() {
        return function(b) {
          return pc.call(null, a, b);
        };
      }(G), G.call(null, gc.call(null, h, f, e, c)));
    }
    a.o = 4;
    a.k = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var f = H(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.i = b;
    return a;
  }(), d = function(d, h, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.i(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.o = 4;
  d.k = e.k;
  d.q = c;
  d.ba = b;
  d.Ba = a;
  d.i = e.i;
  return d;
}();
function Fd(a) {
  return function c(a, e) {
    return new W(null, function() {
      var f = F.call(null, a);
      return f ? O.call(null, H.call(null, f), c.call(null, I.call(null, f), e)) : F.call(null, e) ? c.call(null, H.call(null, e), I.call(null, e)) : null;
    }, null, null);
  }.call(null, null, a);
}
var Gd = function() {
  function a(a, b) {
    return Fd.call(null, Ed.call(null, a, b));
  }
  var b = null, c = function() {
    function a(c, d, k) {
      var l = null;
      2 < arguments.length && (l = N(Array.prototype.slice.call(arguments, 2), 0));
      return b.call(this, c, d, l);
    }
    function b(a, c, d) {
      return Fd.call(null, pc.call(null, Ed, a, c, d));
    }
    a.o = 2;
    a.k = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = I(a);
      return b(c, d, a);
    };
    a.i = b;
    return a;
  }(), b = function(b, e, f) {
    switch(arguments.length) {
      case 2:
        return a.call(this, b, e);
      default:
        return c.i(b, e, N(arguments, 2));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 2;
  b.k = c.k;
  b.q = a;
  b.i = c.i;
  return b;
}(), Id = function Hd(b, c) {
  return new W(null, function() {
    var d = F.call(null, c);
    if (d) {
      if (U.call(null, d)) {
        for (var e = nd.call(null, d), f = Q.call(null, e), h = hd.call(null, f), k = 0;;) {
          if (k < f) {
            r(b.call(null, z.call(null, e, k))) && ld.call(null, h, z.call(null, e, k)), k += 1;
          } else {
            break;
          }
        }
        return kd.call(null, md.call(null, h), Hd.call(null, b, od.call(null, d)));
      }
      e = H.call(null, d);
      d = I.call(null, d);
      return r(b.call(null, e)) ? O.call(null, e, Hd.call(null, b, d)) : Hd.call(null, b, d);
    }
    return null;
  }, null, null);
};
function Jd(a, b, c) {
  return function e(c) {
    return new W(null, function() {
      return O.call(null, c, r(a.call(null, c)) ? Gd.call(null, e, b.call(null, c)) : null);
    }, null, null);
  }.call(null, c);
}
function Kd(a) {
  return Id.call(null, function(a) {
    return!yc.call(null, a);
  }, I.call(null, Jd.call(null, yc, F, a)));
}
function Ld(a, b) {
  return null != a ? a && (a.u & 4 || a.Hd) ? wd.call(null, V.call(null, Eb, vd.call(null, a), b)) : V.call(null, Xa, a, b) : V.call(null, gc, K, b);
}
var Md = function() {
  function a(a, b, c, d) {
    return Ld.call(null, X, Ed.call(null, a, b, c, d));
  }
  function b(a, b, c) {
    return Ld.call(null, X, Ed.call(null, a, b, c));
  }
  function c(a, b) {
    return wd.call(null, V.call(null, function(b, c) {
      return xd.call(null, b, a.call(null, c));
    }, vd.call(null, X), b));
  }
  var d = null, e = function() {
    function a(c, d, e, f, v) {
      var G = null;
      4 < arguments.length && (G = N(Array.prototype.slice.call(arguments, 4), 0));
      return b.call(this, c, d, e, f, G);
    }
    function b(a, c, d, e, f) {
      return Ld.call(null, X, pc.call(null, Ed, a, c, d, e, f));
    }
    a.o = 4;
    a.k = function(a) {
      var c = H(a);
      a = L(a);
      var d = H(a);
      a = L(a);
      var e = H(a);
      a = L(a);
      var f = H(a);
      a = I(a);
      return b(c, d, e, f, a);
    };
    a.i = b;
    return a;
  }(), d = function(d, h, k, l, p) {
    switch(arguments.length) {
      case 2:
        return c.call(this, d, h);
      case 3:
        return b.call(this, d, h, k);
      case 4:
        return a.call(this, d, h, k, l);
      default:
        return e.i(d, h, k, l, N(arguments, 4));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.o = 4;
  d.k = e.k;
  d.q = c;
  d.ba = b;
  d.Ba = a;
  d.i = e.i;
  return d;
}(), Nd = function() {
  function a(a, b, c) {
    var h = Ec;
    for (b = F.call(null, b);;) {
      if (b) {
        var k = a;
        if (k ? k.f & 256 || k.Sb || (k.f ? 0 : s.call(null, bb, k)) : s.call(null, bb, k)) {
          a = kc.call(null, a, H.call(null, b), h);
          if (h === a) {
            return c;
          }
          b = L.call(null, b);
        } else {
          return c;
        }
      } else {
        return a;
      }
    }
  }
  function b(a, b) {
    return c.call(null, a, b, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.ba = a;
  return c;
}(), Pd = function Od(b, c, d) {
  var e = R.call(null, c, 0, null);
  return(c = Qc.call(null, c, 1)) ? mc.call(null, b, e, Od.call(null, kc.call(null, b, e), c, d)) : mc.call(null, b, e, d);
};
function Qd(a, b) {
  this.aa = a;
  this.e = b;
}
function Rd(a) {
  return new Qd(a, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]);
}
function Sd(a, b) {
  return a.e[b];
}
function Td(a, b, c) {
  return a.e[b] = c;
}
function Ud(a) {
  return new Qd(a.aa, x.call(null, a.e));
}
function Vd(a) {
  a = a.j;
  return 32 > a ? 0 : a - 1 >>> 5 << 5;
}
function Wd(a, b, c) {
  for (;;) {
    if (0 === b) {
      return c;
    }
    var d = Rd.call(null, a);
    Td.call(null, d, 0, c);
    c = d;
    b -= 5;
  }
}
var Yd = function Xd(b, c, d, e) {
  var f = Ud.call(null, d), h = b.j - 1 >>> c & 31;
  5 === c ? Td.call(null, f, h, e) : (d = Sd.call(null, d, h), b = null != d ? Xd.call(null, b, c - 5, d, e) : Wd.call(null, null, c - 5, e), Td.call(null, f, h, b));
  return f;
};
function Zd(a, b) {
  throw Error([w("No item "), w(a), w(" in vector of length "), w(b)].join(""));
}
function $d(a) {
  var b = a.root;
  for (a = a.shift;;) {
    if (0 < a) {
      a -= 5, b = Sd.call(null, b, 0);
    } else {
      return b.e;
    }
  }
}
function ae(a, b) {
  if (b >= Vd.call(null, a)) {
    return a.ra;
  }
  for (var c = a.root, d = a.shift;;) {
    if (0 < d) {
      var e = d - 5, c = Sd.call(null, c, b >>> d & 31), d = e
    } else {
      return c.e;
    }
  }
}
function be(a, b) {
  return 0 <= b && b < a.j ? ae.call(null, a, b) : Zd.call(null, b, a.j);
}
var de = function ce(b, c, d, e, f) {
  var h = Ud.call(null, d);
  if (0 === c) {
    Td.call(null, h, e & 31, f);
  } else {
    var k = e >>> c & 31;
    Td.call(null, h, k, ce.call(null, b, c - 5, Sd.call(null, d, k), e, f));
  }
  return h;
};
function Y(a, b, c, d, e, f) {
  this.m = a;
  this.j = b;
  this.shift = c;
  this.root = d;
  this.ra = e;
  this.n = f;
  this.u = 8196;
  this.f = 167668511;
}
g = Y.prototype;
g.cb = function() {
  return new ee(this.j, this.shift, fe.call(null, this.root), ge.call(null, this.ra));
};
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
g.ja = function(a, b) {
  return C.call(null, this, b, null);
};
g.ka = function(a, b, c) {
  return "number" === typeof b ? z.call(null, this, b, c) : c;
};
g.bb = function(a, b, c) {
  if ("number" === typeof b) {
    return lb.call(null, this, b, c);
  }
  throw Error("Vector's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Ga(null, c);
      case 3:
        return this.Ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x.call(null, b)));
};
g.$ = function(a) {
  return this.Ga(null, a);
};
g.q = function(a, b) {
  return this.Ha(null, a, b);
};
g.ha = function(a, b) {
  if (32 > this.j - Vd.call(null, this)) {
    for (var c = this.ra.length, d = Array(c + 1), e = 0;;) {
      if (e < c) {
        d[e] = this.ra[e], e += 1;
      } else {
        break;
      }
    }
    d[c] = b;
    return new Y(this.m, this.j + 1, this.shift, this.root, d, null);
  }
  c = (d = this.j >>> 5 > 1 << this.shift) ? this.shift + 5 : this.shift;
  d ? (d = Rd.call(null, null), Td.call(null, d, 0, this.root), Td.call(null, d, 1, Wd.call(null, null, this.shift, new Qd(null, this.ra)))) : d = Yd.call(null, this, this.shift, this.root, new Qd(null, this.ra));
  return new Y(this.m, this.j + 1, c, d, [b], null);
};
g.qb = function() {
  return 0 < this.j ? new ac(this, this.j - 1, null) : null;
};
g.Tb = function() {
  return z.call(null, this, 0);
};
g.Ub = function() {
  return z.call(null, this, 1);
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return Wb.call(null, this, b);
};
g.ta = function(a, b, c) {
  return Wb.call(null, this, b, c);
};
g.na = function() {
  return 0 === this.j ? null : 32 >= this.j ? new Tb(this.ra, 0) : new q(null, "else", "else", 1017020587) ? he.call(null, this, $d.call(null, this), 0, 0) : null;
};
g.pa = function() {
  return this.j;
};
g.Gb = function(a, b, c) {
  if (0 <= b && b < this.j) {
    return Vd.call(null, this) <= b ? (a = x.call(null, this.ra), a[b & 31] = c, new Y(this.m, this.j, this.shift, this.root, a, null)) : new Y(this.m, this.j, this.shift, de.call(null, this, this.shift, this.root, b, c), this.ra, null);
  }
  if (b === this.j) {
    return Xa.call(null, this, c);
  }
  if (new q(null, "else", "else", 1017020587)) {
    throw Error([w("Index "), w(b), w(" out of bounds  [0,"), w(this.j), w("]")].join(""));
  }
  return null;
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return new Y(b, this.j, this.shift, this.root, this.ra, this.n);
};
g.la = function() {
  return this.m;
};
g.Ga = function(a, b) {
  return be.call(null, this, b)[b & 31];
};
g.Ha = function(a, b, c) {
  return 0 <= b && b < this.j ? ae.call(null, this, b)[b & 31] : c;
};
g.ia = function() {
  return dc.call(null, X, this.m);
};
var Z = new Qd(null, [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null]), X = new Y(null, 0, 5, Z, [], 0);
function ie(a) {
  return Fb.call(null, V.call(null, Eb, Db.call(null, X), a));
}
function je(a, b, c, d, e, f) {
  this.ya = a;
  this.node = b;
  this.p = c;
  this.off = d;
  this.m = e;
  this.n = f;
  this.f = 32243948;
  this.u = 1536;
}
g = je.prototype;
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
g.Ca = function() {
  if (this.off + 1 < this.node.length) {
    var a = he.call(null, this.ya, this.node, this.p, this.off + 1);
    return null == a ? null : a;
  }
  return Mb.call(null, this);
};
g.ha = function(a, b) {
  return O.call(null, b, this);
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return Wb.call(null, ke.call(null, this.ya, this.p + this.off, Q.call(null, this.ya)), b);
};
g.ta = function(a, b, c) {
  return Wb.call(null, ke.call(null, this.ya, this.p + this.off, Q.call(null, this.ya)), b, c);
};
g.na = function() {
  return this;
};
g.va = function() {
  return this.node[this.off];
};
g.wa = function() {
  if (this.off + 1 < this.node.length) {
    var a = he.call(null, this.ya, this.node, this.p, this.off + 1);
    return null == a ? K : a;
  }
  return Lb.call(null, this);
};
g.Bb = function() {
  var a = this.p + this.node.length;
  return a < y.call(null, this.ya) ? he.call(null, this.ya, ae.call(null, this.ya, a), a, 0) : null;
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return he.call(null, this.ya, this.node, this.p, this.off, b);
};
g.ia = function() {
  return dc.call(null, X, this.m);
};
g.Cb = function() {
  return id.call(null, this.node, this.off);
};
g.Db = function() {
  var a = this.p + this.node.length;
  return a < y.call(null, this.ya) ? he.call(null, this.ya, ae.call(null, this.ya, a), a, 0) : K;
};
var he = function() {
  function a(a, b, c, d, l) {
    return new je(a, b, c, d, l, null);
  }
  function b(a, b, c, d) {
    return new je(a, b, c, d, null, null);
  }
  function c(a, b, c) {
    return new je(a, be.call(null, a, b), b, c, null, null);
  }
  var d = null, d = function(d, f, h, k, l) {
    switch(arguments.length) {
      case 3:
        return c.call(this, d, f, h);
      case 4:
        return b.call(this, d, f, h, k);
      case 5:
        return a.call(this, d, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  d.ba = c;
  d.Ba = b;
  d.pb = a;
  return d;
}();
function le(a, b, c, d, e) {
  this.m = a;
  this.v = b;
  this.start = c;
  this.end = d;
  this.n = e;
  this.f = 166617887;
  this.u = 8192;
}
g = le.prototype;
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
g.ja = function(a, b) {
  return C.call(null, this, b, null);
};
g.ka = function(a, b, c) {
  return "number" === typeof b ? z.call(null, this, b, c) : c;
};
g.bb = function(a, b, c) {
  if ("number" === typeof b) {
    return lb.call(null, this, b, c);
  }
  throw Error("Subvec's key for assoc must be a number.");
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.Ga(null, c);
      case 3:
        return this.Ha(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x.call(null, b)));
};
g.$ = function(a) {
  return this.Ga(null, a);
};
g.q = function(a, b) {
  return this.Ha(null, a, b);
};
g.ha = function(a, b) {
  return me.call(null, this.m, lb.call(null, this.v, this.end, b), this.start, this.end + 1, null);
};
g.qb = function() {
  return this.start !== this.end ? new ac(this, this.end - this.start - 1, null) : null;
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return Wb.call(null, this, b);
};
g.ta = function(a, b, c) {
  return Wb.call(null, this, b, c);
};
g.na = function() {
  var a = this;
  return function(b) {
    return function d(e) {
      return e === a.end ? null : O.call(null, z.call(null, a.v, e), new W(null, function() {
        return function() {
          return d.call(null, e + 1);
        };
      }(b), null, null));
    };
  }(this).call(null, a.start);
};
g.pa = function() {
  return this.end - this.start;
};
g.Gb = function(a, b, c) {
  var d = this, e = d.start + b;
  return me.call(null, d.m, mc.call(null, d.v, e, c), d.start, function() {
    var a = d.end, b = e + 1;
    return a > b ? a : b;
  }(), null);
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return me.call(null, b, this.v, this.start, this.end, this.n);
};
g.la = function() {
  return this.m;
};
g.Ga = function(a, b) {
  return 0 > b || this.end <= this.start + b ? Zd.call(null, b, this.end - this.start) : z.call(null, this.v, this.start + b);
};
g.Ha = function(a, b, c) {
  return 0 > b || this.end <= this.start + b ? c : z.call(null, this.v, this.start + b, c);
};
g.ia = function() {
  return dc.call(null, X, this.m);
};
function me(a, b, c, d, e) {
  for (;;) {
    if (b instanceof le) {
      c = b.start + c, d = b.start + d, b = b.v;
    } else {
      var f = Q.call(null, b);
      if (0 > c || 0 > d || c > f || d > f) {
        throw Error("Index out of bounds");
      }
      return new le(a, b, c, d, e);
    }
  }
}
var ke = function() {
  function a(a, b, c) {
    return me.call(null, null, a, b, c, null);
  }
  function b(a, b) {
    return c.call(null, a, b, Q.call(null, a));
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.ba = a;
  return c;
}();
function ne(a, b) {
  return a === b.aa ? b : new Qd(a, x.call(null, b.e));
}
function fe(a) {
  return new Qd({}, x.call(null, a.e));
}
function ge(a) {
  var b = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
  Cc.call(null, a, 0, b, 0, a.length);
  return b;
}
var pe = function oe(b, c, d, e) {
  var f = ne.call(null, b.root.aa, d), h = b.j - 1 >>> c & 31;
  Td.call(null, f, h, 5 === c ? e : function() {
    var d = Sd.call(null, f, h);
    return null != d ? oe.call(null, b, c - 5, d, e) : Wd.call(null, b.root.aa, c - 5, e);
  }());
  return f;
};
function ee(a, b, c, d) {
  this.j = a;
  this.shift = b;
  this.root = c;
  this.ra = d;
  this.f = 275;
  this.u = 88;
}
g = ee.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ja(null, c);
      case 3:
        return this.ka(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x.call(null, b)));
};
g.$ = function(a) {
  return this.ja(null, a);
};
g.q = function(a, b) {
  return this.ka(null, a, b);
};
g.ja = function(a, b) {
  return C.call(null, this, b, null);
};
g.ka = function(a, b, c) {
  return "number" === typeof b ? z.call(null, this, b, c) : c;
};
g.Ga = function(a, b) {
  if (this.root.aa) {
    return be.call(null, this, b)[b & 31];
  }
  throw Error("nth after persistent!");
};
g.Ha = function(a, b, c) {
  return 0 <= b && b < this.j ? z.call(null, this, b) : c;
};
g.pa = function() {
  if (this.root.aa) {
    return this.j;
  }
  throw Error("count after persistent!");
};
g.Wb = function(a, b, c) {
  var d = this;
  if (d.root.aa) {
    if (0 <= b && b < d.j) {
      return Vd.call(null, this) <= b ? d.ra[b & 31] = c : (a = function() {
        return function f(a, k) {
          var l = ne.call(null, d.root.aa, k);
          if (0 === a) {
            Td.call(null, l, b & 31, c);
          } else {
            var p = b >>> a & 31;
            Td.call(null, l, p, f.call(null, a - 5, Sd.call(null, l, p)));
          }
          return l;
        };
      }(this).call(null, d.shift, d.root), d.root = a), this;
    }
    if (b === d.j) {
      return Eb.call(null, this, c);
    }
    if (new q(null, "else", "else", 1017020587)) {
      throw Error([w("Index "), w(b), w(" out of bounds for TransientVector of length"), w(d.j)].join(""));
    }
    return null;
  }
  throw Error("assoc! after persistent!");
};
g.rb = function(a, b, c) {
  if ("number" === typeof b) {
    return Hb.call(null, this, b, c);
  }
  throw Error("TransientVector's key for assoc! must be a number.");
};
g.fb = function(a, b) {
  if (this.root.aa) {
    if (32 > this.j - Vd.call(null, this)) {
      this.ra[this.j & 31] = b;
    } else {
      var c = new Qd(this.root.aa, this.ra), d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      d[0] = b;
      this.ra = d;
      if (this.j >>> 5 > 1 << this.shift) {
        var d = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null], e = this.shift + 5;
        d[0] = this.root;
        d[1] = Wd.call(null, this.root.aa, this.shift, c);
        this.root = new Qd(this.root.aa, d);
        this.shift = e;
      } else {
        this.root = pe.call(null, this, this.shift, this.root, c);
      }
    }
    this.j += 1;
    return this;
  }
  throw Error("conj! after persistent!");
};
g.gb = function() {
  if (this.root.aa) {
    this.root.aa = null;
    var a = this.j - Vd.call(null, this), b = Array(a);
    Cc.call(null, this.ra, 0, b, 0, a);
    return new Y(null, this.j, this.shift, this.root, b, null);
  }
  throw Error("persistent! called twice");
};
function qe() {
  this.u = 0;
  this.f = 2097152;
}
qe.prototype.ca = function() {
  return!1;
};
var re = new qe;
function se(a, b) {
  return Gc.call(null, zc.call(null, b) ? Q.call(null, a) === Q.call(null, b) ? Ad.call(null, Cd, Ed.call(null, function(a) {
    return Rb.call(null, kc.call(null, b, H.call(null, a), re), ec.call(null, a));
  }, a)) : null : null);
}
function te(a) {
  for (var b = a.length, c = 0;;) {
    if (b <= c) {
      return-1;
    }
    if (null == a[c]) {
      return c;
    }
    if (new q(null, "else", "else", 1017020587)) {
      c += 2;
    } else {
      return null;
    }
  }
}
function ue(a, b, c) {
  b = a.length;
  c = c.Qa;
  for (var d = 0;;) {
    if (b <= d) {
      return-1;
    }
    var e = a[d];
    if (e instanceof q && c === e.Qa) {
      return d;
    }
    if (new q(null, "else", "else", 1017020587)) {
      d += 2;
    } else {
      return null;
    }
  }
}
function ve(a, b, c) {
  b = a.length;
  c = c.str;
  for (var d = 0;;) {
    if (b <= d) {
      return-1;
    }
    var e = a[d];
    if (new q(null, "else", "else", 1017020587)) {
      d += 2;
    } else {
      return null;
    }
  }
}
function we(a, b, c) {
  b = a.length;
  for (var d = 0;;) {
    if (b <= d) {
      return-1;
    }
    if (c === a[d]) {
      return d;
    }
    if (new q(null, "else", "else", 1017020587)) {
      d += 2;
    } else {
      return null;
    }
  }
}
function xe(a, b, c) {
  b = a.length;
  for (var d = 0;;) {
    if (b <= d) {
      return-1;
    }
    if (Rb.call(null, c, a[d])) {
      return d;
    }
    if (new q(null, "else", "else", 1017020587)) {
      d += 2;
    } else {
      return null;
    }
  }
}
function ye(a, b) {
  var c = a.e;
  return b instanceof q ? ue.call(null, c, 0, b) : ba(b) || "number" === typeof b ? we.call(null, c, 0, b) : null == b ? te.call(null, c) : new q(null, "else", "else", 1017020587) ? xe.call(null, c, 0, b) : null;
}
function ze(a, b, c) {
  a = a.e;
  for (var d = a.length, e = Array(d + 2), f = 0;;) {
    if (f < d) {
      e[f] = a[f], f += 1;
    } else {
      break;
    }
  }
  e[d] = b;
  e[d + 1] = c;
  return e;
}
function Ae(a, b, c) {
  this.e = a;
  this.p = b;
  this.Ka = c;
  this.u = 0;
  this.f = 32374990;
}
g = Ae.prototype;
g.ea = function() {
  return $b.call(null, this);
};
g.Ca = function() {
  return this.p < this.e.length - 2 ? new Ae(this.e, this.p + 2, this.Ka) : null;
};
g.ha = function(a, b) {
  return O.call(null, b, this);
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return P.call(null, b, this);
};
g.ta = function(a, b, c) {
  return P.call(null, b, c, this);
};
g.na = function() {
  return this;
};
g.pa = function() {
  return(this.e.length - this.p) / 2;
};
g.va = function() {
  return new Y(null, 2, 5, Z, [this.e[this.p], this.e[this.p + 1]], null);
};
g.wa = function() {
  return this.p < this.e.length - 2 ? new Ae(this.e, this.p + 2, this.Ka) : K;
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return new Ae(this.e, this.p, b);
};
g.la = function() {
  return this.Ka;
};
g.ia = function() {
  return dc.call(null, K, this.Ka);
};
function Be(a, b, c) {
  return b <= a.length - 2 ? new Ae(a, b, c) : null;
}
function Ma(a, b, c, d) {
  this.m = a;
  this.j = b;
  this.e = c;
  this.n = d;
  this.u = 8196;
  this.f = 16123663;
}
g = Ma.prototype;
g.cb = function() {
  return new Ce({}, this.e.length, x.call(null, this.e));
};
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Sc.call(null, this);
};
g.ja = function(a, b) {
  return C.call(null, this, b, null);
};
g.ka = function(a, b, c) {
  a = ye.call(null, this, b);
  return-1 === a ? c : this.e[a + 1];
};
g.bb = function(a, b, c) {
  a = ye.call(null, this, b);
  return-1 === a ? this.j < De ? (c = ze.call(null, this, b, c), new Ma(this.m, this.j + 1, c, null)) : qb.call(null, db.call(null, Ld.call(null, Ee, this), b, c), this.m) : c === this.e[a + 1] ? this : new q(null, "else", "else", 1017020587) ? (b = x.call(null, this.e), b[a + 1] = c, new Ma(this.m, this.j, b, null)) : null;
};
g.Ab = function(a, b) {
  return-1 !== ye.call(null, this, b);
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ja(null, c);
      case 3:
        return this.ka(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x.call(null, b)));
};
g.$ = function(a) {
  return this.ja(null, a);
};
g.q = function(a, b) {
  return this.ka(null, a, b);
};
g.ha = function(a, b) {
  return Ac.call(null, b) ? db.call(null, this, z.call(null, b, 0), z.call(null, b, 1)) : V.call(null, Xa, this, b);
};
g.toString = function() {
  return E.call(null, this);
};
g.na = function() {
  return Be.call(null, this.e, 0, null);
};
g.pa = function() {
  return this.j;
};
g.ca = function(a, b) {
  return se.call(null, this, b);
};
g.oa = function(a, b) {
  return new Ma(b, this.j, this.e, this.n);
};
g.la = function() {
  return this.m;
};
g.ia = function() {
  return qb.call(null, Fe, this.m);
};
var Fe = new Ma(null, 0, [], null), De = 8;
function Ge(a) {
  for (var b = a.length, c = 0, d = vd.call(null, Fe);;) {
    if (c < b) {
      var e = c + 2, d = Gb.call(null, d, a[c], a[c + 1]), c = e
    } else {
      return Fb.call(null, d);
    }
  }
}
function Ce(a, b, c) {
  this.Wa = a;
  this.len = b;
  this.e = c;
  this.u = 56;
  this.f = 258;
}
g = Ce.prototype;
g.rb = function(a, b, c) {
  if (r(this.Wa)) {
    a = ye.call(null, this, b);
    if (-1 === a) {
      return this.len + 2 <= 2 * De ? (this.len += 2, this.e.push(b), this.e.push(c), this) : yd.call(null, Ie.call(null, this.len, this.e), b, c);
    }
    c !== this.e[a + 1] && (this.e[a + 1] = c);
    return this;
  }
  throw Error("assoc! after persistent!");
};
g.fb = function(a, b) {
  if (r(this.Wa)) {
    if (b ? b.f & 2048 || b.Kc || (b.f ? 0 : s.call(null, gb, b)) : s.call(null, gb, b)) {
      return Gb.call(null, this, Tc.call(null, b), Uc.call(null, b));
    }
    for (var c = F.call(null, b), d = this;;) {
      var e = H.call(null, c);
      if (r(e)) {
        c = L.call(null, c), d = Gb.call(null, d, Tc.call(null, e), Uc.call(null, e));
      } else {
        return d;
      }
    }
  } else {
    throw Error("conj! after persistent!");
  }
};
g.gb = function() {
  if (r(this.Wa)) {
    return this.Wa = !1, new Ma(null, Mc.call(null, this.len, 2), this.e, null);
  }
  throw Error("persistent! called twice");
};
g.ja = function(a, b) {
  return C.call(null, this, b, null);
};
g.ka = function(a, b, c) {
  if (r(this.Wa)) {
    return a = ye.call(null, this, b), -1 === a ? c : this.e[a + 1];
  }
  throw Error("lookup after persistent!");
};
g.pa = function() {
  if (r(this.Wa)) {
    return Mc.call(null, this.len, 2);
  }
  throw Error("count after persistent!");
};
function Ie(a, b) {
  for (var c = vd.call(null, Ee), d = 0;;) {
    if (d < a) {
      c = yd.call(null, c, b[d], b[d + 1]), d += 2;
    } else {
      return c;
    }
  }
}
function Je() {
  this.Ja = !1;
}
function Ke(a, b) {
  return a === b ? !0 : bd.call(null, a, b) ? !0 : new q(null, "else", "else", 1017020587) ? Rb.call(null, a, b) : null;
}
var Le = function() {
  function a(a, b, c, h, k) {
    a = x.call(null, a);
    a[b] = c;
    a[h] = k;
    return a;
  }
  function b(a, b, c) {
    a = x.call(null, a);
    a[b] = c;
    return a;
  }
  var c = null, c = function(c, e, f, h, k) {
    switch(arguments.length) {
      case 3:
        return b.call(this, c, e, f);
      case 5:
        return a.call(this, c, e, f, h, k);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ba = b;
  c.pb = a;
  return c;
}();
function Me(a, b) {
  return Pc.call(null, a & b - 1);
}
var Ne = function() {
  function a(a, b, c, h, k, l) {
    a = a.Xa(b);
    a.e[c] = h;
    a.e[k] = l;
    return a;
  }
  function b(a, b, c, h) {
    a = a.Xa(b);
    a.e[c] = h;
    return a;
  }
  var c = null, c = function(c, e, f, h, k, l) {
    switch(arguments.length) {
      case 4:
        return b.call(this, c, e, f, h);
      case 6:
        return a.call(this, c, e, f, h, k, l);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.Ba = b;
  c.Fb = a;
  return c;
}();
function Oe(a, b, c) {
  this.aa = a;
  this.da = b;
  this.e = c;
}
g = Oe.prototype;
g.Ea = function(a, b, c, d, e, f) {
  var h = 1 << (c >>> b & 31), k = Me.call(null, this.da, h);
  if (0 === (this.da & h)) {
    var l = Pc.call(null, this.da);
    if (2 * l < this.e.length) {
      return a = this.Xa(a), b = a.e, f.Ja = !0, Dc.call(null, b, 2 * k, b, 2 * (k + 1), 2 * (l - k)), b[2 * k] = d, b[2 * k + 1] = e, a.da |= h, a;
    }
    if (16 <= l) {
      k = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      k[c >>> b & 31] = Pe.Ea(a, b + 5, c, d, e, f);
      for (e = d = 0;;) {
        if (32 > d) {
          0 !== (this.da >>> d & 1) && (k[d] = null != this.e[e] ? Pe.Ea(a, b + 5, S.call(null, this.e[e]), this.e[e], this.e[e + 1], f) : this.e[e + 1], e += 2), d += 1;
        } else {
          break;
        }
      }
      return new Qe(a, l + 1, k);
    }
    return new q(null, "else", "else", 1017020587) ? (b = Array(2 * (l + 4)), Cc.call(null, this.e, 0, b, 0, 2 * k), b[2 * k] = d, b[2 * k + 1] = e, Cc.call(null, this.e, 2 * k, b, 2 * (k + 1), 2 * (l - k)), f.Ja = !0, a = this.Xa(a), a.e = b, a.da |= h, a) : null;
  }
  l = this.e[2 * k];
  h = this.e[2 * k + 1];
  return null == l ? (l = h.Ea(a, b + 5, c, d, e, f), l === h ? this : Ne.call(null, this, a, 2 * k + 1, l)) : Ke.call(null, d, l) ? e === h ? this : Ne.call(null, this, a, 2 * k + 1, e) : new q(null, "else", "else", 1017020587) ? (f.Ja = !0, Ne.call(null, this, a, 2 * k, null, 2 * k + 1, Re.call(null, a, b + 5, l, h, c, d, e))) : null;
};
g.hb = function() {
  return Se.call(null, this.e);
};
g.Xa = function(a) {
  if (a === this.aa) {
    return this;
  }
  var b = Pc.call(null, this.da), c = Array(0 > b ? 4 : 2 * (b + 1));
  Cc.call(null, this.e, 0, c, 0, 2 * b);
  return new Oe(a, this.da, c);
};
g.Da = function(a, b, c, d, e) {
  var f = 1 << (b >>> a & 31), h = Me.call(null, this.da, f);
  if (0 === (this.da & f)) {
    var k = Pc.call(null, this.da);
    if (16 <= k) {
      h = [null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null, null];
      h[b >>> a & 31] = Pe.Da(a + 5, b, c, d, e);
      for (d = c = 0;;) {
        if (32 > c) {
          0 !== (this.da >>> c & 1) && (h[c] = null != this.e[d] ? Pe.Da(a + 5, S.call(null, this.e[d]), this.e[d], this.e[d + 1], e) : this.e[d + 1], d += 2), c += 1;
        } else {
          break;
        }
      }
      return new Qe(null, k + 1, h);
    }
    a = Array(2 * (k + 1));
    Cc.call(null, this.e, 0, a, 0, 2 * h);
    a[2 * h] = c;
    a[2 * h + 1] = d;
    Cc.call(null, this.e, 2 * h, a, 2 * (h + 1), 2 * (k - h));
    e.Ja = !0;
    return new Oe(null, this.da | f, a);
  }
  k = this.e[2 * h];
  f = this.e[2 * h + 1];
  return null == k ? (k = f.Da(a + 5, b, c, d, e), k === f ? this : new Oe(null, this.da, Le.call(null, this.e, 2 * h + 1, k))) : Ke.call(null, c, k) ? d === f ? this : new Oe(null, this.da, Le.call(null, this.e, 2 * h + 1, d)) : new q(null, "else", "else", 1017020587) ? (e.Ja = !0, new Oe(null, this.da, Le.call(null, this.e, 2 * h, null, 2 * h + 1, Re.call(null, a + 5, k, f, b, c, d)))) : null;
};
g.Ra = function(a, b, c, d) {
  var e = 1 << (b >>> a & 31);
  if (0 === (this.da & e)) {
    return d;
  }
  var f = Me.call(null, this.da, e), e = this.e[2 * f], f = this.e[2 * f + 1];
  return null == e ? f.Ra(a + 5, b, c, d) : Ke.call(null, c, e) ? f : new q(null, "else", "else", 1017020587) ? d : null;
};
var Pe = new Oe(null, 0, []);
function Qe(a, b, c) {
  this.aa = a;
  this.j = b;
  this.e = c;
}
g = Qe.prototype;
g.Ea = function(a, b, c, d, e, f) {
  var h = c >>> b & 31, k = this.e[h];
  if (null == k) {
    return a = Ne.call(null, this, a, h, Pe.Ea(a, b + 5, c, d, e, f)), a.j += 1, a;
  }
  b = k.Ea(a, b + 5, c, d, e, f);
  return b === k ? this : Ne.call(null, this, a, h, b);
};
g.hb = function() {
  return Te.call(null, this.e);
};
g.Xa = function(a) {
  return a === this.aa ? this : new Qe(a, this.j, x.call(null, this.e));
};
g.Da = function(a, b, c, d, e) {
  var f = b >>> a & 31, h = this.e[f];
  if (null == h) {
    return new Qe(null, this.j + 1, Le.call(null, this.e, f, Pe.Da(a + 5, b, c, d, e)));
  }
  a = h.Da(a + 5, b, c, d, e);
  return a === h ? this : new Qe(null, this.j, Le.call(null, this.e, f, a));
};
g.Ra = function(a, b, c, d) {
  var e = this.e[b >>> a & 31];
  return null != e ? e.Ra(a + 5, b, c, d) : d;
};
function Ue(a, b, c) {
  b *= 2;
  for (var d = 0;;) {
    if (d < b) {
      if (Ke.call(null, c, a[d])) {
        return d;
      }
      d += 2;
    } else {
      return-1;
    }
  }
}
function Ve(a, b, c, d) {
  this.aa = a;
  this.Pa = b;
  this.j = c;
  this.e = d;
}
g = Ve.prototype;
g.Ea = function(a, b, c, d, e, f) {
  if (c === this.Pa) {
    b = Ue.call(null, this.e, this.j, d);
    if (-1 === b) {
      if (this.e.length > 2 * this.j) {
        return a = Ne.call(null, this, a, 2 * this.j, d, 2 * this.j + 1, e), f.Ja = !0, a.j += 1, a;
      }
      c = this.e.length;
      b = Array(c + 2);
      Cc.call(null, this.e, 0, b, 0, c);
      b[c] = d;
      b[c + 1] = e;
      f.Ja = !0;
      f = this.j + 1;
      a === this.aa ? (this.e = b, this.j = f, a = this) : a = new Ve(this.aa, this.Pa, f, b);
      return a;
    }
    return this.e[b + 1] === e ? this : Ne.call(null, this, a, b + 1, e);
  }
  return(new Oe(a, 1 << (this.Pa >>> b & 31), [null, this, null, null])).Ea(a, b, c, d, e, f);
};
g.hb = function() {
  return Se.call(null, this.e);
};
g.Xa = function(a) {
  if (a === this.aa) {
    return this;
  }
  var b = Array(2 * (this.j + 1));
  Cc.call(null, this.e, 0, b, 0, 2 * this.j);
  return new Ve(a, this.Pa, this.j, b);
};
g.Da = function(a, b, c, d, e) {
  return b === this.Pa ? (a = Ue.call(null, this.e, this.j, c), -1 === a ? (a = 2 * this.j, b = Array(a + 2), Cc.call(null, this.e, 0, b, 0, a), b[a] = c, b[a + 1] = d, e.Ja = !0, new Ve(null, this.Pa, this.j + 1, b)) : Rb.call(null, this.e[a], d) ? this : new Ve(null, this.Pa, this.j, Le.call(null, this.e, a + 1, d))) : (new Oe(null, 1 << (this.Pa >>> a & 31), [null, this])).Da(a, b, c, d, e);
};
g.Ra = function(a, b, c, d) {
  a = Ue.call(null, this.e, this.j, c);
  return 0 > a ? d : Ke.call(null, c, this.e[a]) ? this.e[a + 1] : new q(null, "else", "else", 1017020587) ? d : null;
};
var Re = function() {
  function a(a, b, c, h, k, l, p) {
    var u = S.call(null, c);
    if (u === k) {
      return new Ve(null, u, 2, [c, h, l, p]);
    }
    var v = new Je;
    return Pe.Ea(a, b, u, c, h, v).Ea(a, b, k, l, p, v);
  }
  function b(a, b, c, h, k, l) {
    var p = S.call(null, b);
    if (p === h) {
      return new Ve(null, p, 2, [b, c, k, l]);
    }
    var u = new Je;
    return Pe.Da(a, p, b, c, u).Da(a, h, k, l, u);
  }
  var c = null, c = function(c, e, f, h, k, l, p) {
    switch(arguments.length) {
      case 6:
        return b.call(this, c, e, f, h, k, l);
      case 7:
        return a.call(this, c, e, f, h, k, l, p);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.Fb = b;
  c.Qb = a;
  return c;
}();
function We(a, b, c, d, e) {
  this.m = a;
  this.nodes = b;
  this.p = c;
  this.s = d;
  this.n = e;
  this.u = 0;
  this.f = 32374860;
}
g = We.prototype;
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
g.ha = function(a, b) {
  return O.call(null, b, this);
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return P.call(null, b, this);
};
g.ta = function(a, b, c) {
  return P.call(null, b, c, this);
};
g.na = function() {
  return this;
};
g.va = function() {
  return null == this.s ? new Y(null, 2, 5, Z, [this.nodes[this.p], this.nodes[this.p + 1]], null) : H.call(null, this.s);
};
g.wa = function() {
  return null == this.s ? Se.call(null, this.nodes, this.p + 2, null) : Se.call(null, this.nodes, this.p, L.call(null, this.s));
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return new We(b, this.nodes, this.p, this.s, this.n);
};
g.la = function() {
  return this.m;
};
g.ia = function() {
  return dc.call(null, K, this.m);
};
var Se = function() {
  function a(a, b, c) {
    if (null == c) {
      for (c = a.length;;) {
        if (b < c) {
          if (null != a[b]) {
            return new We(null, a, b, null, null);
          }
          var h = a[b + 1];
          if (r(h) && (h = h.hb(), r(h))) {
            return new We(null, a, b + 2, h, null);
          }
          b += 2;
        } else {
          return null;
        }
      }
    } else {
      return new We(null, a, b, c, null);
    }
  }
  function b(a) {
    return c.call(null, a, 0, null);
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.$ = b;
  c.ba = a;
  return c;
}();
function Xe(a, b, c, d, e) {
  this.m = a;
  this.nodes = b;
  this.p = c;
  this.s = d;
  this.n = e;
  this.u = 0;
  this.f = 32374860;
}
g = Xe.prototype;
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = $b.call(null, this);
};
g.ha = function(a, b) {
  return O.call(null, b, this);
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return P.call(null, b, this);
};
g.ta = function(a, b, c) {
  return P.call(null, b, c, this);
};
g.na = function() {
  return this;
};
g.va = function() {
  return H.call(null, this.s);
};
g.wa = function() {
  return Te.call(null, null, this.nodes, this.p, L.call(null, this.s));
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return new Xe(b, this.nodes, this.p, this.s, this.n);
};
g.la = function() {
  return this.m;
};
g.ia = function() {
  return dc.call(null, K, this.m);
};
var Te = function() {
  function a(a, b, c, h) {
    if (null == h) {
      for (h = b.length;;) {
        if (c < h) {
          var k = b[c];
          if (r(k) && (k = k.hb(), r(k))) {
            return new Xe(a, b, c + 1, k, null);
          }
          c += 1;
        } else {
          return null;
        }
      }
    } else {
      return new Xe(a, b, c, h, null);
    }
  }
  function b(a) {
    return c.call(null, null, a, 0, null);
  }
  var c = null, c = function(c, e, f, h) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 4:
        return a.call(this, c, e, f, h);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.$ = b;
  c.Ba = a;
  return c;
}();
function Ye(a, b, c, d, e, f) {
  this.m = a;
  this.j = b;
  this.root = c;
  this.ua = d;
  this.Aa = e;
  this.n = f;
  this.u = 8196;
  this.f = 16123663;
}
g = Ye.prototype;
g.cb = function() {
  return new Ze({}, this.root, this.j, this.ua, this.Aa);
};
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Sc.call(null, this);
};
g.ja = function(a, b) {
  return C.call(null, this, b, null);
};
g.ka = function(a, b, c) {
  return null == b ? this.ua ? this.Aa : c : null == this.root ? c : new q(null, "else", "else", 1017020587) ? this.root.Ra(0, S.call(null, b), b, c) : null;
};
g.bb = function(a, b, c) {
  if (null == b) {
    return this.ua && c === this.Aa ? this : new Ye(this.m, this.ua ? this.j : this.j + 1, this.root, !0, c, null);
  }
  a = new Je;
  b = (null == this.root ? Pe : this.root).Da(0, S.call(null, b), b, c, a);
  return b === this.root ? this : new Ye(this.m, a.Ja ? this.j + 1 : this.j, b, this.ua, this.Aa, null);
};
g.Ab = function(a, b) {
  return null == b ? this.ua : null == this.root ? !1 : new q(null, "else", "else", 1017020587) ? this.root.Ra(0, S.call(null, b), b, Ec) !== Ec : null;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ja(null, c);
      case 3:
        return this.ka(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x.call(null, b)));
};
g.$ = function(a) {
  return this.ja(null, a);
};
g.q = function(a, b) {
  return this.ka(null, a, b);
};
g.ha = function(a, b) {
  return Ac.call(null, b) ? db.call(null, this, z.call(null, b, 0), z.call(null, b, 1)) : V.call(null, Xa, this, b);
};
g.toString = function() {
  return E.call(null, this);
};
g.na = function() {
  if (0 < this.j) {
    var a = null != this.root ? this.root.hb() : null;
    return this.ua ? O.call(null, new Y(null, 2, 5, Z, [null, this.Aa], null), a) : a;
  }
  return null;
};
g.pa = function() {
  return this.j;
};
g.ca = function(a, b) {
  return se.call(null, this, b);
};
g.oa = function(a, b) {
  return new Ye(b, this.j, this.root, this.ua, this.Aa, this.n);
};
g.la = function() {
  return this.m;
};
g.ia = function() {
  return qb.call(null, Ee, this.m);
};
var Ee = new Ye(null, 0, null, !1, null, 0);
function lc(a, b) {
  for (var c = a.length, d = 0, e = vd.call(null, Ee);;) {
    if (d < c) {
      var f = d + 1, e = Gb.call(null, e, a[d], b[d]), d = f
    } else {
      return wd.call(null, e);
    }
  }
}
function Ze(a, b, c, d, e) {
  this.aa = a;
  this.root = b;
  this.count = c;
  this.ua = d;
  this.Aa = e;
  this.u = 56;
  this.f = 258;
}
g = Ze.prototype;
g.rb = function(a, b, c) {
  return $e(this, b, c);
};
g.fb = function(a, b) {
  var c;
  a: {
    if (this.aa) {
      if (b ? b.f & 2048 || b.Kc || (b.f ? 0 : s.call(null, gb, b)) : s.call(null, gb, b)) {
        c = $e(this, Tc.call(null, b), Uc.call(null, b));
        break a;
      }
      c = F.call(null, b);
      for (var d = this;;) {
        var e = H.call(null, c);
        if (r(e)) {
          c = L.call(null, c), d = $e(d, Tc.call(null, e), Uc.call(null, e));
        } else {
          c = d;
          break a;
        }
      }
    } else {
      throw Error("conj! after persistent");
    }
    c = void 0;
  }
  return c;
};
g.gb = function() {
  var a;
  if (this.aa) {
    this.aa = null, a = new Ye(null, this.count, this.root, this.ua, this.Aa, null);
  } else {
    throw Error("persistent! called twice");
  }
  return a;
};
g.ja = function(a, b) {
  return null == b ? this.ua ? this.Aa : null : null == this.root ? null : this.root.Ra(0, S.call(null, b), b);
};
g.ka = function(a, b, c) {
  return null == b ? this.ua ? this.Aa : c : null == this.root ? c : this.root.Ra(0, S.call(null, b), b, c);
};
g.pa = function() {
  if (this.aa) {
    return this.count;
  }
  throw Error("count after persistent!");
};
function $e(a, b, c) {
  if (a.aa) {
    if (null == b) {
      a.Aa !== c && (a.Aa = c), a.ua || (a.count += 1, a.ua = !0);
    } else {
      var d = new Je;
      b = (null == a.root ? Pe : a.root).Ea(a.aa, 0, S.call(null, b), b, c, d);
      b !== a.root && (a.root = b);
      d.Ja && (a.count += 1);
    }
    return a;
  }
  throw Error("assoc! after persistent!");
}
var af = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    a = F.call(null, a);
    for (var b = vd.call(null, Ee);;) {
      if (a) {
        var e = fc.call(null, a), b = yd.call(null, b, H.call(null, a), ec.call(null, a));
        a = e;
      } else {
        return wd.call(null, b);
      }
    }
  }
  a.o = 0;
  a.k = function(a) {
    a = F(a);
    return b(a);
  };
  a.i = b;
  return a;
}(), bf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return new Ma(null, Mc.call(null, Q.call(null, a), 2), pc.call(null, Sa, a), null);
  }
  a.o = 0;
  a.k = function(a) {
    a = F(a);
    return b(a);
  };
  a.i = b;
  return a;
}();
function cf(a, b) {
  this.Sa = a;
  this.Ka = b;
  this.u = 0;
  this.f = 32374988;
}
g = cf.prototype;
g.ea = function() {
  return $b.call(null, this);
};
g.Ca = function() {
  var a = this.Sa, a = (a ? a.f & 128 || a.Vb || (a.f ? 0 : s.call(null, $a, a)) : s.call(null, $a, a)) ? ab.call(null, this.Sa) : L.call(null, this.Sa);
  return null == a ? null : new cf(a, this.Ka);
};
g.ha = function(a, b) {
  return O.call(null, b, this);
};
g.toString = function() {
  return E.call(null, this);
};
g.sa = function(a, b) {
  return P.call(null, b, this);
};
g.ta = function(a, b, c) {
  return P.call(null, b, c, this);
};
g.na = function() {
  return this;
};
g.va = function() {
  var a = A.call(null, this.Sa);
  return hb.call(null, a);
};
g.wa = function() {
  var a = this.Sa, a = (a ? a.f & 128 || a.Vb || (a.f ? 0 : s.call(null, $a, a)) : s.call(null, $a, a)) ? ab.call(null, this.Sa) : L.call(null, this.Sa);
  return null != a ? new cf(a, this.Ka) : K;
};
g.ca = function(a, b) {
  return bc.call(null, this, b);
};
g.oa = function(a, b) {
  return new cf(this.Sa, b);
};
g.la = function() {
  return this.Ka;
};
g.ia = function() {
  return dc.call(null, K, this.Ka);
};
function df(a) {
  return(a = F.call(null, a)) ? new cf(a, null) : null;
}
function Tc(a) {
  return hb.call(null, a);
}
function Uc(a) {
  return ib.call(null, a);
}
var ef = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return r(Bd.call(null, Cd, a)) ? V.call(null, function(a, b) {
      return gc.call(null, r(a) ? a : Fe, b);
    }, a) : null;
  }
  a.o = 0;
  a.k = function(a) {
    a = F(a);
    return b(a);
  };
  a.i = b;
  return a;
}();
function ff(a, b, c) {
  this.m = a;
  this.$a = b;
  this.n = c;
  this.u = 8196;
  this.f = 15077647;
}
g = ff.prototype;
g.cb = function() {
  return new gf(Db.call(null, this.$a));
};
g.ea = function() {
  var a = this.n;
  return null != a ? a : this.n = a = Vc.call(null, this);
};
g.ja = function(a, b) {
  return C.call(null, this, b, null);
};
g.ka = function(a, b, c) {
  return cb.call(null, this.$a, b) ? b : c;
};
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return this.ja(null, c);
      case 3:
        return this.ka(null, c, d);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x.call(null, b)));
};
g.$ = function(a) {
  return this.ja(null, a);
};
g.q = function(a, b) {
  return this.ka(null, a, b);
};
g.ha = function(a, b) {
  return new ff(this.m, mc.call(null, this.$a, b, null), null);
};
g.toString = function() {
  return E.call(null, this);
};
g.na = function() {
  return df.call(null, this.$a);
};
g.pa = function() {
  return y.call(null, this.$a);
};
g.ca = function(a, b) {
  return xc.call(null, b) && Q.call(null, this) === Q.call(null, b) && Ad.call(null, function(a) {
    return function(b) {
      return Hc.call(null, a, b);
    };
  }(this), b);
};
g.oa = function(a, b) {
  return new ff(b, this.$a, this.n);
};
g.la = function() {
  return this.m;
};
g.ia = function() {
  return dc.call(null, hf, this.m);
};
var hf = new ff(null, Fe, 0);
function gf(a) {
  this.Oa = a;
  this.f = 259;
  this.u = 136;
}
g = gf.prototype;
g.call = function() {
  var a = null;
  return a = function(a, c, d) {
    switch(arguments.length) {
      case 2:
        return C.call(null, this.Oa, c, Ec) === Ec ? null : c;
      case 3:
        return C.call(null, this.Oa, c, Ec) === Ec ? d : c;
    }
    throw Error("Invalid arity: " + arguments.length);
  };
}();
g.apply = function(a, b) {
  return this.call.apply(this, [this].concat(x.call(null, b)));
};
g.$ = function(a) {
  return C.call(null, this.Oa, a, Ec) === Ec ? null : a;
};
g.q = function(a, b) {
  return C.call(null, this.Oa, a, Ec) === Ec ? b : a;
};
g.ja = function(a, b) {
  return C.call(null, this, b, null);
};
g.ka = function(a, b, c) {
  return C.call(null, this.Oa, b, Ec) === Ec ? c : b;
};
g.pa = function() {
  return Q.call(null, this.Oa);
};
g.fb = function(a, b) {
  this.Oa = yd.call(null, this.Oa, b, null);
  return this;
};
g.gb = function() {
  return new ff(null, wd.call(null, this.Oa), null);
};
function jf(a) {
  a = a.e;
  a: {
    for (var b = 0, c = Db.call(null, hf);;) {
      if (b < a.length) {
        var d = b + 1, c = Eb.call(null, c, a[b]), b = d
      } else {
        a = c;
        break a;
      }
    }
    a = void 0;
  }
  return Fb.call(null, a);
}
function kf(a) {
  a = F.call(null, a);
  if (null == a) {
    return hf;
  }
  if (a instanceof Tb && 0 === a.p) {
    return jf.call(null, a);
  }
  if (new q(null, "else", "else", 1017020587)) {
    for (var b = Db.call(null, hf);;) {
      if (null != a) {
        var c = ab.call(null, a), b = Eb.call(null, b, A.call(null, a));
        a = c;
      } else {
        return Fb.call(null, b);
      }
    }
  } else {
    return null;
  }
}
function lf(a) {
  if (a && (a.u & 4096 || a.Mc)) {
    return Nb.call(null, a);
  }
  if ("string" === typeof a) {
    return a;
  }
  throw Error([w("Doesn't support name: "), w(a)].join(""));
}
var mf = function() {
  function a(a, b) {
    for (;;) {
      if (F.call(null, b) && 0 < a) {
        var c = a - 1, h = L.call(null, b);
        a = c;
        b = h;
      } else {
        return null;
      }
    }
  }
  function b(a) {
    for (;;) {
      if (F.call(null, a)) {
        a = L.call(null, a);
      } else {
        return null;
      }
    }
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.$ = b;
  c.q = a;
  return c;
}(), nf = function() {
  function a(a, b) {
    mf.call(null, a, b);
    return b;
  }
  function b(a) {
    mf.call(null, a);
    return a;
  }
  var c = null, c = function(c, e) {
    switch(arguments.length) {
      case 1:
        return b.call(this, c);
      case 2:
        return a.call(this, c, e);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.$ = b;
  c.q = a;
  return c;
}();
function of(a) {
  return a instanceof RegExp;
}
function pf(a, b, c, d, e, f, h) {
  var k = Ka;
  try {
    Ka = null == Ka ? null : Ka - 1;
    if (null != Ka && 0 > Ka) {
      return D.call(null, a, "#");
    }
    D.call(null, a, c);
    F.call(null, h) && b.call(null, H.call(null, h), a, f);
    for (var l = L.call(null, h), p = (new q(null, "print-length", "print-length", 3960797560)).$(f);l && (null == p || 0 !== p);) {
      D.call(null, a, d);
      b.call(null, H.call(null, l), a, f);
      var u = L.call(null, l);
      c = p - 1;
      l = u;
      p = c;
    }
    r((new q(null, "print-length", "print-length", 3960797560)).$(f)) && (D.call(null, a, d), b.call(null, "...", a, f));
    return D.call(null, a, e);
  } finally {
    Ka = k;
  }
}
var qf = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    for (var e = F.call(null, b), f = null, h = 0, k = 0;;) {
      if (k < h) {
        var l = z.call(null, f, k);
        D.call(null, a, l);
        k += 1;
      } else {
        if (e = F.call(null, e)) {
          f = e, U.call(null, f) ? (e = nd.call(null, f), h = od.call(null, f), f = e, l = Q.call(null, e), e = h, h = l) : (l = H.call(null, f), D.call(null, a, l), e = L.call(null, f), f = null, h = 0), k = 0;
        } else {
          return null;
        }
      }
    }
  }
  a.o = 1;
  a.k = function(a) {
    var d = H(a);
    a = I(a);
    return b(d, a);
  };
  a.i = b;
  return a;
}(), rf = {'"':'\\"', "\\":"\\\\", "\b":"\\b", "\f":"\\f", "\n":"\\n", "\r":"\\r", "\t":"\\t"};
function sf(a) {
  return[w('"'), w(a.replace(RegExp('[\\\\"\b\f\n\r\t]', "g"), function(a) {
    return rf[a];
  })), w('"')].join("");
}
var $ = function tf(b, c, d) {
  if (null == b) {
    return D.call(null, c, "nil");
  }
  if (void 0 === b) {
    return D.call(null, c, "#\x3cundefined\x3e");
  }
  if (new q(null, "else", "else", 1017020587)) {
    r(function() {
      var c = kc.call(null, d, new q(null, "meta", "meta", 1017252215));
      return r(c) ? (c = b ? b.f & 131072 || b.Lc ? !0 : b.f ? !1 : s.call(null, nb, b) : s.call(null, nb, b)) ? qc.call(null, b) : c : c;
    }()) && (D.call(null, c, "^"), tf.call(null, qc.call(null, b), c, d), D.call(null, c, " "));
    if (null == b) {
      return D.call(null, c, "nil");
    }
    if (b.Zb) {
      return b.Rc(c);
    }
    if (b && (b.f & 2147483648 || b.ma)) {
      return Cb.call(null, b, c, d);
    }
    if (Pa.call(null, b) === Boolean || "number" === typeof b) {
      return D.call(null, c, "" + w(b));
    }
    if (Oa.call(null, b)) {
      return D.call(null, c, "#js "), uf.call(null, Ed.call(null, function(c) {
        return new Y(null, 2, 5, Z, [dd.call(null, c), b[c]], null);
      }, Bc.call(null, b)), tf, c, d);
    }
    if (b instanceof Array) {
      return pf.call(null, c, tf, "#js [", " ", "]", d, b);
    }
    if (ba(b)) {
      return r((new q(null, "readably", "readably", 4441712502)).$(d)) ? D.call(null, c, sf.call(null, b)) : D.call(null, c, b);
    }
    if (nc.call(null, b)) {
      return qf.call(null, c, "#\x3c", "" + w(b), "\x3e");
    }
    if (b instanceof Date) {
      var e = function(b, c) {
        for (var d = "" + w(b);;) {
          if (Q.call(null, d) < c) {
            d = [w("0"), w(d)].join("");
          } else {
            return d;
          }
        }
      };
      return qf.call(null, c, '#inst "', "" + w(b.getUTCFullYear()), "-", e.call(null, b.getUTCMonth() + 1, 2), "-", e.call(null, b.getUTCDate(), 2), "T", e.call(null, b.getUTCHours(), 2), ":", e.call(null, b.getUTCMinutes(), 2), ":", e.call(null, b.getUTCSeconds(), 2), ".", e.call(null, b.getUTCMilliseconds(), 3), "-", '00:00"');
    }
    return of.call(null, b) ? qf.call(null, c, '#"', b.source, '"') : (b ? b.f & 2147483648 || b.ma || (b.f ? 0 : s.call(null, Bb, b)) : s.call(null, Bb, b)) ? Cb.call(null, b, c, d) : new q(null, "else", "else", 1017020587) ? qf.call(null, c, "#\x3c", "" + w(b), "\x3e") : null;
  }
  return null;
};
function vf(a, b, c) {
  $.call(null, H.call(null, a), b, c);
  a = F.call(null, L.call(null, a));
  for (var d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = z.call(null, d, f);
      D.call(null, b, " ");
      $.call(null, h, b, c);
      f += 1;
    } else {
      if (a = F.call(null, a)) {
        d = a, U.call(null, d) ? (a = nd.call(null, d), e = od.call(null, d), d = a, h = Q.call(null, a), a = e, e = h) : (h = H.call(null, d), D.call(null, b, " "), $.call(null, h, b, c), a = L.call(null, d), d = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
function wf(a, b) {
  var c = new Ia, d = new Pb(c);
  vf.call(null, a, d, b);
  Ab.call(null, d);
  return c;
}
function xf(a, b) {
  return vc.call(null, a) ? "" : "" + w(wf.call(null, a, b));
}
var yf = function() {
  function a(a) {
    var d = null;
    0 < arguments.length && (d = N(Array.prototype.slice.call(arguments, 0), 0));
    return b.call(this, d);
  }
  function b(a) {
    return xf.call(null, a, La.call(null));
  }
  a.o = 0;
  a.k = function(a) {
    a = F(a);
    return b(a);
  };
  a.i = b;
  return a;
}();
function uf(a, b, c, d) {
  return pf.call(null, c, function(a, c, d) {
    b.call(null, Tc.call(null, a), c, d);
    D.call(null, c, " ");
    return b.call(null, Uc.call(null, a), c, d);
  }, "{", ", ", "}", d, F.call(null, a));
}
cf.prototype.ma = !0;
cf.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "(", " ", ")", c, this);
};
Tb.prototype.ma = !0;
Tb.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "(", " ", ")", c, this);
};
le.prototype.ma = !0;
le.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "[", " ", "]", c, this);
};
jd.prototype.ma = !0;
jd.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "(", " ", ")", c, this);
};
Ma.prototype.ma = !0;
Ma.prototype.fa = function(a, b, c) {
  return uf.call(null, this, $, b, c);
};
W.prototype.ma = !0;
W.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "(", " ", ")", c, this);
};
ac.prototype.ma = !0;
ac.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "(", " ", ")", c, this);
};
We.prototype.ma = !0;
We.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "(", " ", ")", c, this);
};
je.prototype.ma = !0;
je.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "(", " ", ")", c, this);
};
Ye.prototype.ma = !0;
Ye.prototype.fa = function(a, b, c) {
  return uf.call(null, this, $, b, c);
};
ff.prototype.ma = !0;
ff.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "#{", " ", "}", c, this);
};
Y.prototype.ma = !0;
Y.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "[", " ", "]", c, this);
};
Wc.prototype.ma = !0;
Wc.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "(", " ", ")", c, this);
};
Ae.prototype.ma = !0;
Ae.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "(", " ", ")", c, this);
};
Xc.prototype.ma = !0;
Xc.prototype.fa = function(a, b) {
  return D.call(null, b, "()");
};
ad.prototype.ma = !0;
ad.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "(", " ", ")", c, this);
};
Xe.prototype.ma = !0;
Xe.prototype.fa = function(a, b, c) {
  return pf.call(null, b, $, "(", " ", ")", c, this);
};
Y.prototype.Eb = !0;
Y.prototype.nb = function(a, b) {
  return Ic.call(null, this, b);
};
le.prototype.Eb = !0;
le.prototype.nb = function(a, b) {
  return Ic.call(null, this, b);
};
q.prototype.Eb = !0;
q.prototype.nb = function(a, b) {
  return Qb.call(null, this, b);
};
function zf(a, b) {
  this.state = a;
  this.m = b;
  this.f = 2153938944;
  this.u = 16386;
}
g = zf.prototype;
g.ea = function() {
  return this[ea] || (this[ea] = ++ga);
};
g.fa = function(a, b, c) {
  D.call(null, b, "#\x3cAtom: ");
  $.call(null, this.state, b, c);
  return D.call(null, b, "\x3e");
};
g.la = function() {
  return this.m;
};
g.tc = function() {
  return this.state;
};
g.ca = function(a, b) {
  return this === b;
};
var Af = function() {
  function a(a) {
    return new zf(a, null);
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      var d = Fc.call(null, c) ? pc.call(null, af, c) : c;
      kc.call(null, d, new q(null, "validator", "validator", 4199087812));
      d = kc.call(null, d, new q(null, "meta", "meta", 1017252215));
      return new zf(a, d);
    }
    a.o = 1;
    a.k = function(a) {
      var c = H(a);
      a = I(a);
      return b(c, a);
    };
    a.i = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.i(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 1;
  b.k = c.k;
  b.$ = a;
  b.i = c.i;
  return b;
}();
function Vb(a) {
  return mb.call(null, a);
}
var Bf = {};
function Cf(a) {
  if (a ? a.wc : a) {
    return a.wc(a);
  }
  var b;
  b = Cf[n(null == a ? null : a)];
  if (!b && (b = Cf._, !b)) {
    throw t.call(null, "IEncodeJS.-clj-\x3ejs", a);
  }
  return b.call(null, a);
}
function Df(a) {
  return(a ? r(r(null) ? null : a.vc) || (a.Hb ? 0 : s.call(null, Bf, a)) : s.call(null, Bf, a)) ? Cf.call(null, a) : "string" === typeof a || "number" === typeof a || a instanceof q ? Ef.call(null, a) : yf.call(null, a);
}
var Ef = function Ff(b) {
  if (null == b) {
    return null;
  }
  if (b ? r(r(null) ? null : b.vc) || (b.Hb ? 0 : s.call(null, Bf, b)) : s.call(null, Bf, b)) {
    return Cf.call(null, b);
  }
  if (b instanceof q) {
    return lf.call(null, b);
  }
  if (zc.call(null, b)) {
    var c = {};
    b = F.call(null, b);
    for (var d = null, e = 0, f = 0;;) {
      if (f < e) {
        var h = z.call(null, d, f), k = R.call(null, h, 0, null), h = R.call(null, h, 1, null);
        c[Df.call(null, k)] = Ff.call(null, h);
        f += 1;
      } else {
        if (b = F.call(null, b)) {
          U.call(null, b) ? (e = nd.call(null, b), b = od.call(null, b), d = e, e = Q.call(null, e)) : (e = H.call(null, b), d = R.call(null, e, 0, null), e = R.call(null, e, 1, null), c[Df.call(null, d)] = Ff.call(null, e), b = L.call(null, b), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  if (wc.call(null, b)) {
    c = [];
    b = F.call(null, Ed.call(null, Ff, b));
    d = null;
    for (f = e = 0;;) {
      if (f < e) {
        k = z.call(null, d, f), c.push(k), f += 1;
      } else {
        if (b = F.call(null, b)) {
          d = b, U.call(null, d) ? (b = nd.call(null, d), f = od.call(null, d), d = b, e = Q.call(null, b), b = f) : (b = H.call(null, d), c.push(b), b = L.call(null, d), d = null, e = 0), f = 0;
        } else {
          break;
        }
      }
    }
    return c;
  }
  return new q(null, "else", "else", 1017020587) ? b : null;
}, Gf = {};
function Hf(a, b) {
  if (a ? a.uc : a) {
    return a.uc(a, b);
  }
  var c;
  c = Hf[n(null == a ? null : a)];
  if (!c && (c = Hf._, !c)) {
    throw t.call(null, "IEncodeClojure.-js-\x3eclj", a);
  }
  return c.call(null, a, b);
}
var If = function() {
  function a(a) {
    return b.call(null, a, new Ma(null, 1, [new q(null, "keywordize-keys", "keywordize-keys", 4191781672), !1], null));
  }
  var b = null, c = function() {
    function a(c, d) {
      var k = null;
      1 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 1), 0));
      return b.call(this, c, k);
    }
    function b(a, c) {
      if (a ? r(r(null) ? null : a.Id) || (a.Hb ? 0 : s.call(null, Gf, a)) : s.call(null, Gf, a)) {
        return Hf.call(null, a, pc.call(null, bf, c));
      }
      if (F.call(null, c)) {
        var d = Fc.call(null, c) ? pc.call(null, af, c) : c, e = kc.call(null, d, new q(null, "keywordize-keys", "keywordize-keys", 4191781672));
        return function(a, b, c, d) {
          return function J(e) {
            return Fc.call(null, e) ? nf.call(null, Ed.call(null, J, e)) : wc.call(null, e) ? Ld.call(null, hc.call(null, e), Ed.call(null, J, e)) : e instanceof Array ? ie.call(null, Ed.call(null, J, e)) : Pa.call(null, e) === Object ? Ld.call(null, Fe, function() {
              return function(a, b, c, d) {
                return function Qa(f) {
                  return new W(null, function(a, b, c, d) {
                    return function() {
                      for (;;) {
                        var a = F.call(null, f);
                        if (a) {
                          if (U.call(null, a)) {
                            var b = nd.call(null, a), c = Q.call(null, b), h = hd.call(null, c);
                            a: {
                              for (var k = 0;;) {
                                if (k < c) {
                                  var l = z.call(null, b, k);
                                  ld.call(null, h, new Y(null, 2, 5, Z, [d.call(null, l), J.call(null, e[l])], null));
                                  k += 1;
                                } else {
                                  b = !0;
                                  break a;
                                }
                              }
                              b = void 0;
                            }
                            return b ? kd.call(null, md.call(null, h), Qa.call(null, od.call(null, a))) : kd.call(null, md.call(null, h), null);
                          }
                          h = H.call(null, a);
                          return O.call(null, new Y(null, 2, 5, Z, [d.call(null, h), J.call(null, e[h])], null), Qa.call(null, I.call(null, a)));
                        }
                        return null;
                      }
                    };
                  }(a, b, c, d), null, null);
                };
              }(a, b, c, d).call(null, Bc.call(null, e));
            }()) : new q(null, "else", "else", 1017020587) ? e : null;
          };
        }(c, d, e, r(e) ? dd : w).call(null, a);
      }
      return null;
    }
    a.o = 1;
    a.k = function(a) {
      var c = H(a);
      a = I(a);
      return b(c, a);
    };
    a.i = b;
    return a;
  }(), b = function(b, e) {
    switch(arguments.length) {
      case 1:
        return a.call(this, b);
      default:
        return c.i(b, N(arguments, 1));
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  b.o = 1;
  b.k = c.k;
  b.$ = a;
  b.i = c.i;
  return b;
}(), Nc = function() {
  function a(a) {
    return Math.random.call(null) * a;
  }
  function b() {
    return c.call(null, 1);
  }
  var c = null, c = function(c) {
    switch(arguments.length) {
      case 0:
        return b.call(this);
      case 1:
        return a.call(this, c);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.ob = b;
  c.$ = a;
  return c;
}(), Oc = function(a) {
  return Math.floor.call(null, Math.random.call(null) * a);
};
function Jf(a) {
  return R.call(null, a, Oc.call(null, Q.call(null, a)));
}
;var Kf, Lf, Mf, Nf;
function Of() {
  return m.navigator ? m.navigator.userAgent : null;
}
Nf = Mf = Lf = Kf = !1;
var Pf;
if (Pf = Of()) {
  var Qf = m.navigator;
  Kf = 0 == Pf.lastIndexOf("Opera", 0);
  Lf = !Kf && (-1 != Pf.indexOf("MSIE") || -1 != Pf.indexOf("Trident"));
  Mf = !Kf && -1 != Pf.indexOf("WebKit");
  Nf = !Kf && !Mf && !Lf && "Gecko" == Qf.product;
}
var Rf = Kf, Sf = Lf, Tf = Nf, Uf = Mf;
function Vf() {
  var a = m.document;
  return a ? a.documentMode : void 0;
}
var Wf;
a: {
  var Xf = "", Yf;
  if (Rf && m.opera) {
    var Zf = m.opera.version, Xf = "function" == typeof Zf ? Zf() : Zf
  } else {
    if (Tf ? Yf = /rv\:([^\);]+)(\)|;)/ : Sf ? Yf = /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/ : Uf && (Yf = /WebKit\/(\S+)/), Yf) {
      var $f = Yf.exec(Of()), Xf = $f ? $f[1] : ""
    }
  }
  if (Sf) {
    var ag = Vf();
    if (ag > parseFloat(Xf)) {
      Wf = String(ag);
      break a;
    }
  }
  Wf = Xf;
}
var bg = {};
function cg(a) {
  var b;
  if (!(b = bg[a])) {
    b = 0;
    for (var c = String(Wf).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), d = String(a).replace(/^[\s\xa0]+|[\s\xa0]+$/g, "").split("."), e = Math.max(c.length, d.length), f = 0;0 == b && f < e;f++) {
      var h = c[f] || "", k = d[f] || "", l = RegExp("(\\d*)(\\D*)", "g"), p = RegExp("(\\d*)(\\D*)", "g");
      do {
        var u = l.exec(h) || ["", "", ""], v = p.exec(k) || ["", "", ""];
        if (0 == u[0].length && 0 == v[0].length) {
          break;
        }
        b = ((0 == u[1].length ? 0 : parseInt(u[1], 10)) < (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? -1 : (0 == u[1].length ? 0 : parseInt(u[1], 10)) > (0 == v[1].length ? 0 : parseInt(v[1], 10)) ? 1 : 0) || ((0 == u[2].length) < (0 == v[2].length) ? -1 : (0 == u[2].length) > (0 == v[2].length) ? 1 : 0) || (u[2] < v[2] ? -1 : u[2] > v[2] ? 1 : 0);
      } while (0 == b);
    }
    b = bg[a] = 0 <= b;
  }
  return b;
}
var dg = m.document, eg = dg && Sf ? Vf() || ("CSS1Compat" == dg.compatMode ? parseInt(Wf, 10) : 5) : void 0;
function fg() {
  0 != gg && (this[ea] || (this[ea] = ++ga));
}
var gg = 0;
Sf && cg("9");
!Uf || cg("528");
Tf && cg("1.9b") || Sf && cg("8") || Rf && cg("9.5") || Uf && cg("528");
Tf && !cg("8") || Sf && cg("9");
Math.random();
Math.random();
Math.random();
function hg(a) {
  a.prototype.then = a.prototype.kb;
  a.prototype.$goog_Thenable = !0;
}
function ig(a) {
  if (!a) {
    return!1;
  }
  try {
    return!!a.$goog_Thenable;
  } catch (b) {
    return!1;
  }
}
;function jg(a) {
  ca(m.setImmediate) ? m.setImmediate(a) : (kg || (kg = lg()), kg(a));
}
var kg;
function lg() {
  var a = m.MessageChannel;
  "undefined" === typeof a && "undefined" !== typeof window && window.postMessage && window.addEventListener && (a = function() {
    var a = document.createElement("iframe");
    a.style.display = "none";
    a.src = "";
    document.documentElement.appendChild(a);
    var b = a.contentWindow, a = b.document;
    a.open();
    a.write("");
    a.close();
    var c = "callImmediate" + Math.random(), d = b.location.protocol + "//" + b.location.host, a = ja(function(a) {
      if (a.origin == d || a.data == c) {
        this.port1.onmessage();
      }
    }, this);
    b.addEventListener("message", a, !1);
    this.port1 = {};
    this.port2 = {postMessage:function() {
      b.postMessage(c, d);
    }};
  });
  if ("undefined" !== typeof a) {
    var b = new a, c = {}, d = c;
    b.port1.onmessage = function() {
      c = c.next;
      var a = c.Ob;
      c.Ob = null;
      a();
    };
    return function(a) {
      d.next = {Ob:a};
      d = d.next;
      b.port2.postMessage(0);
    };
  }
  return "undefined" !== typeof document && "onreadystatechange" in document.createElement("script") ? function(a) {
    var b = document.createElement("script");
    b.onreadystatechange = function() {
      b.onreadystatechange = null;
      b.parentNode.removeChild(b);
      b = null;
      a();
      a = null;
    };
    document.documentElement.appendChild(b);
  } : function(a) {
    m.setTimeout(a, 0);
  };
}
;function mg(a) {
  jg(function() {
    throw a;
  });
}
function ng(a, b) {
  og || (jg(pg), og = !0);
  qg.push(new rg(a, b));
}
var og = !1, qg = [];
function pg() {
  for (;qg.length;) {
    var a = qg;
    qg = [];
    for (var b = 0;b < a.length;b++) {
      var c = a[b];
      try {
        c.Ya.call(c.scope);
      } catch (d) {
        mg(d);
      }
    }
  }
  og = !1;
}
function rg(a, b) {
  this.Ya = a;
  this.scope = b;
}
;function sg(a, b) {
  this.xa = tg;
  this.Fa = void 0;
  this.za = this.qa = null;
  this.sb = this.Jb = !1;
  this.Mb = [];
  ug(this, Error("created"));
  this.ac = 0;
  try {
    var c = this;
    a.call(b, function(a) {
      vg(c, wg, a);
    }, function(a) {
      vg(c, xg, a);
    });
  } catch (d) {
    vg(this, xg, d);
  }
}
var tg = 0, wg = 2, xg = 3;
sg.prototype.kb = function(a, b, c) {
  ug(this, Error("then"));
  return yg(this, ca(a) ? a : null, ca(b) ? b : null, c);
};
hg(sg);
sg.prototype.cancel = function(a) {
  this.xa == tg && ng(function() {
    var b = new zg(a);
    Ag(this, b);
  }, this);
};
function Ag(a, b) {
  if (a.xa == tg) {
    if (a.qa) {
      var c = a.qa;
      if (c.za) {
        for (var d = 0, e = -1, f = 0, h;h = c.za[f];f++) {
          if (h = h.lb) {
            if (d++, h == a && (e = f), 0 <= e && 1 < d) {
              break;
            }
          }
        }
        0 <= e && (c.xa == tg && 1 == d ? Ag(c, b) : (d = c.za.splice(e, 1)[0], Bg(c, d, xg, b)));
      }
    } else {
      vg(a, xg, b);
    }
  }
}
function Cg(a, b) {
  a.za && a.za.length || a.xa != wg && a.xa != xg || Dg(a);
  a.za || (a.za = []);
  a.za.push(b);
}
function yg(a, b, c, d) {
  var e = {lb:null, jc:null, kc:null};
  e.lb = new sg(function(a, h) {
    e.jc = b ? function(c) {
      try {
        var e = b.call(d, c);
        a(e);
      } catch (p) {
        h(p);
      }
    } : a;
    e.kc = c ? function(b) {
      try {
        var e = c.call(d, b);
        void 0 === e && b instanceof zg ? h(b) : a(e);
      } catch (p) {
        h(p);
      }
    } : h;
  });
  e.lb.qa = a;
  Cg(a, e);
  return e.lb;
}
sg.prototype.mc = function(a) {
  this.xa = tg;
  vg(this, wg, a);
};
sg.prototype.nc = function(a) {
  this.xa = tg;
  vg(this, xg, a);
};
function vg(a, b, c) {
  if (a.xa == tg) {
    if (a == c) {
      b = xg, c = new TypeError("Promise cannot resolve to itself");
    } else {
      if (ig(c)) {
        a.xa = 1;
        c.kb(a.mc, a.nc, a);
        return;
      }
      if (da(c)) {
        try {
          var d = c.then;
          if (ca(d)) {
            Eg(a, c, d);
            return;
          }
        } catch (e) {
          b = xg, c = e;
        }
      }
    }
    a.Fa = c;
    a.xa = b;
    Dg(a);
    b != xg || c instanceof zg || Fg(a, c);
  }
}
function Eg(a, b, c) {
  function d(b) {
    f || (f = !0, a.nc(b));
  }
  function e(b) {
    f || (f = !0, a.mc(b));
  }
  a.xa = 1;
  var f = !1;
  try {
    c.call(b, e, d);
  } catch (h) {
    d(h);
  }
}
function Dg(a) {
  a.Jb || (a.Jb = !0, ng(a.Wc, a));
}
sg.prototype.Wc = function() {
  for (;this.za && this.za.length;) {
    var a = this.za;
    this.za = [];
    for (var b = 0;b < a.length;b++) {
      this.ac++, Bg(this, a[b], this.xa, this.Fa);
    }
  }
  this.Jb = !1;
};
function Bg(a, b, c, d) {
  if (c == wg) {
    b.jc(d);
  } else {
    for (;a && a.sb;a = a.qa) {
      a.sb = !1;
    }
    b.kc(d);
  }
}
function ug(a, b) {
  if (ba(b.stack)) {
    var c = b.stack.split("\n", 4)[3], d = b.message, d = d + Array(11 - d.length).join(" ");
    a.Mb.push(d + c);
  }
}
function Fg(a, b) {
  a.sb = !0;
  ng(function() {
    if (a.sb) {
      if (b && ba(b.stack) && a.Mb.length) {
        for (var c = ["Promise trace:"], d = a;d;d = d.qa) {
          for (var e = a.ac;0 <= e;e--) {
            c.push(d.Mb[e]);
          }
          c.push("Value: [" + (d.xa == xg ? "REJECTED" : "FULFILLED") + "] \x3c" + String(d.Fa) + "\x3e");
        }
        b.stack += "\n\n" + c.join("\n");
      }
      Gg.call(null, b);
    }
  });
}
var Gg = mg;
function zg(a) {
  zg.Nb(this, "constructor", a);
}
la(zg, wa);
zg.prototype.name = "cancel";
/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Hg(a, b) {
  this.jb = [];
  this.ic = a;
  this.bc = b || null;
  this.Za = this.Ua = !1;
  this.Fa = void 0;
  this.Lb = this.pc = this.wb = !1;
  this.ub = 0;
  this.qa = null;
  this.xb = 0;
  this.Ib = null;
  if (Error.captureStackTrace) {
    var c = {stack:""};
    Error.captureStackTrace(c, Hg);
    "string" == typeof c.stack && (this.Ib = c.stack.replace(/^[^\n]*\n/, ""));
  }
}
g = Hg.prototype;
g.cancel = function(a) {
  if (this.Ua) {
    this.Fa instanceof Hg && this.Fa.cancel();
  } else {
    if (this.qa) {
      var b = this.qa;
      delete this.qa;
      a ? b.cancel(a) : (b.xb--, 0 >= b.xb && b.cancel());
    }
    this.ic ? this.ic.call(this.bc, this) : this.Lb = !0;
    this.Ua || this.Uc();
  }
};
g.$b = function(a, b) {
  this.wb = !1;
  this.Ua = !0;
  this.Fa = b;
  this.Za = !a;
  Ig(this);
};
g.Uc = function() {
  var a = new Jg;
  if (this.Ua) {
    if (!this.Lb) {
      throw new Kg;
    }
    this.Lb = !1;
  }
  Lg(this, a);
  this.Ua = !0;
  this.Fa = a;
  this.Za = !0;
  Ig(this);
};
function Lg(a, b) {
  a.Ib && da(b) && b.stack && /^[^\n]+(\n   [^\n]+)+/.test(b.stack) && (b.stack = b.stack + "\nDEFERRED OPERATION:\n" + a.Ib);
}
g.addCallbacks = function(a, b, c) {
  this.jb.push([a, b, c]);
  this.Ua && Ig(this);
  return this;
};
g.kb = function(a, b, c) {
  var d, e, f = new sg(function(a, b) {
    d = a;
    e = b;
  });
  this.addCallbacks(d, function(a) {
    a instanceof Jg ? f.cancel() : e(a);
  });
  return f.kb(a, b, c);
};
hg(Hg);
function Mg(a) {
  return Ea(a.jb, function(a) {
    return ca(a[1]);
  });
}
function Ig(a) {
  if (a.ub && a.Ua && Mg(a)) {
    var b = a.ub, c = Ng[b];
    c && (m.clearTimeout(c.tb), delete Ng[b]);
    a.ub = 0;
  }
  a.qa && (a.qa.xb--, delete a.qa);
  for (var b = a.Fa, d = c = !1;a.jb.length && !a.wb;) {
    var e = a.jb.shift(), f = e[0], h = e[1], e = e[2];
    if (f = a.Za ? h : f) {
      try {
        var k = f.call(e || a.bc, b);
        void 0 !== k && (a.Za = a.Za && (k == b || k instanceof Error), a.Fa = b = k);
        ig(b) && (d = !0, a.wb = !0);
      } catch (l) {
        b = l, a.Za = !0, Lg(a, b), Mg(a) || (c = !0);
      }
    }
  }
  a.Fa = b;
  d && (k = ja(a.$b, a, !0), d = ja(a.$b, a, !1), b instanceof Hg ? (b.addCallbacks(k, d), b.pc = !0) : b.kb(k, d));
  c && (b = new Og(b), Ng[b.tb] = b, a.ub = b.tb);
}
function Kg() {
  wa.call(this);
}
la(Kg, wa);
Kg.prototype.message = "Deferred has already fired";
Kg.prototype.name = "AlreadyCalledError";
function Jg() {
  wa.call(this);
}
la(Jg, wa);
Jg.prototype.message = "Deferred was canceled";
Jg.prototype.name = "CanceledError";
function Og(a) {
  this.tb = m.setTimeout(ja(this.ed, this), 0);
  this.Vc = a;
}
Og.prototype.ed = function() {
  delete Ng[this.tb];
  throw this.Vc;
};
var Ng = {};
var Pg = !Tf && !Sf || Sf && Sf && 9 <= eg || Tf && cg("1.9.1");
Sf && cg("9");
function Qg(a, b, c) {
  function d(c) {
    c && b.appendChild(ba(c) ? a.createTextNode(c) : c);
  }
  for (var e = 1;e < c.length;e++) {
    var f = c[e];
    !aa(f) || da(f) && 0 < f.nodeType ? d(f) : Ca(Rg(f) ? Ga(f) : f, d);
  }
}
function Rg(a) {
  if (a && "number" == typeof a.length) {
    if (da(a)) {
      return "function" == typeof a.item || "string" == typeof a.item;
    }
    if (ca(a)) {
      return "function" == typeof a.item;
    }
  }
  return!1;
}
function Sg(a) {
  this.cc = a || m.document || document;
}
g = Sg.prototype;
g.createElement = function(a) {
  return this.cc.createElement(a);
};
g.createTextNode = function(a) {
  return this.cc.createTextNode(String(a));
};
g.appendChild = function(a, b) {
  a.appendChild(b);
};
g.append = function(a, b) {
  Qg(9 == a.nodeType ? a : a.ownerDocument || a.document, a, arguments);
};
g.fc = function(a) {
  return Pg && void 0 != a.children ? a.children : Da(a.childNodes, function(a) {
    return 1 == a.nodeType;
  });
};
function Tg(a) {
  return Ug(a || arguments.callee.caller, []);
}
function Ug(a, b) {
  var c = [];
  if (0 <= Ba(b, a)) {
    c.push("[...circular reference...]");
  } else {
    if (a && 50 > b.length) {
      c.push(Vg(a) + "(");
      for (var d = a.arguments, e = 0;d && e < d.length;e++) {
        0 < e && c.push(", ");
        var f;
        f = d[e];
        switch(typeof f) {
          case "object":
            f = f ? "object" : "null";
            break;
          case "string":
            break;
          case "number":
            f = String(f);
            break;
          case "boolean":
            f = f ? "true" : "false";
            break;
          case "function":
            f = (f = Vg(f)) ? f : "[fn]";
            break;
          default:
            f = typeof f;
        }
        40 < f.length && (f = f.substr(0, 40) + "...");
        c.push(f);
      }
      b.push(a);
      c.push(")\n");
      try {
        c.push(Ug(a.caller, b));
      } catch (h) {
        c.push("[exception trying to get caller]\n");
      }
    } else {
      a ? c.push("[...long stack...]") : c.push("[end]");
    }
  }
  return c.join("");
}
function Vg(a) {
  if (Wg[a]) {
    return Wg[a];
  }
  a = String(a);
  if (!Wg[a]) {
    var b = /function ([^\(]+)/.exec(a);
    Wg[a] = b ? b[1] : "[Anonymous]";
  }
  return Wg[a];
}
var Wg = {};
function Xg(a, b, c, d, e) {
  this.reset(a, b, c, d, e);
}
Xg.prototype.ec = null;
Xg.prototype.dc = null;
var Yg = 0;
Xg.prototype.reset = function(a, b, c, d, e) {
  "number" == typeof e || Yg++;
  d || ka();
  this.ib = a;
  this.$c = b;
  delete this.ec;
  delete this.dc;
};
Xg.prototype.lc = function(a) {
  this.ib = a;
};
function Zg(a) {
  this.ad = a;
  this.hc = this.zb = this.ib = this.qa = null;
}
function $g(a, b) {
  this.name = a;
  this.value = b;
}
$g.prototype.toString = function() {
  return this.name;
};
var ah = new $g("INFO", 800), bh = new $g("CONFIG", 700);
g = Zg.prototype;
g.getParent = function() {
  return this.qa;
};
g.fc = function() {
  this.zb || (this.zb = {});
  return this.zb;
};
g.lc = function(a) {
  this.ib = a;
};
function ch(a) {
  if (a.ib) {
    return a.ib;
  }
  if (a.qa) {
    return ch(a.qa);
  }
  za("Root logger has no level set.");
  return null;
}
g.log = function(a, b, c) {
  if (a.value >= ch(this).value) {
    for (ca(b) && (b = b()), a = this.Xc(a, b, c), b = "log:" + a.$c, m.console && (m.console.timeStamp ? m.console.timeStamp(b) : m.console.markTimeline && m.console.markTimeline(b)), m.msWriteProfilerMark && m.msWriteProfilerMark(b), b = this;b;) {
      c = b;
      var d = a;
      if (c.hc) {
        for (var e = 0, f = void 0;f = c.hc[e];e++) {
          f(d);
        }
      }
      b = b.getParent();
    }
  }
};
g.Xc = function(a, b, c) {
  var d = new Xg(a, String(b), this.ad);
  if (c) {
    d.ec = c;
    var e;
    var f = arguments.callee.caller;
    try {
      var h;
      var k;
      c: {
        for (var l = ["window", "location", "href"], p = m, u;u = l.shift();) {
          if (null != p[u]) {
            p = p[u];
          } else {
            k = null;
            break c;
          }
        }
        k = p;
      }
      if (ba(c)) {
        h = {message:c, name:"Unknown error", lineNumber:"Not available", fileName:k, stack:"Not available"};
      } else {
        var v, G, l = !1;
        try {
          v = c.lineNumber || c.line || "Not available";
        } catch (M) {
          v = "Not available", l = !0;
        }
        try {
          G = c.fileName || c.filename || c.sourceURL || m.$googDebugFname || k;
        } catch (J) {
          G = "Not available", l = !0;
        }
        h = !l && c.lineNumber && c.fileName && c.stack && c.message && c.name ? c : {message:c.message || "Not available", name:c.name || "UnknownError", lineNumber:v, fileName:G, stack:c.stack || "Not available"};
      }
      e = "Message: " + oa(h.message) + '\nUrl: \x3ca href\x3d"view-source:' + h.fileName + '" target\x3d"_new"\x3e' + h.fileName + "\x3c/a\x3e\nLine: " + h.lineNumber + "\n\nBrowser stack:\n" + oa(h.stack + "-\x3e ") + "[end]\n\nJS stack traversal:\n" + oa(Tg(f) + "-\x3e ");
    } catch (T) {
      e = "Exception trying to expose exception! You win, we lose. " + T;
    }
    d.dc = e;
  }
  return d;
};
g.info = function(a, b) {
  this.log(ah, a, b);
};
var dh = {}, eh = null;
function fh(a) {
  eh || (eh = new Zg(""), dh[""] = eh, eh.lc(bh));
  var b;
  if (!(b = dh[a])) {
    b = new Zg(a);
    var c = a.lastIndexOf("."), d = a.substr(c + 1), c = fh(a.substr(0, c));
    c.fc()[d] = b;
    b.qa = c;
    dh[a] = b;
  }
  return b;
}
;function gh(a) {
  var b = hh;
  b && b.info(a, void 0);
}
;fh("goog.messaging.AbstractChannel");
var hh = fh("goog.net.xpc");
function ih(a) {
  fg.call(this);
  a || xa || (xa = new Sg);
}
la(ih, fg);
function jh(a, b) {
  jh.Nb(this, "constructor", b);
  this.qc = a;
}
var kh;
la(jh, ih);
jh.prototype.jb = 0;
var lh = [], mh = ja(function() {
  var a, b = !1;
  try {
    for (var c = 0;a = lh[c];c++) {
      var d;
      if (!(d = b)) {
        var e = a, f = e.Sd.location.href;
        if (f != e.Sc) {
          e.Sc = f;
          var h = f.split("#")[1];
          h && (h = h.substr(1), e.Ed(decodeURIComponent(h)));
          d = !0;
        } else {
          d = !1;
        }
      }
      b = d;
    }
  } catch (k) {
    if (gh("receive_() failed: " + k), a = a.Vd.qc, gh("Transport Error"), a.close(), !lh.length) {
      return;
    }
  }
  a = ka();
  b && (kh = a);
  window.setTimeout(mh, 1E3 > a - kh ? 10 : 100);
}, jh);
fh("goog.net.XhrIo");
Ld.call(null, Fe, Ed.call(null, function(a) {
  var b = R.call(null, a, 0, null);
  a = R.call(null, a, 1, null);
  return new Y(null, 2, 5, Z, [dd.call(null, b.toLowerCase()), a], null);
}, ef.call(null, If.call(null, {kd:"complete", Cd:"success", md:"error", gd:"abort", yd:"ready", zd:"readystatechange", TIMEOUT:"timeout", od:"incrementaldata", xd:"progress"}))));
Ld.call(null, Fe, Ed.call(null, function(a) {
  var b = R.call(null, a, 0, null);
  a = R.call(null, a, 1, null);
  return new Y(null, 2, 5, Z, [dd.call(null, b.toLowerCase()), a], null);
}, If.call(null, {jd:"cn", hd:"at", Ad:"rat", wd:"pu", nd:"ifrid", Dd:"tp", qd:"lru", vd:"pru", pd:"lpu", ud:"ppu", td:"ph", sd:"osh", Bd:"role", rd:"nativeProtocolVersion", ld:"directSyncMode"})));
Af.call(null, null);
Af.call(null, 0);
var nh = {}, oh = new Y(null, 8, 5, Z, [new Y(null, 8, 5, Z, [0, 0, 0, 0, 0, 0, 0, 0], null), new Y(null, 8, 5, Z, [0, 0, 0, 0, 0, 0, 0, 0], null), new Y(null, 8, 5, Z, [0, 0, 0, 0, 0, 0, 0, 0], null), new Y(null, 8, 5, Z, [0, 0, 0, 1, 2, 0, 0, 0], null), new Y(null, 8, 5, Z, [0, 0, 0, 2, 1, 0, 0, 0], null), new Y(null, 8, 5, Z, [0, 0, 0, 0, 0, 0, 0, 0], null), new Y(null, 8, 5, Z, [0, 0, 0, 0, 0, 0, 0, 0], null), new Y(null, 8, 5, Z, [0, 0, 0, 0, 0, 0, 0, 0], null)], null);
a: {
  var ph = [new Y(null, 2, 5, Z, [3, 2], null), new Y(null, 2, 5, Z, [5, 4], null), new Y(null, 2, 5, Z, [2, 2], null), new Y(null, 2, 5, Z, [5, 5], null), new Y(null, 2, 5, Z, [2, 3], null), new Y(null, 2, 5, Z, [4, 5], null), new Y(null, 2, 5, Z, [2, 4], null), new Y(null, 2, 5, Z, [3, 5], null), new Y(null, 2, 5, Z, [2, 5], null), new Y(null, 2, 5, Z, [5, 2], null), new Y(null, 2, 5, Z, [4, 2], null), new Y(null, 2, 5, Z, [5, 3], null)], qh = ph.length;
  if (qh <= De) {
    for (var rh = 0, sh = vd.call(null, Fe);;) {
      if (rh < qh) {
        var th = rh + 1, uh = Gb.call(null, sh, ph[rh], null), rh = th, sh = uh
      } else {
        Fb.call(null, sh);
        break a;
      }
    }
  } else {
    for (rh = 0, sh = vd.call(null, hf);;) {
      if (rh < qh) {
        var vh = rh + 1, wh = Eb.call(null, sh, ph[rh]), rh = vh, sh = wh
      } else {
        Fb.call(null, sh);
        break a;
      }
    }
  }
}
var xh = new Y(null, 8, 5, Z, [new Y(null, 2, 5, Z, [0, -1], null), new Y(null, 2, 5, Z, [1, -1], null), new Y(null, 2, 5, Z, [1, 0], null), new Y(null, 2, 5, Z, [1, 1], null), new Y(null, 2, 5, Z, [0, 1], null), new Y(null, 2, 5, Z, [-1, 1], null), new Y(null, 2, 5, Z, [-1, 0], null), new Y(null, 2, 5, Z, [-1, -1], null)], null);
function yh(a) {
  return Q.call(null, a);
}
function zh(a) {
  return Q.call(null, R.call(null, a, 0, X));
}
function Ah(a) {
  return!Hc.call(null, kf.call(null, Kd.call(null, a)), 0);
}
function Bh(a) {
  return V.call(null, function(a, c) {
    return mc.call(null, a, c, a.call(null, c) + 1);
  }, new Ge([1, 0, 2, 0, 0, 0]), Kd.call(null, a));
}
var Ch = function() {
  function a(a, d) {
    var e = null;
    1 < arguments.length && (e = N(Array.prototype.slice.call(arguments, 1), 0));
    return b.call(this, a, e);
  }
  function b(a, b) {
    var e = Fc.call(null, b) ? pc.call(null, af, b) : b;
    kc.call(null, e, new q(null, "strict", "strict", 4416885307), !1);
    var e = Bh.call(null, a), f = e.call(null, 2), h = e.call(null, 1);
    return 0 > e.call(null, 0) ? null : Rb.call(null, f, h) ? 4 : f > h ? 2 : new q(null, "else", "else", 1017020587) ? 1 : null;
  }
  a.o = 1;
  a.k = function(a) {
    var d = H(a);
    a = I(a);
    return b(d, a);
  };
  a.i = b;
  return a;
}();
function Dh(a, b) {
  var c = R.call(null, a, 0, null), d = R.call(null, a, 1, null), e = Q.call(null, b), f = Q.call(null, R.call(null, b, 0, X));
  return c <= f && 0 <= c && d <= e && 0 <= d;
}
function Eh(a) {
  return Rb.call(null, a, 2);
}
function Fh(a) {
  return Rb.call(null, a, 1);
}
function Gh(a) {
  return Eh.call(null, a) ? 1 : Fh.call(null, a) ? 2 : null;
}
function Hh(a) {
  return Eh.call(null, a) || Fh.call(null, a);
}
function Ih(a) {
  return!Hh.call(null, a);
}
function Jh(a, b) {
  var c = R.call(null, a, 0, null), d = R.call(null, a, 1, null), e = Qc.call(null, a, 2);
  return Nd.call(null, b, td.call(null, new Y(null, 2, 5, Z, [d, c], null), e));
}
function Kh(a, b) {
  var c = R.call(null, a, 0, null), d = R.call(null, a, 1, null);
  return Ih.call(null, Jh.call(null, new Y(null, 2, 5, Z, [c, d], null), b));
}
function Lh(a, b, c) {
  var d = R.call(null, b, 0, null), e = R.call(null, b, 1, null);
  return V.call(null, function(b, d, e) {
    return function(b, f) {
      var u = d + H.call(null, f), v = e + ec.call(null, f), u = Jh.call(null, new Y(null, 2, 5, Z, [u, v], null), c);
      return Rb.call(null, u, a) ? O.call(null, f, b) : b;
    };
  }(b, d, e), K, xh);
}
function Mh(a, b, c, d) {
  var e = R.call(null, c, 0, null);
  for (c = R.call(null, c, 1, null);;) {
    var f = Jh.call(null, new Y(null, 2, 5, Z, [e, c], null), d);
    if (Rb.call(null, f, b)) {
      return new Y(null, 2, 5, Z, [e, c], null);
    }
    if (!Ih.call(null, f) && Dh.call(null, new Y(null, 2, 5, Z, [e, c], null), d)) {
      e += H.call(null, a), c += ec.call(null, a);
    } else {
      return null;
    }
  }
}
function Nh(a, b) {
  var c = Md.call(null, Kc, a, b);
  return Md.call(null, function() {
    return function(a) {
      return 0 < a ? 1 : 0 > a ? -1 : new q(null, "else", "else", 1017020587) ? 0 : null;
    };
  }(c), c);
}
function Oh(a, b, c) {
  return Pd.call(null, c, ie.call(null, $c.call(null, b)), a);
}
var Ph = function() {
  function a(a, d, e, f, h) {
    var k = null;
    4 < arguments.length && (k = N(Array.prototype.slice.call(arguments, 4), 0));
    return b.call(this, a, d, e, f, k);
  }
  function b(a, b, e, f, h) {
    var k = R.call(null, e, 0, null), l = R.call(null, e, 1, null), p = Fc.call(null, h) ? pc.call(null, af, h) : h;
    e = kc.call(null, p, new q(null, "on-reversi-a-piece", "on-reversi-a-piece", 1558210079), function() {
      return function(a) {
        R.call(null, a, 0, null);
        R.call(null, a, 1, null);
        return null;
      };
    }(e, k, l, h, p));
    h = Nh.call(null, b, new Y(null, 2, 5, Z, [k, l], null));
    k = new Y(null, 2, 5, Z, [k, l], null);
    for (l = f;;) {
      if (Dh.call(null, k, l)) {
        e.call(null, k);
        if (Rb.call(null, k, b)) {
          return Oh.call(null, a, k, l);
        }
        f = Md.call(null, Jc, h, k);
        l = Oh.call(null, a, k, l);
        k = f;
      } else {
        return null;
      }
    }
  }
  a.o = 4;
  a.k = function(a) {
    var d = H(a);
    a = L(a);
    var e = H(a);
    a = L(a);
    var f = H(a);
    a = L(a);
    var h = H(a);
    a = I(a);
    return b(d, e, f, h, a);
  };
  a.i = b;
  return a;
}();
function Qh(a, b, c) {
  var d = R.call(null, b, 0, null), e = R.call(null, b, 1, null);
  if (Kh.call(null, new Y(null, 2, 5, Z, [d, e], null), c)) {
    var f = Lh.call(null, Gh.call(null, a), new Y(null, 2, 5, Z, [d, e], null), c);
    return vc.call(null, f) ? null : V.call(null, function(b, d, e, f) {
      return function(b, d) {
        var h = Md.call(null, Jc, new Y(null, 2, 5, Z, [e, f], null), d), h = Mh.call(null, d, a, h, c);
        return null != h ? O.call(null, h, b) : b;
      };
    }(f, b, d, e), K, f);
  }
  return null;
}
function Rh(a, b, c) {
  var d = R.call(null, b, 0, null);
  b = R.call(null, b, 1, null);
  if (Kh.call(null, new Y(null, 2, 5, Z, [d, b], null), c)) {
    for (var e = Lh.call(null, Gh.call(null, a), new Y(null, 2, 5, Z, [d, b], null), c);;) {
      if (vc.call(null, e)) {
        return null;
      }
      var f = H.call(null, e), h = Md.call(null, Jc, new Y(null, 2, 5, Z, [d, b], null), f);
      if (null != Mh.call(null, f, a, h, c)) {
        return!0;
      }
      e = I.call(null, e);
    }
  } else {
    return null;
  }
}
function Sh(a) {
  return pc.call(null, td, Dd.call(null, function(b, c) {
    return Dd.call(null, function(c) {
      return Ih.call(null, Jh.call(null, new Y(null, 2, 5, Z, [c, b], null), a)) ? new Y(null, 2, 5, Z, [c, b], null) : null;
    }, c);
  }, a));
}
var Th = function() {
  function a(a, b, c) {
    return Hh.call(null, a) ? Id.call(null, function(b) {
      return Rh.call(null, a, b, c);
    }, b) : null;
  }
  function b(a, b) {
    return Hh.call(null, a) ? Id.call(null, function(c) {
      return Rh.call(null, a, c, b);
    }, Sh.call(null, b)) : null;
  }
  var c = null, c = function(c, e, f) {
    switch(arguments.length) {
      case 2:
        return b.call(this, c, e);
      case 3:
        return a.call(this, c, e, f);
    }
    throw Error("Invalid arity: " + arguments.length);
  };
  c.q = b;
  c.ba = a;
  return c;
}(), Uh = function() {
  function a(a, d, e, f) {
    var h = null;
    3 < arguments.length && (h = N(Array.prototype.slice.call(arguments, 3), 0));
    return b.call(this, a, d, e, h);
  }
  function b(a, b, e, f) {
    var h = R.call(null, b, 0, null), k = R.call(null, b, 1, null), l = Fc.call(null, f) ? pc.call(null, af, f) : f, p = kc.call(null, l, new q(null, "on-reversi-a-piece", "on-reversi-a-piece", 1558210079), function() {
      return function(a) {
        R.call(null, a, 0, null);
        R.call(null, a, 1, null);
        return null;
      };
    }(b, h, k, f, l)), u = Qh.call(null, a, new Y(null, 2, 5, Z, [h, k], null), e);
    return vc.call(null, u) ? null : V.call(null, function(b, d, e, f, h, k, l) {
      return function(b, d) {
        return Ph.call(null, a, d, new Y(null, 2, 5, Z, [e, f], null), b, new q(null, "on-reversi-a-piece", "on-reversi-a-piece", 1558210079), l);
      };
    }(u, b, h, k, f, l, p), e, u);
  }
  a.o = 3;
  a.k = function(a) {
    var d = H(a);
    a = L(a);
    var e = H(a);
    a = L(a);
    var f = H(a);
    a = I(a);
    return b(d, e, f, a);
  };
  a.i = b;
  return a;
}();
var Vh = new Y(null, 8, 5, Z, [X, X, X, X, X, X, X, X], null), Wh = new Phaser.Game(905, 605, Phaser.AUTO, "game_div"), Xh = new Y(null, 6, 5, Z, [new Y(null, 2, 5, Z, ["border", "assets/reversi-border.png"], null), new Y(null, 2, 5, Z, ["white-piece", "assets/white-piece.png"], null), new Y(null, 2, 5, Z, ["black-piece", "assets/black-piece.png"], null), new Y(null, 2, 5, Z, ["possible-grid", "assets/gray-grid.png"], null), new Y(null, 2, 5, Z, ["restart-button", "assets/restart-button.png"], null), 
new Y(null, 2, 5, Z, ["fullscreen-button", "assets/fullscreen-button.png"], null)], null);
function Yh(a) {
  a.border = oh;
  a.Va = Vh;
  a.Ta = K;
  a.Tc = 1;
  return a.Rd = 2;
}
function Zh(a) {
  return(new Ma(null, 4, ["empty-grid", nh.oc, "black-piece", 1, "white-piece", 2, "possible-grid", 3], null)).call(null, a);
}
function $h(a) {
  return(new Ge([nh.oc, "empty-grid", 1, "black-piece", 2, "white-piece", 3, "possible-grid"])).call(null, a);
}
function ai(a) {
  return new Y(null, 2, 5, Z, [75 * H.call(null, a) + 5, 75 * ec.call(null, a) + 5], null);
}
function bi(a) {
  return $h.call(null, Gh.call(null, Zh.call(null, a)));
}
function ci(a, b, c) {
  var d = R.call(null, b, 0, null), e = R.call(null, b, 1, null), f = c.border, h = c.Va, k = c.Ta;
  b = Uh.call(null, a, new Y(null, 2, 5, Z, [d, e], null), f, new q(null, "on-reversi-a-piece", "on-reversi-a-piece", 1558210079), function(b, c) {
    return function(b) {
      var d = R.call(null, b, 0, null);
      b = R.call(null, b, 1, null);
      Jh.call(null, new Y(null, 2, 5, Z, [d, b], null), c).call(null, $h.call(null, a)).visible = !0;
      return Jh.call(null, new Y(null, 2, 5, Z, [d, b], null), c).call(null, bi.call(null, $h.call(null, a))).visible = !1;
    };
  }(f, h, k, b, d, e));
  if (vc.call(null, b)) {
    return null;
  }
  k = F.call(null, k);
  d = null;
  for (f = e = 0;;) {
    if (f < e) {
      var l = z.call(null, d, f);
      Jh.call(null, l, h).call(null, "possible-grid").visible = !1;
      f += 1;
    } else {
      if (k = F.call(null, k)) {
        d = k, U.call(null, d) ? (k = nd.call(null, d), f = od.call(null, d), d = k, e = Q.call(null, k), k = f) : (k = H.call(null, d), Jh.call(null, k, h).call(null, "possible-grid").visible = !1, k = L.call(null, d), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  c.Ta = K;
  return c.border = b;
}
function di(a) {
  var b = Th.call(null, 2, a.border);
  return vc.call(null, b) ? null : ci.call(null, 2, Jf.call(null, b), a);
}
function ei(a) {
  var b = a.Va, c = a.Ta, d = Th.call(null, 1, a.border);
  if (vc.call(null, d)) {
    return di.call(null, a);
  }
  a.Ta = td.call(null, c, d);
  a = F.call(null, d);
  for (var c = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = z.call(null, c, f);
      Jh.call(null, h, b).call(null, "possible-grid").visible = !0;
      f += 1;
    } else {
      if (a = F.call(null, a)) {
        c = a, U.call(null, c) ? (a = nd.call(null, c), f = od.call(null, c), c = a, e = Q.call(null, a), a = f) : (a = H.call(null, c), Jh.call(null, a, b).call(null, "possible-grid").visible = !0, a = L.call(null, c), c = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  return d;
}
function fi(a) {
  var b = a.game, c = b.Tc;
  ci.call(null, c, a.gc, b);
  di.call(null, b);
  a = b.border;
  var d = Bh.call(null, a);
  b.bd.text = [w("black-piece: "), w(d.call(null, 1)), w("\nwhite-piece: "), w(d.call(null, 2))].join("");
  b = null == ei.call(null, b);
  return Ah.call(null, a) || b ? (b = Ch.call(null, a), Rb.call(null, b, 4) ? alert("deuce end!") : Rb.call(null, b, c) ? alert("you are winner!") : new q(null, "else", "else", 1017020587) ? alert("you are loser!") : null) : null;
}
function gi(a, b) {
  for (var c = b.border, d = yh.call(null, c), c = zh.call(null, c), e = Zh.call(null, a), f = 0;;) {
    if (f < d) {
      for (var h = c, k = 0;;) {
        if (k < h) {
          var l = b.Va, p = ai.call(null, new Y(null, 2, 5, Z, [k, f], null)), p = b.add.sprite(H.call(null, p), ec.call(null, p), a);
          p.visible = !1;
          p.gc = new Y(null, 2, 5, Z, [k, f], null);
          p.Yc = e;
          b.Va = Pd.call(null, l, new Y(null, 3, 5, Z, [f, k, a], null), p);
          k += 1;
        } else {
          break;
        }
      }
      f += 1;
    } else {
      return null;
    }
  }
}
function hi(a, b) {
  for (var c = b.border, d = yh.call(null, c), c = zh.call(null, c), e = 0;;) {
    if (e < d) {
      for (var f = c, h = 0;;) {
        if (h < f) {
          var k = b.Va, l = b.add.sprite(5 + 75 * h, 5 + 75 * e, a);
          l.inputEnabled = !0;
          l.events.onInputDown.add(fi, b);
          l.visible = !1;
          l.gc = new Y(null, 2, 5, Z, [h, e], null);
          l.Yc = 3;
          l.input.useHandCursor = !0;
          b.Va = Pd.call(null, k, new Y(null, 3, 5, Z, [e, h, a], null), l);
          h += 1;
        } else {
          break;
        }
      }
      e += 1;
    } else {
      return null;
    }
  }
}
function ii(a) {
  for (var b = a.Va, c = F.call(null, new Y(null, 8, 5, Z, [new Y(null, 2, 5, Z, [new Y(null, 2, 5, Z, [3, 3], null), "black-piece"], null), new Y(null, 2, 5, Z, [new Y(null, 2, 5, Z, [4, 4], null), "black-piece"], null), new Y(null, 2, 5, Z, [new Y(null, 2, 5, Z, [4, 3], null), "white-piece"], null), new Y(null, 2, 5, Z, [new Y(null, 2, 5, Z, [3, 4], null), "white-piece"], null), new Y(null, 2, 5, Z, [new Y(null, 2, 5, Z, [4, 2], null), "possible-grid"], null), new Y(null, 2, 5, Z, [new Y(null, 
  2, 5, Z, [3, 5], null), "possible-grid"], null), new Y(null, 2, 5, Z, [new Y(null, 2, 5, Z, [5, 3], null), "possible-grid"], null), new Y(null, 2, 5, Z, [new Y(null, 2, 5, Z, [2, 4], null), "possible-grid"], null)], null)), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = z.call(null, d, f), k = H.call(null, h), h = ec.call(null, h);
      Jh.call(null, k, b).call(null, h).visible = !0;
      f += 1;
    } else {
      if (c = F.call(null, c)) {
        U.call(null, c) ? (e = nd.call(null, c), c = od.call(null, c), d = e, e = Q.call(null, e)) : (e = H.call(null, c), d = H.call(null, e), e = ec.call(null, e), Jh.call(null, d, b).call(null, e).visible = !0, c = L.call(null, c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  b = F.call(null, new Y(null, 4, 5, Z, [new Y(null, 2, 5, Z, [4, 2], null), new Y(null, 2, 5, Z, [3, 5], null), new Y(null, 2, 5, Z, [5, 3], null), new Y(null, 2, 5, Z, [2, 4], null)], null));
  c = null;
  for (f = e = 0;;) {
    if (f < e) {
      d = z.call(null, c, f), a.Ta = gc.call(null, a.Ta, d), f += 1;
    } else {
      if (b = F.call(null, b)) {
        c = b, U.call(null, c) ? (b = nd.call(null, c), e = od.call(null, c), c = b, d = Q.call(null, b), b = e, e = d) : (d = H.call(null, c), a.Ta = gc.call(null, a.Ta, d), b = L.call(null, c), c = null, e = 0), f = 0;
      } else {
        return null;
      }
    }
  }
}
function ji(a, b, c) {
  a = F.call(null, new Y(null, 2, 5, Z, [a, b], null));
  b = null;
  for (var d = 0, e = 0;;) {
    if (e < d) {
      var f = z.call(null, b, e);
      gi.call(null, f, c);
      e += 1;
    } else {
      if (a = F.call(null, a)) {
        b = a, U.call(null, b) ? (a = nd.call(null, b), d = od.call(null, b), b = a, f = Q.call(null, a), a = d, d = f) : (f = H.call(null, b), gi.call(null, f, c), a = L.call(null, b), b = null, d = 0), e = 0;
      } else {
        return null;
      }
    }
  }
}
function ki(a) {
  var b = [w("black-piece: "), w(2), w("\n"), w("white-piece: "), w(2)].join(""), c = Ef.call(null, new Ma(null, 3, [new q(null, "font", "font", 1017053121), "35px Arial", new q(null, "fill", "fill", 1017047285), "#000000", new q(null, "align", "align", 1106807415), "left"], null));
  return a.bd = a.add.text(615, 20, b, c);
}
function li(a) {
  var b = a.add.sprite(675, 415, "restart-button");
  b.inputEnabled = !0;
  b.input.useHandCursor = !0;
  b.events.onInputDown.add(function() {
    return function() {
      return a.cd();
    };
  }(b), a);
  a.Td = b;
  b = a.add.sprite(675, 465, "fullscreen-button");
  b.inputEnabled = !0;
  b.input.useHandCursor = !0;
  return b.events.onInputDown.add(function() {
    return function() {
      return a.scale.startFullScreen();
    };
  }(b), a);
}
function mi(a) {
  for (var b = a.load, c = F.call(null, Xh), d = null, e = 0, f = 0;;) {
    if (f < e) {
      var h = z.call(null, d, f), k = H.call(null, h), h = ec.call(null, h);
      b.image(k, h);
      f += 1;
    } else {
      if (c = F.call(null, c)) {
        U.call(null, c) ? (e = nd.call(null, c), c = od.call(null, c), d = e, e = Q.call(null, e)) : (e = H.call(null, c), d = H.call(null, e), e = ec.call(null, e), b.image(d, e), c = L.call(null, c), d = null, e = 0), f = 0;
      } else {
        break;
      }
    }
  }
  return a.stage.backgroundColor = "#ffffff";
}
function ni(a) {
  a.scale.fullScreenScaleMode = Phaser.ScaleManager.EXACT_FIT;
  a.add.tileSprite(0, 0, 605, 605, "border");
  hi.call(null, "possible-grid", a);
  ji.call(null, "white-piece", "black-piece", a);
  ki.call(null, a);
  li.call(null, a);
  return ii.call(null, a);
}
(function(a) {
  function b() {
    Yh.call(null, a);
    a.state.add("main", Ef.call(null, new Ma(null, 2, [new q(null, "preload", "preload", 695427451), mi, new q(null, "create", "create", 3956577390), ni], null)));
    return a.state.start("main");
  }
  a.cd = b;
  return b.call(null);
}).call(null, Wh);

})();
