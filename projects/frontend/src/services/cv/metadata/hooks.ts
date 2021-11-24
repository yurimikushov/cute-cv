import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsSaved, selectSavedAt } from './selectors'
import { saved, unsaved } from './slice'
import { SavedPayloadT } from './model'

const useMetadata = () => {
  const isSaved = useSelector(selectIsSaved)
  const savedAt = useSelector(selectSavedAt)

  const dispatch = useDispatch()

  const handleMarkAsSaved = useCallback((payload: SavedPayloadT) => {
    dispatch(saved(payload))
  }, [])

  const handleMarkAsUnsaved = useCallback(() => {
    dispatch(unsaved())
  }, [])

  return {
    isSaved,
    savedAt,
    handleMarkAsSaved,
    handleMarkAsUnsaved,
  }
}

export { useMetadata }
