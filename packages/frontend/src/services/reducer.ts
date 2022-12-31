import { combineReducers } from '@reduxjs/toolkit'
import { ServiceNameEnum } from './constants'
import { cvReducer } from './edit-cv'
import { downloadCvReducer } from './download-cv'

const rootReducer = combineReducers({
  [ServiceNameEnum.EditCv]: cvReducer,
  [ServiceNameEnum.DownloadCv]: downloadCvReducer,
})

export default rootReducer
