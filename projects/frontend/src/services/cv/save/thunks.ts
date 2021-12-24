import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'
import { CV } from 'services/cv'

const save = createAsyncThunk(`${ServiceNameEnum.cv}/save`, async (cv: CV) => {
  const metadata = await cvApi.save(cv)
  return metadata
})

export { save }
