import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

import { SLink } from './styles/link'

function Link({ to, children, attrs, ...otherProps }) {
  return (
    <SLink as={to && RouterLink} to={to} attrs={attrs} {...otherProps}>
      {children}
    </SLink>
  )
}

export default Link
