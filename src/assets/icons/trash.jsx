import { Box } from '@components'

function Trash({ attrs, ...otherProps }) {
  return (
    <Box
      as='svg'
      width='24'
      height='24'
      className='trash'
      viewBox='0 0 24 24'
      attrs={attrs}
      {...otherProps}
    >
      <path
        fill='currentColor'
        d='M15 3.999V2H9V3.999H3V5.999H21V3.999H15Z'
      />
      <path
        fill='currentColor'
        d='M5 6.99902V18.999C5 20.101 5.897 20.999 7 20.999H17C18.103 20.999 19 20.101 19 18.999V6.99902H5ZM11 17H9V11H11V17ZM15 17H13V11H15V17Z'
      />
    </Box>
  )
}

export default Trash
