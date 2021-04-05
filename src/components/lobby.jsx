import React from 'react'

import { SLobby } from './styles/lobby'

import { LobbyBackground } from '@assets'

function Lobby({ children, attrs, ...otherProps }) {
  return (
    <SLobby attrs={attrs} {...otherProps}>
      <img src={LobbyBackground} alt='' />
      <main>
        {children}
      </main>
    </SLobby>
  )
}

export default Lobby
