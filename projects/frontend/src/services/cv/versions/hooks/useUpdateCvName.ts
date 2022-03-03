import { useDispatch } from 'react-redux'
import { UpdateCvNamePayload } from '../model'
import { updateCvName } from '../slice'

const useUpdateCvName = () => {
  const dispatch = useDispatch()

  const handleUpdateCvName = (
    id: UpdateCvNamePayload['id'],
    name: UpdateCvNamePayload['name']
  ) => {
    dispatch(updateCvName({ id, name }))
  }

  return handleUpdateCvName
}

export default useUpdateCvName
