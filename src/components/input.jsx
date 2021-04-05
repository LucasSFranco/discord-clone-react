import React from 'react'

import { SInput } from './styles/input'

function Input({ children, attrs, ...otherProps }) {
  return (
    <SInput attrs={attrs}>
      {children}
      <input maxLength='100' {...otherProps} />
    </SInput>
  )
}

export default Input
