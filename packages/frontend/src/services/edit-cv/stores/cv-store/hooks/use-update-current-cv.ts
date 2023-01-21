import { useCurrentCvId } from 'services/edit-cv'
import { useUpdateCv } from './use-update-cv'

const useUpdateCurrentCv = () => {
  const { publicId, id } = useCurrentCvId()

  return useUpdateCv(publicId!, id!)
}

export { useUpdateCurrentCv }
