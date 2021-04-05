import { useState } from 'react'
import { useAuthUser } from '@hooks'
import { sendFriendRequest, verifyUserExistence } from '@services'

export default () => {
  const [errorMessage, setErrorMessage] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const authUser = useAuthUser()

  const handleSendFriendRequest = async (value) => {
    const [username, tag] = value.split('#')

    try {
      const otherUser = await verifyUserExistence(username, tag)
      await sendFriendRequest(authUser, otherUser)

      setSuccessMessage(
        <> Success! Your friend request to <b>{value}</b> was sent. </>
      )
      setErrorMessage('')
    } catch (error) {
      switch (error.code) {
        case 'firebase/invalid-username':
          setErrorMessage(error.message)
          break
        case 'firebase/invalid-tag':
          setErrorMessage(error.message)
          break
        case 'firebase/user-not-found':
          setErrorMessage(error.message)
          break
        case 'firebase/already-friends':
          setErrorMessage(error.message)
          break
        default:
          console.error(error)
      }
    }
  }

  return [handleSendFriendRequest, successMessage, errorMessage]
}
