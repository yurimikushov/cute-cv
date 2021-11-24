import { Injectable } from '@nestjs/common'
import { isNull } from 'lodash'
import { CV } from './cv.interface'
import { CVRepository } from './cv.repository'

@Injectable()
export class CVService {
  constructor(private cvRepository: CVRepository) {}

  async get(uid: string) {
    const cv = await this.cvRepository.read(uid)

    if (isNull(cv)) {
      return null
    }

    const { updated: savedAt } = await this.cvRepository.getMetadata(uid)

    return {
      metadata: {
        savedAt,
      },
      content: cv,
    } as const
  }

  async update(uid: string, cv: CV) {
    await this.cvRepository.update(uid, cv)

    const { updated: savedAt } = await this.cvRepository.getMetadata(uid)

    return {
      savedAt,
    } as const
  }
}
