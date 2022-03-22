import { useDispatch } from 'react-redux'
import { UpdateCvPayload } from '../model'
import { updateCv } from '../slice'

const useUpdateCv = () => {
  const dispatch = useDispatch()

  const handleUpdateCv = (payload: UpdateCvPayload) => {
    dispatch(updateCv(payload))
  }

  return handleUpdateCv
}

export default useUpdateCv
