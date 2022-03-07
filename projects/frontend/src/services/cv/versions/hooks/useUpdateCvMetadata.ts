import { useDispatch } from 'react-redux'
import { UpdateCvMetadataPayload } from '../model'
import { updateCvMetadata } from '../slice'

const useUpdateCvMetadata = () => {
  const dispatch = useDispatch()

  const handleUpdateCvMetadata = (payload: UpdateCvMetadataPayload) => {
    dispatch(updateCvMetadata(payload))
  }

  return handleUpdateCvMetadata
}

export default useUpdateCvMetadata
