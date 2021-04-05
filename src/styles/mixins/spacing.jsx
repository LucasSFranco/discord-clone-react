import { css } from 'styled-components'

export default ({
  p, px, py, pt, pl, pr, pb,
  m, mx, my, mt, ml, mr, mb,
  sx, sy,
}) => css`
  padding: ${(!isNaN(p) && `${p}px`) || p};
  padding-top: ${
    ((!isNaN(pt) && `${pt}px`) || pt) ||
    ((!isNaN(py) && `${py}px`) || py)
  };
  padding-left: ${
    ((!isNaN(pl) && `${pl}px`) || pl) ||
    ((!isNaN(px) && `${px}px`) || px)
  };
  padding-right: ${
    ((!isNaN(pr) && `${pr}px`) || pr) ||
    ((!isNaN(px) && `${px}px`) || px)
  };
  padding-bottom: ${
    ((!isNaN(pb) && `${pb}px`) || pb) ||
    ((!isNaN(py) && `${py}px`) || py)
  };

  margin: ${(!isNaN(m) && `${m}px`) || m};
  margin-top: ${
    ((!isNaN(mt) && `${mt}px`) || mt) ||
    ((!isNaN(my) && `${my}px`) || my)
  };
  margin-left: ${
    ((!isNaN(ml) && `${ml}px`) || ml) ||
    ((!isNaN(mx) && `${mx}px`) || mx)
  };
  margin-right: ${
    ((!isNaN(mr) && `${mr}px`) || mr) ||
    ((!isNaN(mx) && `${mx}px`) || mx)
  };
  margin-bottom: ${
    ((!isNaN(mb) && `${mb}px`) || mb) ||
    ((!isNaN(my) && `${my}px`) || my)
  };

  > * + * {
    margin-top: ${(!isNaN(sy) && `${sy}px`) || sy};
    margin-left: ${(!isNaN(sx) && `${sx}px`) || sx};
  }
`
