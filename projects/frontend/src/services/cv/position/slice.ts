import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PositionStateT, PresetPayloadT, UpdatePayloadT } from './model'

const initialState: PositionStateT = {
  position: '',
}

const { actions, reducer } = createSlice({
  name: 'position',
  initialState,
  reducers: {
    preset: (state, { payload }: PayloadAction<PresetPayloadT>) => {
      state.position = payload.position
    },
    update: (state, { payload }: PayloadAction<UpdatePayloadT>) => {
      state.position = payload.position
    },
  },
})

export const { preset, update } = actions
export default reducer
