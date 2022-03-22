import { useDispatch, useSelector } from 'react-redux'
import { selectIsPatching } from './selectors'
import { patch, PatchResult } from './thunks'

const useIsCvPatching = () => {
  const isCvPatching = useSelector(selectIsPatching)

  return {
    isCvPatching,
  }
}

const useUpdateCvName = () => {
  const dispatch = useDispatch()

  const handleUpdateCvName = (publicId: string, name: string) => {
    return (
      dispatch(patch({ publicId, name }))
        // @ts-expect-error bad typing
        .unwrap() as unknown as Promise<PatchResult>
    )
  }

  return handleUpdateCvName
}

export { useIsCvPatching, useUpdateCvName }
