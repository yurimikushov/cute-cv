import { useCurrentCvId } from 'services/edit-cv'
import { useCvStore } from './use-cv-store'

const useCurrentCvStore = () => {
  const { id } = useCurrentCvId()
  
  return useCvStore(id)
}

export { useCurrentCvStore }
