import { createSlice, isAnyOf } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { LoadingStateT } from './model'
import { loadAll, load } from './thunks'

const initialState: LoadingStateT = {
  isLoading: false,
  error: null,
}

const { reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/load`,
  initialState,
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(loadAll.pending, load.pending), (state) => {
        state.isLoading = true
        state.error = null
      })
      .addMatcher(isAnyOf(loadAll.fulfilled, load.fulfilled), (state) => {
        state.isLoading = false
      })
      .addMatcher(
        isAnyOf(loadAll.rejected, load.rejected),
        (state, { payload, error }) => {
          state.isLoading = false

          // @ts-expect-error bad typing
          if (!('isEmpty' in payload)) {
            state.error = error
          }
        }
      )
  },
  reducers: {},
})

export default reducer
