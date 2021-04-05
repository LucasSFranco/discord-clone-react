import React from 'react'

import { SText } from './styles/text'

function Text({ children, attrs, ...otherProps }) {
  return (
    <SText attrs={attrs} {...otherProps}>
      {children}
    </SText>
  )
}

export default Text
