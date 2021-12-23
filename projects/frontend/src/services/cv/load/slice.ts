import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { LoadingStateT } from './model'
import { load } from './thunks'

const initialState: LoadingStateT = {
  isLoading: false,
  error: null,
}

const { reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/load`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(load.pending, (state) => {
      state.isLoading = true
      state.error = null
    })
    builder.addCase(load.fulfilled, (state) => {
      state.isLoading = false
    })
    builder.addCase(load.rejected, (state, { payload, error }) => {
      state.isLoading = false

      // @ts-expect-error bad typing
      if (!('isEmpty' in payload)) {
        state.error = error
      }
    })
  },
  reducers: {},
})

export default reducer
