import React from 'react'

import { SButton, SButtonLoader } from './styles/button'

function Button({ loading, children, attrs, ...otherProps }) {
  return (
    <SButton attrs={attrs} {...otherProps}>
      {
        loading ? (
          <SButtonLoader>
            <span /> <span /> <span />
          </SButtonLoader>
        ) : (
          children
        )
      }
    </SButton>
  )
}

export default Button
