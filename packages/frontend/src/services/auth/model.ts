import { atom } from '@reatom/framework'
import {
  User as FirebaseUser,
  watchSignInStateChange,
} from 'shared/firebase/auth'
import { ctx } from 'shared/reatom'
import once from 'shared/lib/once'
import pick from 'shared/lib/pick'
import { resetToken, setToken } from './utils'

type User = Pick<FirebaseUser, 'uid' | 'displayName' | 'email'>

const isSignInCheckingAtom = atom(true, 'isSignInChecking')
const isSignedInAtom = atom(false, 'isSignedIn')
const isSkippedAtom = atom(false, 'isSignedIn')
const userAtom = atom<User | null>(null, 'user')

const getIsSignedIn = () => {
  return ctx.get(isSignedInAtom)
}

const finishFirstChecking = once(() => isSignInCheckingAtom(ctx, false))

watchSignInStateChange((signInState) => {
  if (signInState) {
    const { user, token } = signInState
    setToken(token)
    userAtom(ctx, pick(user, 'uid', 'displayName', 'email'))
    isSignedInAtom(ctx, true)
  } else {
    resetToken()
    userAtom(ctx, null)
    isSignedInAtom(ctx, false)
  }

  finishFirstChecking()
})

export {
  isSignInCheckingAtom,
  isSignedInAtom,
  isSkippedAtom,
  userAtom,
  getIsSignedIn,
}
