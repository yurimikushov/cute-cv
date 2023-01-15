import { useAuth } from 'services/auth'
import { useAllCv, CV_VERSIONS_MAX_COUNT } from 'services/edit-cv'

const useShouldDisplayAddButton = () => {
  const { data: allCv = [] } = useAllCv({ policy: 'cache-only' })
  const { isSignedIn } = useAuth()

  return isSignedIn && allCv.length < CV_VERSIONS_MAX_COUNT
}

export default useShouldDisplayAddButton
