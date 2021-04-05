import { useEffect, useState } from 'react'
import { getAllFriends } from '@services'

export default (authUser) => {
  const [friends, setFriends] = useState([])

  useEffect(() => {
    if(authUser) {
      const unsubscribe = getAllFriends(authUser, setFriends)

      return unsubscribe
    }
  }, [])

  return [friends]
}
