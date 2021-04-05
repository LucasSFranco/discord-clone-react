import React from 'react'

import { SProgressButton } from './styles/progress-button'

function ProgressButton({ children, attrs, ...otherProps }) {
  return (
    <SProgressButton attrs={attrs} {...otherProps}>
      {children}
    </SProgressButton>
  )
}

export default ProgressButton
