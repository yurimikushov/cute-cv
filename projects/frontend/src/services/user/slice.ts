import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { UserStateT, SetUserPayloadT } from './model'

const initialState: UserStateT = {
  user: null,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.user}`,
  initialState,
  reducers: {
    set: (state, { payload }: PayloadAction<SetUserPayloadT>) => {
      state.user = payload.user
    },
  },
})

export const { set } = actions
export default reducer
