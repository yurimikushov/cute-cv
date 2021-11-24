import { combineReducers } from '@reduxjs/toolkit'
import { editableReducer } from './editable'
import { loadReducer } from './load'
import { saveReducer } from './save'
import { metadataReducer } from './metadata'
import { contentReducer } from './content'

const cvReducer = combineReducers({
  editable: editableReducer,
  load: loadReducer,
  save: saveReducer,
  metadata: metadataReducer,
  content: contentReducer,
})

export default cvReducer
