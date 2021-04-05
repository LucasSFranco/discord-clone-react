import React from 'react'

import { SBox } from './styles/box'

function Box({ forwardRef, children, attrs, ...otherProps }) {
  return (
    <SBox ref={forwardRef} attrs={attrs} {...otherProps}>
      {children}
    </SBox>
  )
}

export default Box
