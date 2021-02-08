var e = require('react'),
  t = require('json2mq'),
  n = require('prop-types')
function i(e) {
  return e && 'object' == typeof e && 'default' in e ? e : { default: e }
}
var r = i(t),
  u = i(n)
function a() {
  return (a =
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
var d = {
    xs: r.default({ maxWidth: 576 }),
    sm: r.default({ minWidth: 576 }),
    md: r.default({ minWidth: 768 }),
    lg: r.default({ minWidth: 992 }),
    xl: r.default({ minWidth: 1200 })
  },
  f = { size: 'xs', maxWidth: null, minWidth: null }
function s(t) {
  var n = e.useMemo(
      function () {
        return window.matchMedia(
          (function (e) {
            var t = (function (e) {
                return 'string' == typeof e ? a({}, f, { size: e }) : e || f
              })(e),
              n = t.size,
              i = t.minWidth,
              u = t.maxWidth
            if (u || i) {
              var s = {}
              return u && (s.maxWidth = u), i && (s.minWidth = i), r.default(s)
            }
            return (function (e) {
              return void 0 === e && (e = 'xs'), d[e] || d.xs
            })(n)
          })(t)
        )
      },
      [t]
    ),
    i = e.useState(n.matches),
    u = i[0],
    s = i[1]
  return (
    e.useEffect(
      function () {
        function e(e) {
          s(e.matches)
        }
        return (
          e(n),
          n.addEventListener('change', e),
          function () {
            return n.removeEventListener('change', e)
          }
        )
      },
      [n, s]
    ),
    { matches: u }
  )
}
function o(e) {
  var t = e.children,
    n = s({ size: e.size, maxWidth: e.maxWidth, minWidth: e.minWidth })
  return h(Fragment, null, t(n))
}
;(o.propTypes = {
  maxWidth: u.default.oneOfType([u.default.string, u.default.number]),
  minWidth: u.default.oneOfType([u.default.string, u.default.number]),
  size: u.default.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
}),
  (o.defaultProps = { size: 'xs' })
var m = e.memo(o)
;(exports.MediaQuery = m), (exports.useMediaQuery = s)
//# sourceMappingURL=media-queries-min.js.map
