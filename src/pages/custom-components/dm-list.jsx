/* eslint-disable */
import React from 'react'

import { Self } from './styles/dm-list'

import {
  Avatar,
  Box,
  IconButton,
  Sidebar,
  Tooltip,
} from '@components'

import { CustomPlus, Friends, Times } from '@assets'

function DMList() {
  return (
    <Self as={Sidebar}>

      <Sidebar.Item selected={true} attrs={{ h: 44 }}>
        <Friends attrs={{ ml: 4, mr: 12, fls: 0 }} />
        <Box attrs={{ flg: 1 }}> Friends </Box>
      </Sidebar.Item>

      <Sidebar.Header clickable attrs={{ m: '18px 8px 4px 18px'}}>
        <Box attrs={{ csr: 'default', flg: 1 }}> Direct Messages </Box>
      </Sidebar.Header>

      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((dm, id) =>
          <Sidebar.Item key={id} selected={id === 0} attrs={{ h: 44 }}>
            <Avatar attrs={{ mr: 12 }} />
            <Box attrs={{ flg: 1 }}> Username </Box>
            <IconButton attrs={{ ml: 8 }}>
              <Times attrs={{ s: 16 }} />
            </IconButton>
          </Sidebar.Item>
        )
      }
    </Self>
  )
}

export default DMList
