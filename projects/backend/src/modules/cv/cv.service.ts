import { Injectable } from '@nestjs/common'
import { CV } from './cv.interface'
import mockCv from './mockCv'

@Injectable()
export class CVService {
  getCV() {
    return mockCv
  }

  updateCV(cv: CV) {
    // do update
  }
}
