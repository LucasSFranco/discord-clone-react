import styled, { css } from 'styled-components'

import {
  Customization,
  Spacing
} from '@styles'

export const SHeader = styled.div.attrs(({ attrs }) => ({
  className: 'header',
  attrs: attrs || {},
}))`
  width: 100%;
  height: 48px;

  display: flex;
  align-items: center;

  box-shadow:
    0 1px 0 rgba(4, 4, 5, 0.2),
    0 1.5px 0 rgba(6, 6, 7, 0.05),
    0 2px 0 rgba(4, 4, 5, 0.05);
  flex-shrink: 0;
  padding: 0 8px;
  position: relative;
  user-select: none;
  z-index: 1;

  .separator {
    width: 1px;
    height: 24px;

    margin: 0 8px;
  }

  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => Spacing(attrs)};
`

export const SHeaderButton = styled.div.attrs(({ attrs }) => ({
  className: 'header__button',
  attrs: attrs || {},
}))`
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  cursor: pointer;
  flex: 0 0 auto;
  padding: 0 8px;
  margin: 0 8px;
  min-width: 40px;
  user-select: none;

  ${
    (props) => (
    props.green && css`
      background: #43b581;
      color: #ffffff;

      ${
        (props) => props.selected && css`
          background: rgba(67, 181, 129, 0.2);
          color: #43b581;
        `
      }
    `) || (
    css`
      border-radius: 4px;
      color: #b9bbbe;
      cursor: pointer;
      flex: 0 0 auto;
      padding: 0 8px;
      margin: 0 8px;
      min-width: 40px;
      user-select: none;

      &:hover {
        color: #dcddde;
        background: rgba(79, 84, 92, 0.16);
      }

      &:active {
        color: #ffffff;
      }

      ${
        (props) => props.selected && css`
          background: rgba(79, 84, 92, 0.32);
          cursor: default;

          && {
            color: #ffffff;
          }
        `
      }
    `)
  }
`

export const SHeaderContainer = styled.div.attrs(({ attrs }) => ({
  className: 'header__container',
  attrs: attrs || {},
}))`
  display: flex;
  align-items: center;

  flex-grow: 1;
  overflow: hidden;
  position: relative;

  &::after {
    content: '';

    width: 8px;
    height: 48px;

    position: absolute;
    top: 0;
    right: 0;

    background: linear-gradient(90deg, rgba(54, 57, 63, 0), #36393f);
  }
`
