import { createSlice } from '@reduxjs/toolkit'
import { LoadingStateT } from './model'

const initialState: LoadingStateT = {
  isLoading: true,
}

const { actions, reducer } = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    begin: (state) => {
      state.isLoading = true
    },
    complete: (state) => {
      state.isLoading = false
    },
  },
})

export const { begin, complete } = actions
export default reducer
