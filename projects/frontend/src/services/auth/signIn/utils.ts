const TOKEN_KEY = 'accessToken'

const setToken = (token: string) => {
  localStorage.setItem(TOKEN_KEY, token)
}

const resetToken = () => {
  localStorage.setItem(TOKEN_KEY, '')
}

const getToken = () => {
  return localStorage.getItem(TOKEN_KEY) ?? ''
}

export { setToken, resetToken, getToken }
