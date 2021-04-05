import styled from 'styled-components'

import {
  Customization,
  Spacing,
  Typography,
} from '@styles'

export const SLabel = styled.span.attrs(({ attrs }) => ({
  className: 'label',
  attrs: attrs || {},
}))`
  display: flex;
  align-items: center;

  color: #8e9297;
  font-size: 12px;
  font-weight: 700;
  line-height: 16px;
  margin-bottom: 8px;
  text-transform: uppercase;
  user-select: none;

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => Spacing(attrs)};
  ${({ attrs }) => Typography(attrs)};
`
