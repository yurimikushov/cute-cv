import { useAuth } from 'services/auth'
import {
  useAllCv,
  useCleanUpAllCvAfterSignOut,
  useCurrentCv,
} from 'services/edit-cv'
import Loader from 'shared/ui/Loader'

const InitContainer = () => {
  useCleanUpAllCvAfterSignOut()

  const { isSignInChecking, isSignedIn } = useAuth()
  const { isLoading: isAllCvLoading } = useAllCv({ skip: !isSignedIn })
  const { isLoading: isCurrentCvLoading } = useCurrentCv({ skip: !isSignedIn })

  if (isSignInChecking || isAllCvLoading || isCurrentCvLoading) {
    return <Loader.FullScreen />
  }

  return null
}

export default InitContainer
