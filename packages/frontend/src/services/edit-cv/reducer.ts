import { combineReducers } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { ServiceNameEnum } from 'services'
import { editableReducer } from './editable'
import { loadReducer } from './load'
import { addReducer } from './add'
import { updateReducer } from './update'
import { patchReducer } from './patch'
import { deleteReducer } from './delete'
import { versionsReducer } from './versions'

const persistConfig = {
  key: `${ServiceNameEnum.EditCv}/editable`,
  storage,
}

const cvReducer = combineReducers({
  editable: persistReducer(persistConfig, editableReducer),
  load: loadReducer,
  add: addReducer,
  update: updateReducer,
  patch: patchReducer,
  delete: deleteReducer,
  versions: versionsReducer,
})

export default cvReducer
