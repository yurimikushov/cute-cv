import axios from 'axios'
import { LoadAllResult, LoadResult, SaveResult, SavePayload } from './model'

class cvApi {
  public static async loadAll() {
    const { status, data } = await axios.get<LoadAllResult>('/cv')

    // eslint-disable-next-line no-magic-numbers
    if (status !== 200) {
      throw new Error(`Unexpected response status code: ${status}`)
    }

    return data
  }

  public static async load(id: string) {
    const { status, data } = await axios.get<LoadResult | ''>(`/cv/${id}`)

    // eslint-disable-next-line no-magic-numbers
    if (status !== 200) {
      throw new Error(`Unexpected response status code: ${status}`)
    }

    return data || null
  }

  public static async save(id: string, cv: SavePayload) {
    const { data } = await axios.put<SaveResult>(`/cv/${id}`, cv)
    return data
  }
}

export default cvApi
