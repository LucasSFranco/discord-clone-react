/* eslint-disable */
import React from 'react'

import { Self } from './styles/create-category-modal'

import {
  Box,
  Button,
  Card,
  Input,
  Label,
  Modal,
  Title,
} from '@components'

function CreateCategoryModal() {
  return (
    <Self id='create-category-modal' as={Modal}>
      <Modal.Closer />
      <Card>
        <Box attrs={{ p: '32px 16px 20px' }}>
          <Title> Create Category </Title>
          <Box attrs={{ mt: 32 }}>
            <Label> Category name </Label>
            <Input placeholder='New Category' />
          </Box>
        </Box>
        <Box attrs={{ bg: '#2f3136', d: 'flex', jc: 'flex-end', p: 16 }}>
          <Button link md> Cancel </Button>
          <Button primary md disabled={true}> Create Category </Button>
        </Box>
      </Card>
    </Self>
  )
}

export default CreateCategoryModal
