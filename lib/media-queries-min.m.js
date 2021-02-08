import { useMemo as n, useState as t, useEffect as i, memo as r } from 'react'
import e from 'json2mq'
import m from 'prop-types'
function o() {
  return (o =
    Object.assign ||
    function (n) {
      for (var t = 1; t < arguments.length; t++) {
        var i = arguments[t]
        for (var r in i)
          Object.prototype.hasOwnProperty.call(i, r) && (n[r] = i[r])
      }
      return n
    }).apply(this, arguments)
}
var s = {
    xs: e({ maxWidth: 576 }),
    sm: e({ minWidth: 576 }),
    md: e({ minWidth: 768 }),
    lg: e({ minWidth: 992 }),
    xl: e({ minWidth: 1200 })
  },
  a = { size: 'xs', maxWidth: null, minWidth: null }
function u(r) {
  var m = n(
      function () {
        return window.matchMedia(
          (function (n) {
            var t = (function (n) {
                return 'string' == typeof n ? o({}, a, { size: n }) : n || a
              })(n),
              i = t.size,
              r = t.minWidth,
              m = t.maxWidth
            if (m || r) {
              var u = {}
              return m && (u.maxWidth = m), r && (u.minWidth = r), e(u)
            }
            return (function (n) {
              return void 0 === n && (n = 'xs'), s[n] || s.xs
            })(i)
          })(r)
        )
      },
      [r]
    ),
    u = t(m.matches),
    h = u[0],
    d = u[1]
  return (
    i(
      function () {
        function n(n) {
          d(n.matches)
        }
        return (
          n(m),
          m.addEventListener('change', n),
          function () {
            return m.removeEventListener('change', n)
          }
        )
      },
      [m, d]
    ),
    { matches: h }
  )
}
function d(n) {
  var t = n.children,
    i = u({ size: n.size, maxWidth: n.maxWidth, minWidth: n.minWidth })
  return h(Fragment, null, t(i))
}
;(d.propTypes = {
  maxWidth: m.oneOfType([m.string, m.number]),
  minWidth: m.oneOfType([m.string, m.number]),
  size: m.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
}),
  (d.defaultProps = { size: 'xs' })
var c = r(d)
export { c as MediaQuery, u as useMediaQuery }
//# sourceMappingURL=media-queries-min.m.js.map
