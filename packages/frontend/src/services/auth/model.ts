import { atom } from '@reatom/framework'
import { User as FirebaseUser } from 'shared/firebase/auth'

type User = Pick<FirebaseUser, 'uid' | 'displayName' | 'email'>

const isSignInCheckingAtom = atom(true, 'isSignInChecking')
const isSignedInAtom = atom(false, 'isSignedIn')
const isSkippedAtom = atom(false, 'isSignedIn')
const userAtom = atom<User | null>(null, 'user')

export { isSignInCheckingAtom, isSignedInAtom, isSkippedAtom, userAtom }
