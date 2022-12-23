import { nanoid } from '@reduxjs/toolkit'
import useCvNumbers from './useCvNumbers'

const useGetNextCvMetadata = () => {
  const cvNumbers = useCvNumbers()

  const handleGetNextCvMetadata = () => {
    return {
      id: nanoid(),
      number: Math.max(...cvNumbers) + 1,
    }
  }

  return handleGetNextCvMetadata
}

export default useGetNextCvMetadata
