import styled, { css } from 'styled-components'

import {
  Spacing
} from '@styles'

export const SInputGroup = styled.div.attrs(({ attrs }) => ({
  className: 'input-group',
  attrs: attrs || {},
}))`
  margin-bottom: 20px;

  ${
    (props) => props.error && css`
      &&& {
        .label {
          color: #f04747;
        }

        .error {
          visibility: visible;
        }

        > * {
          border-color: #f04747;
        }
      }
    `
  }

  ${({ attrs }) => Spacing(attrs)};
`
