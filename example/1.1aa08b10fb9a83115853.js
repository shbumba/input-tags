;(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    101: function(t, e, n) {
      'use strict'
      n.r(e)
      var r,
        i,
        a = n(105),
        s = n.n(a),
        o = n(106),
        c = n.n(o),
        u = n(102),
        f = n.n(u),
        l = n(103),
        h = n.n(l),
        p = n(104),
        d = n.n(p)
      !(function(t) {
        ;(t.BASE = 'base'), (t.TAG = 'tag')
      })(i || (i = {}))
      var g =
          ((r = {}),
          s()(
            r,
            i.BASE,
            '\n    <div class="'
              .concat(d.a['input-tags'], '">\n      <div class="')
              .concat(
                d.a['input-tags__base-input'],
                '">\n        {{baseInput}}\n      </div>\n      <div class="',
              )
              .concat(d.a['input-tags__error'], '">\n        <div class="')
              .concat(
                d.a['input-tags__error-message'],
                '">\n          {{errorMessage}}\n        </div>\n      </div>\n      <div class="',
              )
              .concat(d.a['input-tags__scroll'], '">\n        <div class="')
              .concat(d.a['input-tags__controls'], '">\n          <div class="')
              .concat(
                d.a['input-tags__input'],
                '">\n            <input type="text" placeholder="{{placeholder}}"/>\n          </div>\n        </div>\n      </div>\n    </div>\n    ',
              ),
          ),
          s()(
            r,
            i.TAG,
            '\n    <div class="'
              .concat(d.a['input-tags__tag'], '">\n        <div class="')
              .concat(
                d.a['input-tags__tag-content'],
                '">{{content}}</div>\n        <div class="',
              )
              .concat(
                d.a['input-tags__tag-close'],
                '"></div>\n      </div>\n    ',
              ),
          ),
          r),
        v = function(t, e) {
          var n = g[t]
          return (
            Object.entries(e).forEach(function(t) {
              var e = c()(t, 2),
                r = e[0],
                i = e[1]
              n = n.replace('{{'.concat(r, '}}'), i)
            }),
            n
          )
        },
        _ = function(t) {
          var e = document.createElement('div')
          return (e.innerHTML = t.trim()), e.firstChild
        },
        y = (function() {
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
                  n.length &&
                    (n.forEach(r.options.onAddTag), t.preventDefault())
                }
              }),
              (this.ref = e),
              (this.options = n),
              this.registerEvents()
          }
          return (
            h()(t, [
              {
                key: 'onValueUpdate',
                value: function(t) {
                  var e = t.trim()
                  return (
                    (this.ref.value = ''), e && this.options.onAddTag(e), !!e
                  )
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
        T = (function() {
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
            h()(t, [
              {
                key: 'render',
                value: function() {
                  var t
                  if (this.containerRef) return this.containerRef
                  var e = v(i.BASE, {
                      baseInput: this.targetRef.outerHTML,
                      errorMessage: this.options.errorMessage,
                      placeholder: this.options.placeholder,
                    }),
                    n = _(e)
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
                    '.'.concat(d.a['input-tags__scroll']),
                  )),
                    (this.controlsRef = this.containerRef.querySelector(
                      '.'.concat(d.a['input-tags__controls']),
                    )),
                    (this.inputContainerRef = this.containerRef.querySelector(
                      '.'.concat(d.a['input-tags__input']),
                    )),
                    (this.targetRef = this.containerRef.querySelector(
                      '.'.concat(d.a['input-tags__base-input'], ' input'),
                    )),
                    (this.errorRef = this.containerRef.querySelector(
                      '.'.concat(d.a['input-tags__error']),
                    ))
                },
              },
              {
                key: 'initInput',
                value: function() {
                  var t = this.inputContainerRef.querySelector('input')
                  this.input = new y(t, { onAddTag: this.options.onAddTag })
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
                    ''.concat(d.a['input-tags__error--show']),
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
        b = (function() {
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
            h()(t, [
              {
                key: 'registerEvents',
                value: function() {
                  this.ref &&
                    this.ref
                      .querySelector('.'.concat(d.a['input-tags__tag-close']))
                      .addEventListener('click', this.onRemove)
                },
              },
              {
                key: 'render',
                value: function() {
                  if (this.ref) return this.ref
                  var t = v(i.TAG, { content: this.data.content }),
                    e = _(t)
                  return (
                    this.data.isValid ||
                      e.classList.add(
                        ''.concat(d.a['input-tags__tag--invalid']),
                      ),
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
      function m(t, e) {
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
      function R(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {}
          e % 2
            ? m(Object(n), !0).forEach(function(e) {
                s()(t, e, n[e])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
            : m(Object(n)).forEach(function(e) {
                Object.defineProperty(
                  t,
                  e,
                  Object.getOwnPropertyDescriptor(n, e),
                )
              })
        }
        return t
      }
      var k = (function() {
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
                n = new b(e, { onRemove: r.removeTag })
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
              var n = c()(e, 2),
                i = n[0],
                a = n[1]
              return a && i in r.options ? R({}, t, s()({}, i, a)) : t
            }, {})),
            Object.assign(this.options, n)),
            this.renderContainer(e),
            this.fillTags(),
            this.onError()
        }
        return (
          h()(t, [
            {
              key: 'fillTags',
              value: function() {
                this.inputValueTags.forEach(this.createTag), this.renderTags()
              },
            },
            {
              key: 'checkTarget',
              value: function(t) {
                return (
                  'INPUT' === t.tagName && 'text' === t.getAttribute('type')
                )
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
                this.container = new T(t, {
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
                  return R({}, t.data)
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
                return this.container.targetRef.value
                  .split(',')
                  .map(function(t) {
                    return t.trim()
                  })
              },
            },
          ]),
          t
        )
      })()
      window.InputTags = k
    },
    102: function(t, e) {
      t.exports = function(t, e) {
        if (!(t instanceof e))
          throw new TypeError('Cannot call a class as a function')
      }
    },
    103: function(t, e) {
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
    104: function(t, e, n) {
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
    105: function(t, e) {
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
    106: function(t, e, n) {
      var r = n(107),
        i = n(108),
        a = n(54),
        s = n(109)
      t.exports = function(t, e) {
        return r(t) || i(t, e) || a(t, e) || s()
      }
    },
    107: function(t, e) {
      t.exports = function(t) {
        if (Array.isArray(t)) return t
      }
    },
    108: function(t, e) {
      t.exports = function(t, e) {
        if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
          var n = [],
            r = !0,
            i = !1,
            a = void 0
          try {
            for (
              var s, o = t[Symbol.iterator]();
              !(r = (s = o.next()).done) &&
              (n.push(s.value), !e || n.length !== e);
              r = !0
            );
          } catch (t) {
            ;(i = !0), (a = t)
          } finally {
            try {
              r || null == o.return || o.return()
            } finally {
              if (i) throw a
            }
          }
          return n
        }
      }
    },
    109: function(t, e) {
      t.exports = function() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
    },
  },
])
