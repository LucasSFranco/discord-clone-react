import styled from 'styled-components'

export const Self = styled.div.attrs({
  className: 'chat-input',
})`
  display: flex;
  flex-shrink: 0;
  position: relative;

  &::before {
    content: '';

    width: 20px;
    height: 8px;

    position: absolute;
    left: 0;
    bottom: 100%;

    background: linear-gradient(180deg, rgba(54, 57, 63, 0), #36393f);
  }

  > .text-area {
    position: relative;
    top: -8px;

    margin: 0 16px 16px;

    > main {
      padding-left: 0;
    }
  }
`
