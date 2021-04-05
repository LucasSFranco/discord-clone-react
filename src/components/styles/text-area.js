import styled, { css } from 'styled-components'

import {} from '@styles'

export const STextArea = styled.div.attrs(({ attrs }) => ({
  className: 'text-area',
  attrs: attrs || {},
}))`
  color: #dcddde;
  line-height: 22px;
  user-select: text;

  ${
    (props) => props.editable && css`
      width: 100%;

      display: flex;
      align-items: flex-start;

      background: #40444b;
      border-radius: 8px;
      overflow: hidden scroll;
      max-height: 50vh;
      min-height: 44px;

      > main {
        height: 100%;

        color: #dcddde;
        flex-grow: 1;
        font-size: 16px;
        line-height: 22px;
        padding: 11px 4px 11px 16px;
        position: relative;
        word-break: break-word;
        user-select: text;

        &[placeholder]:empty::before {
          content: attr(placeholder);

          color: #72767d;
          font-size: 16px;
          display: block;
          font-weight: 400;
          overflow: hidden;
          padding: 11px 0;
          text-overflow: ellipsis;
          white-space: nowrap;

          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      }

      &::-webkit-scrollbar {
        width: 12px;
        height: 12px;
      }

      &::-webkit-scrollbar-thumb {
        background-clip: padding-box;
        background-color: rgba(24,25,28,.6);
        border: 4px solid transparent;
        border-radius: 6px;
      }
    `
  }

`

export const STextAreaFileInput = styled.label.attrs(({ attrs }) => ({
  className: 'text-area__file-input',
  attrs: attrs || {},
}))`
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  color: #b9bbbe;
  cursor: pointer;
  flex-shrink: 0;
  padding: 10px 16px;

  &:hover {
    color: #dcddde;
  }

  > input {
    display: none;
  }
`
