import { initializePerformance } from 'firebase/performance'
import { initFirebaseApp } from '../app'

const initFirebasePerformance = () => {
  initializePerformance(initFirebaseApp())
}

initFirebasePerformance()
