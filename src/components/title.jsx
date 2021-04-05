import React from 'react'

import { STitle } from './styles/title'

function Title({ children, attrs, ...otherProps }) {
  return (
    <STitle attrs={attrs} {...otherProps}>
      {children}
    </STitle>
  )
}

export default Title
