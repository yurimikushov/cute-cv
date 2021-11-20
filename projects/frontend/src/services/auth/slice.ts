import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ServiceNameEnum } from 'services'
import { AuthStateT, SetUserPayloadT } from './model'

const initialState: AuthStateT = {
  isChecking: false,
  user: null,
}

const { actions, reducer } = createSlice({
  name: `${ServiceNameEnum.auth}`,
  initialState,
  reducers: {
    beginChecking: (state) => {
      state.isChecking = true
    },
    finishChecking: (state) => {
      state.isChecking = false
    },
    setUser: (state, { payload }: PayloadAction<SetUserPayloadT>) => {
      state.user = payload.user
    },
    resetUser: (state) => {
      state.user = null
    },
  },
})

export const { beginChecking, finishChecking, setUser, resetUser } = actions
export default reducer
