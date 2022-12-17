import { initializeApp, FirebaseApp } from 'firebase/app'

let app: FirebaseApp | null = null

const initFirebaseApp = () => {
  if (app) {
    return
  }

  app = initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  })
}

initFirebaseApp()
