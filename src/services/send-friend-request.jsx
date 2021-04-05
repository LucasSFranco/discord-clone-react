import { firestore } from '@services/firebase'
import { firebaseError } from '@helpers'

export default async (authUser, otherUser) => {

  if (otherUser.id === authUser.id) throw firebaseError(
    'firebase/user-not-found',
    'Hm, didn\'t work. Double check that the capitalization, spelling, any spaces, and numbers are correct.'
  )

  const authUserDoc = await firestore
  .collection('users')
  .doc(otherUser.id)
  .collection('friends')
  .doc(authUser.id)
  .get()

  const registeredAuthUser = authUserDoc?.data()

  if (registeredAuthUser && registeredAuthUser.blocked) throw firebaseError(
    'firebase/user-not-found',
    'Hm, didn\'t work. Double check that the capitalization, spelling, any spaces, and numbers are correct.'
  )

  const otherUserDoc = await firestore
  .collection('users')
  .doc(authUser.id)
  .collection('friends')
  .doc(otherUser.id)
  .get()

  const registeredOtherUser = otherUserDoc?.data()

  if(registeredOtherUser && (!registeredOtherUser.pending && !registeredOtherUser.blocked)) throw firebaseError(
    'firebase/already-friends',
    'You\'re already friends with that user!'
  )

  if(registeredOtherUser && registeredOtherUser.pending === 'incoming') {
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

    return
  }

  await firestore
  .collection('users')
  .doc(authUser.id)
  .collection('friends')
  .doc(otherUser.id)
  .set({ pending: 'outgoing', blocked: false })

  await firestore
  .collection('users')
  .doc(otherUser.id)
  .collection('friends')
  .doc(authUser.id)
  .set({ pending: 'incoming', blocked: false })
}
