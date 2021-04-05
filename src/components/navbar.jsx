import React from 'react'

import {
  SNavbar,
  SNavbarItem,
  NavbarItemButton,
  NavbarItemPill
} from './styles/navbar'

function Navbar({ children, attrs, ...otherProps }) {
  return (
    <SNavbar attrs={attrs} {...otherProps}>
      {children}
    </SNavbar>
  )
}

Navbar.Item = function NavbarItem({
  src = '',
  alt = '',
  children,
  attrs,
  ...otherProps
}) {
  return (
    <SNavbarItem attrs={attrs} {...otherProps}>
      <NavbarItemButton>
        {
          src ? (
            <img src={src} alt={alt} />
          ) : (
            children
          )
        }
        <NavbarItemPill />
      </NavbarItemButton>
    </SNavbarItem>
  )
}

export default Navbar
