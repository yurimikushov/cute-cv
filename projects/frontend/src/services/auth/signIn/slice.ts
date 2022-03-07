import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { SignInState } from './model'

const initialState: SignInState = {
  isChecking: true, // to don't have glitch of sign in modal
  isSignedIn: false,
  isSkipped: false,
  isModalDisplayed: true,
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
    signedOut: (state) => {
      state.isSignedIn = false
    },
    skip: (state) => {
      state.isSkipped = true
    },
    displayModal: (state) => {
      state.isModalDisplayed = true
    },
    hideModal: (state) => {
      state.isModalDisplayed = false
    },
  },
})

export const {
  beginChecking,
  finishChecking,
  signedIn,
  signedOut,
  skip,
  displayModal,
  hideModal,
} = actions
export default reducer
