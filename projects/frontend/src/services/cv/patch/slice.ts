import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { PatchState } from './model'
import { patch } from './thunks'

const initialState: PatchState = {
  isPatching: false,
  error: null,
}

const { reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/patch`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(patch.pending, (state) => {
      state.isPatching = true
      state.error = null
    })
    builder.addCase(patch.fulfilled, (state) => {
      state.isPatching = false
    })
    builder.addCase(patch.rejected, (state, { error }) => {
      state.isPatching = false
      state.error = error
    })
  },
  reducers: {},
})

export default reducer
