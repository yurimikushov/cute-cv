import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { LoadingStateT, FailPayloadT } from './model'

const initialState: LoadingStateT = {
  isLoading: false,
  error: null,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.app}/loading`,
  initialState,
  reducers: {
    begin: (state) => {
      state.isLoading = true
      state.error = null
    },
    success: (state) => {
      state.isLoading = false
    },
    fail: (state, { payload }: PayloadAction<FailPayloadT>) => {
      state.isLoading = false
      state.error = payload.error
    },
  },
})

export const { begin, success, fail } = actions
export default reducer
