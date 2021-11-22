import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { FirebaseApp, initializeApp } from 'firebase/app'
import { FirebaseStorage, getStorage, ref, uploadBytes } from 'firebase/storage'
import { readFile, writeFile, unlink } from 'fs/promises'
import { CV } from './cv.interface'

@Injectable()
export class CVRepository {
  private firebaseApp: FirebaseApp
  private storage: FirebaseStorage

  constructor(private configService: ConfigService) {
    this.firebaseApp = initializeApp({
      apiKey: this.configService.get('FIREBASE_API_KEY'),
      projectId: this.configService.get('FIREBASE_PROJECT_ID'),
      appId: this.configService.get('FIREBASE_APP_ID'),
      authDomain: this.configService.get('FIREBASE_AUTH_DOMAIN'),
      storageBucket: this.configService.get('FIREBASE_STORAGE_BUCKET'),
      messagingSenderId: this.configService.get('FIREBASE_MESSAGING_SENDER_ID'),
    })
    this.storage = getStorage(this.firebaseApp)
  }

  async updateCV(uid: string, cv: CV) {
    const tempPath = `${uid}.json`

    try {
      await writeFile(tempPath, JSON.stringify(cv))

      const buffer = await readFile(tempPath)
      const cvRef = ref(this.storage, `cv/${uid}.json`)

      const { metadata } = await uploadBytes(cvRef, buffer)

      console.log({ metadata })
    } catch (error) {
      console.log({ error })
    } finally {
      unlink(tempPath)
    }
  }

  readCV(uid: string): CV | null {
    console.log('readCV')
    return null
  }
}
