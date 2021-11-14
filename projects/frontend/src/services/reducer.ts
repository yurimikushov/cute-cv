import { combineReducers } from '@reduxjs/toolkit'
import { ServiceNameEnum } from './constants'
import { appReducer } from './app'
import { cvReducer } from './cv'

const rootReducer = combineReducers({
  [ServiceNameEnum.app]: appReducer,
  [ServiceNameEnum.cv]: cvReducer,
})

export default rootReducer
