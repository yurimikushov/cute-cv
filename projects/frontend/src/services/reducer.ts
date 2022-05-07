import { combineReducers } from '@reduxjs/toolkit'
import { ServiceNameEnum } from './constants'
import { authReducer } from './auth'
import { cvReducer } from './edit-cv'
import { shareCvReducer } from './share-cv'
import { downloadCvReducer } from './download-cv'

const rootReducer = combineReducers({
  [ServiceNameEnum.Auth]: authReducer,
  [ServiceNameEnum.EditCv]: cvReducer,
  [ServiceNameEnum.ShareCv]: shareCvReducer,
  [ServiceNameEnum.DownloadCv]: downloadCvReducer,
})

export default rootReducer
