/* eslint-disable */
import React from 'react'

import { Self } from './styles/friend-list-header'

import {
  Box,
  Header,
  Separator,
  Strong,
} from '@components'

import {
  Friends
} from '@assets'

function FriendListHeader() {
  return (
    <Self as={Header}>
      <Header.Container>
        <Box>
          <Friends />
          <Strong> Friends </Strong>
        </Box>
        <Separator />
        <Header.Button tab='all-friends'> All </Header.Button>
        <Header.Button tab='pending'> Pending </Header.Button>
        <Header.Button tab='blocked'> Blocked </Header.Button>
        <Header.Button tab='add-friend' green> Add Friend </Header.Button>
      </Header.Container>
    </Self>
  )
}

export default FriendListHeader
