import { Injectable } from '@nestjs/common'

@Injectable()
export class CVService {
  getCV(id: string): string {
    return `That's #${id} cv. Just imagine it`
  }
}
