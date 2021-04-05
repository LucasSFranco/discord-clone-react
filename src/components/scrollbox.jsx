import React from 'react'

import { SScrollbox } from './styles/scrollbox'

function Scrollbox({ children, attrs, ...otherProps }) {
  return (
    <SScrollbox attrs={attrs} {...otherProps}>
      {children}
    </SScrollbox>
  )
}

export default Scrollbox
