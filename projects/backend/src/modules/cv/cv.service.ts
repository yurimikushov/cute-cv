import { Injectable } from '@nestjs/common'
import { assign, isNil } from 'lodash'
import { EntityForbiddenError, EntityNotFoundError } from 'errors'
import { CvId, UserId, IncomingCV, PartialCV } from './cv.interface'
import { CVRepository } from './cv.repository'

@Injectable()
export class CVService {
  constructor(private cvRepository: CVRepository) {}

  async getAll(userId: UserId) {
    return await this.cvRepository.readAllMetadataByUserId(userId)
  }

  async get(userId: UserId, cvId: CvId) {
    const isExist = await this.cvRepository.isExistByUserId(userId, cvId)

    if (!isExist) {
      throw new EntityNotFoundError(`CV isn't exist`)
    }

    return await this.cvRepository.read(userId, cvId)
  }

  async add(userId: UserId, cv: IncomingCV) {
    const cvId = await this.cvRepository.addByUserId(userId, cv)

    return await this.cvRepository.readMetadataByUserId(userId, cvId)
  }

  async update(userId: UserId, cvId: CvId, cv: IncomingCV) {
    const isExist = await this.cvRepository.isExistByUserId(userId, cvId)

    if (!isExist) {
      throw new EntityNotFoundError(`CV isn't exist`)
    }

    await this.cvRepository.updateByUserId(userId, cvId, cv)

    return await this.cvRepository.readMetadataByUserId(userId, cvId)
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

    await this.cvRepository.updateByUserId(userId, cvId, {
      metadata: newMetadata,
      content: newContent,
    })

    return await this.cvRepository.readMetadataByUserId(userId, cvId)
  }

  async delete(userId: UserId, cvId: CvId) {
    const isExist = await this.cvRepository.isExistByUserId(userId, cvId)

    if (!isExist) {
      return
    }

    await this.cvRepository.deleteByUserId(userId, cvId)
  }

  async shareOne(cvId: CvId) {
    const isExist = await this.cvRepository.isExist(cvId)

    if (!isExist) {
      throw new EntityNotFoundError(`CV isn't exist`)
    }

    const isSharable = await this.cvRepository.isShareable(cvId)

    if (!isSharable) {
      throw new EntityForbiddenError(`Owner forbade share this cv`)
    }

    return await this.cvRepository.readShareable(cvId)
  }
}
