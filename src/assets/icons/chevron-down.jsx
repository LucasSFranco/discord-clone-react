import { Box } from '@components'

function ChevronDown({ attrs, ...otherProps }) {
  return (
    <Box
      as='svg'
      width='24'
      height='24'
      className='chevron-down'
      viewBox='0 0 24 24'
      attrs={attrs}
      {...otherProps}
    >
      <path
        clipRule='evenodd'
        fill='currentColor'
        fillRule='evenodd'
        d='M16.59 8.59004L12 13.17L7.41 8.59004L6 10L12 16L18 10L16.59 8.59004Z'
      />
    </Box>
  )
}

export default ChevronDown
