import axios, { AxiosError } from 'axios'
import { right, left } from '@sweet-monads/either'
import { CV } from 'services/cv'
import { LoadResultT, SaveResultT } from './model'

class cvApi {
  public static async load() {
    const { status, data } = await axios.get<LoadResultT | ''>('/cv')

    // eslint-disable-next-line no-magic-numbers
    if (status !== 200) {
      throw new Error(`Unexpected response status code: ${status}`)
    }

    return data || null
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

export { save }
export default cvApi
