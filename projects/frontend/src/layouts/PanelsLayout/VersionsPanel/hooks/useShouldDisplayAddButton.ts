import { useIsSignedIn } from 'services/auth'
import { useCvCount, CV_VERSIONS_MAX_COUNT } from 'services/cv'

const useShouldDisplayAddButton = () => {
  const cvCount = useCvCount()
  const { isSignedIn } = useIsSignedIn()

  return isSignedIn && cvCount < CV_VERSIONS_MAX_COUNT
}

export default useShouldDisplayAddButton
