import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  getIdToken,
} from 'firebase/auth'
import isNull from 'lodash/isNull'
import 'shared/firebase/app/init'
import { SignInChangedState } from './model'

const auth = getAuth()

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
  cb: (state: SignInChangedState | null) => void
): (() => void) | null => {
  if (isNull(auth)) {
    return null
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
