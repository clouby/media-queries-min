!(function (e, t) {
  'object' == typeof exports && 'undefined' != typeof module
    ? t(exports, require('react'), require('json2mq'), require('prop-types'))
    : 'function' == typeof define && define.amd
    ? define(['exports', 'react', 'json2mq', 'prop-types'], t)
    : t(
        ((e || self)['media-queries-min'] = {}),
        e.react,
        e.json2Mq,
        e.propTypes
      )
})(this, function (e, t, n, i) {
  function r(e) {
    return e && 'object' == typeof e && 'default' in e ? e : { default: e }
  }
  var u = r(n),
    a = r(i)
  function d() {
    return (d =
      Object.assign ||
      function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t]
          for (var i in n)
            Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i])
        }
        return e
      }).apply(this, arguments)
  }
  var f = {
      xs: u.default({ maxWidth: 576 }),
      sm: u.default({ minWidth: 576 }),
      md: u.default({ minWidth: 768 }),
      lg: u.default({ minWidth: 992 }),
      xl: u.default({ minWidth: 1200 })
    },
    o = { size: 'xs', maxWidth: null, minWidth: null }
  function s(e) {
    var n = t.useMemo(
        function () {
          return window.matchMedia(
            (function (e) {
              var t = (function (e) {
                  return 'string' == typeof e ? d({}, o, { size: e }) : e || o
                })(e),
                n = t.size,
                i = t.minWidth,
                r = t.maxWidth
              if (r || i) {
                var a = {}
                return (
                  r && (a.maxWidth = r), i && (a.minWidth = i), u.default(a)
                )
              }
              return (function (e) {
                return void 0 === e && (e = 'xs'), f[e] || f.xs
              })(n)
            })(e)
          )
        },
        [e]
      ),
      i = t.useState(n.matches),
      r = i[0],
      a = i[1]
    return (
      t.useEffect(
        function () {
          function e(e) {
            a(e.matches)
          }
          return (
            e(n),
            n.addEventListener('change', e),
            function () {
              return n.removeEventListener('change', e)
            }
          )
        },
        [n, a]
      ),
      { matches: r }
    )
  }
  function m(e) {
    var t = e.children,
      n = s({ size: e.size, maxWidth: e.maxWidth, minWidth: e.minWidth })
    return h(Fragment, null, t(n))
  }
  ;(m.propTypes = {
    maxWidth: a.default.oneOfType([a.default.string, a.default.number]),
    minWidth: a.default.oneOfType([a.default.string, a.default.number]),
    size: a.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
  }),
    (m.defaultProps = { size: 'xs' })
  var l = t.memo(m)
  ;(e.MediaQuery = l), (e.useMediaQuery = s)
})
//# sourceMappingURL=media-queries-min.umd.js.map
