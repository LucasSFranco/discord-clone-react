import { useAuthUser, usePending } from '@hooks'

import {
  cancelFriendRequest,
  acceptFriendRequest,
  ignoreFriendRequest
} from '@services'

import {
  Avatar,
  Box,
  Dropdown,
  Label,
  Scrollbox,
  Separator,
  StackedList,
  Strong,
  Subtext,
  Text,
  Tooltip,
} from '@components'

import {
  Check,
  Times,
} from '@assets'

import { Self } from './styles/pending'

function Pending() {
  const authUser = useAuthUser()

  const [pendents] = usePending(authUser)

  return (
    <Self
      as={Scrollbox}
    >
      <StackedList>
        <Label> Pending — {pendents?.length} </Label>

        {
          pendents.map((pendent) => (
            pendent?.pending === 'incoming' ? (
              <StackedList.Item key={pendent.id}>
                <Avatar attrs={{ mr: 12 }} src={pendent.avatar} />
                <Box attrs={{
                  d: 'flex', fld: 'column', of: 'hidden', flg: 1,
                }}
                >
                  <Strong attrs={{ fw: 700, lh: 17 }}>
                    {pendent.username}
                    <Subtext attrs={{ c: '#b9bbbe' }}>
                      #{pendent.tag}
                    </Subtext>
                  </Strong>
                  <Text attrs={{ fs: 14, lh: 20, us: 'none' }}>
                    Incoming Friend Request
                  </Text>
                </Box>
                <StackedList.Button green onClick={() => acceptFriendRequest(authUser, pendent)}>
                  <Check attrs={{ s: 20 }} />
                  <Tooltip direction="top"> Accept </Tooltip>
                </StackedList.Button>
                <StackedList.Button red onClick={() => ignoreFriendRequest(authUser, pendent)}>
                  <Times attrs={{ s: 20 }} />
                  <Tooltip direction="top"> Ignore </Tooltip>
                </StackedList.Button>

                <Dropdown show={false}>
                  <Dropdown.Item>
                    Message
                  </Dropdown.Item>
                  <Separator />
                  <Dropdown.Item>
                    Add Friend
                  </Dropdown.Item>
                  <Dropdown.Item>
                    Block
                  </Dropdown.Item>
                </Dropdown>
              </StackedList.Item>
            ) : (
              <StackedList.Item key={pendent.id}>
                <Avatar attrs={{ mr: 12 }} src={pendent.avatar} />
                <Box attrs={{
                  d: 'flex', fld: 'column', of: 'hidden', flg: 1,
                }}
                >
                  <Strong attrs={{ fw: 700, lh: 17 }}>
                    {pendent.username}
                    <Subtext attrs={{ c: '#b9bbbe' }}>
                      #{pendent.tag}
                    </Subtext>
                  </Strong>
                  <Text attrs={{ fs: 14, lh: 20, us: 'none' }}>
                    Outgoing Friend Request
                  </Text>
                </Box>
                <StackedList.Button red onClick={() => cancelFriendRequest(authUser, pendent)}>
                  <Times attrs={{ s: 20 }} />
                  <Tooltip direction="top"> Cancel </Tooltip>
                </StackedList.Button>
              </StackedList.Item>
            )
          ))
        }

      </StackedList>
    </Self>
  )
}

export default Pending
