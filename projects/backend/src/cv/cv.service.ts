import { Injectable } from '@nestjs/common'
import { CV } from './cv.interface'
import { CVRepository } from './cv.repository'
import mockCv from './mockCv'

@Injectable()
export class CVService {
  constructor(private cvRepository: CVRepository) {}

  getCV() {
    return mockCv
  }

  async updateCV(uid: string, cv: CV) {
    await this.cvRepository.updateCV(uid, cv)
  }
}
