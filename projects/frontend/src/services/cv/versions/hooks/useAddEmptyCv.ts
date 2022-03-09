import { useDispatch } from 'react-redux'
import { CV_VERSIONS_MAX_COUNT } from '../constants'
import { addEmptyCv } from '../slice'
import useCvCount from './useCvCount'
import useGetNextCvMetadata from './useGetNextCvMetadata'
import useSelectCv from './useSelectCv'

const useAddEmptyCv = () => {
  const cvCount = useCvCount()
  const getNextCvMetadata = useGetNextCvMetadata()
  const selectCv = useSelectCv()

  const dispatch = useDispatch()

  const handleAddCv = (name?: string) => {
    if (cvCount >= CV_VERSIONS_MAX_COUNT) {
      throw new Error(
        `You already have ${cvCount} cv versions.
        ${CV_VERSIONS_MAX_COUNT} is maximum available number of cv versions`
      )
    }

    const { id, number } = getNextCvMetadata()

    dispatch(addEmptyCv({ id, name, number }))
    selectCv(id)

    return id
  }

  return handleAddCv
}

export default useAddEmptyCv
