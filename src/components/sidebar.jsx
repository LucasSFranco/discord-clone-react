import React from 'react'

import {
  SSidebar,
  SSidebarHeader,
  SSidebarItem,
  SidebarItemButton
} from './styles/sidebar'

function Sidebar({ children, attrs, ...otherProps }) {
  return (
    <SSidebar attrs={attrs} {...otherProps}>
      {children}
    </SSidebar>
  )
}

Sidebar.Header = function SidebarHeader({ children, attrs, ...otherProps }) {
  return (
    <SSidebarHeader attrs={attrs} {...otherProps}>
      {children}
    </SSidebarHeader>
  )
}

Sidebar.Item = function SidebarItem({ children, attrs, ...otherProps }) {
  return (
    <SSidebarItem attrs={attrs} {...otherProps}>
      <SidebarItemButton>
        {children}
      </SidebarItemButton>
    </SSidebarItem>
  )
}

export default Sidebar
