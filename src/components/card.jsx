import React from 'react'

import { SCard } from './styles/card'

function Card({ children, attrs, ...otherProps }) {
  return (
    <SCard attrs={attrs} {...otherProps}>
      {children}
    </SCard>
  )
}

export default Card
