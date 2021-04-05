import styled, { css } from 'styled-components'

import {
  Sizing,
  Spacing,
  Typography
} from '@styles'

export const SSidebar = styled.div.attrs(({ attrs }) => ({
  className: 'sidebar',
  attrs: attrs || {},
}))`
  background: #2f3136;
  flex-grow: 1;
  overflow: hidden scroll;
  padding: 8px 0 16px;

  &:hover {
    &::-webkit-scrollbar-thumb {
      background-color: #202225;
    }
  }

  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background-color: transparent;
    border: 2px solid transparent;
    border-radius: 4px;
  }

  ${({ attrs }) => Sizing(attrs)};
`

export const SSidebarHeader = styled.span.attrs(({ attrs }) => ({
  className: 'sidebar__header',
  attrs: attrs || {},
}))`
  display: flex;
  align-items: center;

  color: #8e9297;
  font-size: 12px;
  font-weight: 700;
	line-height: 18px;
  text-transform: uppercase;
	user-select: none;

  ${
    (props) => props.clickable && css`
      cursor: pointer;

      &:hover {
        color: #dcddde;
      }
    `
  }

  ${({ attrs }) => Spacing(attrs)};
  ${({ attrs }) => Typography(attrs)};
`

export const SSidebarItem = styled.div.attrs(({ attrs }) => ({
  className: 'sidebar__item',
  attrs: attrs || {},
}))`
  height: 34px;

  padding: 1px 0;
  user-select: none;

  ${
    (props) => props.selected && css`
      && {
        .sidebar__item__button {
          background: rgba(79, 84, 92, 0.32);
          color: #ffffff;
        }
      }
    `
  }

  ${
    (props) => props.red && css`
      .sidebar__item__button {
        color: #f04747;

        &:hover {
          background: rgba(240, 71, 71, 0.1);
          color: #f04747;
        }

        &:active {
          background: #f04747;
          color: #ffffff;
        }
      }
    `
  }

  ${({ attrs }) => Sizing(attrs)};
`

export const SidebarItemButton = styled.div.attrs(({ attrs }) => ({
  className: 'sidebar__item__button',
  attrs: attrs || {},
}))`
  height: 100%;

  display: flex;
  align-items: center;

  border-radius: 4px;
  color: #8e9297;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  margin-left: 8px;
  padding: 0 8px;

  &:hover {
    background: rgba(79, 84, 92, 0.16);
    color: #dcddde;

    && .icon-button {
      display: flex;
    }
  }

  &:active {
    background: rgba(79, 84, 92, 0.24);
    color: #ffffff;
  }
`
