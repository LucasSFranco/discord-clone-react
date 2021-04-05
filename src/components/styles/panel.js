import styled, { css } from 'styled-components'

import {} from '@styles'

export const SPanel = styled.div.attrs(({ attrs }) => ({
  className: 'panel',
  attrs: attrs || {},
}))`
  width: 100%;
  height: 100%;

  display: flex;
  position: fixed;
  visibility: hidden;
  z-index: 9999;

  > .sidebar {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    flex: 1 0 218px;

    padding: 0;

    .box {
      width: 218px;

      display: flex;
      flex-direction: column;

      .separator {
        height: 1px;

        margin: 8px 10px;
      }

      .sidebar__header {
        padding: 0 10px 6px;
      }

      .sidebar__item__button {
        margin: 0;
        padding: 0 10px;
      }

      padding: 60px 6px 60px 20px;
    }
  }

  > .box {
    background: #36393f;

    flex-basis: 800px;
    flex-grow: 1;
    position: relative;

    .scrollbox {
      display: flex;
      align-items: flex-start;

      > .box {
        max-width: 740px;

        padding: 60px 40px 80px;
      }
    }

  }

  ${
    (props) => props.show && css`
      visibility: visible;
    `
  }
`

export const SPanelCloser = styled.div.attrs({
  className: 'panel__closer'
})`
  width: 36px;
  height: 36px;

  display: flex;
  align-items: center;
  justify-content: center;

  flex-shrink: 0;
  border: 2px solid #72767d;
  border-radius: 50%;
  color: #dcddde;
  cursor: pointer;
  z-index: 1;
  margin: 60px 21px 0 0;

  &:hover {
    background: rgba(114, 118, 125, 0.3);
  }

  &:active {
    margin: 61px 21px -1px 0;
  }

  > .times {
    width: 18px;
    height: 18px;
  }
`
