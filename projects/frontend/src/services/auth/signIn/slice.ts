import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { SignInStateT } from './model'

const initialState: SignInStateT = {
  isChecking: false,
  isSignedIn: false,
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
      state.isSignedIn = true
    },
    notSignedIn: (state) => {
      state.isSignedIn = false
    },
  },
})

export const { beginChecking, finishChecking, signedIn, notSignedIn } = actions
export default reducer
