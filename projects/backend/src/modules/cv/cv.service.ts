import { Injectable } from '@nestjs/common'
import mockCv from './mockCv'

@Injectable()
export class CVService {
  getCV() {
    return mockCv
  }
}
