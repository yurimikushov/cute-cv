import { useCurrentCvId } from 'services/edit-cv'
import { useCv } from './use-cv'

const useCurrentCv = (options: Parameters<typeof useCv>[2] = {}) => {
  const { publicId, id } = useCurrentCvId()

  return useCv(publicId!, id!, {
    ...options,
    skip: options.skip || !publicId,
  })
}

export { useCurrentCv }
