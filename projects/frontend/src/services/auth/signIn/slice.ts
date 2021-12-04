import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { SignInStateT } from './model'

const initialState: SignInStateT = {
  isChecking: false,
  isSignedIn: false,
  isSkipped: false,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.auth}/signIn`,
  initialState,
  reducers: {
    beginChecking: (state) => {
      state.isChecking = true
    },
    finishChecking: (state) => {
      state.isChecking = false
    },
    signedIn: (state) => {
      state.isSkipped = false
      state.isSignedIn = true
    },
    signedOut: (state) => {
      state.isSignedIn = false
    },
    skip: (state) => {
      state.isSkipped = true
    },
  },
})

export const { beginChecking, finishChecking, signedIn, signedOut, skip } =
  actions
export default reducer
