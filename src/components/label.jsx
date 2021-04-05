import React from 'react'

import { SLabel } from './styles/label'

function Label({ children, attrs, ...otherProps }) {
  return (
    <SLabel attrs={attrs} {...otherProps}>
      {children}
    </SLabel>
  )
}

export default Label
