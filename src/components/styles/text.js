import styled from 'styled-components'

import {
  Customization,
  Spacing,
  Typography,
} from '@styles'

export const SText = styled.span.attrs(({ attrs }) => ({
  className: 'text',
  attrs: attrs || {},
}))`
  color: #b9bbbe;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 22px;

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => Spacing(attrs)};
  ${({ attrs }) => Typography(attrs)};
`
