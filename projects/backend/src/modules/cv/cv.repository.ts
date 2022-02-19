import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import firebase from 'firebase-admin'
import { getStorage, Storage } from 'firebase-admin/storage'
import { map } from 'lodash'
import { getFirebaseApp } from 'lib/firebase'
import getCvId from './utils/getCvId'
import { FILE_STORAGE_ROOT_DIR } from './constants'
import { CV } from './cv.interface'

@Injectable()
export class CVRepository {
  private firebaseApp: firebase.app.App
  private storage: Storage

  constructor(private configService: ConfigService) {
    this.firebaseApp = getFirebaseApp()
    this.storage = getStorage(this.firebaseApp)
  }

  async read(userId: string, cvId: string): Promise<CV | null> {
    const [isCvExists] = await this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      .file(this.getFileName(userId, cvId))
      .exists()

    if (!isCvExists) {
      return null
    }

    const buffer = await this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      .file(this.getFileName(userId, cvId))
      .download()

    return JSON.parse(buffer.toString())
  }

  async update(userId: string, cvId: string, cv: CV) {
    await this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      // The Storage API dynamically creates "folders" if isn't exist
      .file(this.getFileName(userId, cvId))
      .save(JSON.stringify(cv))
  }

  async getMetadata(userId: string, cvId: string) {
    const [metadata] = await this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      .file(this.getFileName(userId, cvId))
      .getMetadata()

    return metadata
  }

  async getMetadataAll(userId: string) {
    const files = await this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      .getFiles({ prefix: `cv/${userId}/` })
      .then((res) => res[0])

    return map(files, ({ metadata }) => ({
      id: getCvId(metadata.name),
    }))
  }

  private getFileName(userId: string, cvId: string) {
    return `${FILE_STORAGE_ROOT_DIR}/${userId}/${cvId}.json`
  }
}
