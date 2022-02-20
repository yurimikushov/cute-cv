import axios from 'axios'
import isString from 'lodash/isString'
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

    if (isString(data)) {
      return null
    }

    // TODO: should include these values into backend response
    data.metadata.id = id
    data.metadata.name = 'Custom version name'

    return data
  }

  public static async save(id: string, cv: SavePayload) {
    const { data } = await axios.put<SaveResult>(`/cv/${id}`, cv)
    return {
      ...data,
      id,
    }
  }
}

export default cvApi
