import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsSaved, selectSavedAt } from './selectors'
import { update } from './slice'
import { UpdatePayloadT } from './model'

const useMetadata = () => {
  const isSaved = useSelector(selectIsSaved)
  const savedAt = useSelector(selectSavedAt)

  const dispatch = useDispatch()

  const handleUpdate = useCallback((payload: UpdatePayloadT) => {
    dispatch(update(payload))
  }, [])

  return {
    isSaved,
    savedAt,
    handleUpdate,
  }
}

export { useMetadata }
