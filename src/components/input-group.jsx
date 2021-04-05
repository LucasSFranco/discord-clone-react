import React from 'react'

import { SInputGroup } from './styles/input-group'

function InputGroup({ children, attrs, ...otherProps }) {
  return (
    <SInputGroup attrs={attrs} {...otherProps}>
      {children}
    </SInputGroup>
  )
}

export default InputGroup
