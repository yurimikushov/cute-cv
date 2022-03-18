import { Injectable } from '@nestjs/common'
import firebase from 'firebase-admin'
import {
  getFirestore,
  Firestore,
  DocumentReference,
} from 'firebase-admin/firestore'
import { nanoid } from 'nanoid'
import { head, isNil, isNull } from 'lodash'
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

  async readAllMetadata(userId: UserId) {
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

  async readMetadata(userId: UserId, cvId: CvId) {
    const cvRef = await this.getExistingCvRef(userId, cvId)
    const cv = (await cvRef.get()).data()

    if (isNil(cv)) {
      return null
    }

    const { metadata } = cv
    return this.convertRawMetadata(metadata)
  }

  async read(userId: UserId, cvId: CvId): Promise<CV | null> {
    const cvRef = await this.getExistingCvRef(userId, cvId)
    const cv = (await cvRef.get()).data()

    if (isNil(cv)) {
      return null
    }

    const { content, metadata } = cv

    return {
      metadata: this.convertRawMetadata(metadata),
      content,
    } as CV
  }

  async add(userId: UserId, cv: IncomingCV) {
    const cvId = nanoid()
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

  async update(userId: UserId, cvId: CvId, cv: IncomingCV) {
    const { metadata, content } = cv
    const { name, number, allowShare } = metadata

    const cvRef = await this.getExistingCvRef(userId, cvId)

    if (isNull(cvRef)) {
      return
    }

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

  async delete(userId: UserId, cvId: CvId) {
    const cvRef = await this.getExistingCvRef(userId, cvId)

    if (isNull(cvRef)) {
      return
    }

    await cvRef.delete()
  }

  private getCvCollection() {
    return this.db.collection(FIRE_STORAGE_COLLECTION)
  }

  private getNewCvRef(cvId: CvId) {
    return this.db.collection(FIRE_STORAGE_COLLECTION).doc(cvId)
  }

  private async getExistingCvRef(
    userId: UserId,
    cvId: CvId
  ): Promise<DocumentReference | null> {
    const result = await this.getCvCollection()
      .where('userId', '==', userId)
      .where('metadata.id', '==', cvId)
      .get()

    if (result.empty) {
      return null
    }

    return head(result.docs).ref
  }

  private convertRawMetadata(metadata: RawMetadata) {
    const { savedAt } = metadata

    return {
      ...metadata,
      savedAt: savedAt.toDate().toISOString(),
    }
  }
}
