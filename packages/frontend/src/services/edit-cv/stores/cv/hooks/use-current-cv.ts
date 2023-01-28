import { useCurrentCvId } from 'services/edit-cv'
import { useCv } from './use-cv'

const useCurrentCv = (options: Parameters<typeof useCv>[1] = {}) => {
  const { id } = useCurrentCvId()

  return useCv(id, options)
}

export { useCurrentCv }
