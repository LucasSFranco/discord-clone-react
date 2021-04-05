import { useEffect, useState } from 'react'

import { useChangeAuthUser }   from '@hooks'
import { auth, firestore }     from '@services/firebase'

export default () => {
  const [loading, setLoading] = useState(true)

  const changeAuthUser = useChangeAuthUser()

  const onChange = async (authUser) => {
    setLoading(true)

    if(authUser) {
      await new Promise((resolve) =>
        firestore
          .collection('users')
          .doc(authUser.uid)
          .onSnapshot((doc) =>
            resolve(
              changeAuthUser({ id: doc.id, ...doc.data() })
            )
          )
      )
    } else {
      changeAuthUser(null)
    }

    setLoading(false)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(onChange)
    return unsubscribe
  }, [])

  return loading
}
