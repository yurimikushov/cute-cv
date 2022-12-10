import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { UpdateState } from './model'
import { update } from './thunks'

const initialState: UpdateState = {
  isUpdating: false,
  error: null,
}

const { reducer } = createSlice({
  name: `${ServiceNameEnum.EditCv}/update`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(update.pending, (state) => {
      state.isUpdating = true
      state.error = null
    })
    builder.addCase(update.fulfilled, (state) => {
      state.isUpdating = false
    })
    builder.addCase(update.rejected, (state, { error }) => {
      state.isUpdating = false
      state.error = error
    })
  },
  reducers: {},
})

export default reducer
