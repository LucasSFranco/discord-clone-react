import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { changeTab, selectTab } from '@store/friend-list-slice'

import { SHeader, SHeaderButton, SHeaderContainer } from './styles/header'

function Header({ children, attrs, ...otherProps }) {
  return (
    <SHeader attrs={attrs} {...otherProps}>
      {children}
    </SHeader>
  )
}

Header.Button = function HeaderButton({ tab, children, attrs, ...otherProps }) {
  const selectedTab = useSelector(selectTab)

  const dispatch = useDispatch()

  const dispatchChangeTab = (tab) => {
    dispatch(changeTab(tab))
  }

  return (
    <SHeaderButton
      selected={selectedTab === tab}
      onClick={() => dispatchChangeTab(tab)}
      {...otherProps}
    > {children} </SHeaderButton>
  )
}

Header.Container = function HeaderContainer({ children, attrs, ...otherProps }) {
  return (
    <SHeaderContainer attrs={attrs} {...otherProps}>
      {children}
    </SHeaderContainer>
  )
}

export default Header
