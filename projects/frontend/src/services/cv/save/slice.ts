import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { SaveState } from './model'
import { save } from './thunks'

const initialState: SaveState = {
  isSaving: false,
  error: null,
}

const { reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/save`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(save.pending, (state) => {
      state.isSaving = true
      state.error = null
    })
    builder.addCase(save.fulfilled, (state) => {
      state.isSaving = false
    })
    builder.addCase(save.rejected, (state, { error }) => {
      state.isSaving = false
      state.error = error
    })
  },
  reducers: {},
})

export default reducer
