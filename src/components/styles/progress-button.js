import styled, { css } from 'styled-components'

import {} from '@styles'

export const SProgressButton = styled.div.attrs(({ attrs }) => ({
  className: 'progress-button',
  attrs: attrs || {},
}))`
  height: 66px;

  display: flex;
  align-items: center;

  background: #ffffff;
  border: 1px solid rgba(6, 6, 7, 0.08);
  border-radius: 8px;
  color: #2e3338;
  cursor: pointer;
  font-weight: 800;
  padding: 0 16px;
  user-select: none;

  &:hover {
    background: rgba(116, 127, 141, 0.08);
  }

  &:active {
    background: rgba(116, 127, 141, 0.16);
  }

  > img:first-of-type {
    width: 48px;
    height: 48px;

    flex-shrink: 0;
    margin-right: 8px;
  }

  img:last-of-type {
    width: 20px;
    height: 20px;

    flex-shrink: 0;
  }
`
