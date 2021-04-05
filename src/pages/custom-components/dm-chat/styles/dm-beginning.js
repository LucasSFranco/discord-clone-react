import styled from 'styled-components'

export const Self = styled.div.attrs({
  className: 'dm-beginning',
})`
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin: 16px;
  padding-bottom: 16px;

  .avatar {
    width: 80px;
    height: 80px;
  }

  .title {
    font-size: 32px;
    font-weight: 800;
    line-height: 40px;
    margin: 8px 0;
    text-align: left;
  }

  .text {
    font-weight: 400;
    user-select: none;

    .strong {
      line-height: 21px;
      color: #b9bbbe;
    }
  }

  > .box {
    display: flex;
    margin-top: 16px;

    > * + * {
      margin-left: 8px;
    }
  }
`
