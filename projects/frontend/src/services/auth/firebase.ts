import { initializeApp } from 'firebase/app'
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithRedirect,
  getIdToken,
} from 'firebase/auth'
import isNull from 'lodash/isNull'
import { AuthStateT } from './model'

initializeApp({
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
})

const auth = getAuth()

const signIn = async (provider: GoogleAuthProvider | FacebookAuthProvider) => {
  if (isNull(auth)) {
    return
  }

  provider.addScope('profile')
  provider.addScope('email')

  await signInWithRedirect(auth, provider)
}

const signInGoogle = async () => {
  await signIn(new GoogleAuthProvider())
}

const signInFacebook = async () => {
  await signIn(new FacebookAuthProvider())
}

const signOut = async () => {
  if (isNull(auth)) {
    return null
  }

  await auth.signOut()
}

const watchAuthStateChange = (
  cb: (state: AuthStateT | null) => void
): (() => void) | null => {
  if (isNull(auth)) {
    return null
  }

  const unsubscribe = auth.onAuthStateChanged(async (user) => {
    if (isNull(user)) {
      cb(null)
      return
    }

    const token = await getIdToken(user)

    cb({ user, token })
  })

  return unsubscribe
}

export { signInGoogle, watchAuthStateChange, signOut }
