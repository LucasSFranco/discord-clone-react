import { useAuthUser, useBlocked } from '@hooks'
import { unblockUser } from '@services'

import {
  Avatar,
  Box,
  Label,
  Scrollbox,
  StackedList,
  Strong,
  Subtext,
  Text,
  Tooltip,
} from '@components'

import {
  UserTimes,
} from '@assets'
import { Self } from './styles/blocked'

function Blocked() {
  const authUser = useAuthUser()

  const [blockedUsers] = useBlocked(authUser)

  return (
    <Self
      as={Scrollbox}
    >
      <StackedList>
        <Label> Blocked — {blockedUsers.length} </Label>

        {
          blockedUsers.map((blockedUser) => (
            <StackedList.Item key={blockedUser.id}>
              <Avatar attrs={{ mr: 12 }} src={blockedUser.avatar} />
              <Box attrs={{
                d: 'flex', fld: 'column', of: 'hidden', flg: 1,
              }}
              >
                <Strong attrs={{ fw: 700, lh: 17 }}>
                  {blockedUser.username}
                  <Subtext attrs={{ c: '#b9bbbe' }}> #{blockedUser.tag} </Subtext>
                </Strong>
                <Text attrs={{ fs: 14, lh: 20, us: 'none' }}>
                  Blocked
                </Text>
              </Box>
              <StackedList.Button red onClick={() => unblockUser(authUser, blockedUser)}>
                <UserTimes attrs={{ s: 20 }} />
                <Tooltip direction="top"> Unblock </Tooltip>
              </StackedList.Button>
            </StackedList.Item>
          ))
        }

      </StackedList>
    </Self>
  )
}

export default Blocked
