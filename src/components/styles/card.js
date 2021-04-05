import styled from 'styled-components'

import {
  Customization,
  Sizing,
  Spacing
} from '@styles'

export const SCard = styled.div.attrs(({ attrs }) => ({
  className: 'card',
  attrs: attrs || {},
}))`
  width: 440px;

  background: #36393f;
  border-radius: 5px;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  overflow: hidden;

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => Sizing(attrs)};
  ${({ attrs }) => Spacing(attrs)};
`
