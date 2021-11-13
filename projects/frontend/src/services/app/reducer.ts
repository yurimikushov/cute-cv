import { combineReducers } from '@reduxjs/toolkit'
import { editableReducer } from './editable'
import { loadingReducer } from './loading'

const appReducer = combineReducers({
  editable: editableReducer,
  loading: loadingReducer,
})

export default appReducer
