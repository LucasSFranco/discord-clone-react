import styled, { css } from 'styled-components'

import {} from '@styles'

export const SModal = styled.div.attrs(({ attrs }) => ({
  className: 'modal',
  attrs: attrs || {},
}))`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(0, 0, 0, 0.85);
  position: fixed;
  visibility: hidden;
  z-index: 99999;

  .title {
    font-weight: 800;
  }

  .label {
    color: #dcddde;
  }

  ${
    (props) => props.show && css`
      visibility: visible;
    `
  }

  main {
    position: relative;
  }

`

export const SModalCloser = styled.div.attrs({
  className: 'modal__closer'
})`
  position: absolute;
  top: 12px;
  right: 12px;

  color: #b9bbbe;
  cursor: pointer;
  opacity: .5;
  padding: 4px;
  transition: opacity 200ms ease-in-out;
  z-index: 1;

  &:hover {
    color: #dcddde;
    opacity: 1;
  }
`
