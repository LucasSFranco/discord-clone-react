import React from 'react'

import { SChat, SChatDivider } from './styles/chat'

function Chat({ children, attrs, ...otherProps }) {
  return (
    <SChat attrs={attrs} {...otherProps}>
      <main>
        <div>
          {children}
        </div>
      </main>
    </SChat>
  )
}

Chat.Divider = function ChatDivider({ children, attrs, ...otherProps }) {
  return (
    <SChatDivider attrs={attrs} {...otherProps}>
      {
        children && (
          <span> {children} </span>
        )
      }
    </SChatDivider>
  )
}

export default Chat
