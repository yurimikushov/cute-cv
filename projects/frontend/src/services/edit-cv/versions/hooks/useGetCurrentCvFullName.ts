import { useLazySelector } from 'services/hooks'
import { selectCurrentCvFullName } from '../selectors'

const useGetCurrentCvFullName = () => {
  return useLazySelector(selectCurrentCvFullName)
}

export default useGetCurrentCvFullName
