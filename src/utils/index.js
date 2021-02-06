import * as json2mq from 'json2mq'

const defaultBreakpoint = 'xs'

const breakpoints = {
  xs: json2mq({ maxWidth: 576 }),
  sm: json2mq({ minWidth: 576 }),
  md: json2mq({ minWidth: 768 }),
  lg: json2mq({ minWidth: 992 }),
  xl: json2mq({ minWidth: 1200 })
}

export const convertToQuery = (query) => json2mq(query)

export const getBreakpoint = (size = defaultBreakpoint) => {
  const brk = breakpoints[size]

  if (!brk) return breakpoints[defaultBreakpoint]

  return brk
}

export const generateQuery = ({ size, maxWidth, minWidth }) => {
  if (maxWidth || minWidth) {
    const newQuery = { maxWidth, minWidth }

    return convertToQuery(newQuery)
  }

  return getBreakpoint(size)
}
