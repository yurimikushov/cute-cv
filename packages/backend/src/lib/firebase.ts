import firebase from 'firebase-admin'
import { isEmpty, replace } from 'lodash'

const getFirebaseApp = () => {
  if (isEmpty(firebase.apps)) {
    return firebase.initializeApp({
      credential: firebase.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        privateKey: replace(process.env.FIREBASE_PRIVATE_KEY, /\\n/g, '\n'),
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
      }),
      databaseURL: process.env.FIREBASE_DATABASE_URL,
    })
  }

  return firebase.app()
}

export { getFirebaseApp }
