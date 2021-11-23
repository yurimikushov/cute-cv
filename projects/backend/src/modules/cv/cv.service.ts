import { Injectable } from '@nestjs/common'
import { CV } from './cv.interface'
import { CVRepository } from './cv.repository'

@Injectable()
export class CVService {
  constructor(private cvRepository: CVRepository) {}

  async getCV(uid: string) {
    return await this.cvRepository.readCV(uid)
  }

  async updateCV(uid: string, cv: CV) {
    return await this.cvRepository.updateCV(uid, cv)
  }
}