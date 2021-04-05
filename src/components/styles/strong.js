import styled, { css } from 'styled-components'

import {
  Customization,
  Spacing,
  Typography,
} from '@styles'

export const SStrong = styled.span.attrs(({ attrs }) => ({
  className: 'strong',
  attrs: attrs || {},
}))`
  color: #ffffff;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  user-select: none;

  ${
    (props) => props.nowrap && css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `
  }

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => Spacing(attrs)};
  ${({ attrs }) => Typography(attrs)};
`
