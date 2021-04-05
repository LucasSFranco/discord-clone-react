import React from 'react'

import { SAvatar } from './styles/avatar'

function Avatar({
  src = '',
  alt = '',
  children,
  attrs,
  ...otherProps
}) {
  return (
    <SAvatar attrs={attrs} {...otherProps}>
      { src && <img src={src} alt={alt} /> }
      {children}
    </SAvatar>
  )
}

export default Avatar
