import styled from 'styled-components'

export const Self = styled.div.attrs({
  className: 'add-friend',
})`
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  padding: 8px 30px;

  > .strong {
    display: block;
    font-weight: 800;
    line-height: 16px;
    margin: 9px 0;
    text-transform: uppercase;
  }

  > .text, > .error {
    display: inline-block;
    font-size: 14px;
    line-height: 17px;
    margin: 5px 0;
  }

  > .text {
    color: #dcddde;
    font-weight: 600;
  }

  > .error {
    visibility: visible;
    font-style: normal;
  }
`

export const CustomInput = styled.div.attrs({
  className: 'add-friend__custom-input'
})`
  height: 54px;

  display: flex;
  align-items: center;

  background: rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.3);
  border-radius: 8px;
  padding-right: 16px;
  position: relative;
  margin: 13px 0;
  overflow: hidden;

  > .box {
    display: flex;
    flex-grow: 1;
    margin-right: 16px;
    overflow: hidden;
    position: relative;

    input {
      color: #dcddde;
      flex: 1 1 auto;
      font-weight: 600;
      line-height: 52px;
      padding-left: 16px;
      z-index: 1;

      &::placeholder {
        font-weight: 400;
        color: #4f545c;
        letter-spacing: 1px;
      }
    }
  }
`

export const Mask = styled.div.attrs({
  className: 'add-friend__mask'
})`
  color: #4f545c;
  font-weight: 600;
  line-height: 52px;
  margin-left: 16px;
  pointer-events: none;
  position: absolute;
  user-select: none;
`
