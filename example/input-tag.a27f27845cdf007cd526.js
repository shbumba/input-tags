!(function(t) {
  var n = {}
  function e(r) {
    if (n[r]) return n[r].exports
    var o = (n[r] = { i: r, l: !1, exports: {} })
    return t[r].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
  }
  ;(e.m = t),
    (e.c = n),
    (e.d = function(t, n, r) {
      e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r })
    }),
    (e.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (e.t = function(t, n) {
      if ((1 & n && (t = e(t)), 8 & n)) return t
      if (4 & n && 'object' == typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if (
        (e.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & n && 'string' != typeof t)
      )
        for (var o in t)
          e.d(
            r,
            o,
            function(n) {
              return t[n]
            }.bind(null, o),
          )
      return r
    }),
    (e.n = function(t) {
      var n =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return e.d(n, 'a', n), n
    }),
    (e.o = function(t, n) {
      return Object.prototype.hasOwnProperty.call(t, n)
    }),
    (e.p = './'),
    e((e.s = 77))
})([
  function(t, n, e) {
    ;(function(n) {
      var e = function(t) {
        return t && t.Math == Math && t
      }
      t.exports =
        e('object' == typeof globalThis && globalThis) ||
        e('object' == typeof window && window) ||
        e('object' == typeof self && self) ||
        e('object' == typeof n && n) ||
        Function('return this')()
    }.call(this, e(50)))
  },
  function(t, n, e) {
    t.exports = {
      'input-tags': '_1J0nsN2c2ig595U-9uxR7T',
      'input-tags__base-input': '_8FG_mSek5pmDX_sP3rsgO',
      'input-tags__error': 'g71P-0IOJLRHgIpLKATQt',
      'input-tags__error--show': '_1IPZXW9oth_iUeb5BhLyZb',
      'input-tags__error-message': '_1eCZBodLuYiOKS7j2mvcv2',
      'input-tags__scroll': '_2Y0FLDvXU0QE4de1is9sA0',
      'input-tags__controls': '_3Z5HeQfb_eAPw48MCQI-K9',
      'input-tags__input': '_1FLvIgAtxryv33OC8eW5ii',
      'input-tags__tag': '_3JWGdlqrVgU5AAeU7t1sjd',
      'input-tags__tag-content': '_2Xew3ZB1vskgUy9aWA9n41',
      'input-tags__tag-close': '_13NxCoBTs3p8TWIMB_iwSq',
      'input-tags__tag--invalid': '_3YsdGFSL3EB-7hOSUm2sTP',
    }
  },
  function(t, n) {
    var e = {}.hasOwnProperty
    t.exports = function(t, n) {
      return e.call(t, n)
    }
  },
  function(t, n, e) {
    var r = e(0),
      o = e(34),
      i = e(2),
      a = e(35),
      c = e(38),
      u = e(60),
      s = o('wks'),
      f = r.Symbol,
      p = u ? f : (f && f.withoutSetter) || a
    t.exports = function(t) {
      return (
        i(s, t) || (c && i(f, t) ? (s[t] = f[t]) : (s[t] = p('Symbol.' + t))),
        s[t]
      )
    }
  },
  function(t, n, e) {
    var r = e(7)
    t.exports = function(t) {
      if (!r(t)) throw TypeError(String(t) + ' is not an object')
      return t
    }
  },
  function(t, n) {
    t.exports = function(t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  },
  function(t, n, e) {
    var r = e(5)
    t.exports = !r(function() {
      return (
        7 !=
        Object.defineProperty({}, 1, {
          get: function() {
            return 7
          },
        })[1]
      )
    })
  },
  function(t, n) {
    t.exports = function(t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t
    }
  },
  function(t, n, e) {
    var r = e(6),
      o = e(9),
      i = e(16)
    t.exports = r
      ? function(t, n, e) {
          return o.f(t, n, i(1, e))
        }
      : function(t, n, e) {
          return (t[n] = e), t
        }
  },
  function(t, n, e) {
    var r = e(6),
      o = e(32),
      i = e(4),
      a = e(31),
      c = Object.defineProperty
    n.f = r
      ? c
      : function(t, n, e) {
          if ((i(t), (n = a(n, !0)), i(e), o))
            try {
              return c(t, n, e)
            } catch (t) {}
          if ('get' in e || 'set' in e)
            throw TypeError('Accessors not supported')
          return 'value' in e && (t[n] = e.value), t
        }
  },
  function(t, n, e) {
    var r = e(51),
      o = e(30)
    t.exports = function(t) {
      return r(o(t))
    }
  },
  function(t, n) {
    t.exports = {}
  },
  function(t, n) {
    t.exports = !1
  },
  function(t, n, e) {
    var r = e(55),
      o = e(0),
      i = function(t) {
        return 'function' == typeof t ? t : void 0
      }
    t.exports = function(t, n) {
      return arguments.length < 2
        ? i(r[t]) || i(o[t])
        : (r[t] && r[t][n]) || (o[t] && o[t][n])
    }
  },
  function(t, n) {
    t.exports = function(t, n) {
      if (!(t instanceof n))
        throw new TypeError('Cannot call a class as a function')
    }
  },
  function(t, n) {
    function e(t, n) {
      for (var e = 0; e < n.length; e++) {
        var r = n[e]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r)
      }
    }
    t.exports = function(t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  },
  function(t, n) {
    t.exports = function(t, n) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: n,
      }
    }
  },
  function(t, n) {
    var e = {}.toString
    t.exports = function(t) {
      return e.call(t).slice(8, -1)
    }
  },
  function(t, n, e) {
    var r = e(0),
      o = e(8),
      i = e(2),
      a = e(19),
      c = e(25),
      u = e(26),
      s = u.get,
      f = u.enforce,
      p = String(String).split('String')
    ;(t.exports = function(t, n, e, c) {
      var u = !!c && !!c.unsafe,
        s = !!c && !!c.enumerable,
        l = !!c && !!c.noTargetGet
      'function' == typeof e &&
        ('string' != typeof n || i(e, 'name') || o(e, 'name', n),
        (f(e).source = p.join('string' == typeof n ? n : ''))),
        t !== r
          ? (u ? !l && t[n] && (s = !0) : delete t[n],
            s ? (t[n] = e) : o(t, n, e))
          : s
          ? (t[n] = e)
          : a(n, e)
    })(Function.prototype, 'toString', function() {
      return ('function' == typeof this && s(this).source) || c(this)
    })
  },
  function(t, n, e) {
    var r = e(0),
      o = e(8)
    t.exports = function(t, n) {
      try {
        o(r, t, n)
      } catch (e) {
        r[t] = n
      }
      return n
    }
  },
  function(t, n, e) {
    var r = e(34),
      o = e(35),
      i = r('keys')
    t.exports = function(t) {
      return i[t] || (i[t] = o(t))
    }
  },
  function(t, n) {
    t.exports = {}
  },
  function(t, n) {
    t.exports = [
      'constructor',
      'hasOwnProperty',
      'isPrototypeOf',
      'propertyIsEnumerable',
      'toLocaleString',
      'toString',
      'valueOf',
    ]
  },
  function(t, n, e) {
    var r = e(6),
      o = e(42),
      i = e(16),
      a = e(10),
      c = e(31),
      u = e(2),
      s = e(32),
      f = Object.getOwnPropertyDescriptor
    n.f = r
      ? f
      : function(t, n) {
          if (((t = a(t)), (n = c(n, !0)), s))
            try {
              return f(t, n)
            } catch (t) {}
          if (u(t, n)) return i(!o.f.call(t, n), t[n])
        }
  },
  function(t, n, e) {
    var r = e(0),
      o = e(7),
      i = r.document,
      a = o(i) && o(i.createElement)
    t.exports = function(t) {
      return a ? i.createElement(t) : {}
    }
  },
  function(t, n, e) {
    var r = e(33),
      o = Function.toString
    'function' != typeof r.inspectSource &&
      (r.inspectSource = function(t) {
        return o.call(t)
      }),
      (t.exports = r.inspectSource)
  },
  function(t, n, e) {
    var r,
      o,
      i,
      a = e(52),
      c = e(0),
      u = e(7),
      s = e(8),
      f = e(2),
      p = e(20),
      l = e(21),
      v = c.WeakMap
    if (a) {
      var h = new v(),
        d = h.get,
        g = h.has,
        y = h.set
      ;(r = function(t, n) {
        return y.call(h, t, n), n
      }),
        (o = function(t) {
          return d.call(h, t) || {}
        }),
        (i = function(t) {
          return g.call(h, t)
        })
    } else {
      var m = p('state')
      ;(l[m] = !0),
        (r = function(t, n) {
          return s(t, m, n), n
        }),
        (o = function(t) {
          return f(t, m) ? t[m] : {}
        }),
        (i = function(t) {
          return f(t, m)
        })
    }
    t.exports = {
      set: r,
      get: o,
      has: i,
      enforce: function(t) {
        return i(t) ? o(t) : r(t, {})
      },
      getterFor: function(t) {
        return function(n) {
          var e
          if (!u(n) || (e = o(n)).type !== t)
            throw TypeError('Incompatible receiver, ' + t + ' required')
          return e
        }
      },
    }
  },
  function(t, n, e) {
    var r = e(9).f,
      o = e(2),
      i = e(3)('toStringTag')
    t.exports = function(t, n, e) {
      t &&
        !o((t = e ? t : t.prototype), i) &&
        r(t, i, { configurable: !0, value: n })
    }
  },
  function(t, n) {
    t.exports = function(t, n, e) {
      return (
        n in t
          ? Object.defineProperty(t, n, {
              value: e,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[n] = e),
        t
      )
    }
  },
  function(t, n, e) {
    var r = e(0),
      o = e(23).f,
      i = e(8),
      a = e(18),
      c = e(19),
      u = e(53),
      s = e(44)
    t.exports = function(t, n) {
      var e,
        f,
        p,
        l,
        v,
        h = t.target,
        d = t.global,
        g = t.stat
      if ((e = d ? r : g ? r[h] || c(h, {}) : (r[h] || {}).prototype))
        for (f in n) {
          if (
            ((l = n[f]),
            (p = t.noTargetGet ? (v = o(e, f)) && v.value : e[f]),
            !s(d ? f : h + (g ? '.' : '#') + f, t.forced) && void 0 !== p)
          ) {
            if (typeof l == typeof p) continue
            u(l, p)
          }
          ;(t.sham || (p && p.sham)) && i(l, 'sham', !0), a(e, f, l, t)
        }
    }
  },
  function(t, n) {
    t.exports = function(t) {
      if (null == t) throw TypeError("Can't call method on " + t)
      return t
    }
  },
  function(t, n, e) {
    var r = e(7)
    t.exports = function(t, n) {
      if (!r(t)) return t
      var e, o
      if (n && 'function' == typeof (e = t.toString) && !r((o = e.call(t))))
        return o
      if ('function' == typeof (e = t.valueOf) && !r((o = e.call(t)))) return o
      if (!n && 'function' == typeof (e = t.toString) && !r((o = e.call(t))))
        return o
      throw TypeError("Can't convert object to primitive value")
    }
  },
  function(t, n, e) {
    var r = e(6),
      o = e(5),
      i = e(24)
    t.exports =
      !r &&
      !o(function() {
        return (
          7 !=
          Object.defineProperty(i('div'), 'a', {
            get: function() {
              return 7
            },
          }).a
        )
      })
  },
  function(t, n, e) {
    var r = e(0),
      o = e(19),
      i = r['__core-js_shared__'] || o('__core-js_shared__', {})
    t.exports = i
  },
  function(t, n, e) {
    var r = e(12),
      o = e(33)
    ;(t.exports = function(t, n) {
      return o[t] || (o[t] = void 0 !== n ? n : {})
    })('versions', []).push({
      version: '3.6.5',
      mode: r ? 'pure' : 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
    })
  },
  function(t, n) {
    var e = 0,
      r = Math.random()
    t.exports = function(t) {
      return (
        'Symbol(' +
        String(void 0 === t ? '' : t) +
        ')_' +
        (++e + r).toString(36)
      )
    }
  },
  function(t, n, e) {
    var r = e(2),
      o = e(10),
      i = e(57).indexOf,
      a = e(21)
    t.exports = function(t, n) {
      var e,
        c = o(t),
        u = 0,
        s = []
      for (e in c) !r(a, e) && r(c, e) && s.push(e)
      for (; n.length > u; ) r(c, (e = n[u++])) && (~i(s, e) || s.push(e))
      return s
    }
  },
  function(t, n) {
    var e = Math.ceil,
      r = Math.floor
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : e)(t)
    }
  },
  function(t, n, e) {
    var r = e(5)
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function() {
        return !String(Symbol())
      })
  },
  function(t, n, e) {
    var r,
      o = e(4),
      i = e(63),
      a = e(22),
      c = e(21),
      u = e(46),
      s = e(24),
      f = e(20),
      p = f('IE_PROTO'),
      l = function() {},
      v = function(t) {
        return '<script>' + t + '</script>'
      },
      h = function() {
        try {
          r = document.domain && new ActiveXObject('htmlfile')
        } catch (t) {}
        var t, n
        h = r
          ? (function(t) {
              t.write(v('')), t.close()
              var n = t.parentWindow.Object
              return (t = null), n
            })(r)
          : (((n = s('iframe')).style.display = 'none'),
            u.appendChild(n),
            (n.src = String('javascript:')),
            (t = n.contentWindow.document).open(),
            t.write(v('document.F=Object')),
            t.close(),
            t.F)
        for (var e = a.length; e--; ) delete h.prototype[a[e]]
        return h()
      }
    ;(c[p] = !0),
      (t.exports =
        Object.create ||
        function(t, n) {
          var e
          return (
            null !== t
              ? ((l.prototype = o(t)),
                (e = new l()),
                (l.prototype = null),
                (e[p] = t))
              : (e = h()),
            void 0 === n ? e : i(e, n)
          )
        })
  },
  function(t, n, e) {
    'use strict'
    var r,
      o,
      i,
      a = e(41),
      c = e(8),
      u = e(2),
      s = e(3),
      f = e(12),
      p = s('iterator'),
      l = !1
    ;[].keys &&
      ('next' in (i = [].keys())
        ? (o = a(a(i))) !== Object.prototype && (r = o)
        : (l = !0)),
      null == r && (r = {}),
      f ||
        u(r, p) ||
        c(r, p, function() {
          return this
        }),
      (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: l })
  },
  function(t, n, e) {
    var r = e(2),
      o = e(66),
      i = e(20),
      a = e(67),
      c = i('IE_PROTO'),
      u = Object.prototype
    t.exports = a
      ? Object.getPrototypeOf
      : function(t) {
          return (
            (t = o(t)),
            r(t, c)
              ? t[c]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? u
              : null
          )
        }
  },
  function(t, n, e) {
    'use strict'
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({ 1: 2 }, 1)
    n.f = i
      ? function(t) {
          var n = o(this, t)
          return !!n && n.enumerable
        }
      : r
  },
  function(t, n, e) {
    var r = e(37),
      o = Math.min
    t.exports = function(t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0
    }
  },
  function(t, n, e) {
    var r = e(5),
      o = /#|\.prototype\./,
      i = function(t, n) {
        var e = c[a(t)]
        return e == s || (e != u && ('function' == typeof n ? r(n) : !!n))
      },
      a = (i.normalize = function(t) {
        return String(t)
          .replace(o, '.')
          .toLowerCase()
      }),
      c = (i.data = {}),
      u = (i.NATIVE = 'N'),
      s = (i.POLYFILL = 'P')
    t.exports = i
  },
  function(t, n) {
    t.exports = function(t) {
      if ('function' != typeof t)
        throw TypeError(String(t) + ' is not a function')
      return t
    }
  },
  function(t, n, e) {
    var r = e(13)
    t.exports = r('document', 'documentElement')
  },
  function(t, n, e) {
    var r = e(36),
      o = e(22)
    t.exports =
      Object.keys ||
      function(t) {
        return r(t, o)
      }
  },
  function(t, n) {
    t.exports = function(t, n) {
      ;(null == n || n > t.length) && (n = t.length)
      for (var e = 0, r = new Array(n); e < n; e++) r[e] = t[e]
      return r
    }
  },
  function(t, n, e) {
    var r = e(98),
      o = e(99),
      i = e(70),
      a = e(100)
    t.exports = function(t, n) {
      return r(t) || o(t, n) || i(t, n) || a()
    }
  },
  function(t, n) {
    var e
    e = (function() {
      return this
    })()
    try {
      e = e || new Function('return this')()
    } catch (t) {
      'object' == typeof window && (e = window)
    }
    t.exports = e
  },
  function(t, n, e) {
    var r = e(5),
      o = e(17),
      i = ''.split
    t.exports = r(function() {
      return !Object('z').propertyIsEnumerable(0)
    })
      ? function(t) {
          return 'String' == o(t) ? i.call(t, '') : Object(t)
        }
      : Object
  },
  function(t, n, e) {
    var r = e(0),
      o = e(25),
      i = r.WeakMap
    t.exports = 'function' == typeof i && /native code/.test(o(i))
  },
  function(t, n, e) {
    var r = e(2),
      o = e(54),
      i = e(23),
      a = e(9)
    t.exports = function(t, n) {
      for (var e = o(n), c = a.f, u = i.f, s = 0; s < e.length; s++) {
        var f = e[s]
        r(t, f) || c(t, f, u(n, f))
      }
    }
  },
  function(t, n, e) {
    var r = e(13),
      o = e(56),
      i = e(59),
      a = e(4)
    t.exports =
      r('Reflect', 'ownKeys') ||
      function(t) {
        var n = o.f(a(t)),
          e = i.f
        return e ? n.concat(e(t)) : n
      }
  },
  function(t, n, e) {
    var r = e(0)
    t.exports = r
  },
  function(t, n, e) {
    var r = e(36),
      o = e(22).concat('length', 'prototype')
    n.f =
      Object.getOwnPropertyNames ||
      function(t) {
        return r(t, o)
      }
  },
  function(t, n, e) {
    var r = e(10),
      o = e(43),
      i = e(58),
      a = function(t) {
        return function(n, e, a) {
          var c,
            u = r(n),
            s = o(u.length),
            f = i(a, s)
          if (t && e != e) {
            for (; s > f; ) if ((c = u[f++]) != c) return !0
          } else
            for (; s > f; f++)
              if ((t || f in u) && u[f] === e) return t || f || 0
          return !t && -1
        }
      }
    t.exports = { includes: a(!0), indexOf: a(!1) }
  },
  function(t, n, e) {
    var r = e(37),
      o = Math.max,
      i = Math.min
    t.exports = function(t, n) {
      var e = r(t)
      return e < 0 ? o(e + n, 0) : i(e, n)
    }
  },
  function(t, n) {
    n.f = Object.getOwnPropertySymbols
  },
  function(t, n, e) {
    var r = e(38)
    t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator
  },
  function(t, n, e) {
    'use strict'
    var r = e(10),
      o = e(62),
      i = e(11),
      a = e(26),
      c = e(64),
      u = a.set,
      s = a.getterFor('Array Iterator')
    ;(t.exports = c(
      Array,
      'Array',
      function(t, n) {
        u(this, { type: 'Array Iterator', target: r(t), index: 0, kind: n })
      },
      function() {
        var t = s(this),
          n = t.target,
          e = t.kind,
          r = t.index++
        return !n || r >= n.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : 'keys' == e
          ? { value: r, done: !1 }
          : 'values' == e
          ? { value: n[r], done: !1 }
          : { value: [r, n[r]], done: !1 }
      },
      'values',
    )),
      (i.Arguments = i.Array),
      o('keys'),
      o('values'),
      o('entries')
  },
  function(t, n, e) {
    var r = e(3),
      o = e(39),
      i = e(9),
      a = r('unscopables'),
      c = Array.prototype
    null == c[a] && i.f(c, a, { configurable: !0, value: o(null) }),
      (t.exports = function(t) {
        c[a][t] = !0
      })
  },
  function(t, n, e) {
    var r = e(6),
      o = e(9),
      i = e(4),
      a = e(47)
    t.exports = r
      ? Object.defineProperties
      : function(t, n) {
          i(t)
          for (var e, r = a(n), c = r.length, u = 0; c > u; )
            o.f(t, (e = r[u++]), n[e])
          return t
        }
  },
  function(t, n, e) {
    'use strict'
    var r = e(29),
      o = e(65),
      i = e(41),
      a = e(68),
      c = e(27),
      u = e(8),
      s = e(18),
      f = e(3),
      p = e(12),
      l = e(11),
      v = e(40),
      h = v.IteratorPrototype,
      d = v.BUGGY_SAFARI_ITERATORS,
      g = f('iterator'),
      y = function() {
        return this
      }
    t.exports = function(t, n, e, f, v, m, b) {
      o(e, n, f)
      var x,
        _,
        w,
        O = function(t) {
          if (t === v && P) return P
          if (!d && t in S) return S[t]
          switch (t) {
            case 'keys':
            case 'values':
            case 'entries':
              return function() {
                return new e(this, t)
              }
          }
          return function() {
            return new e(this)
          }
        },
        j = n + ' Iterator',
        T = !1,
        S = t.prototype,
        E = S[g] || S['@@iterator'] || (v && S[v]),
        P = (!d && E) || O(v),
        k = ('Array' == n && S.entries) || E
      if (
        (k &&
          ((x = i(k.call(new t()))),
          h !== Object.prototype &&
            x.next &&
            (p ||
              i(x) === h ||
              (a ? a(x, h) : 'function' != typeof x[g] && u(x, g, y)),
            c(x, j, !0, !0),
            p && (l[j] = y))),
        'values' == v &&
          E &&
          'values' !== E.name &&
          ((T = !0),
          (P = function() {
            return E.call(this)
          })),
        (p && !b) || S[g] === P || u(S, g, P),
        (l[n] = P),
        v)
      )
        if (
          ((_ = {
            values: O('values'),
            keys: m ? P : O('keys'),
            entries: O('entries'),
          }),
          b)
        )
          for (w in _) (d || T || !(w in S)) && s(S, w, _[w])
        else r({ target: n, proto: !0, forced: d || T }, _)
      return _
    }
  },
  function(t, n, e) {
    'use strict'
    var r = e(40).IteratorPrototype,
      o = e(39),
      i = e(16),
      a = e(27),
      c = e(11),
      u = function() {
        return this
      }
    t.exports = function(t, n, e) {
      var s = n + ' Iterator'
      return (
        (t.prototype = o(r, { next: i(1, e) })), a(t, s, !1, !0), (c[s] = u), t
      )
    }
  },
  function(t, n, e) {
    var r = e(30)
    t.exports = function(t) {
      return Object(r(t))
    }
  },
  function(t, n, e) {
    var r = e(5)
    t.exports = !r(function() {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      )
    })
  },
  function(t, n, e) {
    var r = e(4),
      o = e(69)
    t.exports =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function() {
            var t,
              n = !1,
              e = {}
            try {
              ;(t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__',
              ).set).call(e, []),
                (n = e instanceof Array)
            } catch (t) {}
            return function(e, i) {
              return r(e), o(i), n ? t.call(e, i) : (e.__proto__ = i), e
            }
          })()
        : void 0)
  },
  function(t, n, e) {
    var r = e(7)
    t.exports = function(t) {
      if (!r(t) && null !== t)
        throw TypeError("Can't set " + String(t) + ' as a prototype')
      return t
    }
  },
  function(t, n, e) {
    var r = e(48)
    t.exports = function(t, n) {
      if (t) {
        if ('string' == typeof t) return r(t, n)
        var e = Object.prototype.toString.call(t).slice(8, -1)
        return (
          'Object' === e && t.constructor && (e = t.constructor.name),
          'Map' === e || 'Set' === e
            ? Array.from(e)
            : 'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            ? r(t, n)
            : void 0
        )
      }
    }
  },
  function(t, n, e) {
    var r = e(45)
    t.exports = function(t, n, e) {
      if ((r(t), void 0 === n)) return t
      switch (e) {
        case 0:
          return function() {
            return t.call(n)
          }
        case 1:
          return function(e) {
            return t.call(n, e)
          }
        case 2:
          return function(e, r) {
            return t.call(n, e, r)
          }
        case 3:
          return function(e, r, o) {
            return t.call(n, e, r, o)
          }
      }
      return function() {
        return t.apply(n, arguments)
      }
    }
  },
  function(t, n, e) {
    var r,
      o,
      i,
      a = e(0),
      c = e(5),
      u = e(17),
      s = e(71),
      f = e(46),
      p = e(24),
      l = e(73),
      v = a.location,
      h = a.setImmediate,
      d = a.clearImmediate,
      g = a.process,
      y = a.MessageChannel,
      m = a.Dispatch,
      b = 0,
      x = {},
      _ = function(t) {
        if (x.hasOwnProperty(t)) {
          var n = x[t]
          delete x[t], n()
        }
      },
      w = function(t) {
        return function() {
          _(t)
        }
      },
      O = function(t) {
        _(t.data)
      },
      j = function(t) {
        a.postMessage(t + '', v.protocol + '//' + v.host)
      }
    ;(h && d) ||
      ((h = function(t) {
        for (var n = [], e = 1; arguments.length > e; ) n.push(arguments[e++])
        return (
          (x[++b] = function() {
            ;('function' == typeof t ? t : Function(t)).apply(void 0, n)
          }),
          r(b),
          b
        )
      }),
      (d = function(t) {
        delete x[t]
      }),
      'process' == u(g)
        ? (r = function(t) {
            g.nextTick(w(t))
          })
        : m && m.now
        ? (r = function(t) {
            m.now(w(t))
          })
        : y && !l
        ? ((i = (o = new y()).port2),
          (o.port1.onmessage = O),
          (r = s(i.postMessage, i, 1)))
        : !a.addEventListener ||
          'function' != typeof postMessage ||
          a.importScripts ||
          c(j) ||
          'file:' === v.protocol
        ? (r =
            'onreadystatechange' in p('script')
              ? function(t) {
                  f.appendChild(p('script')).onreadystatechange = function() {
                    f.removeChild(this), _(t)
                  }
                }
              : function(t) {
                  setTimeout(w(t), 0)
                })
        : ((r = j), a.addEventListener('message', O, !1))),
      (t.exports = { set: h, clear: d })
  },
  function(t, n, e) {
    var r = e(74)
    t.exports = /(iphone|ipod|ipad).*applewebkit/i.test(r)
  },
  function(t, n, e) {
    var r = e(13)
    t.exports = r('navigator', 'userAgent') || ''
  },
  function(t, n, e) {
    'use strict'
    var r = e(45),
      o = function(t) {
        var n, e
        ;(this.promise = new t(function(t, r) {
          if (void 0 !== n || void 0 !== e)
            throw TypeError('Bad Promise constructor')
          ;(n = t), (e = r)
        })),
          (this.resolve = r(n)),
          (this.reject = r(e))
      }
    t.exports.f = function(t) {
      return new o(t)
    }
  },
  ,
  function(t, n, e) {
    e(78), e(61), e(96), (t.exports = e(108))
  },
  function(t, n, e) {
    'use strict'
    var r,
      o,
      i,
      a,
      c = e(29),
      u = e(12),
      s = e(0),
      f = e(13),
      p = e(79),
      l = e(18),
      v = e(80),
      h = e(27),
      d = e(81),
      g = e(7),
      y = e(45),
      m = e(82),
      b = e(17),
      x = e(25),
      _ = e(83),
      w = e(89),
      O = e(90),
      j = e(72).set,
      T = e(91),
      S = e(92),
      E = e(93),
      P = e(75),
      k = e(94),
      A = e(26),
      R = e(44),
      I = e(3),
      L = e(95),
      M = I('species'),
      C = 'Promise',
      U = A.get,
      F = A.set,
      D = A.getterFor(C),
      V = p,
      N = s.TypeError,
      B = s.document,
      G = s.process,
      q = f('fetch'),
      W = P.f,
      H = W,
      K = 'process' == b(G),
      Y = !!(B && B.createEvent && s.dispatchEvent),
      z = R(C, function() {
        if (!(x(V) !== String(V))) {
          if (66 === L) return !0
          if (!K && 'function' != typeof PromiseRejectionEvent) return !0
        }
        if (u && !V.prototype.finally) return !0
        if (L >= 51 && /native code/.test(V)) return !1
        var t = V.resolve(1),
          n = function(t) {
            t(
              function() {},
              function() {},
            )
          }
        return (
          ((t.constructor = {})[M] = n), !(t.then(function() {}) instanceof n)
        )
      }),
      X =
        z ||
        !w(function(t) {
          V.all(t).catch(function() {})
        }),
      Z = function(t) {
        var n
        return !(!g(t) || 'function' != typeof (n = t.then)) && n
      },
      Q = function(t, n, e) {
        if (!n.notified) {
          n.notified = !0
          var r = n.reactions
          T(function() {
            for (var o = n.value, i = 1 == n.state, a = 0; r.length > a; ) {
              var c,
                u,
                s,
                f = r[a++],
                p = i ? f.ok : f.fail,
                l = f.resolve,
                v = f.reject,
                h = f.domain
              try {
                p
                  ? (i || (2 === n.rejection && nt(t, n), (n.rejection = 1)),
                    !0 === p
                      ? (c = o)
                      : (h && h.enter(), (c = p(o)), h && (h.exit(), (s = !0))),
                    c === f.promise
                      ? v(N('Promise-chain cycle'))
                      : (u = Z(c))
                      ? u.call(c, l, v)
                      : l(c))
                  : v(o)
              } catch (t) {
                h && !s && h.exit(), v(t)
              }
            }
            ;(n.reactions = []), (n.notified = !1), e && !n.rejection && $(t, n)
          })
        }
      },
      J = function(t, n, e) {
        var r, o
        Y
          ? (((r = B.createEvent('Event')).promise = n),
            (r.reason = e),
            r.initEvent(t, !1, !0),
            s.dispatchEvent(r))
          : (r = { promise: n, reason: e }),
          (o = s['on' + t])
            ? o(r)
            : 'unhandledrejection' === t && E('Unhandled promise rejection', e)
      },
      $ = function(t, n) {
        j.call(s, function() {
          var e,
            r = n.value
          if (
            tt(n) &&
            ((e = k(function() {
              K
                ? G.emit('unhandledRejection', r, t)
                : J('unhandledrejection', t, r)
            })),
            (n.rejection = K || tt(n) ? 2 : 1),
            e.error)
          )
            throw e.value
        })
      },
      tt = function(t) {
        return 1 !== t.rejection && !t.parent
      },
      nt = function(t, n) {
        j.call(s, function() {
          K ? G.emit('rejectionHandled', t) : J('rejectionhandled', t, n.value)
        })
      },
      et = function(t, n, e, r) {
        return function(o) {
          t(n, e, o, r)
        }
      },
      rt = function(t, n, e, r) {
        n.done ||
          ((n.done = !0),
          r && (n = r),
          (n.value = e),
          (n.state = 2),
          Q(t, n, !0))
      },
      ot = function(t, n, e, r) {
        if (!n.done) {
          ;(n.done = !0), r && (n = r)
          try {
            if (t === e) throw N("Promise can't be resolved itself")
            var o = Z(e)
            o
              ? T(function() {
                  var r = { done: !1 }
                  try {
                    o.call(e, et(ot, t, r, n), et(rt, t, r, n))
                  } catch (e) {
                    rt(t, r, e, n)
                  }
                })
              : ((n.value = e), (n.state = 1), Q(t, n, !1))
          } catch (e) {
            rt(t, { done: !1 }, e, n)
          }
        }
      }
    z &&
      ((V = function(t) {
        m(this, V, C), y(t), r.call(this)
        var n = U(this)
        try {
          t(et(ot, this, n), et(rt, this, n))
        } catch (t) {
          rt(this, n, t)
        }
      }),
      ((r = function(t) {
        F(this, {
          type: C,
          done: !1,
          notified: !1,
          parent: !1,
          reactions: [],
          rejection: !1,
          state: 0,
          value: void 0,
        })
      }).prototype = v(V.prototype, {
        then: function(t, n) {
          var e = D(this),
            r = W(O(this, V))
          return (
            (r.ok = 'function' != typeof t || t),
            (r.fail = 'function' == typeof n && n),
            (r.domain = K ? G.domain : void 0),
            (e.parent = !0),
            e.reactions.push(r),
            0 != e.state && Q(this, e, !1),
            r.promise
          )
        },
        catch: function(t) {
          return this.then(void 0, t)
        },
      })),
      (o = function() {
        var t = new r(),
          n = U(t)
        ;(this.promise = t),
          (this.resolve = et(ot, t, n)),
          (this.reject = et(rt, t, n))
      }),
      (P.f = W = function(t) {
        return t === V || t === i ? new o(t) : H(t)
      }),
      u ||
        'function' != typeof p ||
        ((a = p.prototype.then),
        l(
          p.prototype,
          'then',
          function(t, n) {
            var e = this
            return new V(function(t, n) {
              a.call(e, t, n)
            }).then(t, n)
          },
          { unsafe: !0 },
        ),
        'function' == typeof q &&
          c(
            { global: !0, enumerable: !0, forced: !0 },
            {
              fetch: function(t) {
                return S(V, q.apply(s, arguments))
              },
            },
          ))),
      c({ global: !0, wrap: !0, forced: z }, { Promise: V }),
      h(V, C, !1, !0),
      d(C),
      (i = f(C)),
      c(
        { target: C, stat: !0, forced: z },
        {
          reject: function(t) {
            var n = W(this)
            return n.reject.call(void 0, t), n.promise
          },
        },
      ),
      c(
        { target: C, stat: !0, forced: u || z },
        {
          resolve: function(t) {
            return S(u && this === i ? V : this, t)
          },
        },
      ),
      c(
        { target: C, stat: !0, forced: X },
        {
          all: function(t) {
            var n = this,
              e = W(n),
              r = e.resolve,
              o = e.reject,
              i = k(function() {
                var e = y(n.resolve),
                  i = [],
                  a = 0,
                  c = 1
                _(t, function(t) {
                  var u = a++,
                    s = !1
                  i.push(void 0),
                    c++,
                    e.call(n, t).then(function(t) {
                      s || ((s = !0), (i[u] = t), --c || r(i))
                    }, o)
                }),
                  --c || r(i)
              })
            return i.error && o(i.value), e.promise
          },
          race: function(t) {
            var n = this,
              e = W(n),
              r = e.reject,
              o = k(function() {
                var o = y(n.resolve)
                _(t, function(t) {
                  o.call(n, t).then(e.resolve, r)
                })
              })
            return o.error && r(o.value), e.promise
          },
        },
      )
  },
  function(t, n, e) {
    var r = e(0)
    t.exports = r.Promise
  },
  function(t, n, e) {
    var r = e(18)
    t.exports = function(t, n, e) {
      for (var o in n) r(t, o, n[o], e)
      return t
    }
  },
  function(t, n, e) {
    'use strict'
    var r = e(13),
      o = e(9),
      i = e(3),
      a = e(6),
      c = i('species')
    t.exports = function(t) {
      var n = r(t),
        e = o.f
      a &&
        n &&
        !n[c] &&
        e(n, c, {
          configurable: !0,
          get: function() {
            return this
          },
        })
    }
  },
  function(t, n) {
    t.exports = function(t, n, e) {
      if (!(t instanceof n))
        throw TypeError('Incorrect ' + (e ? e + ' ' : '') + 'invocation')
      return t
    }
  },
  function(t, n, e) {
    var r = e(4),
      o = e(84),
      i = e(43),
      a = e(71),
      c = e(85),
      u = e(88),
      s = function(t, n) {
        ;(this.stopped = t), (this.result = n)
      }
    ;(t.exports = function(t, n, e, f, p) {
      var l,
        v,
        h,
        d,
        g,
        y,
        m,
        b = a(n, e, f ? 2 : 1)
      if (p) l = t
      else {
        if ('function' != typeof (v = c(t)))
          throw TypeError('Target is not iterable')
        if (o(v)) {
          for (h = 0, d = i(t.length); d > h; h++)
            if ((g = f ? b(r((m = t[h]))[0], m[1]) : b(t[h])) && g instanceof s)
              return g
          return new s(!1)
        }
        l = v.call(t)
      }
      for (y = l.next; !(m = y.call(l)).done; )
        if ('object' == typeof (g = u(l, b, m.value, f)) && g && g instanceof s)
          return g
      return new s(!1)
    }).stop = function(t) {
      return new s(!0, t)
    }
  },
  function(t, n, e) {
    var r = e(3),
      o = e(11),
      i = r('iterator'),
      a = Array.prototype
    t.exports = function(t) {
      return void 0 !== t && (o.Array === t || a[i] === t)
    }
  },
  function(t, n, e) {
    var r = e(86),
      o = e(11),
      i = e(3)('iterator')
    t.exports = function(t) {
      if (null != t) return t[i] || t['@@iterator'] || o[r(t)]
    }
  },
  function(t, n, e) {
    var r = e(87),
      o = e(17),
      i = e(3)('toStringTag'),
      a =
        'Arguments' ==
        o(
          (function() {
            return arguments
          })(),
        )
    t.exports = r
      ? o
      : function(t) {
          var n, e, r
          return void 0 === t
            ? 'Undefined'
            : null === t
            ? 'Null'
            : 'string' ==
              typeof (e = (function(t, n) {
                try {
                  return t[n]
                } catch (t) {}
              })((n = Object(t)), i))
            ? e
            : a
            ? o(n)
            : 'Object' == (r = o(n)) && 'function' == typeof n.callee
            ? 'Arguments'
            : r
        }
  },
  function(t, n, e) {
    var r = {}
    ;(r[e(3)('toStringTag')] = 'z'), (t.exports = '[object z]' === String(r))
  },
  function(t, n, e) {
    var r = e(4)
    t.exports = function(t, n, e, o) {
      try {
        return o ? n(r(e)[0], e[1]) : n(e)
      } catch (n) {
        var i = t.return
        throw (void 0 !== i && r(i.call(t)), n)
      }
    }
  },
  function(t, n, e) {
    var r = e(3)('iterator'),
      o = !1
    try {
      var i = 0,
        a = {
          next: function() {
            return { done: !!i++ }
          },
          return: function() {
            o = !0
          },
        }
      ;(a[r] = function() {
        return this
      }),
        Array.from(a, function() {
          throw 2
        })
    } catch (t) {}
    t.exports = function(t, n) {
      if (!n && !o) return !1
      var e = !1
      try {
        var i = {}
        ;(i[r] = function() {
          return {
            next: function() {
              return { done: (e = !0) }
            },
          }
        }),
          t(i)
      } catch (t) {}
      return e
    }
  },
  function(t, n, e) {
    var r = e(4),
      o = e(45),
      i = e(3)('species')
    t.exports = function(t, n) {
      var e,
        a = r(t).constructor
      return void 0 === a || null == (e = r(a)[i]) ? n : o(e)
    }
  },
  function(t, n, e) {
    var r,
      o,
      i,
      a,
      c,
      u,
      s,
      f,
      p = e(0),
      l = e(23).f,
      v = e(17),
      h = e(72).set,
      d = e(73),
      g = p.MutationObserver || p.WebKitMutationObserver,
      y = p.process,
      m = p.Promise,
      b = 'process' == v(y),
      x = l(p, 'queueMicrotask'),
      _ = x && x.value
    _ ||
      ((r = function() {
        var t, n
        for (b && (t = y.domain) && t.exit(); o; ) {
          ;(n = o.fn), (o = o.next)
          try {
            n()
          } catch (t) {
            throw (o ? a() : (i = void 0), t)
          }
        }
        ;(i = void 0), t && t.enter()
      }),
      b
        ? (a = function() {
            y.nextTick(r)
          })
        : g && !d
        ? ((c = !0),
          (u = document.createTextNode('')),
          new g(r).observe(u, { characterData: !0 }),
          (a = function() {
            u.data = c = !c
          }))
        : m && m.resolve
        ? ((s = m.resolve(void 0)),
          (f = s.then),
          (a = function() {
            f.call(s, r)
          }))
        : (a = function() {
            h.call(p, r)
          })),
      (t.exports =
        _ ||
        function(t) {
          var n = { fn: t, next: void 0 }
          i && (i.next = n), o || ((o = n), a()), (i = n)
        })
  },
  function(t, n, e) {
    var r = e(4),
      o = e(7),
      i = e(75)
    t.exports = function(t, n) {
      if ((r(t), o(n) && n.constructor === t)) return n
      var e = i.f(t)
      return (0, e.resolve)(n), e.promise
    }
  },
  function(t, n, e) {
    var r = e(0)
    t.exports = function(t, n) {
      var e = r.console
      e && e.error && (1 === arguments.length ? e.error(t) : e.error(t, n))
    }
  },
  function(t, n) {
    t.exports = function(t) {
      try {
        return { error: !1, value: t() }
      } catch (t) {
        return { error: !0, value: t }
      }
    }
  },
  function(t, n, e) {
    var r,
      o,
      i = e(0),
      a = e(74),
      c = i.process,
      u = c && c.versions,
      s = u && u.v8
    s
      ? (o = (r = s.split('.'))[0] + r[1])
      : a &&
        (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) &&
        (r = a.match(/Chrome\/(\d+)/)) &&
        (o = r[1]),
      (t.exports = o && +o)
  },
  function(t, n, e) {
    var r = e(29),
      o = e(97).entries
    r(
      { target: 'Object', stat: !0 },
      {
        entries: function(t) {
          return o(t)
        },
      },
    )
  },
  function(t, n, e) {
    var r = e(6),
      o = e(47),
      i = e(10),
      a = e(42).f,
      c = function(t) {
        return function(n) {
          for (var e, c = i(n), u = o(c), s = u.length, f = 0, p = []; s > f; )
            (e = u[f++]), (r && !a.call(c, e)) || p.push(t ? [e, c[e]] : c[e])
          return p
        }
      }
    t.exports = { entries: c(!0), values: c(!1) }
  },
  function(t, n) {
    t.exports = function(t) {
      if (Array.isArray(t)) return t
    }
  },
  function(t, n) {
    t.exports = function(t, n) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
        var e = [],
          r = !0,
          o = !1,
          i = void 0
        try {
          for (
            var a, c = t[Symbol.iterator]();
            !(r = (a = c.next()).done) &&
            (e.push(a.value), !n || e.length !== n);
            r = !0
          );
        } catch (t) {
          ;(o = !0), (i = t)
        } finally {
          try {
            r || null == c.return || c.return()
          } finally {
            if (o) throw i
          }
        }
        return e
      }
    }
  },
  function(t, n) {
    t.exports = function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      )
    }
  },
  ,
  ,
  ,
  ,
  ,
  ,
  ,
  function(t, n, e) {
    'use strict'
    e.r(n)
    var r,
      o,
      i = e(28),
      a = e.n(i),
      c = e(49),
      u = e.n(c),
      s = e(14),
      f = e.n(s),
      p = e(15),
      l = e.n(p),
      v = e(1),
      h = e.n(v)
    !(function(t) {
      ;(t.BASE = 'base'), (t.TAG = 'tag')
    })(o || (o = {}))
    var d =
        ((r = {}),
        a()(
          r,
          o.BASE,
          '\n    <div class="'
            .concat(h.a['input-tags'], '">\n      <div class="')
            .concat(
              h.a['input-tags__base-input'],
              '">\n        {{baseInput}}\n      </div>\n      <div class="',
            )
            .concat(h.a['input-tags__error'], '">\n        <div class="')
            .concat(
              h.a['input-tags__error-message'],
              '">\n          {{errorMessage}}\n        </div>\n      </div>\n      <div class="',
            )
            .concat(h.a['input-tags__scroll'], '">\n        <div class="')
            .concat(h.a['input-tags__controls'], '">\n          <div class="')
            .concat(
              h.a['input-tags__input'],
              '">\n            <input type="text" placeholder="{{placeholder}}"/>\n          </div>\n        </div>\n      </div>\n    </div>\n    ',
            ),
        ),
        a()(
          r,
          o.TAG,
          '\n    <div class="'
            .concat(h.a['input-tags__tag'], '">\n        <div class="')
            .concat(
              h.a['input-tags__tag-content'],
              '">{{content}}</div>\n        <div class="',
            )
            .concat(
              h.a['input-tags__tag-close'],
              '"></div>\n      </div>\n    ',
            ),
        ),
        r),
      g = function(t, n) {
        var e = d[t]
        return (
          Object.entries(n).forEach(function(t) {
            var n = u()(t, 2),
              r = n[0],
              o = n[1]
            e = e.replace('{{'.concat(r, '}}'), o)
          }),
          e
        )
      },
      y = function(t) {
        var n = document.createElement('div')
        return (n.innerHTML = t.trim()), n.firstChild
      },
      m = (function() {
        function t(n, e) {
          var r = this
          f()(this, t),
            (this.ref = void 0),
            (this.options = void 0),
            (this.onKeyPress = function(t) {
              ;['Enter', ','].some(function(n) {
                return n === t.key
              }) && (r.onValueUpdate(r.ref.value), t.preventDefault())
            }),
            (this.onFocusOut = function() {
              var t = r.ref.value.trim()
              r.onValueUpdate(t)
            }),
            (this.onPaste = function(t) {
              var n = t.clipboardData || window.clipboardData
              if (n) {
                var e = n
                  .getData('Text')
                  .split(',')
                  .map(function(t) {
                    return t.trim()
                  })
                e.length && (e.forEach(r.options.onAddTag), t.preventDefault())
              }
            }),
            (this.ref = n),
            (this.options = e),
            this.registerEvents()
        }
        return (
          l()(t, [
            {
              key: 'onValueUpdate',
              value: function(t) {
                var n = t.trim()
                return (this.ref.value = ''), n && this.options.onAddTag(n), !!n
              },
            },
            {
              key: 'registerEvents',
              value: function() {
                this.ref.addEventListener('keypress', this.onKeyPress),
                  this.ref.addEventListener('paste', this.onPaste),
                  this.ref.addEventListener('focusout', this.onFocusOut)
              },
            },
          ]),
          t
        )
      })(),
      b = (function() {
        function t(n, e) {
          var r = this
          f()(this, t),
            (this.targetRef = void 0),
            (this.containerRef = void 0),
            (this.scrollRef = void 0),
            (this.controlsRef = void 0),
            (this.inputContainerRef = void 0),
            (this.errorRef = void 0),
            (this.input = void 0),
            (this.options = void 0),
            (this.renderTag = function(t) {
              r.controlsRef.insertBefore(t.render(), r.inputContainerRef)
            }),
            (this.targetRef = n),
            (this.options = e),
            this.render(),
            this.setRefs(),
            this.initInput(),
            this.registerEvents()
        }
        return (
          l()(t, [
            {
              key: 'render',
              value: function() {
                var t
                if (this.containerRef) return this.containerRef
                var n = g(o.BASE, {
                    baseInput: this.targetRef.outerHTML,
                    errorMessage: this.options.errorMessage,
                    placeholder: this.options.placeholder,
                  }),
                  e = y(n)
                ;(this.containerRef = e),
                  null === (t = this.targetRef.parentNode) ||
                    void 0 === t ||
                    t.replaceChild(this.containerRef, this.targetRef)
              },
            },
            {
              key: 'setRefs',
              value: function() {
                ;(this.scrollRef = this.containerRef.querySelector(
                  '.'.concat(h.a['input-tags__scroll']),
                )),
                  (this.controlsRef = this.containerRef.querySelector(
                    '.'.concat(h.a['input-tags__controls']),
                  )),
                  (this.inputContainerRef = this.containerRef.querySelector(
                    '.'.concat(h.a['input-tags__input']),
                  )),
                  (this.targetRef = this.containerRef.querySelector(
                    '.'.concat(h.a['input-tags__base-input'], ' input'),
                  )),
                  (this.errorRef = this.containerRef.querySelector(
                    '.'.concat(h.a['input-tags__error']),
                  ))
              },
            },
            {
              key: 'initInput',
              value: function() {
                var t = this.inputContainerRef.querySelector('input')
                this.input = new m(t, { onAddTag: this.options.onAddTag })
              },
            },
            {
              key: 'registerEvents',
              value: function() {
                var t = this
                this.controlsRef.addEventListener('click', function(n) {
                  n.currentTarget === n.target && t.input.ref.focus()
                })
              },
            },
            {
              key: 'setError',
              value: function(t) {
                this.errorRef.classList[t ? 'add' : 'remove'](
                  ''.concat(h.a['input-tags__error--show']),
                )
              },
            },
            {
              key: 'renderTags',
              value: function(t) {
                t.forEach(this.renderTag)
              },
            },
          ]),
          t
        )
      })(),
      x = (function() {
        function t(n, e) {
          var r = this
          f()(this, t),
            (this.ref = void 0),
            (this.data = void 0),
            (this.options = void 0),
            (this.onRemove = function() {
              r.ref && r.options.onRemove(r)
            }),
            (this.data = n),
            (this.options = e)
        }
        return (
          l()(t, [
            {
              key: 'registerEvents',
              value: function() {
                this.ref &&
                  this.ref
                    .querySelector('.'.concat(h.a['input-tags__tag-close']))
                    .addEventListener('click', this.onRemove)
              },
            },
            {
              key: 'render',
              value: function() {
                if (this.ref) return this.ref
                var t = g(o.TAG, { content: this.data.content }),
                  n = y(t)
                return (
                  this.data.isValid ||
                    n.classList.add(''.concat(h.a['input-tags__tag--invalid'])),
                  (this.ref = n),
                  this.registerEvents(),
                  this.ref
                )
              },
            },
          ]),
          t
        )
      })()
    function _(t, n) {
      var e = Object.keys(t)
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t)
        n &&
          (r = r.filter(function(n) {
            return Object.getOwnPropertyDescriptor(t, n).enumerable
          })),
          e.push.apply(e, r)
      }
      return e
    }
    function w(t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {}
        n % 2
          ? _(Object(e), !0).forEach(function(n) {
              a()(t, n, e[n])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e))
          : _(Object(e)).forEach(function(n) {
              Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
            })
      }
      return t
    }
    var O = (function() {
      function t(n, e) {
        var r = this
        if (
          (f()(this, t),
          (this.tags = []),
          (this.updateListeners = new Map()),
          (this.container = void 0),
          (this.options = {
            tagValidator: /\S+@\S+\.\S+/,
            placeholder: 'add more people...',
            errorMessage:
              'emails-input which should be implemented as a reusable component',
          }),
          (this.removeTag = function(t) {
            var n
            ;(null === (n = t.ref) || void 0 === n ? void 0 : n.parentNode) &&
              t.ref.parentNode.removeChild(t.ref),
              (r.tags = r.tags.filter(function(n) {
                return n !== t
              })),
              r.onError(),
              r.setInputValueTags(),
              r.dispatchUpdateListener()
          }),
          (this.createTag = function(t) {
            var n = { content: t, isValid: r.validateTag(t) },
              e = new x(n, { onRemove: r.removeTag })
            return r.tags.push(e), e
          }),
          (this.onAddTag = function(t) {
            var n = r.createTag(t)
            r.container.renderTag(n),
              r.onError(),
              r.setInputValueTags(),
              r.dispatchUpdateListener()
            var e = r.container.scrollRef
            e.scrollTop = e.scrollHeight - e.clientHeight
          }),
          !this.checkTarget(n))
        )
          throw new Error('Invalid tag name')
        e &&
          ((this.options = Object.entries(e).reduce(function(t, n) {
            var e = u()(n, 2),
              o = e[0],
              i = e[1]
            return i && o in r.options ? w({}, t, a()({}, o, i)) : t
          }, {})),
          Object.assign(this.options, e)),
          this.renderContainer(n),
          this.fillTags(),
          this.onError()
      }
      return (
        l()(t, [
          {
            key: 'fillTags',
            value: function() {
              this.inputValueTags.forEach(this.createTag), this.renderTags()
            },
          },
          {
            key: 'checkTarget',
            value: function(t) {
              return 'INPUT' === t.tagName && 'text' === t.getAttribute('type')
            },
          },
          {
            key: 'onError',
            value: function() {
              this.container.setError(this.hasError)
            },
          },
          {
            key: 'setInputValueTags',
            value: function() {
              var t = this.tags
                .map(function(t) {
                  return t.data.content
                })
                .join(',')
              this.container.targetRef.value = t
            },
          },
          {
            key: 'validateTag',
            value: function(t) {
              return this.options.tagValidator.test(t)
            },
          },
          {
            key: 'renderContainer',
            value: function(t) {
              this.container = new b(t, {
                errorMessage: this.options.errorMessage,
                placeholder: this.options.placeholder,
                onAddTag: this.onAddTag,
              })
            },
          },
          {
            key: 'renderTags',
            value: function() {
              this.container.renderTags(this.tags)
            },
          },
          {
            key: 'dispatchUpdateListener',
            value: function() {
              var t = this.getTags()
              this.updateListeners.forEach(function(n) {
                return n(t)
              })
            },
          },
          {
            key: 'registerUpdateListener',
            value: function(t) {
              this.updateListeners.set(t, t)
            },
          },
          {
            key: 'removeUpdateListener',
            value: function(t) {
              this.updateListeners.delete(t)
            },
          },
          {
            key: 'getTags',
            value: function() {
              return this.tags.map(function(t) {
                return w({}, t.data)
              })
            },
          },
          {
            key: 'setTag',
            value: function(t) {
              this.onAddTag(t)
            },
          },
          {
            key: 'replaceTags',
            value: function(t) {
              this.tags.forEach(this.removeTag),
                (this.tags = t.map(this.createTag)),
                this.renderTags(),
                this.dispatchUpdateListener()
            },
          },
          {
            key: 'hasError',
            get: function() {
              return this.tags.some(function(t) {
                return !t.data.isValid
              })
            },
          },
          {
            key: 'inputValueTags',
            get: function() {
              return this.container.targetRef.value.split(',').map(function(t) {
                return t.trim()
              })
            },
          },
        ]),
        t
      )
    })()
    window.InputTags = O
  },
])
