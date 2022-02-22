import { useDispatch, useSelector } from 'react-redux'
import { MarkAsSavedPayload } from '../model'
import { selectCvMetadata } from '../selectors'
import { markAsSaved, markAsUnsaved } from '../slice'

const useCurrentCvMetadata = () => {
  const { id, name, isSaved, savedAt } = useSelector(selectCvMetadata)

  const dispatch = useDispatch()

  const handleMarkAsSaved = (savedAt: MarkAsSavedPayload['savedAt']) => {
    dispatch(markAsSaved({ id, savedAt }))
  }

  const handleMarkAsUnsaved = () => {
    dispatch(markAsUnsaved({ id }))
  }

  return {
    id,
    name,
    isSaved,
    savedAt,
    markAsSaved: handleMarkAsSaved,
    markAsUnsaved: handleMarkAsUnsaved,
  }
}

export default useCurrentCvMetadata
