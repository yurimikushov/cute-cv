import axios from 'axios'
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

  public static async save(cv: CV) {
    const { data } = await axios.put<SaveResultT>('/cv', cv)
    return data
  }
}

export default cvApi
