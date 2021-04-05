import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { closePanel, selectPanel } from '@store/panel-slice'

import { SPanel, SPanelCloser } from './styles/panel'

import { Times } from '@assets'

function Panel({ id, children, attrs, ...otherProps }) {
  const selectedPanel = useSelector(selectPanel)

  return (
    <SPanel show={selectedPanel === id} attrs={attrs} {...otherProps}>
      {children}
    </SPanel>
  )
}

Panel.Closer = function PanelCloser({ classes, ...otherProps }) {
  const dispatch = useDispatch()
  const dispatchClosePanel = () => {
    dispatch(closePanel())
  }

  return (
    <SPanelCloser
      {...otherProps}
      onClick={dispatchClosePanel}
    > <Times />
    </SPanelCloser>
  )
}

export default Panel
