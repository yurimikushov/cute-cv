import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  getIdToken,
  User,
} from 'firebase/auth'
import isNull from 'lodash/isNull'
import noop from 'shared/lib/noop'
import { getFirebaseApp } from '../app'

const auth = getAuth(getFirebaseApp())

const signIn = async (
  provider: GoogleAuthProvider | FacebookAuthProvider | GithubAuthProvider
) => {
  if (isNull(auth)) {
    return
  }

  provider.addScope('profile')
  provider.addScope('email')

  await signInWithRedirect(auth, provider)
}

const signInGoogle = async () => {
  const provider = new GoogleAuthProvider()

  provider.setCustomParameters({
    prompt: 'select_account',
  })

  await signIn(provider)
}

const signInFacebook = async () => {
  await signIn(new FacebookAuthProvider())
}

const signInGitHub = async () => {
  await signIn(new GithubAuthProvider())
}

const signOut = async () => {
  if (isNull(auth)) {
    return null
  }

  await auth.signOut()
}

const watchSignInStateChange = (
  cb: (
    state: {
      user: User
      token: string
    } | null
  ) => void
): (() => void) => {
  if (isNull(auth)) {
    return noop
  }

  const unsubscribe = auth.onIdTokenChanged(async (user) => {
    if (isNull(user)) {
      cb(null)
      return
    }

    const token = await getIdToken(user)

    cb({ user, token })
  })

  return unsubscribe
}

export {
  signInGoogle,
  signInFacebook,
  signInGitHub,
  signOut,
  watchSignInStateChange,
}
