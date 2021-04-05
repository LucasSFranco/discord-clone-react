import { css } from 'styled-components'

const Layout = ({
  d,
  of, ofx, ofy,
  pos, t, l, r, b,
  vis,
  zi,
  csr,
  pe,
}) => css`
  display: ${d};
  overflow: ${of};
  overflow-x: ${ofx};
  overflow-y: ${ofy};
  position: ${pos};
  top: ${(!isNaN(t) && `${t}px`) || t};
  left: ${(!isNaN(l) && `${l}px`) || l};
  right: ${(!isNaN(r) && `${r}px`) || r};
  bottom: ${(!isNaN(b) && `${b}px`) || b};
  visibility: ${vis};
  z-index: ${zi};
  cursor: ${csr};
  pointer-events: ${pe};
`

export default Layout
