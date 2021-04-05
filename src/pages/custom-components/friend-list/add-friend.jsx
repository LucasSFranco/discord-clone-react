import React, { useState } from 'react'

import {
  Box,
  Button,
  Error,
  Strong,
  Text,
} from '@components'

import { useAddFriend } from '@hooks'
import { Self, CustomInput, Mask } from './styles/add-friend'

function AddFriend() {
  const [handleSendFriendRequest, successMessage, errorMessage] = useAddFriend()

  const [value, setValue] = useState('')

  const tagRegex = /(.+?(?=#))?(#)?(\d)?(\d)?(\d)?(\d)?(.)*/
  const tagReplacer = (match, username, hashtag, n1, n2, n3, n4) => {
    if (!value) return ''
    if (!username) return match
    return (
      username
      + (hashtag || '#')
      + (n1 || '0')
      + (n2 || '0')
      + (n3 || '0')
      + (n4 || '0')
    )
  }

  const valueRegex = /(#)?(.+?(?=#))?(#)?(\d)?(\d)?(\d)?(\d)?(.)*/
  const valueReplacer = (match, invalidHashtag, username, hashtag, n1, n2, n3, n4) => {
    if (invalidHashtag) return ''
    if (!username) return match
    return (
      username
      + (hashtag || '')
      + (n1 || '')
      + (n2 || '')
      + (n3 || '')
      + (n4 || '')
    )
  }

  return (
    <Self as={Box}>
      <Strong> Add Friend </Strong>
      {
        (errorMessage && <Error>{errorMessage}</Error>)
        || (successMessage && <Error attrs={{ c: '#43b581' }}>{successMessage}</Error>)
        || <Text>You can add a friend with their Discord Tag. It's cAsE sEnSitIvE!</Text>
      }
      <CustomInput>
        <Box>
          <input
            placeholder="Enter a Username#0000"
            value={value}
            onChange={({ target }) => setValue(target.value.replace(valueRegex, valueReplacer))}
          />
          <Mask>
            {(`${value}#0000`).replace(tagRegex, tagReplacer)}
          </Mask>
        </Box>
        <Button
          primary
          sm
          disabled={!value}
          onClick={() => handleSendFriendRequest(value)}
        >
          Send Friend Request
        </Button>
      </CustomInput>
    </Self>
  )
}

export default AddFriend
