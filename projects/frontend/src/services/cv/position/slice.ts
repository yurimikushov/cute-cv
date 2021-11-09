import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PositionStateT, UpdatePayloadT } from './model'

const initialState: PositionStateT = {
  position: '',
}

const { actions, reducer } = createSlice({
  name: 'position',
  initialState,
  reducers: {
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.position = payload.position
    },
  },
})

export const { update } = actions
export default reducer
