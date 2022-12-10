import { useDispatch, useSelector } from 'react-redux'
import { selectIsUpdating } from './selectors'
import { update, UpdatePayload } from './thunks'

const useIsCvUpdating = () => {
  const isCvUpdating = useSelector(selectIsUpdating)

  return {
    isCvUpdating,
  }
}

const useSaveCv = () => {
  const dispatch = useDispatch()

  const handleSaveCv = (payload: UpdatePayload) => {
    return dispatch(update(payload)).unwrap()
  }

  return handleSaveCv
}

export { useIsCvUpdating, useSaveCv }
