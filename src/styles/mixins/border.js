import { css } from 'styled-components'

const Border = ({
  rd, rdt, rdl, rdr, rdb, rdtl, rdtr, rdbl, rdbr,
  bdc, bds, bdw,
}) => css`
  border-radius: ${(!isNaN(rd) && `${rd}px`) || rd};
  border-top-left-radius: ${
    ((!isNaN(rdtl) && `${rdtl}px`) || rdtl) ||
    ((!isNaN(rdt) && `${rdt}px`) || rdt) ||
    ((!isNaN(rdl) && `${rdl}px`) || rdl)
  };
  border-top-right-radius: ${
    ((!isNaN(rdtr) && `${rdtr}px`) || rdtr) ||
    ((!isNaN(rdt) && `${rdt}px`) || rdt) ||
    ((!isNaN(rdr) && `${rdr}px`) || rdr)
  };
  border-bottom-left-radius: ${
    ((!isNaN(rdbl) && `${rdbl}px`) || rdbl) ||
    ((!isNaN(rdb) && `${rdb}px`) || rdb) ||
    ((!isNaN(rdl) && `${rdl}px`) || rdl)
  };
  border-bottom-right-radius: ${
    ((!isNaN(rdbr) && `${rdbr}px`) || rdbr) ||
    ((!isNaN(rdb) && `${rdb}px`) || rdb) ||
    ((!isNaN(rdr) && `${rdr}px`) || rdr)
  };

  border: ${bdc && `1px solid ${bdc}`};
  border-style: ${bds};
  border-width: ${(!isNaN(bdw) && `${bdw}px`) || bdw};
`

export default Border
