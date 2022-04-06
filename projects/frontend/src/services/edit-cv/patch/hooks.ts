import { useDispatch, useSelector } from 'react-redux'
import { selectIsPatching } from './selectors'
import { patch } from './thunks'

const useIsCvPatching = () => {
  const isCvPatching = useSelector(selectIsPatching)

  return {
    isCvPatching,
  }
}

const useUpdateCvMetadata = () => {
  const dispatch = useDispatch()

  const handleUpdateCvMetadata = (
    publicId: string,
    name: string,
    allowShare: boolean
  ) => {
    return dispatch(patch({ publicId, name, allowShare })).unwrap()
  }

  return handleUpdateCvMetadata
}

export { useIsCvPatching, useUpdateCvMetadata }
