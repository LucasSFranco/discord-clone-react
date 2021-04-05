import styled from 'styled-components'

import {
  FlexItem,
  Customization,
  Spacing,
  Typography,
} from '@styles'

export const SSubtext = styled.span.attrs(({ attrs }) => ({
  className: 'subtext',
  attrs: attrs || {},
}))`
  color: #72767d;
  display: inline-block;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  user-select: none;

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => FlexItem(attrs)};
  ${({ attrs }) => Spacing(attrs)};
  ${({ attrs }) => Typography(attrs)};
`
