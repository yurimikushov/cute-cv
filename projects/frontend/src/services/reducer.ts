import { combineReducers } from '@reduxjs/toolkit'
import { ServiceNameEnum } from './constants'
import { authReducer } from './auth'
import { cvReducer } from './edit-cv'

const rootReducer = combineReducers({
  [ServiceNameEnum.Auth]: authReducer,
  [ServiceNameEnum.EditCv]: cvReducer,
})

export default rootReducer
