import { combineReducers } from '@reduxjs/toolkit'
import { cvReducer } from './cv'

const rootReducer = combineReducers({
  cv: cvReducer,
})

export default rootReducer
