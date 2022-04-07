import { useDispatch, useSelector } from 'react-redux'
import { MarkAsSavedPayload } from '../model'
import { selectCvMetadata } from '../selectors'
import { markAsSaved, markAsUnsaved } from '../slice'

const useCurrentCvMetadata = () => {
  const { id, name, isNew, isSaved, savedAt, allowShare } =
    useSelector(selectCvMetadata)

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
    isNew,
    isSaved,
    savedAt,
    allowShare,
    markAsSaved: handleMarkAsSaved,
    markAsUnsaved: handleMarkAsUnsaved,
  }
}

export default useCurrentCvMetadata
