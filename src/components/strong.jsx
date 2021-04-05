import React from 'react'

import { SStrong } from './styles/strong'

function Strong({ children, attrs, ...otherProps }) {
  return (
    <SStrong attrs={attrs} {...otherProps}>
      {children}
    </SStrong>
  )
}

export default Strong
