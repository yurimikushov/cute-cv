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
    const content = await this.cvRepository.read(userId, cvId)

    if (isNull(content)) {
      return null
    }

    const metadata = await this.cvRepository.getMetadata(userId, cvId)

    return {
      metadata,
      content,
    } as const
  }

  async update(userId: UserId, cvId: CvId, cv: CV) {
    await this.cvRepository.update(userId, cvId, cv)

    return await this.cvRepository.getMetadata(userId, cvId)
  }

  async delete(userId: UserId, cvId: CvId) {
    await this.cvRepository.delete(userId, cvId)
  }
}
