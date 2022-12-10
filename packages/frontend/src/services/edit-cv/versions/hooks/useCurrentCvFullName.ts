import { useDispatch, useSelector } from 'react-redux'
import { UpdateFullNamePayload } from '../model'
import { selectCurrentCvId, selectCurrentCvFullName } from '../selectors'
import { updateFullName } from '../slice'

const useCurrentCvFullName = () => {
  const id = useSelector(selectCurrentCvId)
  const fullName = useSelector(selectCurrentCvFullName)

  const dispatch = useDispatch()

  const changeFullName = (fullName: UpdateFullNamePayload['fullName']) => {
    dispatch(updateFullName({ id, fullName }))
  }

  return {
    fullName,
    changeFullName,
  }
}

export default useCurrentCvFullName
