import styled, { css } from 'styled-components'

import {} from '@styles'

export const STooltip = styled.div.attrs(({ attrs }) => ({
  className: 'tooltip',
  attrs: attrs || {},
}))`
  pointer-events: none;
  position: fixed;
  z-index: 999;

  ${
    (props) => props.show && css`
      .tooltip__content {
        opacity: 1;
        transform: scale(1);
      }
    `
  }

  ${
    (props) => (
    props.direction === 'top' && css`
      .tooltip__content {
        transform-origin: 50% 100%;

        .tooltip__pointer {
          top: 100%;
          left: 50%;
          border-top: 5px solid #18191c;
          transform: translateX(-50%);
        }
      }
    `) || (
    props.direction === 'left' && css`
      .tooltip__content {
        transform-origin: 100% 50%;

        .tooltip__pointer {
          top: 50%;
          left: 100%;
          border-left: 5px solid #18191c;
          transform: translateY(-50%);
        }
      }
    `) || (
    props.direction === 'right' && css`
      .tooltip__content {
        transform-origin: 0 50%;

        .tooltip__pointer {
          top: 50%;
          right: 100%;
          border-right: 5px solid #18191c;
          transform: translateY(-50%);
        }
      }
    `) || (
    props.direction === 'bottom' && css`
      .tooltip__content {
        transform-origin: 50% 0;

        .tooltip__pointer {
          left: 50%;
          bottom: 100%;
          border-bottom: 5px solid #18191c;
          transform: translateX(-50%);
        }
      }
    `)
  }
`

export const TooltipContent = styled.div.attrs(({ attrs }) => ({
  className: 'tooltip__content',
  attrs: attrs || {},
}))`
  background: #18191c;
  border-radius: 5px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.24);
  color: #dcddde;
  font-size: 14px;
  font-weight: 500;
  line-height: 16px;
  max-width: 190px;
  opacity: 0;
  overflow-wrap: break-word;
  padding: 8px 12px;
  text-transform: none;
  transition: 50ms ease-out;
  transition-property: opacity, transform;
  transform: scale(.95);
  user-select: none;
  width: max-content;
  will-change: opacity, transform;
`

export const TooltipPointer = styled.div.attrs(({ attrs }) => ({
  className: 'tooltip__pointer',
  attrs: attrs || {},
}))`
  border: 5px solid transparent;
  position: absolute;
`
