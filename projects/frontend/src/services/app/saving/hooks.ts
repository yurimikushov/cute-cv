import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsSaved, selectSavedAt } from './selectors'
import { setSaved, setUnsaved } from './slice'

const useSaving = () => {
  const isSaved = useSelector(selectIsSaved)
  const savedAt = useSelector(selectSavedAt)

  const dispatch = useDispatch()

  const handleSetSaved = useCallback(() => {
    dispatch(setSaved())
  }, [])

  const handleSetUnsaved = useCallback(() => {
    dispatch(setUnsaved())
  }, [])

  return {
    isSaved,
    savedAt,
    handleSetSaved,
    handleSetUnsaved,
  }
}

export { useSaving }
