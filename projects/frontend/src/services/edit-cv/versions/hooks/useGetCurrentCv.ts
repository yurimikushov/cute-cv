import { useLazySelector } from 'services/hooks'
import { selectCurrentCv } from '../selectors'

const useGetCurrentCv = () => {
  return useLazySelector(selectCurrentCv)
}

export default useGetCurrentCv
