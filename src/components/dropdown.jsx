import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { selectPopup } from '@store/popup-slice'

import { SDropdown, SDropdownItem } from './styles/dropdown'

function Dropdown({ id, children, attrs, ...otherProps }) {
  const selectedPopup = useSelector(selectPopup)

  return (
    <SDropdown
      show={selectedPopup === id}
      attrs={attrs}
      {...otherProps}
    > {children} </SDropdown>
  )
}

Dropdown.Item = function DropdownItem({ children, attrs, ...otherProps }) {
  return (
    <SDropdownItem attrs={attrs} {...otherProps}>
      {children}
    </SDropdownItem>
  )
}

export default Dropdown
