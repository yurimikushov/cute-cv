import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ServiceNameEnum } from 'services'
import { editableReducer } from './editable'
import { loadReducer } from './load'
import { saveReducer } from './save'
import { metadataReducer } from './metadata'
import { contentReducer } from './content'

const persistConfig = {
  key: `${ServiceNameEnum.cv}/editable`,
  storage,
}

const cvReducer = combineReducers({
  editable: persistReducer(persistConfig, editableReducer),
  load: loadReducer,
  save: saveReducer,
  metadata: metadataReducer,
  content: contentReducer,
})

export default cvReducer
