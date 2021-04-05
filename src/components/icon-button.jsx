import React from 'react'

import { SIconButton } from './styles/icon-button'

function IconButton({ children, attrs, ...otherProps }) {
  return (
    <SIconButton attrs={attrs} {...otherProps}>
      {children}
    </SIconButton>
  )
}

export default IconButton
