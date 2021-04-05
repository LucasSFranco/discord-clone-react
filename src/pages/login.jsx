/* eslint-disable */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Box,
  Button,
  Card,
  Error,
  Input,
  InputGroup,
  Link,
  Label,
  Lobby,
  Subtext,
  Subtitle,
  Title,
} from '@components';

import { auth } from '@services/firebase';

function Login() {
  const history = useHistory();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);

    setEmailError('');
    setPasswordError('');

    try {
      if (!email) {
        throw {
          code: 'auth/empty-email',
          message: 'This field is required',
        };
      }
      if (!password) {
        throw {
          code: 'auth/empty-password',
          message: 'This field is required',
        };
      }

      await auth.signInWithEmailAndPassword(email, password);
      history.push('/channels/@me');
    } catch (error) {
      switch (error.code) {
        case 'auth/empty-email':
          setEmailError(error.message);
          break;
        case 'auth/empty-password':
          setPasswordError(error.message);
          break;
        case 'auth/invalid-email':
          setEmailError(error.message);
          break;
        case 'auth/user-not-found':
          setEmailError('Email or password is invalid');
          setPasswordError('Email or password is invalid');
          break;
        case 'auth/wrong-password':
          setEmailError('Email or password is invalid');
          setPasswordError('Email or password is invalid');
          break;
        default:
          console.error(error.message);
          break;
      }

      setLoading(false);
    }
  };

  return (
    <Lobby>
      <Card attrs={{ p: 32, w: 480 }}>
        <Title> Welcome back! </Title>
        <Subtitle attrs={{ mt: 8 }}>
          We're so excited to see you again!
        </Subtitle>
        <Box attrs={{ mt: 20 }}>
          <InputGroup error={emailError}>
            <Label>
              Email
              <Error>
                <Box attrs={{ d: 'inline-block', mx: 4 }}> - </Box>
                {emailError}
              </Error>
            </Label>
            <Input
              value={email}
              onChange={({ target }) => setEmail(target.value)}
              onKeyDown={({ code }) => code === 'Enter' && signIn()}
            />
          </InputGroup>
          <InputGroup error={passwordError}>
            <Label>
              Password
              <Error>
                <Box attrs={{ d: 'inline-block', mx: 4 }}> - </Box>
                {passwordError}
              </Error>
            </Label>
            <Input
              type="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
              onKeyDown={({ code }) => code === 'Enter' && signIn()}
            />
          </InputGroup>
          <Button
            lg
            primary
            full
            loading={loading}
            onClick={signIn}
          >
            {' '}
            Login
            {' '}

          </Button>
          <Subtext attrs={{ mt: 8 }}>
            Need an account?
            <Link attrs={{ ml: 4 }} to="/register"> Register </Link>
          </Subtext>
        </Box>
      </Card>
    </Lobby>
  );
}

export default Login;
