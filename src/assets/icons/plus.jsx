import { Box } from '@components'

function Plus({ attrs, ...otherProps }) {
  return (
    <Box
      as='svg'
      width='24'
      height='24'
      className='plus'
      viewBox='0 0 24 24'
      attrs={attrs}
      {...otherProps}
    >
      <path
        fill="currentColor"
        d="M20 11.1111H12.8889V4H11.1111V11.1111H4V12.8889H11.1111V20H12.8889V12.8889H20V11.1111Z"
      />
    </Box>
  )
}

export default Plus
