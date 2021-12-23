import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { load } from 'services/cv/load'
import { SERVICE_NAME } from '../constants'
import { NameStateT, UpdatePayloadT } from './model'

const initialState: NameStateT = {
  fullName: '',
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/name`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, { payload }) => {
      state.fullName = payload.content.fullName
    })
  },
  reducers: {
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.fullName = payload.fullName
    },
  },
})

export const { update } = actions
export default reducer
