import styled from 'styled-components'

import {
  Border,
  Customization,
  FlexContainer,
  FlexItem,
  Layout,
  Sizing,
  Spacing
} from '@styles'

export const SBox = styled.div.attrs(({ attrs }) => ({
  className: 'box',
  attrs: attrs || {},
}))`
  color: inherit;
  font-family: inherit;
  font-size: inherit;
  font-weight: inherit;
  font-style: inherit;
  line-height: inherit;
  text-align: inherit;
  text-decoration: inherit;
  text-transform: inherit;
  text-overflow: inherit;
  user-select: inherit;
  white-space: inherit;
  word-break: inherit;

  ${({ attrs }) => Border(attrs)};
  ${({ attrs }) => Customization(attrs)};
  ${({ attrs }) => FlexContainer(attrs)};
  ${({ attrs }) => FlexItem(attrs)};
  ${({ attrs }) => Layout(attrs)};
  ${({ attrs }) => Sizing(attrs)};
  ${({ attrs }) => Spacing(attrs)};
`
