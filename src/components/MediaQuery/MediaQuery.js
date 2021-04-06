import React from 'react'
import { factoryHooks } from './../../hooks/useMediaQuery'
import PropTypes from 'prop-types'

function factoryComponent(template = 'default ') {
  const useMediaQuery = factoryHooks(template)
  function MediaQueryComponent({ children, size, maxWidth, minWidth }) {
    const value = useMediaQuery({ size, maxWidth, minWidth })

    return <React.Fragment>{children(value)}</React.Fragment>
  }

  MediaQueryComponent.propTypes = {
    maxWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    minWidth: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']).isRequired
  }

  MediaQueryComponent.defaultProps = {
    size: 'xs'
  }

  return MediaQueryComponent
}

export const factoryComponents = factoryComponent

export const MediaQuery = React.memo(factoryComponents('default'))
