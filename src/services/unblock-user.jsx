import { firestore } from '@services/firebase'

export default async (authUser, otherUser) => {
  await firestore
  .collection('users')
  .doc(authUser.id)
  .collection('friends')
  .doc(otherUser.id)
  .delete()
}
