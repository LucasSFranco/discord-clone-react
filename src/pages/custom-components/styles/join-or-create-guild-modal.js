import styled from 'styled-components'

export const Self = styled.div.attrs({
  className: 'join-or-create-guild-modal',
})`
  .card {
    transition: height 200ms ease-out;
    will-change: height;

    > .box {
      transition: transform 200ms ease-out;
    }
  }
`
