import firebase from 'firebase/app'

import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const config = {
  apiKey: 'AIzaSyBhvPyDdnMwU-moBT_XeIoXYncYp6X6UOs',
  appId: '1:476884830301:web:d0f7879566f48051e3e5b4',
  authDomain: 'react-discord-clone-1aa2a.firebaseapp.com',
  messagingSenderId: '476884830301',
  projectId: 'react-discord-clone-1aa2a',
  storageBucket: 'react-discord-clone-1aa2a.appspot.com'
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()
export const storage = firebase.storage()
