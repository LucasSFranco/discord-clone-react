import styled, { css } from 'styled-components'

import {} from '@styles'

export const Self = styled.div.attrs(({ attrs }) => ({
  className: 'message',
  attrs: attrs || {},
}))`
  padding: 2px 48px 2px 72px;
  position: relative;

  &:hover {
    background: rgba(4, 4, 5, 0.07);

    > time {
      visibility: visible;
    }

    > .message__toolbox {
      visibility: visible;
    }
  }

  > time {
    position: absolute;
    right: calc(100% - 64px);

    color: #72767d;
    display: inline-block;
    font-size: 11px;
    font-weight: 600;
    line-height: 22px;
    margin: 0 4px;
    user-select: none;
    visibility: hidden;
  }

  ${
    (props) => !props.sequence && css`
      margin-top: 17px;

      .message__toolbox {
        top: -16px;
      }
    `
  }
`

export const Header = styled.div.attrs({
  className: 'message__header'
})`
  > .strong {
    line-height: 22px;
    margin-right: 4px;
    user-select: text;
  }

  > time {
    color: #72767d;
    display: inline-block;
    font-size: 12px;
    font-weight: 600;
    line-height: 22px;
    margin-left: 4px;
  }

  > .avatar {
    width: 40px;
    height: 40px;

    position: absolute;
    left: 16px;

    margin-top: 2px;
  }
`

export const Toolbox = styled.div.attrs({
  className: 'message__toolbox'
})`
  position: absolute;
  top: -25px;
  right: 0;

  background: #36393f;
  border-radius: 4px;
  box-shadow: 0 0 0 1px rgba(4, 4, 5, 0.15);
  display: flex;
  margin: 0 14px 0 32px;
  overflow: hidden;
  transition: box-shadow 100ms ease-out;
  user-select: none;
  visibility: hidden;
  z-index: 1;

  .icon-button {
    border-radius: 0;
    padding: 6px;

    &:hover {
      background: rgba(79, 84, 92, 0.16);
    }

    &:active {
      background: rgba(79, 84, 92, 0.24);
      color: #ffffff;
    }

    svg {
      width: 20px;
      height: 20px;
    }

    &:active {
      svg {
        margin: 1px 0 -1px;
      }
    }
  }

  &:hover {
    box-shadow:
      0 0 0 1px rgba(4, 4, 5, 0.15),
      0 4px 4px rgba(0, 0, 0, 0.16);
  }

`
