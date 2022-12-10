import { combineReducers } from '@reduxjs/toolkit'
import { signInReducer } from './signIn'
import { userReducer } from './user'

const authReducer = combineReducers({
  signIn: signInReducer,
  user: userReducer,
})

export default authReducer
