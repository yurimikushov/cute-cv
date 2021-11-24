import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import firebase from 'firebase-admin'
import { getStorage, Storage } from 'firebase-admin/storage'
import { Stream } from 'stream'
import { getFirebaseApp } from 'lib/firebase'
import { CV } from './cv.interface'

@Injectable()
export class CVRepository {
  private firebaseApp: firebase.app.App
  private storage: Storage

  constructor(private configService: ConfigService) {
    this.firebaseApp = getFirebaseApp()
    this.storage = getStorage(this.firebaseApp)
  }

  async readCV(uid: string): Promise<CV | null> {
    const [isCvExists] = await this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      .file(this.getFileName(uid))
      .exists()

    if (!isCvExists) {
      return null
    }

    return new Promise((resolve, reject) => {
      const receiver = new Stream.PassThrough()

      this.storage
        .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
        .file(this.getFileName(uid))
        .createReadStream()
        .pipe(receiver)
        .on('finish', () => {
          resolve(receiver.read().toString())
        })
        .on('error', reject)
    })
  }

  async updateCV(uid: string, cv: CV) {
    return new Promise((resolve, reject) => {
      const sender = new Stream.PassThrough()
      sender.write(JSON.stringify(cv))
      sender.end()

      sender
        .pipe(
          this.storage
            .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
            .file(this.getFileName(uid))
            .createWriteStream()
        )
        .on('finish', resolve)
        .on('error', reject)
    })
  }

  async getMetadata(uid: string) {
    const [metadata] = await this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      .file(this.getFileName(uid))
      .getMetadata()

    return metadata
  }

  private getFileName(uid: string) {
    return `cv/${uid}.json`
  }
}
