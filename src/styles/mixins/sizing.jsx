import { css } from 'styled-components'

export default ({
  s,
  w, maxw, minw,
  h, maxh, minh,
}) => css`
  width: ${
    ((!isNaN(w) && `${w}px`) || w) ||
    ((!isNaN(s) && `${s}px`) || s)
  };
  max-width: ${(!isNaN(maxw) && `${maxw}px`) || maxw};
  min-width: ${(!isNaN(minw) && `${minw}px`) || minw};

  height: ${
    ((!isNaN(h) && `${h}px`) || h) ||
    ((!isNaN(s) && `${s}px`) || s)
  };
  max-height: ${(!isNaN(maxh) && `${maxh}px`) || maxh};
  min-height: ${(!isNaN(minh) && `${minh}px`) || minh};
`
