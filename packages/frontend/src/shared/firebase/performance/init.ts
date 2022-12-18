import {
  initializePerformance,
  FirebasePerformance,
} from 'firebase/performance'
import { initFirebaseApp } from '../app'

let performance: FirebasePerformance | null = null

const initFirebasePerformance = () => {
  if (performance) {
    return
  }

  performance = initializePerformance(initFirebaseApp())
}

initFirebasePerformance()
