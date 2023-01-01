import { useAuth } from 'services/auth'
import {
  useAutoLoadAllCv,
  useAutoLoadCurrentCv,
  useCleanUpAllCvAfterSignOut,
  useCurrentCv,
} from 'services/edit-cv'
import Loader from 'shared/ui/Loader'

const InitContainer = () => {
  useAutoLoadAllCv()
  useAutoLoadCurrentCv()
  useCleanUpAllCvAfterSignOut()

  const { isSignInChecking, isSignedIn } = useAuth()
  const { isLoading, data, error } = useCurrentCv({ skip: !isSignedIn })

  if (isSignInChecking || isLoading || (!data && !error)) {
    return <Loader.FullScreen />
  }

  return null
}

export default InitContainer
