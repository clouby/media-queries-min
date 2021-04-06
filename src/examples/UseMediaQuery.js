import React from 'react'
import { useMediaQuery } from '../hooks/useMediaQuery'

function UseMediaQuery({ size = 'xs' }) {
  const { matches } = useMediaQuery(size)

  return (
    <div title="container">
      <div id="result">{matches ? '🎉' : '😥'}</div>
    </div>
  )
}

export default UseMediaQuery
