import { useCurrentCvId } from 'services/edit-cv'
import { useCvStore } from './use-cv-store'

const useCurrentCvStore = () => {
  const [currentCvId] = useCurrentCvId()

  return useCvStore(currentCvId!)
}

export { useCurrentCvStore }
