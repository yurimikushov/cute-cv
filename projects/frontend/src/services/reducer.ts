import { combineReducers } from '@reduxjs/toolkit'
import { appReducer } from './app'
import { cvReducer } from './cv'

const rootReducer = combineReducers({
  app: appReducer,
  cv: cvReducer,
})

export default rootReducer
