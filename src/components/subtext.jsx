import React from 'react'

import { SSubtext } from './styles/subtext'

function Subtext({ children, attrs, ...otherProps }) {
  return (
    <SSubtext attrs={attrs} {...otherProps}>
      {children}
    </SSubtext>
  )
}

export default Subtext
