import { css } from 'styled-components'

const FlexContainer = ({
  fld, flw,
  jc, ji,
  ac, ai,
  pc, pi,
}) => css`
  flex-direction: ${fld};
  flex-wrap: ${flw};
  justify-content: ${jc};
  justify-items: ${ji};
  align-content: ${ac};
  align-items: ${ai};
  place-content: ${pc};
  place-items: ${pi};
`

export default FlexContainer
