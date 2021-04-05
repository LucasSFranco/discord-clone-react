import { auth, firestore } from '@services/firebase'
import { firebaseError } from '@helpers'

const passwordStrengthRegex = /(?=(.*[a-z]){2,})(?=(.*[0-9]){3,})/

export default async ({ avatar, email, password, tag, username }) => {
  if (!email) throw firebaseError(
    'auth/empty-email',
    'This field is required'
  )
  if (!username) throw firebaseError(
    'firestore/empty-username',
    'This field is required'
  )
  if (!password) throw firebaseError(
    'auth/empty-password',
    'This field is required'
  )
  if (username.length < 2 || username.length > 32) throw firebaseError(
    'firestore/username-length',
    'Must be between 2 and 32 in length'
  )
  if (password.length < 6) throw firebaseError(
    'auth/short-password',
    'Must be 6 or more in length'
  )
  if (password.length > 72) throw firebaseError(
    'auth/big-password',
    'Must be 72 or fewer in length'
  )
  if (!passwordStrengthRegex.test(password)) throw firebaseError(
    'auth/weak-password',
    'Password is too weak or common to use'
  )

  const { user : newUser } = await auth
  .createUserWithEmailAndPassword(email, password)

  await firestore.collection('users').doc(newUser.uid).set({
    avatar,
    email,
    tag,
    username,
  })
}
