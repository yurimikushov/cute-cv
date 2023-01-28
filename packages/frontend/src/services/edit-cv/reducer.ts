import { combineReducers } from '@reduxjs/toolkit'
import { updateReducer } from './update'

const cvReducer = combineReducers({
  update: updateReducer,
})

export default cvReducer
