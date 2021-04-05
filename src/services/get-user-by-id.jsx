import { firestore } from '@services/firebase'
import { useDispatch } from 'react-redux'
import { changeDM } from '@store/dm-slice'

export default async (authUser, userId) => {
  const dispatch = useDispatch()

  const unsubscribe = firestore
  .collection('users')
  .doc(authUser.id)
  .collection('friends')
  .doc(userId)
  .onSnapshot(async (doc) => {
    const userData = await firestore
    .collection('users')
    .doc(userId)
    .get()

    dispatch(changeDM({
      id: userId,
      ...userData.data(),
      ...doc.data()}))
  })

  return [unsubscribe]
}
