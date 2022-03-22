import { useDispatch } from 'react-redux'
import { makeCvCopy } from '../slice'
import useGetNextCvMetadata from './useGetNextCvMetadata'
import useSelectCv from './useSelectCv'

const useMakeCvCopy = () => {
  const dispatch = useDispatch()

  const getNextCvMetadata = useGetNextCvMetadata()
  const selectCv = useSelectCv()

  const handleMakeCvCopy = (baseCvId: string, copyCvName: string) => {
    const { id: copyCvId, number: copyCvNumber } = getNextCvMetadata()

    dispatch(
      makeCvCopy({
        baseCvId,
        copyCvId,
        copyCvNumber,
        copyCvName,
      })
    )

    selectCv(copyCvId)
  }

  return handleMakeCvCopy
}

export default useMakeCvCopy
