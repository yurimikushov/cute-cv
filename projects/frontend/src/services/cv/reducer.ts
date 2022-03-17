import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ServiceNameEnum } from 'services'
import { editableReducer } from './editable'
import { loadReducer } from './load'
import { addReducer } from './add'
import { saveReducer } from './save'
import { patchReducer } from './patch'
import { deleteReducer } from './delete'
import { downloadReducer } from './download'
import { versionsReducer } from './versions'

const persistConfig = {
  key: `${ServiceNameEnum.cv}/editable`,
  storage,
}

const cvReducer = combineReducers({
  editable: persistReducer(persistConfig, editableReducer),
  load: loadReducer,
  add: addReducer,
  save: saveReducer,
  patch: patchReducer,
  delete: deleteReducer,
  download: downloadReducer,
  versions: versionsReducer,
})

export default cvReducer
