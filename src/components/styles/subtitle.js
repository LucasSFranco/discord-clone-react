import styled from 'styled-components'

import {
  Customization,
  Spacing,
  Typography,
} from '@styles'

export const SSubtitle = styled.span.attrs(({ attrs }) => ({
  className: 'subtitle',
  attrs: attrs || {},
}))`
  color: #b9bbbe;
  display: block;
  font-size: 16px;
  font-weight: 500;
  line-height: 20px;
  text-align: center;
  user-select: none;

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => Spacing(attrs)};
  ${({ attrs }) => Typography(attrs)};
`
