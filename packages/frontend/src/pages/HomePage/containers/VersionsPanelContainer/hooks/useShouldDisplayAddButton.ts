import { useAuth } from 'services/auth'
import { useCvCount, CV_VERSIONS_MAX_COUNT } from 'services/edit-cv'

const useShouldDisplayAddButton = () => {
  const cvCount = useCvCount()
  const { isSignedIn } = useAuth()

  return isSignedIn && cvCount < CV_VERSIONS_MAX_COUNT
}

export default useShouldDisplayAddButton
