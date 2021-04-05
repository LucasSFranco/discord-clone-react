import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { openPopup, selectPopup } from '@store/popup-slice'

import { SContextMenu, SContextMenuItem } from './styles/context-menu'

function ContextMenu({ id, children, attrs, ...otherProps }) {
  const selectedPopup = useSelector(selectPopup)

  const dispatch = useDispatch()

  const contextMenuRef = useRef()

  useEffect(() => {

    const handleClick = (e) => {
      e.stopPropagation()

      const viewport = {
        width: document.body.clientWidth,
        height: document.body.clientHeight
      }
      const mouse = {
        x: e.clientX,
        y: e.clientY
      }

      const { current : contextMenu } = contextMenuRef

      const contextMenuRect = contextMenu.getBoundingClientRect()

      if(mouse.x + contextMenuRect.width >= viewport.width) {
        contextMenu.style.left = `${mouse.x - contextMenuRect.width}px`
      } else {
        contextMenu.style.left = `${mouse.x}px`
      }

      if(mouse.y + contextMenuRect.height >= viewport.height - 12) {
        contextMenu.style.top = `${mouse.y - (mouse.y + contextMenuRect.height - (viewport.height - 12))}px`
      } else {
        contextMenu.style.top = `${mouse.y}px`
      }

      dispatch(openPopup(id))
    }

    const { current : contextMenu } = contextMenuRef
    const { parentElement : trigger } = contextMenu

    trigger.addEventListener('click', handleClick)

    const stopPropagation = (e) => e.stopPropagation()

    contextMenu.addEventListener('click', stopPropagation)

    return () => {
      trigger.removeEventListener('click', handleClick)
      contextMenu.removeEventListener('click', stopPropagation)
    }

  }, [dispatch, id])

  return (
    <SContextMenu
      show={selectedPopup === id}
      ref={contextMenuRef}
      attrs={attrs}
      {...otherProps}
    > {children} </SContextMenu>
  )
}

ContextMenu.Item = function ContextMenuItem({ children, attrs, ...otherProps }) {
  return (
    <SContextMenuItem attrs={attrs} {...otherProps}>
      {children}
    </SContextMenuItem>
  )
}

export default ContextMenu
