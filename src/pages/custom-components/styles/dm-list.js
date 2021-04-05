import styled from 'styled-components'

export const Self = styled.div.attrs({
  className: 'dm-list',
})`
  .sidebar__item {
    .icon-button {
      color: #8e9297;
      cursor: pointer;
      display: none;

      &:hover {
        color: #dcddde;
      }

      &:active {
        color: #ffffff;
      }
    }
  }
`
