import { useEffect, useMemo, useState } from 'react'
import { generateQuery } from 'utils'
import PropTypes from 'prop-types'

function MediaQueries({ children, size, maxWidth, minWidth }) {
  const media = useMemo(
    () => window.matchMedia(generateQuery({ size, maxWidth, minWidth })),
    [size, maxWidth, minWidth]
  )
  const [matches, setMatches] = useState(media.matches)

  useEffect(() => {
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

  return <>{children(matches)}</>
}

MediaQueries.propTypes = {
  maxWidth: PropTypes.string,
  minWidth: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
}

MediaQueries.defaultProps = {
  size: 'xs'
}

export { MediaQueries }
