/* eslint-disable */
import React from 'react'

import { Self, Header, Toolbox } from './styles/message'

import { Avatar, Strong, TextArea, Image, IconButton, Tooltip } from '@components'

import { Pen, Trash } from '@assets'

function Message({ sequence, message, ...otherProps }) {
  return (
    <Self sequence={sequence} {...otherProps}>
      <Toolbox>
        <IconButton backgrounded>
          <Pen />
          <Tooltip direction='top'> Edit </Tooltip>
        </IconButton>
        <IconButton backgrounded red>
          <Trash />
          <Tooltip direction='top'> Delete </Tooltip>
        </IconButton>
      </Toolbox>
      {
        !sequence ? (
          <Header>
            <Avatar />
            <Strong> Username </Strong>
            <time> date time </time>
          </Header>
        ) : (
          <time> time </time>
        )
      }
      <TextArea editable={false} content={'Here goes all the text content.'} />
      {
        Math.round(Math.random() * 0.75) ? (
          <Image src='https://site.groupe-psa.com/content/uploads/sites/9/2016/12/white-background-2.jpg' />
        ) : null
      }
    </Self>
  )
}

export default Message
