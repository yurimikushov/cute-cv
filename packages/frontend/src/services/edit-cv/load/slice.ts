import { createSlice } from '@reduxjs/toolkit'
import isObject from 'shared/lib/isObject'
import { ServiceNameEnum } from 'services'
import { LoadingState } from './model'
import { loadAll, load } from './thunks'

const initialState: LoadingState = {
  isLoadingAll: false,
  errorAll: null,
  isLoading: false,
  error: null,
}

const { reducer } = createSlice({
  name: `${ServiceNameEnum.EditCv}/load`,
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(loadAll.pending, (state) => {
        state.isLoadingAll = true
        state.errorAll = null
      })
      .addCase(loadAll.fulfilled, (state) => {
        state.isLoadingAll = false
      })
      .addCase(loadAll.rejected, (state, { payload, error }) => {
        state.isLoadingAll = false

        if (!isObject(payload) || Object.hasOwn(payload, 'isEmpty')) {
          state.errorAll = error
        }
      })

      .addCase(load.pending, (state) => {
        state.isLoading = true
        state.error = null
      })
      .addCase(load.fulfilled, (state) => {
        state.isLoading = false
      })
      .addCase(load.rejected, (state, { payload, error }) => {
        state.isLoading = false

        if (!isObject(payload) || Object.hasOwn(payload, 'isEmpty')) {
          state.error = error
        }
      })
  },
  reducers: {},
})

export default reducer
