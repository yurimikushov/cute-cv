import axios from 'axios'
import isString from 'lodash/isString'
import map from 'lodash/map'
import isNull from 'lodash/isNull'
import {
  LoadAllResult,
  LoadResult,
  AddPayload,
  AddResult,
  SavePayload,
  SaveResult,
  PatchPayload,
  PatchResult,
} from './model'
import { validateCv, validateCvMetadata, Cv } from './validations'
import { convertRawCv, convertRawCvMetadata } from './utils'

class cvApi {
  static async loadAll() {
    const { status, data } = await axios.get<LoadAllResult>('/cv')

    // eslint-disable-next-line no-magic-numbers
    if (status !== 200) {
      throw new Error(`Unexpected response status code: ${status}`)
    }

    return map(data, (cvMetadata) =>
      validateCvMetadata(convertRawCvMetadata(cvMetadata))
    )
  }

  static async load(publicId: string) {
    const { status, data } = await axios.get<LoadResult | ''>(`/cv/${publicId}`)

    // eslint-disable-next-line no-magic-numbers
    if (status !== 200) {
      throw new Error(`Unexpected response status code: ${status}`)
    }

    if (isString(data)) {
      return null
    }

    return validateCv(convertRawCv(data))
  }

  static async add({ name, number, cv }: AddPayload) {
    const { data } = await axios.post<AddResult>(`/cv`, {
      metadata: {
        name,
        number,
      },
      content: cv,
    })

    return validateCvMetadata(convertRawCvMetadata(data))
  }

  static async save({ publicId, name, number, cv }: SavePayload) {
    const { data } = await axios.put<SaveResult>(`/cv/${publicId}`, {
      metadata: {
        name,
        number,
      },
      content: cv,
    })

    return validateCvMetadata(convertRawCvMetadata(data))
  }

  static async patch({ publicId, name, number, cv }: PatchPayload) {
    const { data } = await axios.patch<PatchResult>(`/cv/${publicId}`, {
      metadata: {
        name,
        number,
      },
      content: cv,
    })

    return validateCvMetadata(convertRawCvMetadata(data))
  }

  static async delete(publicId: string) {
    const { status } = await axios.delete(`/cv/${publicId}`)

    // eslint-disable-next-line no-magic-numbers
    if (status !== 200) {
      throw new Error(`Unexpected response status code: ${status}`)
    }
  }

  static loadCvOfUnsignedInUser() {
    const rawCV = localStorage.getItem('persist:unsignedin:cv')

    if (isNull(rawCV)) {
      return null
    }

    return validateCv(JSON.parse(rawCV))
  }

  static saveCvOfUnsignedInUser(cv: Cv) {
    localStorage.setItem('persist:unsignedin:cv', JSON.stringify(cv))
  }

  static deleteCvOfUnsignedInUser() {
    localStorage.removeItem('persist:unsignedin:cv')
  }
}

export default cvApi
