import axios from 'axios'
import isUndefined from 'lodash/isUndefined'
import { getToken } from 'services/auth'

axios.defaults.baseURL = process.env.REACT_APP_API

axios.interceptors.request.use((config) => {
  if (isUndefined(config.headers)) {
    config.headers = {}
  }

  config.headers.Authorization = `Bearer ${getToken()}`

  return config
})
