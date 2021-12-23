import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { load } from 'services/cv/load'
import { SERVICE_NAME } from '../constants'
import { PositionStateT, UpdatePayloadT } from './model'

const initialState: PositionStateT = {
  position: '',
}

const { actions, reducer } = createSlice({
  name: `${SERVICE_NAME}/position`,
  initialState,
  extraReducers: (builder) => {
    builder.addCase(load.fulfilled, (state, { payload }) => {
      state.position = payload.content.position
    })
  },
  reducers: {
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.position = payload.position
    },
  },
})

export const { update } = actions
export default reducer
