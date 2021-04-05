/* eslint-disable */
import React from 'react'

import { Self } from './styles/channel-chat'

import {
  Box,
  Chat,
} from '@components'

import { ChannelBeginning } from './channel-chat/'
import { Message } from '../custom-components'

function DMChat() {
  return (
    <Self as={Box}>
      <Chat>
        <ChannelBeginning />

        {
          [1, 2, 3, 4, 5].map((message, id) =>
            <>
              {
                (id === 1 || id === 5) && (
                  <Chat.Divider key={'12312'+id}> Month Day, Year </Chat.Divider>
                )
              }
              <Message key={id} />
              {
                message % 2 ? (
                  new Array(id).fill(id).map((sequence, sId) =>
                    <Message sequence key={`${id}${sId}`} />
                  )
                ) : null
              }
            </>
          )
        }
      </Chat>
    </Self>
  )
}

export default DMChat
