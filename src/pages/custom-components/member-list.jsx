/* eslint-disable */
import React from 'react'

import { Self } from './styles/member-list'

import {
  Avatar,
  Box,
  IconButton,
  Sidebar,
  Tooltip,
} from '@components'

import { CrownXS } from '@assets'

function MemberList() {
  return (
    <Self as={Sidebar}>

      {
        [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30].map((dm, id) =>
          <Sidebar.Item key={id} selected={id === 0} attrs={{ h: 44 }}>
            <Avatar attrs={{ mr: 12 }} />
            <Box attrs={{ flg: 1, d: 'flex', ai: 'center' }}>
              Username
              {
                id === 0 && (
                  <Box attrs={{ c: '#faa61a', d: 'flex', fls: 0, ml: 4 }}>
                    <CrownXS attrs={{ s: 14 }} />
                    <Tooltip direction='left'> Server Owner</Tooltip>
                  </Box>
                )
              }
            </Box>
          </Sidebar.Item>
        )
      }

    </Self>
  )
}

export default MemberList
