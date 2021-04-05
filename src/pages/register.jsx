import { useState } from 'react'
import { useRegister } from '@hooks'

import {
  Box, Button, Card, Error, Input, InputGroup, Label, Link, Lobby, Title
} from '@components'

function Register() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const [handleSignUp, loading, errorMessages] = useRegister({ email, password, username })

  return (
    <Lobby>
      <Card attrs={{ p: 32, w: 480 }}>
        <Title> Create an account </Title>
        <Box attrs={{ mt: 20 }}>
          <InputGroup error={errorMessages.email}>
            <Label>
              Email
              <Error>
                <Box attrs={{ d: 'inline-block', mx: 4 }}> - </Box>
                {errorMessages.email}
              </Error>
            </Label>
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              onKeyDown={({ code }) => code === 'Enter' && handleSignUp()}
            />
          </InputGroup>
          <InputGroup error={errorMessages.username}>
            <Label>
              Username
              <Error>
                <Box attrs={{ d: 'inline-block', mx: 4 }}> - </Box>
                {errorMessages.username}
              </Error>
            </Label>
            <Input
              value={username}
              onChange={({ target }) => setUsername(target.value)}
              onKeyDown={({ code }) => code === 'Enter' && handleSignUp()}
            />
          </InputGroup>
          <InputGroup error={errorMessages.password}>
            <Label>
              Password
              <Error>
                <Box attrs={{ d: 'inline-block', mx: 4 }}> - </Box>
                {errorMessages.password}
              </Error>
            </Label>
            <Input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              onKeyDown={({ code }) => code === 'Enter' && handleSignUp()}
            />
          </InputGroup>
          <Button
            lg
            primary
            full
            loading={loading}
            onClick={handleSignUp}
          > Continue </Button>
          <Link attrs={{ mt: 8 }} to="/"> Already have an account? </Link>
        </Box>
      </Card>
    </Lobby>
  )
}

export default Register
