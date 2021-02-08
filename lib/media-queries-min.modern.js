import { useMemo as t, useState as n, useEffect as i, memo as e } from 'react'
import r from 'json2mq'
import s from 'prop-types'
function m() {
  return (m =
    Object.assign ||
    function (t) {
      for (var n = 1; n < arguments.length; n++) {
        var i = arguments[n]
        for (var e in i)
          Object.prototype.hasOwnProperty.call(i, e) && (t[e] = i[e])
      }
      return t
    }).apply(this, arguments)
}
const o = {
    xs: r({ maxWidth: 576 }),
    sm: r({ minWidth: 576 }),
    md: r({ minWidth: 768 }),
    lg: r({ minWidth: 992 }),
    xl: r({ minWidth: 1200 })
  },
  d = { size: 'xs', maxWidth: null, minWidth: null }
function a(e) {
  const s = t(
      () =>
        window.matchMedia(
          ((t) => {
            const { size: n, minWidth: i, maxWidth: e } = (function (t) {
              return 'string' == typeof t ? m({}, d, { size: t }) : t || d
            })(t)
            if (e || i) {
              const t = {}
              return e && (t.maxWidth = e), i && (t.minWidth = i), r(t)
            }
            return ((t = 'xs') => o[t] || o.xs)(n)
          })(e)
        ),
      [e]
    ),
    [h, a] = n(s.matches)
  return (
    i(() => {
      function t(t) {
        a(t.matches)
      }
      return (
        t(s),
        s.addEventListener('change', t),
        () => s.removeEventListener('change', t)
      )
    }, [s, a]),
    { matches: h }
  )
}
function c({ children: t, size: n, maxWidth: i, minWidth: e }) {
  const r = a({ size: n, maxWidth: i, minWidth: e })
  return h(Fragment, null, t(r))
}
;(c.propTypes = {
  maxWidth: s.oneOfType([s.string, s.number]),
  minWidth: s.oneOfType([s.string, s.number]),
  size: s.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
}),
  (c.defaultProps = { size: 'xs' })
const u = e(c)
export { u as MediaQuery, a as useMediaQuery }
//# sourceMappingURL=media-queries-min.modern.js.map
