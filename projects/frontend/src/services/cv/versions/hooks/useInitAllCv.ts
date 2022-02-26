import { useDispatch } from 'react-redux'
import { InitAllCvPayload } from '../model'
import { initAllCv } from '../slice'

const useInitAllCv = () => {
  const dispatch = useDispatch()

  const handleInitAllCv = (payload: InitAllCvPayload) => {
    dispatch(initAllCv(payload))
  }

  return handleInitAllCv
}

export default useInitAllCv
