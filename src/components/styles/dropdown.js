import styled, { css } from 'styled-components'

import {
  Layout,
  Sizing,
} from '@styles'

export const SDropdown = styled.div.attrs(({ attrs }) => ({
  className: 'dropdown',
  attrs: attrs || {},
}))`
  min-width: 188px;
  max-width: 320px;

  background: #18191c;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24);
  cursor: default;
  padding: 6px 8px;
  position: fixed;
  visibility: hidden;
  z-index: 99;

  ${
    (props) => props.show && css`
      visibility: visible;
    `
  }

  .separator {
    height: 1px;
    margin: 4px;
  }

  ${({ attrs }) => Layout(attrs)};
  ${({ attrs }) => Sizing(attrs)};
`

export const SDropdownItem = styled.div.attrs(({ attrs }) => ({
  className: 'dropdown__item',
  attrs: attrs || {},
}))`
  height: 32px;

  display: flex;
  align-items: center;

  border-radius: 2px;
  color: #b9bbbe;
  cursor: pointer;
  font-size: 14px;
  line-height: 18px;
  margin: 2px 0;
  overflow: hidden;
  padding: 6px 8px;
  text-overflow: ellipsis;
  user-select: none;
  white-space: nowrap;

  &:hover {
    background: #5c6fb1;
    color: #ffffff;
  }

  &:active {
    background: #4e5d94;
    color: #ffffff;
  }

  > svg {
    width: 18px;
    height: 18px;

    flex-shrink: 0;
    margin-left: 8px;
  }

  ${
    (props) => (
    props.blue && css`
      color: #677bc4;
    `) || (
    props.red && css`
      color: #f04747;

      &:hover {
        background: #f04747;
      }
    `)
  }
`
