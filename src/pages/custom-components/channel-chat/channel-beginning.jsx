import React from 'react'

import { Self, CustomButton } from './styles/channel-beginning'

import {
  Box,
  Text,
  Title
} from '@components'

import { Hashtag, Pen } from '@assets'

function ChannelBeginning() {
  return (
    <Self as={Box}>
      <Box>
        <Box> <Hashtag /> </Box>
      </Box>
      <Title> Welcome to #channel-name! </Title>
      <Text>
        This is the start of the #channel-name channel.
      </Text>
      <CustomButton>
        <Pen /> Edit Channel
      </CustomButton>
    </Self>
  )
}

export default ChannelBeginning
