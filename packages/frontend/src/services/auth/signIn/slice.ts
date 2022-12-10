import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { SignInState } from './model'

const initialState: SignInState = {
  isChecking: true, // to don't have glitch of sign in modal
  isSignedIn: false,
  isSkipped: false,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.Auth}/signIn`,
  initialState,
  reducers: {
    beginChecking: (state) => {
      state.isChecking = true
    },
    finishChecking: (state) => {
      state.isChecking = false
    },
    signedIn: (state) => {
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
