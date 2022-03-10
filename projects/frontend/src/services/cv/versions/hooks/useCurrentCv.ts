import { useSelector } from 'react-redux'
import { selectCurrentCv } from '../selectors'

const useCurrentCv = () => {
  const cv = useSelector(selectCurrentCv)

  return {
    cv,
  }
}

export default useCurrentCv
