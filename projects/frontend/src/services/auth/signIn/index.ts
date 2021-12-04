export { default as signInReducer } from './slice'
export { watchSignInStateChange } from './firebase'
export type { SignInChangedStateT } from './model'
export {
  useSignInGoogle,
  useSignInFacebook,
  useSignInGitHub,
  useSignOut,
  useIsSignInChecking,
  useIsSignedIn,
  useSkipSignIn,
} from './hooks'
