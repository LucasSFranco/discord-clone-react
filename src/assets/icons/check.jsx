import { Box } from '@components'

function Check({ attrs, ...otherProps }) {
  return (
    <Box
      as='svg'
      width='24'
      height='24'
      className='check'
      viewBox='0 0 24 24'
      attrs={attrs}
      {...otherProps}
    >
      <path
        clipRule='evenodd'
        fill='currentColor'
        fillRule='evenodd'
        d='M8.99991 16.17L4.82991 12L3.40991 13.41L8.99991 19L20.9999 7.00003L19.5899 5.59003L8.99991 16.17Z'
      />
    </Box>
  )
}

export default Check