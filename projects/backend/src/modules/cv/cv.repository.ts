import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import firebase from 'firebase-admin'
import { getStorage, Storage } from 'firebase-admin/storage'
import { map } from 'lodash'
import { getFirebaseApp } from 'lib/firebase'
import getCvId from './utils/getCvId'
import { FILE_STORAGE_ROOT_DIR } from './constants'
import { UserId, CvId, CV, Content } from './cv.interface'

@Injectable()
export class CVRepository {
  private firebaseApp: firebase.app.App
  private storage: Storage

  constructor(private configService: ConfigService) {
    this.firebaseApp = getFirebaseApp()
    this.storage = getStorage(this.firebaseApp)
  }

  async read(userId: UserId, cvId: CvId): Promise<Content | null> {
    const [isCvExists] = await this.getStorageFile(userId, cvId).exists()

    if (!isCvExists) {
      return null
    }

    const buffer = await this.getStorageFile(userId, cvId).download()

    return JSON.parse(buffer.toString())
  }

  async update(userId: UserId, cvId: CvId, cv: CV) {
    // The Storage API dynamically creates "folders" if isn't exist
    await this.getStorageFile(userId, cvId).save(JSON.stringify(cv.content))

    await this.getStorageFile(userId, cvId).setMetadata({
      metadata: {
        id: cvId,
        name: cv.metadata.name,
      },
    })
  }

  async getMetadata(userId: UserId, cvId: CvId) {
    const [metadata] = await this.getStorageFile(userId, cvId).getMetadata()
    return metadata
  }

  async getMetadataAll(userId: UserId) {
    const files = await this.getStorageFiles(userId)

    return map(files, (file, i) => {
      const {
        metadata: { name: fileName, metadata },
      } = file

      return {
        id: (metadata?.id as string | undefined) ?? getCvId(fileName),
        name: (metadata?.name as string | undefined) ?? `Draft #${i + 1}`,
      }
    })
  }

  private getStorageFile(userId: UserId, cvId: CvId) {
    return this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      .file(`${FILE_STORAGE_ROOT_DIR}/${userId}/${cvId}.json`)
  }

  private async getStorageFiles(userId: UserId) {
    return this.storage
      .bucket(this.configService.get('FIREBASE_STORAGE_BUCKET'))
      .getFiles({ prefix: `cv/${userId}/` })
      .then((res) => res[0])
  }
}
