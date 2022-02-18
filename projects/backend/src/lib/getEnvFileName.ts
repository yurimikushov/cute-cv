const getEnvFileName = (nodeEnv: string) => {
  if (nodeEnv === 'testing') {
    return '.env.testing'
  }

  return '.env'
}

export default getEnvFileName
