import { firestore } from '@services/firebase'

export default (authUser, setFriends) => {
  const unsubscribe = firestore
  .collection('users')
  .doc(authUser.id)
  .collection('friends')
  .where('pending', '==', null)
  .where('blocked', '==', false)
  .onSnapshot(async ({ docs }) => {
    setFriends(await Promise.all(
      docs.map(async (doc) => {
        const pendingUser = await firestore
        .collection('users')
        .doc(doc.id)
        .get()

        return {
          id: doc.id,
          ...doc.data(),
          ...pendingUser.data()
        }
      })
    ))
  })

  return unsubscribe
}
