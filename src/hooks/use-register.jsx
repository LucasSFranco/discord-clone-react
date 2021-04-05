import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { generateUserTag, getRandomDefaultAvatar, signUp } from '@services'

export default ({ email, password, username }) => {
  const history = useHistory()

  const [loading, setLoading] = useState(false)

  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [usernameError, setUsernameError] = useState('')

  const handleSignUp = async () => {
    setLoading(true)

    setEmailError('')
    setPasswordError('')
    setUsernameError('')

    try {
      const tag = await generateUserTag(username)
      const avatar = await getRandomDefaultAvatar()

      await signUp({ avatar, email, password, tag, username })

      history.push('/channels/@me')
    } catch (error) {
      switch(error.code) {
        case 'auth/empty-email':
          setEmailError(error.message)
          break
        case 'auth/invalid-email':
          setEmailError(error.message)
          break
        case 'auth/email-already-in-use':
          setEmailError('Email is already registered')
          break
        case 'auth/empty-password':
          setPasswordError(error.message)
          break
        case 'auth/short-password':
          setPasswordError(error.message)
          break
        case 'auth/big-password':
          setPasswordError(error.message)
          break
        case 'auth/weak-password':
          setPasswordError(error.message)
          break
        case 'firestore/empty-username':
          setUsernameError(error.message)
          break
        case 'firestore/username-length':
          setUsernameError(error.message)
          break
        case 'firestore/overused-username':
          setUsernameError(error.message)
          break
        default:
          console.error(error)
      }

      setLoading(false)
    }
  }

  const errorMessages = {
    email: emailError,
    password: passwordError,
    username: usernameError
  }

  return [handleSignUp, loading, errorMessages]
}
