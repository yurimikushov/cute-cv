import { Injectable } from '@nestjs/common'
import { CV } from './cv.interface'
import { CVRepository } from './cv.repository'

@Injectable()
export class CVService {
  constructor(private cvRepository: CVRepository) {}

  async get(uid: string) {
    return await this.cvRepository.read(uid)
  }

  async update(uid: string, cv: CV) {
    await this.cvRepository.update(uid, cv)

    const { updated: savedAt } = await this.cvRepository.getMetadata(uid)

    return {
      savedAt,
    } as const
  }
}
