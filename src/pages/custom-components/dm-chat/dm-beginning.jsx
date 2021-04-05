import { useEffect } from 'react'

import { selectDM } from '@store/dm-slice'
import { useSelector } from 'react-redux'

import {
  acceptFriendRequest,
  blockUser,
  cancelFriendRequest,
  ignoreFriendRequest,
  removeFriend,
  sendFriendRequest,
  unblockUser,
} from '@services'

import {
  Avatar,
  Box,
  Button,
  Strong,
  Text,
  Title
} from '@components'
import { Self } from './styles/dm-beginning'

import { useAuthUser } from '@hooks'

function DMBeginning() {
  const authUser = useAuthUser()

  const selectedDM = useSelector(selectDM)

  return (
    <Self as={Box}>
      <Avatar src={selectedDM?.avatar} />
      <Title> {selectedDM?.username} </Title>
      <Text>
        This is the beginning of your direct message history with <Strong> @{selectedDM?.username} </Strong>.
      </Text>
      <Box>
        {
          (
            selectedDM && selectedDM.pending === null && selectedDM.blocked === false &&
            <Button primary xs onClick={() => removeFriend(authUser, selectedDM)}>
              Remove Friend
            </Button>
          ) || (
            selectedDM && selectedDM.pending === 'incoming' &&
            <>
              <Button primary xs onClick={() => acceptFriendRequest(authUser, selectedDM)}>
                Accept
              </Button>
              <Button secondary diff xs onClick={() => ignoreFriendRequest(authUser, selectedDM)}>
                Ignore
              </Button>
            </>
          ) || (
            selectedDM && selectedDM.pending === 'outgoing' &&
            <Button primary xs disabled>
              Friend Request Sent
            </Button>
          ) || (
            selectedDM && !selectedDM.pending && !selectedDM.blocked &&
            <Button primary xs onClick={() => sendFriendRequest(authUser, selectedDM)}>
              Add Friend
            </Button>
          )
        }

        {
          (
            selectedDM && selectedDM.blocked === true &&
            <Button secondary diff xs onClick={() => unblockUser(authUser, selectedDM)}>
              Unblock
            </Button>
          ) || (
            selectedDM && selectedDM.blocked === false &&
            <Button secondary diff xs> Block </Button>
          )
        }

      </Box>
    </Self>
  );
}

export default DMBeginning;
