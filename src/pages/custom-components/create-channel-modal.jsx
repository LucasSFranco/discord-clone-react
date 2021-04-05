/* eslint-disable */
import React from 'react'

import { Self } from './styles/create-channel-modal'

import {
  Box,
  Button,
  Card,
  Input,
  Label,
  Modal,
  RadioGroup,
  Subtext,
  Title,
} from '@components'

import {
  Hashtag,
} from '@assets'

function CreateChannelModal() {
  return (
    <Self id='create-channel-modal' as={Modal}>
      <Modal.Closer />
      <Card>
        <Box attrs={{ p: '32px 16px 20px' }}>
          <Title> Create Text Channel </Title>
          <Subtext> in Channel Name </Subtext>
          <Box attrs={{ mt: 32 }}>

            <Label> Channel type </Label>
            <RadioGroup name='channel-type'>
              <RadioGroup.RadioBar checked>
                <Hashtag />
                Text Channel
              </RadioGroup.RadioBar>
            </RadioGroup>

            <Label> Channel name </Label>
            <Input placeholder='new-channel'>
              <Hashtag attrs={{ s: 16, c: '#ffffff', mx: 6 }}/>
            </Input>
          </Box>
        </Box>
        <Box attrs={{ bg: '#2f3136', d: 'flex', jc: 'flex-end', p: 16 }}>
          <Button link md> Cancel </Button>
          <Button primary md disabled={true}> Create Channel </Button>
        </Box>
      </Card>
    </Self>
  )
}

export default CreateChannelModal
