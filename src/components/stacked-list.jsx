import React from 'react'

import {
  SStackedList,
  SStackedListButton,
  SStackedListItem
} from './styles/stacked-list'

function StackedList({ children, attrs, ...otherProps }) {
  return (
    <SStackedList attrs={attrs} {...otherProps}>
      {children}
    </SStackedList>
  )
}

StackedList.Button = function StackedListButton({ children, attrs, ...otherProps }) {
  return (
    <SStackedListButton attrs={attrs} {...otherProps}>
      {children}
    </SStackedListButton>
  )
}

StackedList.Item = function StackedListItem({ children, attrs, ...otherProps }) {
  return (
    <SStackedListItem attrs={attrs} {...otherProps}>
      {children}
    </SStackedListItem>
  )
}

export default StackedList
