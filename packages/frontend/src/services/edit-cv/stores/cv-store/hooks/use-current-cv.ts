import { useCurrentCvId } from 'services/edit-cv'
import useCv from './use-cv'

const useCurrentCv = (options: Parameters<typeof useCv>[1] = {}) => {
  const [currentCvId] = useCurrentCvId()

  return useCv(currentCvId!, {
    ...options,
    skip: options.skip || currentCvId === null,
  })
}

export { useCurrentCv }
