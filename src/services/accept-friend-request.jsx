import { firestore } from '@services/firebase'

export default async (authUser, otherUser) => {
  await firestore
  .collection('users')
  .doc(authUser.id)
  .collection('friends')
  .doc(otherUser.id)
  .update({ pending: null })

  await firestore
  .collection('users')
  .doc(otherUser.id)
  .collection('friends')
  .doc(authUser.id)
  .update({ pending: null })
}
