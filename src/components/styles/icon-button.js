import styled, { css } from 'styled-components'

import {
  FlexItem,
  Sizing,
  Spacing
} from '@styles'

export const SIconButton = styled.div.attrs(({ attrs }) => ({
  className: 'icon-button',
  attrs: attrs || {},
}))`
  display: flex;
  align-items: center;
  justify-content: center;

  color: #b9bbbe;
  cursor: pointer;
  flex-shrink: 0;

  &:hover {
    color: #dcddde;
  }

  ${
    (props) => props.red && css`
      &&& {
        color: #f04747;
      }
    `
  }

  ${
    (props) => props.backgrounded && css`
      border-radius: 4px;

      &:hover {
        background: rgba(79, 84, 92, 0.32);
      }
    `
  }

  ${({ attrs }) => FlexItem(attrs)};
  ${({ attrs }) => Sizing(attrs)};
  ${({ attrs }) => Spacing(attrs)};
`
