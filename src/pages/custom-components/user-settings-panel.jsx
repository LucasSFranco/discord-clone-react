/* eslint-disable */
import React from 'react'
import { useDispatch } from 'react-redux'

import { openModal } from '@store/modal-slice'

import { Self } from './styles/user-settings-panel'

import { Link, Box, Panel, Avatar, Sidebar, Label, Subtext, Button, Scrollbox, Separator, Strong, Text, ContextMenu  } from '@components'

import { EllipsisHorizontal, PasswordAndAuthenticationImage } from '@assets'

function UserSettingPanel() {

  const dispatch = useDispatch()
  const dispatchOpenModal = (id) => {
    dispatch(openModal(id))
  }

  return (
    <Panel id='user-settings-panel'>
      <Sidebar>
        <Box>
          <Sidebar.Header> User settings </Sidebar.Header>
            <Sidebar.Item> My Account </Sidebar.Item>
            <Separator />
            <Separator />
            <Sidebar.Item red onClick={() => dispatchOpenModal('logout-modal')}> Log Out </Sidebar.Item>
        </Box>
      </Sidebar>
      <Box>
        <Scrollbox>
          <Box>

            <Strong attrs={{ mb: 20, tt: 'uppercase', fw: 700 }}> My account </Strong>

            <Box attrs={{ rd: 8, bg: '#2f3136', p: 16}}>
              <Box attrs={{  d: 'flex', ai: 'center' }}>

                <Avatar attrs={{ s: 80, mr: 16 }} />
                <Box attrs={{ d: 'flex', ai: 'baseline', flg: 1, of: 'hidden' }}>
                  <Strong attrs={{ fs: 20, lh: 26 }}> Username </Strong>
                  <Text attrs={{ fw: 400, us: 'none' }}> #0000 </Text>
                </Box>
                <Box attrs={{ csr: 'pointer', c: '#b9bbbe', mx: 16 }}>
                  <EllipsisHorizontal />
                  <ContextMenu>
                    <ContextMenu.Item> Change Avatar </ContextMenu.Item>
                    <ContextMenu.Item red> Delete Avatar </ContextMenu.Item>
                  </ContextMenu>
                </Box>
              </Box>

              <Box attrs={{ rd: 8, bg: '#36393f', sy: 24, p: 16, mt: 16 }}>
                <Box attrs={{ d: 'flex', ai: 'center'}}>
                  <Box attrs={{ flg: 1 }}>
                    <Label attrs={{ d: 'block', mb: 4 }}>Username</Label>
                    <Box attrs={{ d: 'flex', ai: 'baseline' }}>
                      <Strong attrs={{ fw: 400, lh: 20 }}> Username </Strong>
                      <Text attrs={{ lh: 20, fw: 400, us: 'none' }}> #0000 </Text>
                    </Box>
                  </Box>
                  <Button sm secondary> Edit </Button>
                </Box>
                <Box attrs={{ d: 'flex', ai: 'center'}}>
                  <Box attrs={{ flg: 1 }}>
                    <Label attrs={{ d: 'block', mb: 4 }}>Email</Label>
                    <Box attrs={{ d: 'flex', ai: 'baseline' }}>
                      <Strong attrs={{ fw: 400, lh: 20 }}> *********@gmail.com </Strong>
                      <Link attrs={{ c: '#00b0f4', lh: 16, p: '2px 4px' }}> Reveal </Link>
                    </Box>
                  </Box>
                  <Button sm secondary> Edit </Button>
                </Box>
              </Box>

            </Box>

            <Separator />

            <Strong attrs={{ mb: 20, tt: 'uppercase', fw: 700 }}> Password and authentication </Strong>
            <Box attrs={{ d: 'flex', sx: 20, ai: 'flex-end' }}>
              <Box attrs={{ sy: 16 }}>

                <Button sm primary> Change Password </Button>

                <Subtext attrs={{ fw: 400, c: '#b9bbbe', flg: 1, lh: 20 }}>
                  Change your password if you are not felling protected with the current one. Remember, we are not responsible for lost or stolen accounts.
                </Subtext>
              </Box>
              <Box attrs={{ fl: '0 1 323px' }}>
                <Box as='img' attrs={{ w: '100%' }} src={PasswordAndAuthenticationImage} alt='' style={{userSelect: 'none'}}/>
              </Box>
            </Box>

            <Separator />

            <Label attrs={{ d: 'block' }}> Account removal </Label>
            <Subtext attrs={{ fw: 400, c: '#b9bbbe', mb: 16, lh: 20 }}>
              Deleting your account means you can't recover it anymore.
            </Subtext>
            <Button sm danger outlined> Delete Account </Button>
          </Box>
          <Panel.Closer />
        </Scrollbox>
      </Box>
    </Panel>
  )
}

export default UserSettingPanel
