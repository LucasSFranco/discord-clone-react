import styled from 'styled-components'

import {
  Customization,
  Spacing,
  Typography,
} from '@styles'

export const SError = styled.span.attrs(({ attrs }) => ({
  className: 'error',
  attrs: attrs || {},
}))`
  display: flex;
  align-items: center;

  color: #f04747;
  font-size: 12px;
  font-style: italic;
  font-weight: 400;
  line-height: 16px;
  text-transform: none;
  user-select: none;
  visibility: hidden;

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => Spacing(attrs)};
  ${({ attrs }) => Typography(attrs)};
`
