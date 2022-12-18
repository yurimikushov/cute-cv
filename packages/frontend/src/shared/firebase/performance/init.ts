import {
  initializePerformance,
  FirebasePerformance,
} from 'firebase/performance'
import { getFirebaseApp } from '../app'

let performance: FirebasePerformance | null = null

const initFirebasePerformance = () => {
  if (performance) {
    return
  }

  performance = initializePerformance(getFirebaseApp())
}

initFirebasePerformance()
