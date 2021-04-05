import { useAuthUser, useAllFriends, useDirectMessage } from '@hooks'
import { removeFriend } from '@services'

import {
  Avatar,
  Box,
  ContextMenu,
  Label,
  Scrollbox,
  StackedList,
  Strong,
  Subtext,
  Tooltip,
} from '@components'

import {
  Dialog,
  EllipsisVertical,
} from '@assets'
import { Self } from './styles/all-friends'

function AllFriends() {
  const directMessage = useDirectMessage()

  const authUser = useAuthUser()

  const [friends] = useAllFriends(authUser)

  return (
    <Self as={Scrollbox}>
      <StackedList>
        <Label> All Friends — {friends.length} </Label>

        {
          friends.map((friend) => (
            <StackedList.Item key={friend.id}>
              <Avatar attrs={{ mr: 12 }} src={friend.avatar} />
              <Box attrs={{
                d: 'flex', fld: 'column', of: 'hidden', flg: 1,
              }}
              >
                <Strong attrs={{ fw: 700, lh: 17 }}>
                  {friend.username}
                  <Subtext attrs={{ c: '#b9bbbe' }}> #{friend.tag} </Subtext>
                </Strong>
              </Box>
              <StackedList.Button onClick={() => directMessage(friend.id)}>
                <Dialog attrs={{ s: 20 }} />
                <Tooltip direction="top"> Message </Tooltip>
              </StackedList.Button>
              <Box attrs={{ pe: 'none' }}>
                <StackedList.Button>
                  <EllipsisVertical attrs={{ s: 20 }} />
                  <Tooltip direction="top"> More </Tooltip>
                </StackedList.Button>
                <ContextMenu id={`more-dropdown-${friend.id}`}>
                  <ContextMenu.Item red onMouseUp={() => removeFriend(authUser, friend)}>
                    Remove Friend
                  </ContextMenu.Item>
                </ContextMenu>
              </Box>
            </StackedList.Item>
          ))
        }

      </StackedList>
    </Self>
  )
}

export default AllFriends
