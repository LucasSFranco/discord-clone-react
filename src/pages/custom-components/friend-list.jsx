/* eslint-disable */
import React from 'react'
import { useSelector } from 'react-redux'

import { selectTab } from '@store/friend-list-slice'

import { Self } from './styles/friend-list'

import { Box } from '@components'

import {
  AddFriend,
  AllFriends,
  Blocked,
  Pending
} from './friend-list/'

function FriendList() {
  const selectedTab = useSelector(selectTab)

  return (
    <Self as={Box}>
      {
        (selectedTab === 'add-friend' && (
          <AddFriend />
        )) ||
        (selectedTab === 'all-friends' && (
          <AllFriends />
        )) ||
        (selectedTab === 'pending' && (
          <Pending />
        )) ||
        (selectedTab === 'blocked' && (
          <Blocked />
        ))
      }
    </Self>
  )
}

export default FriendList
