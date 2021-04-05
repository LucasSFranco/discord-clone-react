import { firestore } from '@services/firebase'
import { firebaseError } from '@helpers'

export default async (username = '', tag = '') => {
  if (!Number.isNaN(username) && !tag) throw firebaseError(
    'firebase/invalid-username',
    'We\'re more than numbers... we\'re people! Enter a username and tag. It should look something like: TotallyARealUsername#0000'
  )
  if (tag.length < 4) throw firebaseError(
    'firebase/invalid-tag',
    `We need ${username}'s four digit tag so we know which one they are.`
  )

  const { docs: [user] } = await firestore
    .collection('users')
    .where('username', '==', username)
    .where('tag', '==', tag)
    .get()

  if (!user) {
    throw firebaseError(
      'firebase/user-not-found',
      'Hm, didn\'t work. Double check that the capitalization, spelling, any spaces, and numbers are correct.'
    )
  }

  return user
}
