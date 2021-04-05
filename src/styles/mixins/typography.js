import { css } from 'styled-components'

const Typography = ({
  d,
  ff, fs, fw,
  lh,
  ta, td, tt, to,
  ws, wb,
  us,
  i,
}) => css`
  display: ${d};
  font-family: ${ff};
  font-size: ${(!isNaN(fs) && `${fs}px`) || fs};
  font-weight: ${fw};

  line-height: ${(!isNaN(lh) && `${lh}px`) || lh};

  text-align: ${ta};
  text-decoration: ${td};
  text-transform: ${tt};
  text-overflow: ${to};

  white-space: ${ws};
  word-break: ${wb};

  user-select: ${us};

  font-style: ${i && 'italic'};
`

export default Typography
