import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import firebase from 'firebase-admin'
import { getStorage, Storage } from 'firebase-admin/storage'
import { nanoid } from 'nanoid'
import { map, filter, includes } from 'lodash'
import { getFirebaseApp } from 'lib/firebase'
import getCvId from './utils/getCvId'
import { FILE_STORAGE_ROOT_DIR } from './constants'
import { UserId, CvId, CV, Metadata, Content } from './cv.interface'

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

  async add(userId: UserId, cv: CV) {
    const cvId = nanoid()
    const { metadata, content } = cv
    const { name, number } = metadata

    // The Storage API dynamically creates "folders" if isn't exist
    await this.getStorageFile(userId, cvId).save(JSON.stringify(content))

    await this.getStorageFile(userId, cvId).setMetadata({
      metadata: {
        id: cvId,
        name,
        number,
      },
    })

    return cvId
  }

  async update(userId: UserId, cvId: CvId, cv: CV) {
    const { metadata, content } = cv
    const { name, number } = metadata

    // The Storage API dynamically creates "folders" if isn't exist
    await this.getStorageFile(userId, cvId).save(JSON.stringify(content))

    await this.getStorageFile(userId, cvId).setMetadata({
      metadata: {
        id: cvId,
        name,
        number,
      },
    })
  }

  async delete(userId: UserId, cvId: CvId) {
    const [isCvExists] = await this.getStorageFile(userId, cvId).exists()

    if (!isCvExists) {
      return
    }

    await this.getStorageFile(userId, cvId).delete()
  }

  async getMetadata(userId: UserId, cvId: CvId) {
    const [{ updated, metadata }] = await this.getStorageFile(
      userId,
      cvId
    ).getMetadata()

    const { id, name, number } = metadata

    return {
      id,
      name,
      number: Number(number),
      savedAt: updated,
    } as Metadata
  }

  async getMetadataAll(userId: UserId) {
    const files = await this.getStorageFiles(userId)

    return map(files, (file, i) => {
      const { metadata: fileMetadata } = file
      const { name: fileName, updated: savedAt, metadata } = fileMetadata
      const { id, name, number } = metadata

      return {
        id: (id as string | undefined) ?? getCvId(fileName),
        name: (name as string | undefined) ?? `Draft #${i + 1}`,
        number: Number((number as string | undefined) ?? i + 1),
        savedAt,
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
      .then((files) => filter(files, ({ name }) => includes(name, '.'))) // this naive line exclude folders
  }
}
