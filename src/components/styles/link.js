import styled from 'styled-components'

import {
  Customization,
  Spacing,
  Typography,
} from '@styles'

export const SLink = styled.span.attrs(({ attrs }) => ({
  className: 'link',
  attrs: attrs || {},
}))`
  color: #7289da;
  cursor: pointer;
  display: inline-block;
  font-size: 14px;
  line-height: 16px;
  user-select: none;

  &:hover {
    text-decoration: underline;
  }

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => Spacing(attrs)};
  ${({ attrs }) => Typography(attrs)};
`
