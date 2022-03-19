import { Injectable } from '@nestjs/common'
import firebase from 'firebase-admin'
import {
  getFirestore,
  Firestore,
  DocumentReference,
} from 'firebase-admin/firestore'
import { nanoid } from 'nanoid'
import { head } from 'lodash'
import { getFirebaseApp } from 'lib/firebase'
import { FIRE_STORAGE_COLLECTION } from './constants'
import {
  UserId,
  CvId,
  CV,
  IncomingCV,
  Metadata,
  RawMetadata,
} from './cv.interface'

@Injectable()
export class CVRepository {
  private firebaseApp: firebase.app.App
  private db: Firestore

  constructor() {
    this.firebaseApp = getFirebaseApp()
    this.db = getFirestore(this.firebaseApp)
  }

  async readAllMetadataByUserId(userId: UserId) {
    const docs = await this.getCvCollection()
      .where('userId', '==', userId)
      .get()

    const allMetadata: Array<Metadata> = []

    docs.forEach((doc) => {
      const { metadata } = doc.data()
      allMetadata.push(this.convertRawMetadata(metadata))
    })

    return allMetadata
  }

  async readMetadataByUserId(userId: UserId, cvId: CvId) {
    const cvRef = await this.getExistingCvRefByUserId(userId, cvId)
    const { metadata } = (await cvRef.get()).data()
    return this.convertRawMetadata(metadata)
  }

  async read(userId: UserId, cvId: CvId): Promise<CV | null> {
    const cvRef = await this.getExistingCvRefByUserId(userId, cvId)
    const { content, metadata } = (await cvRef.get()).data()

    return {
      metadata: this.convertRawMetadata(metadata),
      content,
    } as CV
  }

  async addByUserId(userId: UserId, cv: IncomingCV) {
    const cvId = await this.getNewCvId()
    const { metadata, content } = cv
    const { name, number, allowShare } = metadata

    await this.getNewCvRef(cvId).set({
      userId,
      metadata: {
        id: cvId,
        name,
        number,
        savedAt: new Date(),
        allowShare,
      },
      content,
    })

    return cvId
  }

  async updateByUserId(userId: UserId, cvId: CvId, cv: IncomingCV) {
    const { metadata, content } = cv
    const { name, number, allowShare } = metadata

    const cvRef = await this.getExistingCvRefByUserId(userId, cvId)

    await cvRef.update({
      userId,
      metadata: {
        id: cvId,
        name,
        number,
        savedAt: new Date(),
        allowShare,
      },
      content,
    })
  }

  async deleteByUserId(userId: UserId, cvId: CvId) {
    const cvRef = await this.getExistingCvRefByUserId(userId, cvId)
    await cvRef.delete()
  }

  async isExistByUserId(userId: UserId, cvId: CvId) {
    const result = await this.getCvCollection()
      .where('userId', '==', userId)
      .where('metadata.id', '==', cvId)
      .get()

    if (result.empty) {
      return false
    }

    return true
  }

  async isExist(cvId: CvId) {
    const result = await this.getCvCollection()
      .where('metadata.id', '==', cvId)
      .get()

    return !result.empty
  }

  private getCvCollection() {
    return this.db.collection(FIRE_STORAGE_COLLECTION)
  }

  private getNewCvRef(cvId: CvId) {
    return this.db.collection(FIRE_STORAGE_COLLECTION).doc(cvId)
  }

  private async getExistingCvRefByUserId(
    userId: UserId,
    cvId: CvId
  ): Promise<DocumentReference | null> {
    const result = await this.getCvCollection()
      .where('userId', '==', userId)
      .where('metadata.id', '==', cvId)
      .get()

    return head(result.docs).ref
  }

  private async getNewCvId() {
    const cvId = nanoid()

    const cvSnapshot = await this.db
      .collection(FIRE_STORAGE_COLLECTION)
      .doc(cvId)
      .get()

    if (cvSnapshot.exists) {
      return this.getNewCvId()
    }

    return cvId
  }

  private convertRawMetadata(metadata: RawMetadata) {
    const { savedAt } = metadata

    return {
      ...metadata,
      savedAt: savedAt.toDate().toISOString(),
    }
  }
}
