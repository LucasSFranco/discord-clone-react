import styled, { css } from 'styled-components'

import {
  Customization,
  Spacing,
} from '@styles'

export const SScrollbox = styled.div.attrs(({ attrs }) => ({
  className: 'scrollbox',
  attrs: attrs || {},
}))`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  overflow: hidden scroll;

  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  &::-webkit-scrollbar-track {
    background: #2e3338;
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: #202225;
    background-clip: padding-box;
    border: 4px solid transparent;
    border-radius: 8px;
  }

  .separator {
    border-top: 1px solid rgba(255, 255, 255, 0.06);
    margin: 40px 0;
  }

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => Spacing(attrs)};
`
