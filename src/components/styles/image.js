import styled, { css } from 'styled-components'

import {
  Spacing,
  Sizing
} from '@styles'

export const SImage = styled.div.attrs(({ attrs }) => ({
  className: 'image',
  attrs: attrs || {},
}))`
  width: 100%;

  display: flex;
  padding: 2px 0;

  > img {
    max-height: 300px;
    max-width: 400px;

    border-radius: 3px;
    object-fit: scale-down;
    object-position: 0 0;
    user-select: none;
  }


  ${({ attrs }) => Sizing(attrs)};
  ${({ attrs }) => Spacing(attrs)};
`
