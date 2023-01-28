import { useCurrentCvId } from 'services/edit-cv'
import { useUpdateCv } from './use-update-cv'

const useUpdateCurrentCv = () => {
  const { id } = useCurrentCvId()

  return useUpdateCv(id)
}

export { useUpdateCurrentCv }
