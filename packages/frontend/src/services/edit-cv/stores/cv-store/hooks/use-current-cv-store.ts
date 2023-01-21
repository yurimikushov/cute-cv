import { useCurrentCvId } from 'services/edit-cv'
import { useCvStore } from './use-cv-store'

const useCurrentCvStore = () => {
  const { publicId, id } = useCurrentCvId()

  return useCvStore(publicId!, id!)
}

export { useCurrentCvStore }
