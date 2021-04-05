import { Box } from '@components'

function PlusSM({ attrs, ...otherProps }) {
  return (
    <Box
      as='svg'
      width='18'
      height='18'
      className='plus-sm'
      viewBox='0 0 18 18'
      attrs={attrs}
      {...otherProps}
    >
      <polygon
        fill="currentColor"
        fillRule="nonzero"
        points="15 10 10 10 10 15 8 15 8 10 3 10 3 8 8 8 8 3 10 3 10 8 15 8"
      />
    </Box>
  )
}

export default PlusSM


