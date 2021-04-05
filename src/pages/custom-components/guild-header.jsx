/* eslint-disable */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { togglePopup, selectPopup } from '@store/popup-slice'
import { openModal } from '@store/modal-slice'

import { Self } from './styles/guild-header'

import {
  Box,
  Dropdown,
  Header,
  Separator,
  Strong
} from '@components'

import {
  CustomTimes,
  ArrowCircleLeft,
  Cog,
  FolderPlus,
  PlusCircle,
  UserPlus,
} from '@assets'

function GuildHeader() {
  const selectedPopup = useSelector(selectPopup)

  const dispatch = useDispatch()

  const dispatchOpenModal = (id) => {
    dispatch(openModal(id))
  }

  const dispatchTogglePopup = (e, id) => {
    e.stopPropagation()
    dispatch(togglePopup(id))
    console.log('toggle')
  }

  return (
    <Self
      as={Header}
      attrs={{ px: 16 }}
      active={selectedPopup === 'guild-actions-dropdown'}
      onClick={(e) => dispatchTogglePopup(e, 'guild-actions-dropdown')}
    >
      <Box attrs={{ d: 'flex', flg: 1, of: 'hidden' }}>
        <Strong nowrap> Guild Name </Strong>
      </Box>
      <CustomTimes />

      <Dropdown id='guild-actions-dropdown' attrs={{ w: 220, t: 56, l: 82 }}>
        <Dropdown.Item blue>
          <Box attrs={{ flg: 1 }}> Invite People </Box>
          <UserPlus />
        </Dropdown.Item>
        <Dropdown.Item>
          <Box attrs={{ flg: 1 }}> Server Settings </Box>
          <Cog />
        </Dropdown.Item>
        <Dropdown.Item>
          <Box attrs={{ flg: 1 }} onClick={() => dispatchOpenModal('create-channel-modal')}> Create Channel </Box>
          <PlusCircle />
        </Dropdown.Item>
        <Dropdown.Item>
          <Box attrs={{ flg: 1 }} onClick={() => dispatchOpenModal('create-category-modal')}> Create Category </Box>
          <FolderPlus />
        </Dropdown.Item>
      </Dropdown>

      <Dropdown show={false} attrs={{ w: 220, t: 56, l: 82 }}>
        <Dropdown.Item blue>
          <Box attrs={{ flg: 1 }}> Invite People </Box>
          <UserPlus />
        </Dropdown.Item>
        <Separator />
        <Dropdown.Item red>
          <Box attrs={{ flg: 1 }}> Leave Server </Box>
          <ArrowCircleLeft />
        </Dropdown.Item>
      </Dropdown>

    </Self>
  )
}

export default GuildHeader
