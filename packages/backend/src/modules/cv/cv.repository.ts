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
import { EntityForbiddenError } from 'errors'
import { FIRE_STORAGE_COLLECTION } from './constants'
import { UserId, CvId, CV, IncomingCV, RawCv, Metadata } from './cv.interface'

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
      const rawCv = doc.data() as RawCv
      const { metadata } = this.convertRawCv(rawCv)
      allMetadata.push(metadata)
    })

    return allMetadata
  }

  async readMetadataByUserId(userId: UserId, cvId: CvId) {
    const cvRef = await this.getExistingCvRefByUserId(userId, cvId)
    const rawCv = (await cvRef.get()).data() as RawCv
    const { metadata } = this.convertRawCv(rawCv)
    return metadata
  }

  async read(userId: UserId, cvId: CvId): Promise<CV | null> {
    const cvRef = await this.getExistingCvRefByUserId(userId, cvId)
    const rawCv = (await cvRef.get()).data() as RawCv
    return this.convertRawCv(rawCv)
  }

  async isShareable(cvId: CvId) {
    const result = await this.getCvCollection().doc(cvId).get()
    const { metadata } = this.convertRawCv(result.data() as RawCv)
    const { allowShare } = metadata
    return allowShare
  }

  async readShareable(cvId: CvId): Promise<CV> {
    const result = await this.getCvCollection().doc(cvId).get()
    const rawCv = result.data() as RawCv
    const { content, metadata } = this.convertRawCv(rawCv)
    const { allowShare } = metadata

    if (!allowShare) {
      throw new EntityForbiddenError(`Owner forbade share this cv`)
    }

    return {
      metadata,
      content,
    }
  }

  async addByUserId(userId: UserId, cv: IncomingCV) {
    const cvId = await this.getNewCvId()
    const { metadata, content } = cv
    const { name, number, allowShare } = metadata

    await this.getNewCvRef(cvId).set({
      userId,
      cvId,
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
      cvId,
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
      .where('cvId', '==', cvId)
      .get()

    if (result.empty) {
      return false
    }

    return true
  }

  async isExist(cvId: CvId) {
    const { exists } = await this.getCvCollection().doc(cvId).get()
    return exists
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
      .where('cvId', '==', cvId)
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

  private convertRawCv(cv: RawCv) {
    const { metadata, content } = cv
    const { savedAt } = metadata

    return {
      metadata: {
        ...metadata,
        savedAt: savedAt.toDate().toISOString(),
      },
      content: {
        ...content,
      },
    }
  }
}
