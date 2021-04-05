import React from 'react'

import { SSubtitle } from './styles/subtitle'

function Subtitle({ children, attrs, ...otherProps }) {
  return (
    <SSubtitle attrs={attrs} {...otherProps}>
      {children}
    </SSubtitle>
  )
}

export default Subtitle
