import React from 'react'

import { SImage } from './styles/image'

function Image({ src = '', alt = '', children, attrs, ...otherProps }) {
  return (
    <SImage attrs={attrs} {...otherProps}>
      {
        src && (
          <img src={src} alt={alt} />
        )
      }
    </SImage>
  )
}

export default Image
