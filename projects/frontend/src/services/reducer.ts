import { combineReducers } from '@reduxjs/toolkit'
import { ServiceNameEnum } from './constants'
import { appReducer } from './app'
import { authReducer } from './auth'
import { cvReducer } from './cv'

const rootReducer = combineReducers({
  [ServiceNameEnum.app]: appReducer,
  [ServiceNameEnum.auth]: authReducer,
  [ServiceNameEnum.cv]: cvReducer,
})

export default rootReducer
