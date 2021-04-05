import styled from 'styled-components'

export const Self = styled.div.attrs({
  className: 'dm-beginning',
})`
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  margin: 16px;
  padding-bottom: 16px;

  > .box {
    padding-top: 16px;

    > .box {
      width: 68px;
      height: 68px;

      display: flex;
      align-items: center;
      justify-content: center;

      background: #4f545c;
      border-radius: 50%;

      .hashtag {
        width: 44px;
        height: 44px;

        color: #ffffff;
      }
    }
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

`

export const CustomButton = styled.div.attrs({
  className: 'custom-button'
})`
  width: min-content;
  height: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-top: 8px;
  padding: 0 6px;
  user-select: none;
  white-space: nowrap;

  > svg {
    width: 16px;
    height: 16px;

    margin-right: 6px;
  }

  &:hover {
    background: rgba(79, 84, 92, 0.16);
  }

  color: #00b0f4;
`
