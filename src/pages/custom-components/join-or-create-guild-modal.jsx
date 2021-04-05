/* eslint-disable */
import React, { useEffect, useRef, useState } from 'react'

import { Self } from './styles/join-or-create-guild-modal'

import {
  Box,
  Button,
  Card,
  Error,
  Input,
  InputGroup,
  Label,
  Modal,
  Subtitle,
  ProgressButton,
  Text,
  Title,
} from '@components'

import { ChevronRightImage, CreateMyOwnImage } from '@assets'

function JoinOrCreateGuildModal() {
  const [currPanelId, setCurrPanelId] = useState('join-or-create-panel')

  const cardRef = useRef()

  const changePanel = (prevPanelId, nextPanelId) => {
    const currPanel = document.getElementById(currPanelId)

    if(prevPanelId) {
      const prevPanel = document.getElementById(prevPanelId)

      currPanel.style.transform = 'translateX(100%)'
      prevPanel.style.transform = 'translateX(0)'

      setCurrPanelId(prevPanelId)
    }
    if(nextPanelId) {
      const nextPanel = document.getElementById(nextPanelId)

      currPanel.style.transform = 'translateX(-100%)'
      nextPanel.style.transform = 'translateX(0)'

      setCurrPanelId(nextPanelId)

    }
  }

  useEffect(() => {
    const { current: card } = cardRef
    const currPanel = document.getElementById(currPanelId)

    const currPanelRect = currPanel.getBoundingClientRect()

    card.style.height = `${currPanelRect.height}px`
  }, [currPanelId])

  return (
    <Self as={Modal} id='join-or-create-guild-modal'>
      <Card
        forwardRef={cardRef}
        as={Box}
        attrs={{ bg: '#ffffff', pos: 'relative' }}
      >

        <Box id='join-or-create-panel' attrs={{ pos: 'absolute', w: 440 }} style={{ transform: 'translateX(0)' }}>
          <Box attrs={{ p: 16, pt: 24 }}>
            <Title attrs={{ fw: 800, c: '#060607' }}> Create a server </Title>
            <Subtitle attrs={{ c: '#4f5660', mt: 8 }}>
              Your server is where you and your friends hang out. Make yours or start talking.
            </Subtitle>
            <Box attrs={{ mt: 24 }}>
              <ProgressButton onClick={() => changePanel(null, 'create-panel')}>
                <img src={CreateMyOwnImage} alt='' />
                <Box attrs={{ flg: 1 }}> Create My Own </Box>
                <img src={ChevronRightImage} alt='' />
              </ProgressButton>
            </Box>
          </Box>
          <Box attrs={{ bg: '#f6f6f7', p: 16 }}>
            <Title attrs={{ c: '#2e3338', fs: 20, lh: 24, mb: 8 }}>
              Have an invite already?
            </Title>
            <Button secondary md full onClick={() => changePanel(null, 'join-panel')}> Join a Server </Button>
          </Box>
        </Box>

        <Box id='create-panel' attrs={{ pos: 'absolute', w: 440 }} style={{ transform: 'translateX(100%)' }}>
          <Box attrs={{ p: 16, pt: 24 }}>
            <Title attrs={{ fw: 800, c: '#060607' }}>
              Customize your server
            </Title>
            <Subtitle attrs={{ c: '#4f5660', mt: 8 }}>
              Give your new server a personality with a name and an icon. You can always change it later.
            </Subtitle>
            <Box attrs={{ mt: 24 }}>
              <Label attrs={{ c: '#6a7480' }}> Server Name </Label>
              <Input />
            </Box>
          </Box>
          <Box attrs={{ d: 'flex', jc: 'space-between', bg: '#f6f6f7', p: 16 }}>
            <Box attrs={{ d: 'inline-block' }} onClick={() => changePanel('join-or-create-panel')}>Back</Box>
            <Button primary md> Create </Button>
          </Box>
        </Box>

        <Box id='join-panel' attrs={{ pos: 'absolute', w: 440 }} style={{ transform: 'translateX(100%)' }}>
          <Box attrs={{ p: 16, pt: 24 }}>
            <Title attrs={{ fw: 800, c: '#060607' }}> Join a Server </Title>
            <Subtitle attrs={{ c: '#4f5660', mt: 8 }}>
              Enter a invite below to join an existing server
            </Subtitle>
            <Box attrs={{ mt: 24 }}>
              <InputGroup attrs={{ mb: 16 }}>
                <Label attrs={{ c: '#4f5660' }}>
                  Invite link
                  <Error>
                    <Box>*</Box>
                    Please enter a valid invite link or invite code.
                  </Error>
                </Label>
                <Box
                  as='input'
                  attrs={{
                    w: '100%',
                    bg: '#e3e5e8',
                    p: 10,
                    h: 40
                  }}
                  placeholder='https://discord.gg/hTZKmak'
                />
              </InputGroup>
              <Label attrs={{ c: '#4f5660' }}> Invite should look like </Label>
              <Text attrs={{ us: 'none', c: '#060607', fs: 14, lh: 18 }}>
                hTZKmak
              </Text>
              <Text attrs={{ us: 'none', c: '#060607', fs: 14, lh: 18 }}>
                https://discord.gg/hTZKmak
              </Text>
              <Text attrs={{ us: 'none', c: '#060607', fs: 14, lh: 18 }}>
                https://discord.gg/cool-people
              </Text>
            </Box>
          </Box>
          <Box attrs={{
            d: 'flex',
            jc: 'space-between',
            bg: '#f6f6f7',
            p: 16
          }}>
            <Box attrs={{ d: 'inline-block' }} onClick={() => changePanel('join-or-create-panel')}>Back</Box>
            <Button primary md> Join Server </Button>
          </Box>
        </Box>

      </Card>
    </Self>
  )
}

export default JoinOrCreateGuildModal
