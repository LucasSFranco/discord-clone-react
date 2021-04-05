import { css } from 'styled-components'

const FlexItem = ({
  fl, flb, flg, fls,
  js, as, ps,
  o,
}) => css`
  flex: ${fl};
  flex-basis: ${(!isNaN(flb) && `${flb}px`) || flb};
  flex-grow: ${flg};
  flex-shrink: ${fls};
  justify-self: ${js};
  align-self: ${as};
  place-self: ${ps};
  order: ${o};
`

export default FlexItem
