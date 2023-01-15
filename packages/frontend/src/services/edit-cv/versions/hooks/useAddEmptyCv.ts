import { useDispatch } from 'react-redux'
import { CV_VERSIONS_MAX_COUNT } from '../constants'
import { addEmptyCv } from '../slice'
import { useAllCv } from 'services/edit-cv'
import useGetNextCvMetadata from './useGetNextCvMetadata'

const useAddEmptyCv = () => {
  const { data: allCv = [] } = useAllCv({ policy: 'cache-only' })
  const getNextCvMetadata = useGetNextCvMetadata()

  const dispatch = useDispatch()

  const handleAddEmptyCv = (name?: string, allowShare = false) => {
    const cvCount = allCv.length

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
