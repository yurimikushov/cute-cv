import axios from 'axios'
import isString from 'lodash/isString'
import map from 'lodash/map'
import isNull from 'lodash/isNull'
import {
  LoadAllResult,
  LoadResult,
  LoadSharableResult,
  AddPayload,
  AddResult,
  UpdatePayload,
  UpdateResult,
  PatchPayload,
  PatchResult,
} from './model'
import { validateCv, validateCvMetadata, Cv, CvMetadata } from './validations'
import { convertRawCv, convertRawCvMetadata } from './utils'

class cvApi {
  static async loadAll(): Promise<Array<CvMetadata>> {
    const { status, data } = await axios.get<LoadAllResult>('/cv')

    // eslint-disable-next-line no-magic-numbers
    if (status !== 200) {
      throw new Error(`Unexpected response status code: ${status}`)
    }

    return map(data, (cvMetadata) =>
      validateCvMetadata(convertRawCvMetadata(cvMetadata))
    )
  }

  static async load(publicId: string): Promise<Cv | null> {
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

  static async loadSharable(publicId: string): Promise<Cv> {
    const { data } = await axios.get<LoadSharableResult>(
      `/cv/share/${publicId}`
    )

    return validateCv(convertRawCv(data))
  }

  static async add({ name, number, allowShare, cv }: AddPayload) {
    const { data } = await axios.post<AddResult>(`/cv`, {
      metadata: {
        name,
        number,
        allowShare,
      },
      content: cv,
    })

    return validateCvMetadata(convertRawCvMetadata(data))
  }

  static async update({
    publicId,
    name,
    number,
    allowShare,
    cv,
  }: UpdatePayload): Promise<CvMetadata> {
    const { data } = await axios.put<UpdateResult>(`/cv/${publicId}`, {
      metadata: {
        name,
        number,
        allowShare,
      },
      content: cv,
    })

    return validateCvMetadata(convertRawCvMetadata(data))
  }

  static async patch({
    publicId,
    name,
    number,
    allowShare,
    cv,
  }: PatchPayload): Promise<CvMetadata> {
    const { data } = await axios.patch<PatchResult>(`/cv/${publicId}`, {
      metadata: {
        name,
        number,
        allowShare,
      },
      content: cv,
    })

    return validateCvMetadata(convertRawCvMetadata(data))
  }

  static async delete(publicId: string): Promise<void> {
    const { status } = await axios.delete(`/cv/${publicId}`)

    // eslint-disable-next-line no-magic-numbers
    if (status !== 200) {
      throw new Error(`Unexpected response status code: ${status}`)
    }
  }

  static loadCvOfUnsignedInUser(): Cv | null {
    const rawCV = localStorage.getItem('persist:unsignedin:cv')

    if (isNull(rawCV)) {
      return null
    }

    return validateCv(convertRawCv(JSON.parse(rawCV)))
  }

  static saveCvOfUnsignedInUser(cv: Cv) {
    localStorage.setItem('persist:unsignedin:cv', JSON.stringify(cv))
  }

  static deleteCvOfUnsignedInUser() {
    localStorage.removeItem('persist:unsignedin:cv')
  }
}

export default cvApi
