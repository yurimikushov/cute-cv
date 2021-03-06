import { useDispatch } from 'react-redux'
import { CV_VERSIONS_MAX_COUNT } from '../constants'
import { addEmptyCv } from '../slice'
import useCvCount from './useCvCount'
import useGetNextCvMetadata from './useGetNextCvMetadata'

const useAddEmptyCv = () => {
  const cvCount = useCvCount()
  const getNextCvMetadata = useGetNextCvMetadata()

  const dispatch = useDispatch()

  const handleAddEmptyCv = (name?: string, allowShare = false) => {
    if (cvCount >= CV_VERSIONS_MAX_COUNT) {
      throw new Error(
        `You already have ${cvCount} cv versions.
        ${CV_VERSIONS_MAX_COUNT} is maximum available number of cv versions`
      )
    }

    const { id, number } = getNextCvMetadata()

    dispatch(addEmptyCv({ id, name, number, allowShare }))

    return {
      id,
      number,
    }
  }

  return handleAddEmptyCv
}

export default useAddEmptyCv
