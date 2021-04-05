import { useEffect, useState } from 'react'
import { getPendents } from '@services'

export default (authUser) => {
  const [pendents, setPendents] = useState([])

  useEffect(() => {
    const unsubscribe = getPendents(authUser, setPendents)

    return unsubscribe
  }, [])

  return [pendents]
}
