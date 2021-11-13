import { combineReducers } from '@reduxjs/toolkit'
import { editableReducer } from './editable'
import { loadingReducer } from './loading'
import { savingReducer } from './saving'

const appReducer = combineReducers({
  editable: editableReducer,
  loading: loadingReducer,
  saving: savingReducer,
})

export default appReducer
