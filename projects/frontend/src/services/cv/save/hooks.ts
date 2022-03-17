import { useDispatch, useSelector } from 'react-redux'
import { selectIsSaving } from './selectors'
import { save, SavePayload, SaveResult } from './thunks'

const useIsCvSaving = () => {
  const isCvSaving = useSelector(selectIsSaving)

  return {
    isCvSaving,
  }
}

const useSaveCv = () => {
  const dispatch = useDispatch()

  const handleSaveCv = ({ id, name, number, cv }: SavePayload) => {
    return (
      dispatch(save({ id, name, number, cv }))
        // @ts-expect-error `unwrap` exists in dispatch result
        .unwrap() as unknown as Promise<SaveResult>
    )
  }

  return handleSaveCv
}

export { useIsCvSaving, useSaveCv }
