import styled from 'styled-components'

import {} from '@styles'

export const SLobby = styled.div.attrs(({ attrs }) => ({
  className: 'lobby',
  attrs: attrs || {},
}))`
  width: 100%;
  height: 100%;

  overflow: hidden;

  > img {
    width: 100%;
    height: 100%;

    object-fit: cover;
    object-position: 100% 100%;
  }

  > main {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;

    position: absolute;
    top: 0;
    left: 0;

    max-width: 1480px;
  }
`
