import { useDispatch, useSelector } from 'react-redux'
import { selectIsPatching } from './selectors'
import { patch, PatchResult } from './thunks'

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
    return (
      dispatch(patch({ publicId, name, allowShare }))
        // @ts-expect-error bad typing
        .unwrap() as unknown as Promise<PatchResult>
    )
  }

  return handleUpdateCvMetadata
}

export { useIsCvPatching, useUpdateCvMetadata }
