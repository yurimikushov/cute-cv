import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { FailPayloadT, SavingStateT } from './model'

const initialState: SavingStateT = {
  isSaved: true,
  savedAt: null,
  error: null,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/save`,
  initialState,
  reducers: {
    begin: (state) => {
      state.isSaved = false
      state.savedAt = null
    },
    success: (state) => {
      state.isSaved = true
      state.savedAt = new Date()
    },
    fail: (state, { payload }: PayloadAction<FailPayloadT>) => {
      state.isSaved = false
      state.error = payload.error
    },
  },
})

export const { begin, success, fail } = actions
export default reducer
