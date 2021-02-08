import json2mq from 'json2mq'

const defaultBreakpoint = 'xs'

const breakpoints = {
  xs: json2mq({ maxWidth: 576 }),
  sm: json2mq({ minWidth: 576 }),
  md: json2mq({ minWidth: 768 }),
  lg: json2mq({ minWidth: 992 }),
  xl: json2mq({ minWidth: 1200 })
}

const defaultParams = {
  size: defaultBreakpoint,
  maxWidth: null,
  minWidth: null
}

function parseData(value) {
  if (typeof value === 'string') return { ...defaultParams, size: value }

  if (!value) return defaultParams

  return value
}

export const convertToQuery = (query) => json2mq(query)

export const getBreakpoint = (size = defaultBreakpoint) => {
  const brk = breakpoints[size]

  if (!brk) return breakpoints[defaultBreakpoint]

  return brk
}

export const generateQuery = (value) => {
  const { size, minWidth, maxWidth } = parseData(value)

  if (maxWidth || minWidth) {
    const newQuery = {}

    if (maxWidth) newQuery.maxWidth = maxWidth

    if (minWidth) newQuery.minWidth = minWidth

    const result = convertToQuery(newQuery)

    return result
  }

  return getBreakpoint(size)
}
