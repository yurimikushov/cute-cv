import axios from 'axios'
import isString from 'lodash/isString'
import { CV } from 'services/cv'
import { LoadAllResult, LoadResult, SaveResult } from './model'

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

    return data
  }

  public static async save(id: string, name: string, cv: CV) {
    const { data } = await axios.put<SaveResult>(`/cv/${id}`, {
      metadata: {
        name,
      },
      content: cv,
    })

    return data
  }
}

export default cvApi
