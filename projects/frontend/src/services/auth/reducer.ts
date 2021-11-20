import { combineReducers } from '@reduxjs/toolkit'
import { userReducer } from './user'

const authReducer = combineReducers({
  user: userReducer,
})

export default authReducer
