import styled, { css } from 'styled-components'

import {} from '@styles'

export const SStackedList = styled.div.attrs(({ attrs }) => ({
  className: 'stacked-list',
  attrs: attrs || {},
}))`
  padding-bottom: 8px;

  .label {
    margin: 16px 20px 8px 30px;
    color: #b9bbbe;
  }

  .subtext {
    visibility: hidden;
  }
`

export const SStackedListButton = styled.div.attrs(({ attrs }) => ({
  className: 'stacked-list__button',
  attrs: attrs || {},
}))`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #2f3136;
  border-radius: 50%;
  color: #b9bbbe;
  cursor: pointer;
  flex-shrink: 0;
  margin-left: 10px;
  pointer-events: auto;

  &:hover {
    color: #dcddde;
  }

  &:active {
    color: #ffffff;
  }

  ${
    (props) => (
    props.green && css`
      &:hover {
        color: #43b581;
      }
    `) || (
    props.red && css`
      &:hover {
        color: #f04747;
      }
    `)
  }
`

export const SStackedListItem = styled.div.attrs(({ attrs }) => ({
  className: 'stacked-list__item',
  attrs: attrs || {},
}))`
  height: 62px;

  display: flex;
  align-items: center;

  border-top: 1px solid rgba(255, 255, 255, 0.06);
  cursor: pointer;
  margin: 0 20px 0 30px;

  &:hover {
    background: rgba(116, 127, 141, 0.08);
    border-color: transparent;
    border-radius: 8px;
    margin: 0 10px 0 20px;
    padding: 0 10px;

    .subtext {
      visibility: visible;
    }

    .stacked-list__button {
      background: #202225;

      &:active {
        background: rgba(79, 84, 92, 0.24);
      }
    }
  }

  &:hover + & {
    border-color: transparent;
  }
`
