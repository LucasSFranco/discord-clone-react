import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { closeModal, selectModal } from '@store/modal-slice'

import { SModal, SModalCloser } from './styles/modal'

import { Times } from '@assets'

function Modal({ id, children, attrs, ...otherProps }) {
  const selectedModal = useSelector(selectModal)

  const dispatch = useDispatch()

  const dispatchCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <SModal show={selectedModal === id} attrs={attrs} {...otherProps} onMouseDown={() => dispatchCloseModal()}>
      <main onMouseDown={(e) => e.stopPropagation()}>
        {children}
      </main>
    </SModal>
  )
}

Modal.Closer = function ModalCloser({ classes, ...otherProps }) {
  const dispatch = useDispatch()
  const dispatchCloseModal = () => {
    dispatch(closeModal())
  }

  return (
    <SModalCloser
      {...otherProps}
      onClick={dispatchCloseModal}
    > <Times />
    </SModalCloser>
  )
}

export default Modal
