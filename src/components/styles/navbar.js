import styled, { css } from 'styled-components'

import {} from '@styles'

export const SNavbar = styled.div.attrs(({ attrs }) => ({
  className: 'navbar',
  attrs: attrs || {},
}))`
  width: 72px;
  height: 100%;

  background: #202225;
  flex-shrink: 0;
  overflow: hidden scroll;
  padding-top: 12px;

  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .separator {
    height: 2px;
    margin: 0 20px 8px;
  }
`

export const SNavbarItem = styled.div.attrs(({ green, attrs }) => ({
  className: 'navbar__item',
  attrs: attrs || {},

  background:
    (green && '#43b581') ||
    '#7289da',
  color:
    (green && '#43b581') ||
    '#dcddde',
}))`
  display: flex;
  justify-content: center;

  margin-bottom: 8px;
  position: relative;

  .navbar__item__button {
    color: ${({color}) => color};

    &:hover {
      background: ${({background}) => background};
    }
  }

  .tooltip {
    .tooltip__content {
      font-size: 16px;
      font-weight: 600;
      line-height: 20px;
      max-width: 196px;
    }
  }

  ${
    (props) => props.selected && css`
      && {
        .navbar__item__button {
          border-radius: 35%;
          background: ${({background}) => background};
          color: #ffffff;

          .navbar__item__pill	{
            width: 4px;
            height: 40px;
            opacity: 1;
          }
        }
      }
    `
  }
`

export const NavbarItemButton = styled.div.attrs(({ attrs }) => ({
  className: 'navbar__item__button',
  attrs: attrs || {},
}))`
  width: 48px;
  height: 48px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #36393f;
  border-radius: 50%;
  cursor: pointer;
  flex: 0 0 auto;
  overflow: hidden;
  transition: 150ms ease-out;
  transition-property: background-color, border-radius;
  user-select: none;

  &:hover {
    border-radius: 35%;
    color: #ffffff;

    .navbar__item__pill {
      width: 4px;
      height: 20px;
      opacity: 1;
    }
  }

  &:active {
    margin: 1px 0 -1px;
  }

  > img {
    width: 100%;
    height: 100%;
  }
`

export const NavbarItemPill = styled.div.attrs(({ attrs }) => ({
  className: 'navbar__item__pill',
  attrs: attrs || {},
}))`
  width: 0;
  height: 8px;

  position: absolute;
  top: 50%;
  left: 0;

  background: #ffffff;
  border-radius: 0 4px 4px 0;
  opacity: 0;
  pointer-events: none;
  transform: translateY(-50%);
  transform-origin: 0 50%;
  transition: 150ms ease-out;
  transition-property: height, opacity, width;
`
