import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
  GithubAuthProvider,
  signInWithRedirect,
  getIdToken,
  User,
} from 'firebase/auth'
import noop from 'shared/lib/noop'
import { getFirebaseApp } from '../app'

const auth = getAuth(getFirebaseApp())

const signInInternal = async (
  provider: GoogleAuthProvider | FacebookAuthProvider | GithubAuthProvider
) => {
  if (!auth) {
    return
  }

  provider.addScope('profile')
  provider.addScope('email')

  await signInWithRedirect(auth, provider)
}

const signIn = (provider: 'Google' | 'GitHub' | 'Facebook') => {
  switch (provider) {
    case 'Google': {
      const provider = new GoogleAuthProvider()

      provider.setCustomParameters({
        prompt: 'select_account',
      })

      return signInInternal(provider)
    }
    case 'GitHub': {
      return signInInternal(new GithubAuthProvider())
    }
    case 'Facebook': {
      return signInInternal(new FacebookAuthProvider())
    }
    default:
      throw new Error(`Auth provider '${provider}' is not implemented`)
  }
}

const signOut = async () => {
  if (!auth) {
    return
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
  if (!auth) {
    return noop
  }

  const unsubscribe = auth.onIdTokenChanged(async (user) => {
    if (!user) {
      cb(null)
      return
    }

    const token = await getIdToken(user)

    cb({ user, token })
  })

  return unsubscribe
}

export { signIn, signOut, watchSignInStateChange }
export type { User }
