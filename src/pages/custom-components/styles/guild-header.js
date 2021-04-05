import styled, { css } from 'styled-components'

export const Self = styled.div.attrs({
  className: 'guild-header',
})`
  cursor: pointer;
  transition: background-color 150ms;

  &:hover {
    background: rgba(79, 84, 92, 0.16);
  }

  > svg {
    width: 18px;
    height: 18px;

    color: #ffffff;
    flex-shrink: 0;
    margin-left: 4px;
    opacity: 0.8;
    stroke-width: 2px;
    transform-origin: 9px 9px;
    position: relative;
    top: 2.25px;
    stroke-dasharray: calc(1.41421356 * 4.5);
    transition:
      stroke-dasharray 200ms,
      transform 200ms ease-out,
      top 200ms;
  }

  ${
    (props) => props.active && css`
      > svg {
        stroke-dasharray: 18;
        transform: rotate(-90deg);
        top: 0;
      }
    `
  }
`
