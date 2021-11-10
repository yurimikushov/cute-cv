import { combineReducers } from '@reduxjs/toolkit'
import { editableReducer } from './editable'

const appReducer = combineReducers({
  editable: editableReducer,
})

export default appReducer
