import { firestore } from '@services/firebase'
import { firebaseError } from '@helpers'

export default async (username) => {
  const { docs: sameUsernameUsers } = await firestore
  .collection('users')
  .where('username', '==', username)
  .orderBy('tag')
  .get()

  for (let number = 0; number < 10000; number++) {
    const user = sameUsernameUsers[number]?.data()
    if (!user || number != user.tag) {
      const tag = number
      .toString()
      .replace(/(\d)?(\d)?(\d)?(\d)?/, (match, n1, n2, n3, n4) => (
        (n4 && n1) || '0') +
        ((n4 && n2) || (n3 && n1) || '0') +
        ((n4 && n3) || (n3 && n2) || (n2 && n1) || '0') +
        (n4 || n3 || n2 || n1)
      )

      return tag
    }
  }

  throw firebaseError(
    'firestore/overused-username',
    'Too many users have this username, please try another'
  )
}

