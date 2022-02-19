import { createAsyncThunk } from '@reduxjs/toolkit'
import isNull from 'lodash/isNull'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'

// TODO: should add cv versions feature
// and pass dynamically id of cv version
const CV_VERSION_ID = 'o9uHJNX4AkTao9uHJNX4A'

const loadAll = createAsyncThunk(`${ServiceNameEnum.cv}/loadAll`, async () => {
  const allCv = await cvApi.loadAll()
  return allCv
})

const load = createAsyncThunk(
  `${ServiceNameEnum.cv}/load`,
  async (_, { rejectWithValue }) => {
    const cv = await cvApi.load(CV_VERSION_ID)

    if (isNull(cv)) {
      throw rejectWithValue({ isEmpty: true })
    }

    return cv
  }
)

export { loadAll, load }
