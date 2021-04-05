import styled from 'styled-components'

import {
  Sizing,
  Spacing,
} from '@styles'

export const SSeparator = styled.div.attrs(({ attrs }) => ({
  className: 'separator',
  attrs: attrs || {},
}))`
  background: rgba(255, 255, 255, 0.06);
  flex-shrink: 0;

  ${({ attrs }) => Sizing(attrs)};
  ${({ attrs }) => Spacing(attrs)};
`
