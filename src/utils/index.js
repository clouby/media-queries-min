import json2mq from 'json2mq'
import templates from './templates'

const defaultBreakpoint = 'xs'

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

export const getBreakpoint = (size = defaultBreakpoint, keyTemplate) => {
  const breakpoints = templates[keyTemplate]

  const brk = breakpoints[size]

  if (!brk) return breakpoints[defaultBreakpoint]

  return brk
}

export const generateQuery = (value, keyTemplate = 'default') => {
  const { size, minWidth, maxWidth } = parseData(value)

  if (maxWidth || minWidth) {
    const newQuery = {}

    if (maxWidth) newQuery.maxWidth = maxWidth

    if (minWidth) newQuery.minWidth = minWidth

    const result = convertToQuery(newQuery)

    return result
  }

  return getBreakpoint(size, keyTemplate)
}
