!(function(t) {
  var r = {}
  function e(n) {
    if (r[n]) return r[n].exports
    var o = (r[n] = { i: n, l: !1, exports: {} })
    return t[n].call(o.exports, o, o.exports, e), (o.l = !0), o.exports
  }
  ;(e.m = t),
    (e.c = r),
    (e.d = function(t, r, n) {
      e.o(t, r) || Object.defineProperty(t, r, { enumerable: !0, get: n })
    }),
    (e.r = function(t) {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(t, '__esModule', { value: !0 })
    }),
    (e.t = function(t, r) {
      if ((1 & r && (t = e(t)), 8 & r)) return t
      if (4 & r && 'object' == typeof t && t && t.__esModule) return t
      var n = Object.create(null)
      if (
        (e.r(n),
        Object.defineProperty(n, 'default', { enumerable: !0, value: t }),
        2 & r && 'string' != typeof t)
      )
        for (var o in t)
          e.d(
            n,
            o,
            function(r) {
              return t[r]
            }.bind(null, o),
          )
      return n
    }),
    (e.n = function(t) {
      var r =
        t && t.__esModule
          ? function() {
              return t.default
            }
          : function() {
              return t
            }
      return e.d(r, 'a', r), r
    }),
    (e.o = function(t, r) {
      return Object.prototype.hasOwnProperty.call(t, r)
    }),
    (e.p = './'),
    e((e.s = 101))
})({
  101: function(t, r, e) {
    e(102), (t.exports = e(103))
  },
  102: function(t, r, e) {
    var n = (function(t) {
      'use strict'
      var r = Object.prototype,
        e = r.hasOwnProperty,
        n = 'function' == typeof Symbol ? Symbol : {},
        o = n.iterator || '@@iterator',
        i = n.asyncIterator || '@@asyncIterator',
        a = n.toStringTag || '@@toStringTag'
      function c(t, r, e, n) {
        var o = r && r.prototype instanceof l ? r : l,
          i = Object.create(o.prototype),
          a = new L(n || [])
        return (
          (i._invoke = (function(t, r, e) {
            var n = 'suspendedStart'
            return function(o, i) {
              if ('executing' === n)
                throw new Error('Generator is already running')
              if ('completed' === n) {
                if ('throw' === o) throw i
                return j()
              }
              for (e.method = o, e.arg = i; ; ) {
                var a = e.delegate
                if (a) {
                  var c = w(a, e)
                  if (c) {
                    if (c === f) continue
                    return c
                  }
                }
                if ('next' === e.method) e.sent = e._sent = e.arg
                else if ('throw' === e.method) {
                  if ('suspendedStart' === n) throw ((n = 'completed'), e.arg)
                  e.dispatchException(e.arg)
                } else 'return' === e.method && e.abrupt('return', e.arg)
                n = 'executing'
                var l = u(t, r, e)
                if ('normal' === l.type) {
                  if (
                    ((n = e.done ? 'completed' : 'suspendedYield'), l.arg === f)
                  )
                    continue
                  return { value: l.arg, done: e.done }
                }
                'throw' === l.type &&
                  ((n = 'completed'), (e.method = 'throw'), (e.arg = l.arg))
              }
            }
          })(t, e, a)),
          i
        )
      }
      function u(t, r, e) {
        try {
          return { type: 'normal', arg: t.call(r, e) }
        } catch (t) {
          return { type: 'throw', arg: t }
        }
      }
      t.wrap = c
      var f = {}
      function l() {}
      function s() {}
      function h() {}
      var p = {}
      p[o] = function() {
        return this
      }
      var d = Object.getPrototypeOf,
        y = d && d(d(E([])))
      y && y !== r && e.call(y, o) && (p = y)
      var v = (h.prototype = l.prototype = Object.create(p))
      function g(t) {
        ;['next', 'throw', 'return'].forEach(function(r) {
          t[r] = function(t) {
            return this._invoke(r, t)
          }
        })
      }
      function m(t, r) {
        var n
        this._invoke = function(o, i) {
          function a() {
            return new r(function(n, a) {
              !(function n(o, i, a, c) {
                var f = u(t[o], t, i)
                if ('throw' !== f.type) {
                  var l = f.arg,
                    s = l.value
                  return s && 'object' == typeof s && e.call(s, '__await')
                    ? r.resolve(s.__await).then(
                        function(t) {
                          n('next', t, a, c)
                        },
                        function(t) {
                          n('throw', t, a, c)
                        },
                      )
                    : r.resolve(s).then(
                        function(t) {
                          ;(l.value = t), a(l)
                        },
                        function(t) {
                          return n('throw', t, a, c)
                        },
                      )
                }
                c(f.arg)
              })(o, i, n, a)
            })
          }
          return (n = n ? n.then(a, a) : a())
        }
      }
      function w(t, r) {
        var e = t.iterator[r.method]
        if (void 0 === e) {
          if (((r.delegate = null), 'throw' === r.method)) {
            if (
              t.iterator.return &&
              ((r.method = 'return'),
              (r.arg = void 0),
              w(t, r),
              'throw' === r.method)
            )
              return f
            ;(r.method = 'throw'),
              (r.arg = new TypeError(
                "The iterator does not provide a 'throw' method",
              ))
          }
          return f
        }
        var n = u(e, t.iterator, r.arg)
        if ('throw' === n.type)
          return (r.method = 'throw'), (r.arg = n.arg), (r.delegate = null), f
        var o = n.arg
        return o
          ? o.done
            ? ((r[t.resultName] = o.value),
              (r.next = t.nextLoc),
              'return' !== r.method && ((r.method = 'next'), (r.arg = void 0)),
              (r.delegate = null),
              f)
            : o
          : ((r.method = 'throw'),
            (r.arg = new TypeError('iterator result is not an object')),
            (r.delegate = null),
            f)
      }
      function b(t) {
        var r = { tryLoc: t[0] }
        1 in t && (r.catchLoc = t[1]),
          2 in t && ((r.finallyLoc = t[2]), (r.afterLoc = t[3])),
          this.tryEntries.push(r)
      }
      function x(t) {
        var r = t.completion || {}
        ;(r.type = 'normal'), delete r.arg, (t.completion = r)
      }
      function L(t) {
        ;(this.tryEntries = [{ tryLoc: 'root' }]),
          t.forEach(b, this),
          this.reset(!0)
      }
      function E(t) {
        if (t) {
          var r = t[o]
          if (r) return r.call(t)
          if ('function' == typeof t.next) return t
          if (!isNaN(t.length)) {
            var n = -1,
              i = function r() {
                for (; ++n < t.length; )
                  if (e.call(t, n)) return (r.value = t[n]), (r.done = !1), r
                return (r.value = void 0), (r.done = !0), r
              }
            return (i.next = i)
          }
        }
        return { next: j }
      }
      function j() {
        return { value: void 0, done: !0 }
      }
      return (
        (s.prototype = v.constructor = h),
        (h.constructor = s),
        (h[a] = s.displayName = 'GeneratorFunction'),
        (t.isGeneratorFunction = function(t) {
          var r = 'function' == typeof t && t.constructor
          return (
            !!r &&
            (r === s || 'GeneratorFunction' === (r.displayName || r.name))
          )
        }),
        (t.mark = function(t) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(t, h)
              : ((t.__proto__ = h), a in t || (t[a] = 'GeneratorFunction')),
            (t.prototype = Object.create(v)),
            t
          )
        }),
        (t.awrap = function(t) {
          return { __await: t }
        }),
        g(m.prototype),
        (m.prototype[i] = function() {
          return this
        }),
        (t.AsyncIterator = m),
        (t.async = function(r, e, n, o, i) {
          void 0 === i && (i = Promise)
          var a = new m(c(r, e, n, o), i)
          return t.isGeneratorFunction(e)
            ? a
            : a.next().then(function(t) {
                return t.done ? t.value : a.next()
              })
        }),
        g(v),
        (v[a] = 'Generator'),
        (v[o] = function() {
          return this
        }),
        (v.toString = function() {
          return '[object Generator]'
        }),
        (t.keys = function(t) {
          var r = []
          for (var e in t) r.push(e)
          return (
            r.reverse(),
            function e() {
              for (; r.length; ) {
                var n = r.pop()
                if (n in t) return (e.value = n), (e.done = !1), e
              }
              return (e.done = !0), e
            }
          )
        }),
        (t.values = E),
        (L.prototype = {
          constructor: L,
          reset: function(t) {
            if (
              ((this.prev = 0),
              (this.next = 0),
              (this.sent = this._sent = void 0),
              (this.done = !1),
              (this.delegate = null),
              (this.method = 'next'),
              (this.arg = void 0),
              this.tryEntries.forEach(x),
              !t)
            )
              for (var r in this)
                't' === r.charAt(0) &&
                  e.call(this, r) &&
                  !isNaN(+r.slice(1)) &&
                  (this[r] = void 0)
          },
          stop: function() {
            this.done = !0
            var t = this.tryEntries[0].completion
            if ('throw' === t.type) throw t.arg
            return this.rval
          },
          dispatchException: function(t) {
            if (this.done) throw t
            var r = this
            function n(e, n) {
              return (
                (a.type = 'throw'),
                (a.arg = t),
                (r.next = e),
                n && ((r.method = 'next'), (r.arg = void 0)),
                !!n
              )
            }
            for (var o = this.tryEntries.length - 1; o >= 0; --o) {
              var i = this.tryEntries[o],
                a = i.completion
              if ('root' === i.tryLoc) return n('end')
              if (i.tryLoc <= this.prev) {
                var c = e.call(i, 'catchLoc'),
                  u = e.call(i, 'finallyLoc')
                if (c && u) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                } else if (c) {
                  if (this.prev < i.catchLoc) return n(i.catchLoc, !0)
                } else {
                  if (!u)
                    throw new Error('try statement without catch or finally')
                  if (this.prev < i.finallyLoc) return n(i.finallyLoc)
                }
              }
            }
          },
          abrupt: function(t, r) {
            for (var n = this.tryEntries.length - 1; n >= 0; --n) {
              var o = this.tryEntries[n]
              if (
                o.tryLoc <= this.prev &&
                e.call(o, 'finallyLoc') &&
                this.prev < o.finallyLoc
              ) {
                var i = o
                break
              }
            }
            i &&
              ('break' === t || 'continue' === t) &&
              i.tryLoc <= r &&
              r <= i.finallyLoc &&
              (i = null)
            var a = i ? i.completion : {}
            return (
              (a.type = t),
              (a.arg = r),
              i
                ? ((this.method = 'next'), (this.next = i.finallyLoc), f)
                : this.complete(a)
            )
          },
          complete: function(t, r) {
            if ('throw' === t.type) throw t.arg
            return (
              'break' === t.type || 'continue' === t.type
                ? (this.next = t.arg)
                : 'return' === t.type
                ? ((this.rval = this.arg = t.arg),
                  (this.method = 'return'),
                  (this.next = 'end'))
                : 'normal' === t.type && r && (this.next = r),
              f
            )
          },
          finish: function(t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r]
              if (e.finallyLoc === t)
                return this.complete(e.completion, e.afterLoc), x(e), f
            }
          },
          catch: function(t) {
            for (var r = this.tryEntries.length - 1; r >= 0; --r) {
              var e = this.tryEntries[r]
              if (e.tryLoc === t) {
                var n = e.completion
                if ('throw' === n.type) {
                  var o = n.arg
                  x(e)
                }
                return o
              }
            }
            throw new Error('illegal catch attempt')
          },
          delegateYield: function(t, r, e) {
            return (
              (this.delegate = { iterator: E(t), resultName: r, nextLoc: e }),
              'next' === this.method && (this.arg = void 0),
              f
            )
          },
        }),
        t
      )
    })(t.exports)
    try {
      regeneratorRuntime = n
    } catch (t) {
      Function('r', 'regeneratorRuntime = r')(n)
    }
  },
  103: function(t, r, e) {
    'use strict'
    e.r(r)
    var n = e(56),
      o = e.n(n),
      i = (e(107), document.getElementById('base-input')),
      a = document.getElementById('add-email'),
      c = document.getElementById('get-email-count')
    if (i) {
      var u = new InputTags(i)
      u.registerUpdateListener(function(t) {
        console.log({ tags: t })
      }),
        a &&
          a.addEventListener('click', function() {
            u.setTag(
              (function() {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : 10,
                  r = t - 2,
                  e = o()(Array(r)).map(function() {
                    return (~~(36 * Math.random())).toString(36)
                  }),
                  n = Math.round(0.33 * r),
                  i = Math.round(0.66 * r) + 1
                return e.splice(n, 0, '@'), e.splice(i, 0, '.'), e.join('')
              })(),
            )
          }),
        c &&
          c.addEventListener('click', function() {
            alert(u.getTags().length)
          })
    }
  },
  104: function(t, r, e) {
    var n = e(20)
    t.exports = function(t) {
      if (Array.isArray(t)) return n(t)
    }
  },
  105: function(t, r) {
    t.exports = function(t) {
      if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
        return Array.from(t)
    }
  },
  106: function(t, r) {
    t.exports = function() {
      throw new TypeError(
        'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
      )
    }
  },
  107: function(t, r, e) {},
  20: function(t, r) {
    t.exports = function(t, r) {
      ;(null == r || r > t.length) && (r = t.length)
      for (var e = 0, n = new Array(r); e < r; e++) n[e] = t[e]
      return n
    }
  },
  33: function(t, r, e) {
    var n = e(20)
    t.exports = function(t, r) {
      if (t) {
        if ('string' == typeof t) return n(t, r)
        var e = Object.prototype.toString.call(t).slice(8, -1)
        return (
          'Object' === e && t.constructor && (e = t.constructor.name),
          'Map' === e || 'Set' === e
            ? Array.from(e)
            : 'Arguments' === e ||
              /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)
            ? n(t, r)
            : void 0
        )
      }
    }
  },
  56: function(t, r, e) {
    var n = e(104),
      o = e(105),
      i = e(33),
      a = e(106)
    t.exports = function(t) {
      return n(t) || o(t) || i(t) || a()
    }
  },
})
