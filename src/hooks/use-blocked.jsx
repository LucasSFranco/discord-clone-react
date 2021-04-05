import { useEffect, useState } from 'react'
import { getBlockedUsers } from '@services'

export default (authUser) => {
  const [blockedUsers, setBlockedUsers] = useState([])

  useEffect(() => {
    const unsubscribe = getBlockedUsers(authUser, setBlockedUsers)

    return unsubscribe
  }, [])

  return [blockedUsers]
}
