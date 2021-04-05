import styled, { css } from 'styled-components'

import {
  Customization,
  Spacing,
} from '@styles'

export const SChat = styled.div.attrs(({ attrs }) => ({
  className: 'chat',
  attrs: attrs || {},
}))`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: hidden scroll;
  padding-bottom: 32px;

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #2e3338;
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 8px;
    margin-bottom: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #202225;
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 8px;
  }

  > main {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: flex-end;

    min-height: 100%;
    overflow-anchor: none;
  }

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => Spacing(attrs)};
`

export const SChatDivider = styled.div.attrs(({ attrs }) => ({
  className: 'chat__divider',
  attrs: attrs || {},
}))`
  height: 1px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: rgba(255, 255, 255, 0.06);
  margin: 24px 14px 8px 16px;

  > span {
    background: #36393f;
    border-radius: 8px;
    color: #72767d;
    display: block;
    flex-shrink: 0;
    font-size: 12px;
    font-weight: 600;
    line-height: 13px;
    margin-top: -2px;
    padding: 2px 4px;
    user-select: none;
  }
`
