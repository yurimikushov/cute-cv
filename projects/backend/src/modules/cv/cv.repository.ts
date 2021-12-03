import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import firebase from 'firebase-admin'
import { getStorage, Storage } from 'firebase-admin/storage'
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

  async read(uid: string): Promise<CV | null> {
    const [isCvExists] = await this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      .file(this.getFileName(uid))
      .exists()

    if (!isCvExists) {
      return null
    }

    const buffer = await this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      .file(this.getFileName(uid))
      .download()

    return JSON.parse(buffer.toString())
  }

  async update(uid: string, cv: CV) {
    await this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      .file(this.getFileName(uid))
      .save(JSON.stringify(cv))
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
