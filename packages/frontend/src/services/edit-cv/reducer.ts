import { combineReducers } from '@reduxjs/toolkit'
import { addReducer } from './add'
import { updateReducer } from './update'

const cvReducer = combineReducers({
  add: addReducer,
  update: updateReducer,
})

export default cvReducer
