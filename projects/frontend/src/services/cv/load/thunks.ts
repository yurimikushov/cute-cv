import { createAsyncThunk } from '@reduxjs/toolkit'
import isNull from 'lodash/isNull'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'
import { CURRENT_CV_ID } from 'services/cv'

const loadAll = createAsyncThunk(`${ServiceNameEnum.cv}/loadAll`, async () => {
  const allCv = await cvApi.loadAll()
  return allCv
})

const load = createAsyncThunk(
  `${ServiceNameEnum.cv}/load`,
  async (_, { rejectWithValue }) => {
    const cv = await cvApi.load(CURRENT_CV_ID)

    if (isNull(cv)) {
      throw rejectWithValue({ isEmpty: true })
    }

    return cv
  }
)

export { loadAll, load }
