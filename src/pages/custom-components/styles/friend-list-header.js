import styled from 'styled-components'

export const Self = styled.div.attrs({
  className: 'friend-list-header',
})`
  padding: 0 8px;

  > .header__container {
    > .box {
      display: flex;
      align-items: center;
      margin-right: 8px;

      > .friends {
        color: #72767d;
        margin: 0 8px;
      }

      > .strong {
        font-weight: 700;
        line-height: 20px;
      }
    }
  }
`

