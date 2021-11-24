import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { SaveStateT, FailPayloadT } from './model'

const initialState: SaveStateT = {
  isSaving: false,
  error: null,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/save`,
  initialState,
  reducers: {
    begin: (state) => {
      state.isSaving = true
      state.error = null
    },
    success: (state) => {
      state.isSaving = false
    },
    fail: (state, { payload }: PayloadAction<FailPayloadT>) => {
      state.isSaving = false
      state.error = payload.error
    },
  },
})

export const { begin, success, fail } = actions
export default reducer
