import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { useAuthUser } from '@hooks'

import { getUserById } from '@services'
import { changeDM } from '@store/dm-slice'
import { closePopup } from '@store/popup-slice'
import { closeModal } from '@store/modal-slice'
import { closePanel } from '@store/panel-slice'

import { Box } from '@components'

import {
  ChatInput,
  DMChat,
  DMHeader,
  DMList,
  FriendList,
  FriendListHeader,
  GuildList,
  JoinOrCreateGuildModal,
  UserInfo,
  UserSettingsPanel,
  LogOutModal,
} from './custom-components'

function Home() {
  const { userId } = useParams()
  const authUser = useAuthUser()

  const dispatch = useDispatch()

  useEffect(async () => {
    if(userId && authUser) {
      getUserById(authUser, userId)
    }

    const dispatchClosePopup = () => {
      dispatch(closePopup())
    }

    window.addEventListener('click', dispatchClosePopup)
    window.addEventListener('resize', dispatchClosePopup)

    return () => {
      window.removeEventListener('click', dispatchClosePopup)
      window.removeEventListener('resize', dispatchClosePopup)

      dispatch(closePopup())
      dispatch(closeModal())
      dispatch(closePanel())

    }
  }, [dispatch, authUser])

  return (
    <Box attrs={{ d: 'flex', f: 'hidden', s: '100%' }}>
      <GuildList />

      <Box attrs={{
        w: 240, d: 'flex', fld: 'column', fls: 0,
      }}
      >
        <DMList />
        <UserInfo />
      </Box>

      <Box attrs={{
        d: 'flex', fld: 'column', bg: '#36393f', flg: 1, of: 'hidden',
      }}
      >
        {
          userId ? (
            <>
              <DMHeader />
              <DMChat />
              <ChatInput />
            </>
          ) : (
            <>
              <FriendListHeader />
              <FriendList />
            </>
          )
        }
      </Box>

      <JoinOrCreateGuildModal />

      <UserSettingsPanel />
      <LogOutModal />
    </Box>
  )
}

export default Home
