/* eslint-disable */
import React from 'react'
import { useDispatch } from 'react-redux'

import { openModal } from '@store/modal-slice'

import { Self } from './styles/guild-list'

import { Navbar, Separator, Tooltip } from '@components'

import { CustomDiscord, Plus } from '@assets'

function GuildList() {
  const dispatch = useDispatch()

  const dispatchOpenModal = (id) => {
    dispatch(openModal(id))
  }

  return (
    <Self as={Navbar}>
      <Navbar.Item selected={true}>
        <CustomDiscord />
        <Tooltip direction='right' spacing={20}> Home </Tooltip>
      </Navbar.Item>

      <Separator />

      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20].map((guild, id) =>
          <Navbar.Item key={id} selected={false}>
            <Tooltip direction='right' spacing={20}> Guild Name </Tooltip>
          </Navbar.Item>
        )
      }

      <Navbar.Item green selected={false} onClick={() => dispatchOpenModal('join-or-create-guild-modal')}>
        <Plus />
        <Tooltip direction='right' spacing={20}> Add a Server </Tooltip>
      </Navbar.Item>
    </Self>
  )
}

export default GuildList
