import styled, { css, keyframes } from 'styled-components'

import {
  Spacing
} from '@styles'

const spinnerPulsingEllipsis = keyframes`
  0% {
    opacity: 1;
    transform: scale(1);
  }

  50% {
    opacity: .3;
    transform: scale(.8);
  }

  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const SButton = styled.button.attrs(({ attrs }) => ({
  className: 'button',
  attrs: attrs || {},
}))`
  width: min-content;

  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 3px;
  color: #ffffff;
  cursor: pointer;
  font-weight: 600;
  padding: 0 16px;
  transition: background-color .17s ease;
  user-select: none;
  white-space: nowrap;

  &:disabled {
    opacity: .5;
    cursor: not-allowed;
  }

  ${
    (props) => (
    props.lg && css`
      font-size: 16px;
	    height: 44px;
      min-width: 130px;
    `) || (
    props.md && css`
      font-size: 14px;
	    height: 38px;
      min-width: 96px;
    `) || (
    props.sm && css`
      font-size: 14px;
	    height: 32px;
      min-width: 60px;
    `) || (
    props.xs && css`
      font-size: 14px;
      font-weight: 500;
	    height: 24px;
      min-width: 52px;
    `)
  }

  ${
    (props) => (
    (props.primary && props.outlined) && css`
      background: none;
      border: 1px solid #7289da;
      color: #7289da;
      font-weight: 400;

      &:active {
        background: rgba(114, 137, 218, 0.1);
      }
    `) || (
    (props.secondary && props.outlined) && css`
      background: none;
      border: 1px solid #747f8d;
      color: #747f8d;
      font-weight: 400;

      &:active {
        background: rgba(116, 127, 141, 0.1);
      }
    `) || (
    (props.danger && props.outlined) && css`
      background: none;
      border: 1px solid #f04747;
      color: #f04747;
      font-weight: 400;

      &:active {
        background: rgba(240, 71, 71, 0.1);
      }
    `) || (
    props.primary && css`
      background: #7289da;

      &:hover {
        background: #677bc4;
      }

      &:active {
        background: #5b6eae;
      }

      &:disabled {
        background: #7289da;
      }
    `) || (
    props.secondary && props.diff && css`
      background: #4f545c;
      color: #f6f6f7;

      &:hover {
        background: #72767d;
      }
    `) || (
    props.secondary && css`
      background: #747f8d;

      &:hover {
        background: #68727f;
      }

      &:active {
        background: #5d6671;
      }

      &:disabled {
        background: #747f8d;
      }
    `) || (
    props.danger && css`
      background: #f04747;

      &:hover {
        background: #d84040;
      }

      &:active {
        background: #c03939;
      }

      &:disabled {
        background: #f04747;
      }
    `) || (
    props.link && css`
      background: none;

      &:hover {
        text-decoration: underline;
      }
    `)
  }


  ${
    (props) => props.full && css`
      width: 100%;
    `
  }

  ${({ attrs }) => Spacing(attrs)};
`

export const SButtonLoader = styled.div.attrs(({ attrs }) => ({
  className: 'button__loader',
  attrs: attrs || {},
}))`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  span {
    width: 6px;
    height: 6px;

    animation:
      ${spinnerPulsingEllipsis}
      1.4s
      ease-in-out
      infinite;
    background-color: #f8f9f9;
    border-radius: 3px;
    display: inline-block;
    margin-right: 2px;
    opacity: .3;

    &:nth-child(1) { animation-delay: 0ms;   }
    &:nth-child(2) { animation-delay: 200ms; }
    &:nth-child(3) { animation-delay: 400ms; }
  }
`
