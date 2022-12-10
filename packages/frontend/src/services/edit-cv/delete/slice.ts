import { createSlice } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { DeleteState } from './model'
import { deleteCv } from './thunks'

const initialState: DeleteState = {
  isDeleting: false,
  error: null,
}

const { reducer } = createSlice({
  name: `${ServiceNameEnum.EditCv}/delete`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(deleteCv.pending, (state) => {
      state.isDeleting = true
      state.error = null
    })
    builder.addCase(deleteCv.fulfilled, (state) => {
      state.isDeleting = false
    })
    builder.addCase(deleteCv.rejected, (state, { error }) => {
      state.isDeleting = false
      state.error = error
    })
  },
  reducers: {},
})

export default reducer
