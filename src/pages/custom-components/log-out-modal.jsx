/* eslint-disable */
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

import { auth } from '@services/firebase'

import { closeModal } from '@store/modal-slice'

import { Self } from './styles/create-channel-modal'

import {
  Box,
  Button,
  Card,
  Strong,
  Text,
  Modal,
} from '@components'

function LogOutModal() {
  const history = useHistory()

  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const dispatchCloseModal = () => {
    dispatch(closeModal())
  }

  const signOut = async () => {
    setLoading(true)

    try {
      await auth.signOut()
      history.push('/')
    } catch(error) {
      console.error(error.message)
    }
  }

  return (
    <Self id='logout-modal' as={Modal}>
      <Card>
        <Box attrs={{ p: 16, pb: 20 }}>
          <Strong attrs={{ mb: 16, tt: 'uppercase', fw: 700}}> Log out </Strong>
          <Text attrs={{ c: '#dcddde', lh: 20, us: 'none', mb: 38 , fw: 400 }}> Are you sure you want to logout? </Text>
        </Box>
        <Box attrs={{ bg: '#2f3136', d: 'flex', jc: 'flex-end', p: 16 }}>
          <Button link md onClick={() => dispatchCloseModal()}> Cancel </Button>
          <Button loading={loading} danger md onClick={signOut}> Log Out </Button>
        </Box>
      </Card>
    </Self>
  )
}

export default LogOutModal
