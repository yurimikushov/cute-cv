import { combineReducers } from '@reduxjs/toolkit'
import { addReducer } from './add'
import { updateReducer } from './update'
import { deleteReducer } from './delete'

const cvReducer = combineReducers({
  add: addReducer,
  update: updateReducer,
  delete: deleteReducer,
})

export default cvReducer
