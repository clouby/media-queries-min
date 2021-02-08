import { memo } from 'react'
import { useMediaQuery } from 'hooks/useMediaQuery'
import PropTypes from 'prop-types'

function MediaQueryComponent({ children, size, maxWidth, minWidth }) {
  const value = useMediaQuery({ size, maxWidth, minWidth })

  return <>{children(value)}</>
}

MediaQueryComponent.propTypes = {
  maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
}

MediaQueryComponent.defaultProps = {
  size: 'xs'
}

const MediaQuery = memo(MediaQueryComponent)

export { MediaQuery, useMediaQuery }
