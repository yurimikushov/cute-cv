import axios, { AxiosError } from 'axios'
import { right, left } from '@sweet-monads/either'
import { CV } from 'services/cv'
import { LoadResultT, SaveResultT } from './model'

const load = async () => {
  try {
    const { status, data } = await axios.get<LoadResultT | ''>('/cv')

    // eslint-disable-next-line no-magic-numbers
    if (status !== 200) {
      return left(new Error(`Unexpected response status code: ${status}`))
    }

    if (data === '') {
      return right(null)
    }

    return right({
      ...data,
      metadata: {
        ...data.metadata,
        savedAt: new Date(data.metadata.savedAt),
      },
    } as const)
  } catch (error) {
    return left(error as AxiosError)
  }
}

const save = async (cv: CV) => {
  try {
    const { data: metadata } = await axios.put<SaveResultT>('/cv', cv)
    return right({
      ...metadata,
      savedAt: new Date(metadata.savedAt),
    } as const)
  } catch (error) {
    return left(error as AxiosError)
  }
}

export { load, save }
