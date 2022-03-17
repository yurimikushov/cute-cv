import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { AddState } from './model'
import { add } from './thunks'

const initialState: AddState = {
  isAdding: false,
  error: null,
}

const { reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/add`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(add.pending, (state) => {
      state.isAdding = true
      state.error = null
    })
    builder.addCase(add.fulfilled, (state) => {
      state.isAdding = false
    })
    builder.addCase(add.rejected, (state, { error }) => {
      state.isAdding = false
      state.error = error
    })
  },
  reducers: {},
})

export default reducer
