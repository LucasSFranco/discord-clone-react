import styled from 'styled-components'

import {} from '@styles'

export const SInput = styled.div.attrs(({ attrs }) => ({
  className: 'input',
  attrs: attrs || {},
}))`
  width: 100%;
  height: 40px;

  display: flex;
  align-items: center;

  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  transition: border-color 200ms ease-in-out;

  &:hover {
    border-color: #040405;
  }

  &:focus-within {
    border-color: #7289da;
  }

  input {
    width: 100%;
    height: auto;
    color: #dcddde;
    font-size: 16px;
    padding: 10px;
  }
`
