import { useDispatch } from 'react-redux'
import size from 'lodash/size'
import { MAX_CV_VERSIONS } from '../constants'
import { addCv } from '../slice'
import useAllCvMetadata from './useAllCvMetadata'

const useAddCv = () => {
  const allCv = useAllCvMetadata()
  const dispatch = useDispatch()

  const handleAddCv = () => {
    if (size(allCv) >= MAX_CV_VERSIONS) {
      throw new Error(
        `You already have ${size(allCv)} cv versions.
        ${MAX_CV_VERSIONS} is maximum available number of cv versions`
      )
    }

    dispatch(addCv())
  }

  return handleAddCv
}

export default useAddCv
