import { useSelector } from 'react-redux'
import { selectCV } from './selectors'

const useCV = () => {
  const cv = useSelector(selectCV)

  return {
    cv,
  }
}

export { useCV }
