import { firestore } from '@services/firebase'

export default (authUser, setBlockedUsers) => {
  const unsubscribe = firestore
  .collection('users')
  .doc(authUser.id)
  .collection('friends')
  .where('blocked', '==', true)
  .onSnapshot(async ({ docs }) => {
    setBlockedUsers(await Promise.all(
      docs.map(async (doc) => {
        const blockedUser = await firestore
        .collection('users')
        .doc(doc.id)
        .get()

        return {
          id: doc.id,
          ...doc.data(),
          ...blockedUser.data()
        }
      })
    ))
  })

  return unsubscribe
}
