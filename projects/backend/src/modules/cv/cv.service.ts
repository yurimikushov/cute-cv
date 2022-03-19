import { Injectable } from '@nestjs/common'
import { assign, isNil } from 'lodash'
import { EntityNotFoundError } from 'errors'
import { CvId, UserId, IncomingCV, PartialCV } from './cv.interface'
import { CVRepository } from './cv.repository'

@Injectable()
export class CVService {
  constructor(private cvRepository: CVRepository) {}

  async getAll(userId: UserId) {
    return await this.cvRepository.readAllMetadata(userId)
  }

  async get(userId: UserId, cvId: CvId) {
    const isExist = await this.cvRepository.isExistByUserId(userId, cvId)

    if (!isExist) {
      throw new EntityNotFoundError(`CV isn't exist`)
    }

    return await this.cvRepository.read(userId, cvId)
  }

  async add(userId: UserId, cv: IncomingCV) {
    const cvId = await this.cvRepository.add(userId, cv)

    return await this.cvRepository.readMetadata(userId, cvId)
  }

  async update(userId: UserId, cvId: CvId, cv: IncomingCV) {
    const isExist = await this.cvRepository.isExistByUserId(userId, cvId)

    if (!isExist) {
      throw new EntityNotFoundError(`CV isn't exist`)
    }

    await this.cvRepository.update(userId, cvId, cv)

    return await this.cvRepository.readMetadata(userId, cvId)
  }

  async patch(userId: UserId, cvId: CvId, cv: PartialCV) {
    const isExist = await this.cvRepository.isExistByUserId(userId, cvId)

    if (!isExist) {
      throw new EntityNotFoundError(`CV isn't exist`)
    }

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
    const isExist = await this.cvRepository.isExistByUserId(userId, cvId)

    if (!isExist) {
      return
    }

    await this.cvRepository.delete(userId, cvId)
  }
}
