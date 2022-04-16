import { useDispatch } from 'react-redux'
import { CV_VERSIONS_MAX_COUNT } from '../constants'
import { AddCvPayload } from '../model'
import { addCv } from '../slice'
import useCvCount from './useCvCount'
import useGetNextCvMetadata from './useGetNextCvMetadata'

type Payload = AddCvPayload & {
  metadata: Pick<AddCvPayload['metadata'], 'name'>
}

const useAddCv = () => {
  const cvCount = useCvCount()
  const getNextCvMetadata = useGetNextCvMetadata()

  const dispatch = useDispatch()

  const handleAddCv = ({ metadata, content }: Payload) => {
    if (cvCount >= CV_VERSIONS_MAX_COUNT) {
      throw new Error(
        `You already have ${cvCount} cv versions.
        ${CV_VERSIONS_MAX_COUNT} is maximum available number of cv versions`
      )
    }

    const { id, number } = getNextCvMetadata()

    dispatch(
      addCv({
        metadata: {
          ...metadata,
          id,
          number,
        },
        content,
      })
    )

    return {
      id,
      number,
    }
  }

  return handleAddCv
}

export default useAddCv
