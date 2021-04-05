import React from 'react'

import { SError } from './styles/error'

function Error({ children, attrs, ...otherProps }) {
  return (
    <SError attrs={attrs} {...otherProps}>
      {children}
    </SError>
  )
}

export default Error
