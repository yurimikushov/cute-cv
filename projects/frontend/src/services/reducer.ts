import { combineReducers } from '@reduxjs/toolkit'
import { ServiceNameEnum } from './constants'
import { appReducer } from './app'
import { userReducer } from './user'
import { cvReducer } from './cv'

const rootReducer = combineReducers({
  [ServiceNameEnum.app]: appReducer,
  [ServiceNameEnum.user]: userReducer,
  [ServiceNameEnum.cv]: cvReducer,
})

export default rootReducer
