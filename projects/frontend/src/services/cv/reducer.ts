import { combineReducers } from '@reduxjs/toolkit'
import { editableReducer } from './editable'
import { loadingReducer } from './load'
import { savingReducer } from './save'
import { contentReducer } from './content'

const cvReducer = combineReducers({
  editable: editableReducer,
  loading: loadingReducer,
  saving: savingReducer,
  content: contentReducer,
})

export default cvReducer
