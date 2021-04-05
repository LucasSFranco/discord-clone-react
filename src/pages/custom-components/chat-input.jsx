/* eslint-disable */
import React from 'react'

import { Self } from './styles/chat-input'

import {
  Box,
  TextArea,
} from '@components'

function ChatInput() {

  return (
    <Self as={Box}>
      <TextArea editable placeholder='Message @Username' content={''}>
        <TextArea.FileInput />
      </TextArea>
    </Self>
  )
}

export default ChatInput
