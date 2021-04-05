import styled from 'styled-components'

export const Self = styled.div.attrs({
  className: 'channel-list',
})`
  .sidebar__header {
    .icon-button {
      color: #8e9297;
      cursor: pointer;
      position: relative;

      &:hover {
        color: #dcddde;
      }

      &:active {
        color: #ffffff;
        top: 1px;
      }
    }
  }

  .sidebar__item {
    .icon-button {
      color: #b9bbbe;
      cursor: pointer;
      display: none;
      position: relative;

      &:hover {
        color: #dcddde;
      }

      &:active {
        color: #ffffff;
        top: 1px;
      }
    }
  }
`
