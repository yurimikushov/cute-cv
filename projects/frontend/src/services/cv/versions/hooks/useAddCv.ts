import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { MAX_CV_VERSIONS } from '../constants'
import { addCv } from '../slice'
import useCvCount from './useCvCount'
import useCvNumbers from './useCvNumbers'
import useSelectCv from './useSelectCv'

const useAddCv = () => {
  const cvCount = useCvCount()
  const cvNumbers = useCvNumbers()
  const selectCv = useSelectCv()

  const dispatch = useDispatch()

  const handleAddCv = (number?: number) => {
    if (cvCount >= MAX_CV_VERSIONS) {
      throw new Error(
        `You already have ${cvCount} cv versions.
        ${MAX_CV_VERSIONS} is maximum available number of cv versions`
      )
    }

    const id = nanoid()
    // eslint-disable-next-line no-magic-numbers
    number ??= Math.max(...cvNumbers) + 1

    dispatch(addCv({ id, number }))
    selectCv(id)

    return id
  }

  return handleAddCv
}

export default useAddCv
