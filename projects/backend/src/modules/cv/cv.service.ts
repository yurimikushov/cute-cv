import { Injectable } from '@nestjs/common'
import { assign, isNil, isNull } from 'lodash'
import { CvId, UserId, IncomingCV, PartialCV } from './cv.interface'
import { CVRepository } from './cv.repository'

@Injectable()
export class CVService {
  constructor(private cvRepository: CVRepository) {}

  async getAll(userId: UserId) {
    return await this.cvRepository.readAllMetadata(userId)
  }

  async get(userId: UserId, cvId: CvId) {
    const cv = await this.cvRepository.read(userId, cvId)

    if (isNull(cv)) {
      return null
    }

    return cv
  }

  async add(userId: UserId, cv: IncomingCV) {
    const cvId = await this.cvRepository.add(userId, cv)

    return await this.cvRepository.readMetadata(userId, cvId)
  }

  async update(userId: UserId, cvId: CvId, cv: IncomingCV) {
    await this.cvRepository.update(userId, cvId, cv)

    return await this.cvRepository.readMetadata(userId, cvId)
  }

  async patch(userId: UserId, cvId: CvId, cv: PartialCV) {
    const { metadata, content } = cv

    if (isNil(metadata) && isNil(content)) {
      return
    }

    const { metadata: oldMetadata, content: oldContent } =
      await this.cvRepository.read(userId, cvId)

    const newMetadata = assign(oldMetadata, metadata)
    const newContent = assign(oldContent, content)

    await this.cvRepository.update(userId, cvId, {
      metadata: newMetadata,
      content: newContent,
    })

    return await this.cvRepository.readMetadata(userId, cvId)
  }

  async delete(userId: UserId, cvId: CvId) {
    await this.cvRepository.delete(userId, cvId)
  }
}
