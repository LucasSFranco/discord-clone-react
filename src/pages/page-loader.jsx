import React from 'react'

import { Box } from '@components'

import {
  Option1,
  Option2,
  Option3,
} from '@assets'

function PageLoader() {
  return (
    <Box attrs={{
      s: '100%',
      d: 'flex',
      ai: 'center',
      jc: 'center',
      bg: '#2f3136'
    }}>
      <Box
        attrs={{ s: 200 }}
        as='video'
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={Option1} type='video/webm' />
        <source src={Option2} type='video/mp4' />
        <img src={Option3} alt='' />
      </Box>
    </Box>
  )
}

export default PageLoader
