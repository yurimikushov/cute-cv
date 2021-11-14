import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { PositionStateT, PresetPayloadT, UpdatePayloadT } from './model'

const initialState: PositionStateT = {
  position: '',
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.cv}/position`,
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
