import { combineReducers } from '@reduxjs/toolkit'
import { ServiceNameEnum } from './constants'
import { authReducer } from './auth'
import { cvReducer } from './cv'

const rootReducer = combineReducers({
  [ServiceNameEnum.auth]: authReducer,
  [ServiceNameEnum.cv]: cvReducer,
})

export default rootReducer
