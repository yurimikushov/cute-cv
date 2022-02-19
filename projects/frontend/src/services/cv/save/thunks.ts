import { createAsyncThunk } from '@reduxjs/toolkit'
import cvApi from 'api/cv'
import { ServiceNameEnum } from 'services'
import { CV } from 'services/cv'

// TODO: should add cv versions feature
// and pass dynamically both id and name of cv version
const CV_VERSION_ID = 'o9uHJNX4AkTao9uHJNX4A'
const CV_VERSION_NAME = 'Main version'

const save = createAsyncThunk(`${ServiceNameEnum.cv}/save`, async (cv: CV) => {
  const metadata = await cvApi.save(CV_VERSION_ID, {
    metadata: {
      name: CV_VERSION_NAME,
    },
    content: cv,
  })

  return metadata
})

export { save }
