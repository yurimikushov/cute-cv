import { nanoid } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import { CV_VERSIONS_MAX_COUNT } from '../constants'
import { addEmptyCv } from '../slice'
import useCvCount from './useCvCount'
import useCvNumbers from './useCvNumbers'
import useSelectCv from './useSelectCv'

const useAddEmptyCv = () => {
  const cvCount = useCvCount()
  const cvNumbers = useCvNumbers()
  const selectCv = useSelectCv()

  const dispatch = useDispatch()

  const handleAddCv = (name?: string) => {
    if (cvCount >= CV_VERSIONS_MAX_COUNT) {
      throw new Error(
        `You already have ${cvCount} cv versions.
        ${CV_VERSIONS_MAX_COUNT} is maximum available number of cv versions`
      )
    }

    const id = nanoid()
    // eslint-disable-next-line no-magic-numbers
    const number = Math.max(...cvNumbers) + 1

    dispatch(addEmptyCv({ id, name, number }))
    selectCv(id)

    return id
  }

  return handleAddCv
}

export default useAddEmptyCv
