/* eslint-disable */
import React from 'react'

import { Self } from './styles/channel-header'

import {
  Header,
  IconButton,
  Strong,
  Tooltip,
} from '@components'

import {
  Hashtag,
  People
} from '@assets'

function ChannelHeader() {

  return (
    <Self
      as={Header}
      attrs={{ pos: 'relative', flg: 1 }}
    >
      <Header.Container>
        <Hashtag />
        <Strong> general </Strong>
      </Header.Container>
      <IconButton>
        <People />
        <Tooltip direction='left'> Member List </Tooltip>
      </IconButton>
    </Self>
  )
}

export default ChannelHeader
