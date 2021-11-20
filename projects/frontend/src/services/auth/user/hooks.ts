import { useSelector } from 'react-redux'
import { selectUser } from './selectors'

const useUser = () => {
  return useSelector(selectUser)
}

export { useUser }
