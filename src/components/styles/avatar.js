import styled from 'styled-components'

import { FlexItem, Sizing, Spacing } from '@styles'

export const SAvatar = styled.div.attrs(({ attrs }) => ({
  className: 'avatar',
  attrs: attrs || {},
}))`
  width: 32px;
  height: 32px;

  background: rgba(220, 221, 222, 0.08);
  border-radius: 50%;
  flex-shrink: 0;
  position: relative;
  user-select: none;

  img {
    width: 100%;
    height: 100%;

    border-radius: 50%;
  }

  ${({ attrs }) => FlexItem(attrs)};
  ${({ attrs }) => Sizing(attrs)};
  ${({ attrs }) => Spacing(attrs)};
`





