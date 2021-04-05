import styled from 'styled-components'

import {
  Spacing
} from '@styles'

export const SRadioGroup = styled.div.attrs(({ attrs }) => ({
  className: 'radio-group',
  attrs: attrs || {},
}))`

  margin-bottom: 20px;

  > * + * {
    margin-top: 8px;
  }

  ${({ attrs }) => Spacing(attrs)};
`

export const SRadioGroupRadioBar = styled.div.attrs(({ attrs }) => ({
  className: 'radio-group__radio-bar',
  attrs: attrs || {},
}))`
  label {
    width: 100%;

    display: flex;
    align-items: center;

    background: #2f3136;
    border-radius: 4px;
    color: #b9bbbe;
    cursor: pointer;
    font-weight: 700;
    line-height: 24px;
    padding: 10px;
    user-select: none;

    &:hover {
      background: rgba(79, 84, 92, 0.16);
      color: #dcddde;
    }

    &:active {
      background: rgba(79, 84, 92, 0.24);
      color: #ffffff;
    }
  }

  svg:first-of-type {
    margin-right: 8px;

    circle {
      display: none;
    }
  }

  svg + svg {
    margin-right: 6px;
    opacity: .6;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="radio"]:checked + label {
    background: #202225;
    color: #ffffff;

    svg:first-of-type {
      circle {
        display: initial;
      }
    }
  }
`
