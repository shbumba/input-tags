!(function(t) {
  var e = {}
  function n(r) {
    if (e[r]) return e[r].exports
    var o = (e[r] = { i: r, l: !1, exports: {} })
    return t[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports
  }
  ;(n.m = t),
    (n.c = e),
    (n.d = function(t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r })
    }),
    (n.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (n.t = function(t, e) {
      if ((1 & e && (t = n(t)), 8 & e)) return t
      if (4 & e && 'object' == typeof t && t && t.__esModule) return t
      var r = Object.create(null)
      if (
        (n.r(r),
        Object.defineProperty(r, 'default', { enumerable: !0, value: t }),
        2 & e && 'string' != typeof t)
      )
        for (var o in t)
          n.d(
            r,
            o,
            function(e) {
              return t[e]
            }.bind(null, o),
          )
      return r
    }),
    (n.n = function(t) {
      var e =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return n.d(e, 'a', e), e
    }),
    (n.o = function(t, e) {
      return Object.prototype.hasOwnProperty.call(t, e)
    }),
    (n.p = ''),
    n((n.s = 44))
})([
  function(t, e, n) {
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
  function(t, e, n) {
    ;(function(e) {
      var n = function(t) {
        return t && t.Math == Math && t
      }
      t.exports =
        n('object' == typeof globalThis && globalThis) ||
        n('object' == typeof window && window) ||
        n('object' == typeof self && self) ||
        n('object' == typeof e && e) ||
        Function('return this')()
    }.call(this, n(49)))
  },
  function(t, e) {
    var n = {}.hasOwnProperty
    t.exports = function(t, e) {
      return n.call(t, e)
    }
  },
  function(t, e) {
    t.exports = function(t, e) {
      if (!(t instanceof e))
        throw new TypeError('Cannot call a class as a function')
    }
  },
  function(t, e) {
    function n(t, e) {
      for (var n = 0; n < e.length; n++) {
        var r = e[n]
        ;(r.enumerable = r.enumerable || !1),
          (r.configurable = !0),
          'value' in r && (r.writable = !0),
          Object.defineProperty(t, r.key, r)
      }
    }
    t.exports = function(t, e, r) {
      return e && n(t.prototype, e), r && n(t, r), t
    }
  },
  function(t, e) {
    t.exports = function(t) {
      try {
        return !!t()
      } catch (t) {
        return !0
      }
    }
  },
  function(t, e, n) {
    var r = n(7),
      o = n(10),
      i = n(17)
    t.exports = r
      ? function(t, e, n) {
          return o.f(t, e, i(1, n))
        }
      : function(t, e, n) {
          return (t[e] = n), t
        }
  },
  function(t, e, n) {
    var r = n(5)
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
  function(t, e) {
    t.exports = function(t, e, n) {
      return (
        e in t
          ? Object.defineProperty(t, e, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (t[e] = n),
        t
      )
    }
  },
  function(t, e, n) {
    var r = n(46),
      o = n(22)
    t.exports = function(t) {
      return r(o(t))
    }
  },
  function(t, e, n) {
    var r = n(7),
      o = n(25),
      i = n(12),
      a = n(27),
      u = Object.defineProperty
    e.f = r
      ? u
      : function(t, e, n) {
          if ((i(t), (e = a(e, !0)), i(n), o))
            try {
              return u(t, e, n)
            } catch (t) {}
          if ('get' in n || 'set' in n)
            throw TypeError('Accessors not supported')
          return 'value' in n && (t[e] = n.value), t
        }
  },
  function(t, e) {
    t.exports = function(t) {
      return 'object' == typeof t ? null !== t : 'function' == typeof t
    }
  },
  function(t, e, n) {
    var r = n(11)
    t.exports = function(t) {
      if (!r(t)) throw TypeError(String(t) + ' is not an object')
      return t
    }
  },
  function(t, e, n) {
    var r = n(1),
      o = n(23),
      i = n(2),
      a = n(28),
      u = n(29),
      s = n(50),
      c = o('wks'),
      f = r.Symbol,
      p = s ? f : (f && f.withoutSetter) || a
    t.exports = function(t) {
      return (
        i(c, t) || (u && i(f, t) ? (c[t] = f[t]) : (c[t] = p('Symbol.' + t))),
        c[t]
      )
    }
  },
  function(t, e, n) {
    var r = n(71),
      o = n(72),
      i = n(73),
      a = n(75)
    t.exports = function(t, e) {
      return r(t) || o(t, e) || i(t, e) || a()
    }
  },
  function(t, e) {
    t.exports = !1
  },
  function(t, e, n) {
    var r = n(1),
      o = n(6)
    t.exports = function(t, e) {
      try {
        o(r, t, e)
      } catch (n) {
        r[t] = e
      }
      return e
    }
  },
  function(t, e) {
    t.exports = function(t, e) {
      return {
        enumerable: !(1 & t),
        configurable: !(2 & t),
        writable: !(4 & t),
        value: e,
      }
    }
  },
  function(t, e) {
    t.exports = {}
  },
  function(t, e) {
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
  function(t, e, n) {
    var r = n(23),
      o = n(28),
      i = r('keys')
    t.exports = function(t) {
      return i[t] || (i[t] = o(t))
    }
  },
  function(t, e) {
    t.exports = {}
  },
  function(t, e) {
    t.exports = function(t) {
      if (null == t) throw TypeError("Can't call method on " + t)
      return t
    }
  },
  function(t, e, n) {
    var r = n(15),
      o = n(24)
    ;(t.exports = function(t, e) {
      return o[t] || (o[t] = void 0 !== e ? e : {})
    })('versions', []).push({
      version: '3.6.5',
      mode: r ? 'pure' : 'global',
      copyright: '© 2020 Denis Pushkarev (zloirock.ru)',
    })
  },
  function(t, e, n) {
    var r = n(1),
      o = n(16),
      i = r['__core-js_shared__'] || o('__core-js_shared__', {})
    t.exports = i
  },
  function(t, e, n) {
    var r = n(7),
      o = n(5),
      i = n(26)
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
  function(t, e, n) {
    var r = n(1),
      o = n(11),
      i = r.document,
      a = o(i) && o(i.createElement)
    t.exports = function(t) {
      return a ? i.createElement(t) : {}
    }
  },
  function(t, e, n) {
    var r = n(11)
    t.exports = function(t, e) {
      if (!r(t)) return t
      var n, o
      if (e && 'function' == typeof (n = t.toString) && !r((o = n.call(t))))
        return o
      if ('function' == typeof (n = t.valueOf) && !r((o = n.call(t)))) return o
      if (!e && 'function' == typeof (n = t.toString) && !r((o = n.call(t))))
        return o
      throw TypeError("Can't convert object to primitive value")
    }
  },
  function(t, e) {
    var n = 0,
      r = Math.random()
    t.exports = function(t) {
      return (
        'Symbol(' +
        String(void 0 === t ? '' : t) +
        ')_' +
        (++n + r).toString(36)
      )
    }
  },
  function(t, e, n) {
    var r = n(5)
    t.exports =
      !!Object.getOwnPropertySymbols &&
      !r(function() {
        return !String(Symbol())
      })
  },
  function(t, e, n) {
    var r,
      o = n(12),
      i = n(51),
      a = n(19),
      u = n(18),
      s = n(55),
      c = n(26),
      f = n(20),
      p = f('IE_PROTO'),
      l = function() {},
      v = function(t) {
        return '<script>' + t + '</script>'
      },
      h = function() {
        try {
          r = document.domain && new ActiveXObject('htmlfile')
        } catch (t) {}
        var t, e
        h = r
          ? (function(t) {
              t.write(v('')), t.close()
              var e = t.parentWindow.Object
              return (t = null), e
            })(r)
          : (((e = c('iframe')).style.display = 'none'),
            s.appendChild(e),
            (e.src = String('javascript:')),
            (t = e.contentWindow.document).open(),
            t.write(v('document.F=Object')),
            t.close(),
            t.F)
        for (var n = a.length; n--; ) delete h.prototype[a[n]]
        return h()
      }
    ;(u[p] = !0),
      (t.exports =
        Object.create ||
        function(t, e) {
          var n
          return (
            null !== t
              ? ((l.prototype = o(t)),
                (n = new l()),
                (l.prototype = null),
                (n[p] = t))
              : (n = h()),
            void 0 === e ? n : i(n, e)
          )
        })
  },
  function(t, e, n) {
    var r = n(32),
      o = n(19)
    t.exports =
      Object.keys ||
      function(t) {
        return r(t, o)
      }
  },
  function(t, e, n) {
    var r = n(2),
      o = n(9),
      i = n(52).indexOf,
      a = n(18)
    t.exports = function(t, e) {
      var n,
        u = o(t),
        s = 0,
        c = []
      for (n in u) !r(a, n) && r(u, n) && c.push(n)
      for (; e.length > s; ) r(u, (n = e[s++])) && (~i(c, n) || c.push(n))
      return c
    }
  },
  function(t, e) {
    var n = Math.ceil,
      r = Math.floor
    t.exports = function(t) {
      return isNaN((t = +t)) ? 0 : (t > 0 ? r : n)(t)
    }
  },
  function(t, e, n) {
    var r = n(56),
      o = n(1),
      i = function(t) {
        return 'function' == typeof t ? t : void 0
      }
    t.exports = function(t, e) {
      return arguments.length < 2
        ? i(r[t]) || i(o[t])
        : (r[t] && r[t][e]) || (o[t] && o[t][e])
    }
  },
  function(t, e, n) {
    var r,
      o,
      i,
      a = n(57),
      u = n(1),
      s = n(11),
      c = n(6),
      f = n(2),
      p = n(20),
      l = n(18),
      v = u.WeakMap
    if (a) {
      var h = new v(),
        d = h.get,
        g = h.has,
        y = h.set
      ;(r = function(t, e) {
        return y.call(h, t, e), e
      }),
        (o = function(t) {
          return d.call(h, t) || {}
        }),
        (i = function(t) {
          return g.call(h, t)
        })
    } else {
      var b = p('state')
      ;(l[b] = !0),
        (r = function(t, e) {
          return c(t, b, e), e
        }),
        (o = function(t) {
          return f(t, b) ? t[b] : {}
        }),
        (i = function(t) {
          return f(t, b)
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
        return function(e) {
          var n
          if (!s(e) || (n = o(e)).type !== t)
            throw TypeError('Incompatible receiver, ' + t + ' required')
          return n
        }
      },
    }
  },
  function(t, e, n) {
    var r = n(24),
      o = Function.toString
    'function' != typeof r.inspectSource &&
      (r.inspectSource = function(t) {
        return o.call(t)
      }),
      (t.exports = r.inspectSource)
  },
  function(t, e, n) {
    var r = n(1),
      o = n(38).f,
      i = n(6),
      a = n(40),
      u = n(16),
      s = n(59),
      c = n(63)
    t.exports = function(t, e) {
      var n,
        f,
        p,
        l,
        v,
        h = t.target,
        d = t.global,
        g = t.stat
      if ((n = d ? r : g ? r[h] || u(h, {}) : (r[h] || {}).prototype))
        for (f in e) {
          if (
            ((l = e[f]),
            (p = t.noTargetGet ? (v = o(n, f)) && v.value : n[f]),
            !c(d ? f : h + (g ? '.' : '#') + f, t.forced) && void 0 !== p)
          ) {
            if (typeof l == typeof p) continue
            s(l, p)
          }
          ;(t.sham || (p && p.sham)) && i(l, 'sham', !0), a(n, f, l, t)
        }
    }
  },
  function(t, e, n) {
    var r = n(7),
      o = n(39),
      i = n(17),
      a = n(9),
      u = n(27),
      s = n(2),
      c = n(25),
      f = Object.getOwnPropertyDescriptor
    e.f = r
      ? f
      : function(t, e) {
          if (((t = a(t)), (e = u(e, !0)), c))
            try {
              return f(t, e)
            } catch (t) {}
          if (s(t, e)) return i(!o.f.call(t, e), t[e])
        }
  },
  function(t, e, n) {
    'use strict'
    var r = {}.propertyIsEnumerable,
      o = Object.getOwnPropertyDescriptor,
      i = o && !r.call({ 1: 2 }, 1)
    e.f = i
      ? function(t) {
          var e = o(this, t)
          return !!e && e.enumerable
        }
      : r
  },
  function(t, e, n) {
    var r = n(1),
      o = n(6),
      i = n(2),
      a = n(16),
      u = n(36),
      s = n(35),
      c = s.get,
      f = s.enforce,
      p = String(String).split('String')
    ;(t.exports = function(t, e, n, u) {
      var s = !!u && !!u.unsafe,
        c = !!u && !!u.enumerable,
        l = !!u && !!u.noTargetGet
      'function' == typeof n &&
        ('string' != typeof e || i(n, 'name') || o(n, 'name', e),
        (f(n).source = p.join('string' == typeof e ? e : ''))),
        t !== r
          ? (s ? !l && t[e] && (c = !0) : delete t[e],
            c ? (t[e] = n) : o(t, e, n))
          : c
          ? (t[e] = n)
          : a(e, n)
    })(Function.prototype, 'toString', function() {
      return ('function' == typeof this && c(this).source) || u(this)
    })
  },
  function(t, e, n) {
    'use strict'
    var r,
      o,
      i,
      a = n(42),
      u = n(6),
      s = n(2),
      c = n(13),
      f = n(15),
      p = c('iterator'),
      l = !1
    ;[].keys &&
      ('next' in (i = [].keys())
        ? (o = a(a(i))) !== Object.prototype && (r = o)
        : (l = !0)),
      null == r && (r = {}),
      f ||
        s(r, p) ||
        u(r, p, function() {
          return this
        }),
      (t.exports = { IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: l })
  },
  function(t, e, n) {
    var r = n(2),
      o = n(65),
      i = n(20),
      a = n(66),
      u = i('IE_PROTO'),
      s = Object.prototype
    t.exports = a
      ? Object.getPrototypeOf
      : function(t) {
          return (
            (t = o(t)),
            r(t, u)
              ? t[u]
              : 'function' == typeof t.constructor && t instanceof t.constructor
              ? t.constructor.prototype
              : t instanceof Object
              ? s
              : null
          )
        }
  },
  function(t, e, n) {
    var r = n(10).f,
      o = n(2),
      i = n(13)('toStringTag')
    t.exports = function(t, e, n) {
      t &&
        !o((t = n ? t : t.prototype), i) &&
        r(t, i, { configurable: !0, value: e })
    }
  },
  function(t, e, n) {
    n(45), n(69), (t.exports = n(76))
  },
  function(t, e, n) {
    'use strict'
    var r = n(9),
      o = n(48),
      i = n(21),
      a = n(35),
      u = n(58),
      s = a.set,
      c = a.getterFor('Array Iterator')
    ;(t.exports = u(
      Array,
      'Array',
      function(t, e) {
        s(this, { type: 'Array Iterator', target: r(t), index: 0, kind: e })
      },
      function() {
        var t = c(this),
          e = t.target,
          n = t.kind,
          r = t.index++
        return !e || r >= e.length
          ? ((t.target = void 0), { value: void 0, done: !0 })
          : 'keys' == n
          ? { value: r, done: !1 }
          : 'values' == n
          ? { value: e[r], done: !1 }
          : { value: [r, e[r]], done: !1 }
      },
      'values',
    )),
      (i.Arguments = i.Array),
      o('keys'),
      o('values'),
      o('entries')
  },
  function(t, e, n) {
    var r = n(5),
      o = n(47),
      i = ''.split
    t.exports = r(function() {
      return !Object('z').propertyIsEnumerable(0)
    })
      ? function(t) {
          return 'String' == o(t) ? i.call(t, '') : Object(t)
        }
      : Object
  },
  function(t, e) {
    var n = {}.toString
    t.exports = function(t) {
      return n.call(t).slice(8, -1)
    }
  },
  function(t, e, n) {
    var r = n(13),
      o = n(30),
      i = n(10),
      a = r('unscopables'),
      u = Array.prototype
    null == u[a] && i.f(u, a, { configurable: !0, value: o(null) }),
      (t.exports = function(t) {
        u[a][t] = !0
      })
  },
  function(t, e) {
    var n
    n = (function() {
      return this
    })()
    try {
      n = n || new Function('return this')()
    } catch (t) {
      'object' == typeof window && (n = window)
    }
    t.exports = n
  },
  function(t, e, n) {
    var r = n(29)
    t.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator
  },
  function(t, e, n) {
    var r = n(7),
      o = n(10),
      i = n(12),
      a = n(31)
    t.exports = r
      ? Object.defineProperties
      : function(t, e) {
          i(t)
          for (var n, r = a(e), u = r.length, s = 0; u > s; )
            o.f(t, (n = r[s++]), e[n])
          return t
        }
  },
  function(t, e, n) {
    var r = n(9),
      o = n(53),
      i = n(54),
      a = function(t) {
        return function(e, n, a) {
          var u,
            s = r(e),
            c = o(s.length),
            f = i(a, c)
          if (t && n != n) {
            for (; c > f; ) if ((u = s[f++]) != u) return !0
          } else
            for (; c > f; f++)
              if ((t || f in s) && s[f] === n) return t || f || 0
          return !t && -1
        }
      }
    t.exports = { includes: a(!0), indexOf: a(!1) }
  },
  function(t, e, n) {
    var r = n(33),
      o = Math.min
    t.exports = function(t) {
      return t > 0 ? o(r(t), 9007199254740991) : 0
    }
  },
  function(t, e, n) {
    var r = n(33),
      o = Math.max,
      i = Math.min
    t.exports = function(t, e) {
      var n = r(t)
      return n < 0 ? o(n + e, 0) : i(n, e)
    }
  },
  function(t, e, n) {
    var r = n(34)
    t.exports = r('document', 'documentElement')
  },
  function(t, e, n) {
    var r = n(1)
    t.exports = r
  },
  function(t, e, n) {
    var r = n(1),
      o = n(36),
      i = r.WeakMap
    t.exports = 'function' == typeof i && /native code/.test(o(i))
  },
  function(t, e, n) {
    'use strict'
    var r = n(37),
      o = n(64),
      i = n(42),
      a = n(67),
      u = n(43),
      s = n(6),
      c = n(40),
      f = n(13),
      p = n(15),
      l = n(21),
      v = n(41),
      h = v.IteratorPrototype,
      d = v.BUGGY_SAFARI_ITERATORS,
      g = f('iterator'),
      y = function() {
        return this
      }
    t.exports = function(t, e, n, f, v, b, _) {
      o(n, e, f)
      var m,
        x,
        O,
        T = function(t) {
          if (t === v && k) return k
          if (!d && t in S) return S[t]
          switch (t) {
            case 'keys':
            case 'values':
            case 'entries':
              return function() {
                return new n(this, t)
              }
          }
          return function() {
            return new n(this)
          }
        },
        w = e + ' Iterator',
        j = !1,
        S = t.prototype,
        E = S[g] || S['@@iterator'] || (v && S[v]),
        k = (!d && E) || T(v),
        P = ('Array' == e && S.entries) || E
      if (
        (P &&
          ((m = i(P.call(new t()))),
          h !== Object.prototype &&
            m.next &&
            (p ||
              i(m) === h ||
              (a ? a(m, h) : 'function' != typeof m[g] && s(m, g, y)),
            u(m, w, !0, !0),
            p && (l[w] = y))),
        'values' == v &&
          E &&
          'values' !== E.name &&
          ((j = !0),
          (k = function() {
            return E.call(this)
          })),
        (p && !_) || S[g] === k || s(S, g, k),
        (l[e] = k),
        v)
      )
        if (
          ((x = {
            values: T('values'),
            keys: b ? k : T('keys'),
            entries: T('entries'),
          }),
          _)
        )
          for (O in x) (d || j || !(O in S)) && c(S, O, x[O])
        else r({ target: e, proto: !0, forced: d || j }, x)
      return x
    }
  },
  function(t, e, n) {
    var r = n(2),
      o = n(60),
      i = n(38),
      a = n(10)
    t.exports = function(t, e) {
      for (var n = o(e), u = a.f, s = i.f, c = 0; c < n.length; c++) {
        var f = n[c]
        r(t, f) || u(t, f, s(e, f))
      }
    }
  },
  function(t, e, n) {
    var r = n(34),
      o = n(61),
      i = n(62),
      a = n(12)
    t.exports =
      r('Reflect', 'ownKeys') ||
      function(t) {
        var e = o.f(a(t)),
          n = i.f
        return n ? e.concat(n(t)) : e
      }
  },
  function(t, e, n) {
    var r = n(32),
      o = n(19).concat('length', 'prototype')
    e.f =
      Object.getOwnPropertyNames ||
      function(t) {
        return r(t, o)
      }
  },
  function(t, e) {
    e.f = Object.getOwnPropertySymbols
  },
  function(t, e, n) {
    var r = n(5),
      o = /#|\.prototype\./,
      i = function(t, e) {
        var n = u[a(t)]
        return n == c || (n != s && ('function' == typeof e ? r(e) : !!e))
      },
      a = (i.normalize = function(t) {
        return String(t)
          .replace(o, '.')
          .toLowerCase()
      }),
      u = (i.data = {}),
      s = (i.NATIVE = 'N'),
      c = (i.POLYFILL = 'P')
    t.exports = i
  },
  function(t, e, n) {
    'use strict'
    var r = n(41).IteratorPrototype,
      o = n(30),
      i = n(17),
      a = n(43),
      u = n(21),
      s = function() {
        return this
      }
    t.exports = function(t, e, n) {
      var c = e + ' Iterator'
      return (
        (t.prototype = o(r, { next: i(1, n) })), a(t, c, !1, !0), (u[c] = s), t
      )
    }
  },
  function(t, e, n) {
    var r = n(22)
    t.exports = function(t) {
      return Object(r(t))
    }
  },
  function(t, e, n) {
    var r = n(5)
    t.exports = !r(function() {
      function t() {}
      return (
        (t.prototype.constructor = null),
        Object.getPrototypeOf(new t()) !== t.prototype
      )
    })
  },
  function(t, e, n) {
    var r = n(12),
      o = n(68)
    t.exports =
      Object.setPrototypeOf ||
      ('__proto__' in {}
        ? (function() {
            var t,
              e = !1,
              n = {}
            try {
              ;(t = Object.getOwnPropertyDescriptor(
                Object.prototype,
                '__proto__',
              ).set).call(n, []),
                (e = n instanceof Array)
            } catch (t) {}
            return function(n, i) {
              return r(n), o(i), e ? t.call(n, i) : (n.__proto__ = i), n
            }
          })()
        : void 0)
  },
  function(t, e, n) {
    var r = n(11)
    t.exports = function(t) {
      if (!r(t) && null !== t)
        throw TypeError("Can't set " + String(t) + ' as a prototype')
      return t
    }
  },
  function(t, e, n) {
    var r = n(37),
      o = n(70).entries
    r(
      { target: 'Object', stat: !0 },
      {
        entries: function(t) {
          return o(t)
        },
      },
    )
  },
  function(t, e, n) {
    var r = n(7),
      o = n(31),
      i = n(9),
      a = n(39).f,
      u = function(t) {
        return function(e) {
          for (var n, u = i(e), s = o(u), c = s.length, f = 0, p = []; c > f; )
            (n = s[f++]), (r && !a.call(u, n)) || p.push(t ? [n, u[n]] : u[n])
          return p
        }
      }
    t.exports = { entries: u(!0), values: u(!1) }
  },
  function(t, e) {
    t.exports = function(t) {
      if (Array.isArray(t)) return t
    }
  },
  function(t, e) {
    t.exports = function(t, e) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
        var n = [],
          r = !0,
          o = !1,
          i = void 0
        try {
          for (
            var a, u = t[Symbol.iterator]();
            !(r = (a = u.next()).done) &&
            (n.push(a.value), !e || n.length !== e);
            r = !0
          );
        } catch (t) {
          ;(o = !0), (i = t)
        } finally {
          try {
            r || null == u.return || u.return()
          } finally {
            if (o) throw i
          }
        }
        return n
      }
    }
  },
  function(t, e, n) {
    var r = n(74)
    t.exports = function(t, e) {
      if (t) {
        if ('string' == typeof t) return r(t, e)
        var n = Object.prototype.toString.call(t).slice(8, -1)
        return (
          'Object' === n && t.constructor && (n = t.constructor.name),
          'Map' === n || 'Set' === n
            ? Array.from(n)
            : 'Arguments' === n ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
            ? r(t, e)
            : void 0
        )
      }
    }
  },
  function(t, e) {
    t.exports = function(t, e) {
      ;(null == e || e > t.length) && (e = t.length)
      for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n]
      return r
    }
  },
  function(t, e) {
    t.exports = function() {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      )
    }
  },
  function(t, e, n) {
    'use strict'
    n.r(e)
    var r,
      o,
      i = n(8),
      a = n.n(i),
      u = n(14),
      s = n.n(u),
      c = n(3),
      f = n.n(c),
      p = n(4),
      l = n.n(p),
      v = n(0),
      h = n.n(v)
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
      g = function(t, e) {
        var n = d[t]
        return (
          Object.entries(e).forEach(function(t) {
            var e = s()(t, 2),
              r = e[0],
              o = e[1]
            n = n.replace('{{'.concat(r, '}}'), o)
          }),
          n
        )
      },
      y = function(t) {
        var e = document.createElement('div')
        return (e.innerHTML = t.trim()), e.firstChild
      },
      b = (function() {
        function t(e, n) {
          var r = this
          f()(this, t),
            (this.ref = void 0),
            (this.options = void 0),
            (this.onKeyPress = function(t) {
              ;['Enter', ','].some(function(e) {
                return e === t.key
              }) && (r.onValueUpdate(r.ref.value), t.preventDefault())
            }),
            (this.onFocusOut = function() {
              var t = r.ref.value.trim()
              r.onValueUpdate(t)
            }),
            (this.onPaste = function(t) {
              var e = t.clipboardData || window.clipboardData
              if (e) {
                var n = e
                  .getData('Text')
                  .split(',')
                  .map(function(t) {
                    return t.trim()
                  })
                n.length && (n.forEach(r.options.onAddTag), t.preventDefault())
              }
            }),
            (this.ref = e),
            (this.options = n),
            this.registerEvents()
        }
        return (
          l()(t, [
            {
              key: 'onValueUpdate',
              value: function(t) {
                var e = t.trim()
                return (this.ref.value = ''), e && this.options.onAddTag(e), !!e
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
      _ = (function() {
        function t(e, n) {
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
            (this.targetRef = e),
            (this.options = n),
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
                var e = g(o.BASE, {
                    baseInput: this.targetRef.outerHTML,
                    errorMessage: this.options.errorMessage,
                    placeholder: this.options.placeholder,
                  }),
                  n = y(e)
                ;(this.containerRef = n),
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
                this.input = new b(t, { onAddTag: this.options.onAddTag })
              },
            },
            {
              key: 'registerEvents',
              value: function() {
                var t = this
                this.controlsRef.addEventListener('click', function(e) {
                  e.currentTarget === e.target && t.input.ref.focus()
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
      m = (function() {
        function t(e, n) {
          var r = this
          f()(this, t),
            (this.ref = void 0),
            (this.data = void 0),
            (this.options = void 0),
            (this.onRemove = function() {
              r.ref && r.options.onRemove(r)
            }),
            (this.data = e),
            (this.options = n)
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
                  e = y(t)
                return (
                  this.data.isValid ||
                    e.classList.add(''.concat(h.a['input-tags__tag--invalid'])),
                  (this.ref = e),
                  this.registerEvents(),
                  this.ref
                )
              },
            },
          ]),
          t
        )
      })()
    function x(t, e) {
      var n = Object.keys(t)
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(t)
        e &&
          (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })),
          n.push.apply(n, r)
      }
      return n
    }
    function O(t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = null != arguments[e] ? arguments[e] : {}
        e % 2
          ? x(Object(n), !0).forEach(function(e) {
              a()(t, e, n[e])
            })
          : Object.getOwnPropertyDescriptors
          ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
          : x(Object(n)).forEach(function(e) {
              Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            })
      }
      return t
    }
    var T = (function() {
      function t(e, n) {
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
            var e
            ;(null === (e = t.ref) || void 0 === e ? void 0 : e.parentNode) &&
              t.ref.parentNode.removeChild(t.ref),
              (r.tags = r.tags.filter(function(e) {
                return e !== t
              })),
              r.onError(),
              r.setInputValueTags(),
              r.dispatchUpdateListener()
          }),
          (this.createTag = function(t) {
            var e = { content: t, isValid: r.validateTag(t) },
              n = new m(e, { onRemove: r.removeTag })
            return r.tags.push(n), n
          }),
          (this.onAddTag = function(t) {
            var e = r.createTag(t)
            r.container.renderTag(e),
              r.onError(),
              r.setInputValueTags(),
              r.dispatchUpdateListener()
            var n = r.container.scrollRef
            n.scrollTop = n.scrollHeight - n.clientHeight
          }),
          !this.checkTarget(e))
        )
          throw new Error('Invalid tag name')
        n &&
          ((this.options = Object.entries(n).reduce(function(t, e) {
            var n = s()(e, 2),
              o = n[0],
              i = n[1]
            return i && o in r.options ? O({}, t, a()({}, o, i)) : t
          }, {})),
          Object.assign(this.options, n)),
          this.renderContainer(e),
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
              this.container = new _(t, {
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
              this.updateListeners.forEach(function(e) {
                return e(t)
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
                return O({}, t.data)
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
    window.InputTags = T
  },
])
