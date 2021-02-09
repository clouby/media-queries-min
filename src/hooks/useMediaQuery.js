import React from 'react'
import { generateQuery } from './../utils'

function useMediaQuery(value) {
  const media = React.useMemo(() => window.matchMedia(generateQuery(value)), [
    value
  ])
  const [matches, setMatches] = React.useState(media.matches)

  React.useEffect(() => {
    // Hamdler function which provide the result about match changes
    function handleChange(query) {
      setMatches(query.matches)
    }

    // Change when the size initialize the new breakpoint
    handleChange(media)

    // Trigger when the value changes on media query
    media.addEventListener('change', handleChange)

    // Remove the listener when the component is unmounted
    return () => media.removeEventListener('change', handleChange)
  }, [media, setMatches])

  return { matches }
}

export { useMediaQuery }
