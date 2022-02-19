import { Injectable } from '@nestjs/common'
import { isNull } from 'lodash'
import { CvId, UserId, CV } from './cv.interface'
import { CVRepository } from './cv.repository'

@Injectable()
export class CVService {
  constructor(private cvRepository: CVRepository) {}

  async getAll(userId: UserId) {
    return await this.cvRepository.getMetadataAll(userId)
  }

  async get(userId: UserId, cvId: CvId) {
    const cv = await this.cvRepository.read(userId, cvId)

    if (isNull(cv)) {
      return null
    }

    const { updated: savedAt } = await this.cvRepository.getMetadata(
      userId,
      cvId
    )

    return {
      metadata: {
        savedAt,
      },
      content: cv,
    } as const
  }

  async update(userId: UserId, cvId: CvId, cv: CV) {
    await this.cvRepository.update(userId, cvId, cv)

    const { updated: savedAt } = await this.cvRepository.getMetadata(
      userId,
      cvId
    )

    return {
      savedAt,
    } as const
  }
}
