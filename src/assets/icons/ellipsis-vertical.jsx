import { Box } from '@components'

function EllipsisVertical({ attrs, ...otherProps }) {
  return (
    <Box
      as='svg'
      width='24'
      height='24'
      className='ellipsis-vertical'
      viewBox='0 0 24 24'
      attrs={attrs}
      {...otherProps}
    >
      <g fill='none' fillRule='evenodd'>
        <path
          d='M24 0v24H0V0z'
        />
        <path
          fill='currentColor'
          d='M12 16c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2zm0-6c1.1045695 0 2 .8954305 2 2s-.8954305 2-2 2-2-.8954305-2-2 .8954305-2 2-2z'
        />
      </g>
    </Box>
  )
}

export default EllipsisVertical


