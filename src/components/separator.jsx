import React from 'react'

import { SSeparator } from './styles/separator'

function Separator({ children, attrs, ...otherProps }) {
  return (
    <SSeparator attrs={attrs} {...otherProps} />
  )
}

export default Separator
