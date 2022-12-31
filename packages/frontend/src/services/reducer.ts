import { combineReducers } from '@reduxjs/toolkit'
import { ServiceNameEnum } from './constants'
import { cvReducer } from './edit-cv'

const rootReducer = combineReducers({
  [ServiceNameEnum.EditCv]: cvReducer,
})

export default rootReducer
