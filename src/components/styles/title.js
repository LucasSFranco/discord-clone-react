import styled from 'styled-components'

import {
  Customization,
  Spacing,
  Typography,
} from '@styles'

export const STitle = styled.span.attrs(({ attrs }) => ({
  className: 'title',
  attrs: attrs || {},
}))`
  color: #ffffff;
  display: block;
  font-size: 24px;
  font-weight: 700;
  line-height: 30px;
  text-align: center;
  user-select: none;

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => Spacing(attrs)};
  ${({ attrs }) => Typography(attrs)};
`
