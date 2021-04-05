/* eslint-disable */
import React from 'react'

import { Self } from './styles/channel-list'

import {
  Box,
  IconButton,
  Sidebar,
  Tooltip
} from '@components'

import {
  CogXS,
  ChevronDown,
  Hashtag,
  PlusSM,
  UserPlusXS
} from '@assets'

function ChannelList() {
  return (
    <Self as={Sidebar}>

      <Sidebar.Header clickable attrs={{ mt: 16, py: 3 }}>
        <ChevronDown attrs={{ s: 12, mx: 2 }} />
        <Box attrs={{ flg: 1 }}> Category Name </Box>
        <IconButton attrs={{ mr: 8 }}>
          <PlusSM />
          <Tooltip direction='top' spacing={8}> Create Channel </Tooltip>
        </IconButton>
      </Sidebar.Header>

      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((dm, id) =>
          <Sidebar.Item key={id} selected={id === 0} attrs={{ h: 34 }}>
            <Hashtag attrs={{ c: '#72767d', s: 20, mr: 6 }}/>
            <Box attrs={{ flg: 1 }}> Channel Name </Box>
            <Box attrs={{ d: 'flex', fls: 0 }}>
              <IconButton attrs={{ ml: 4 }}>
                <UserPlusXS />
                <Tooltip direction='top' spacing={8}> Invite People </Tooltip>
              </IconButton>
              <IconButton attrs={{ ml: 4 }}>
                <CogXS />
                <Tooltip direction='top' spacing={8}> Edit Channel </Tooltip>
              </IconButton>
            </Box>
          </Sidebar.Item>
        )
      }
    </Self>
  )
}

export default ChannelList
