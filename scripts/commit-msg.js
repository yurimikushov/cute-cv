const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process')

const PREFIXES = {
  FRONT: '[front]',
  BACK: '[back]',
  FRONT_BACK: '[front/back]',
}

const FRONTEND_PATH = 'projects/frontend'
const BACKEND_PATH = 'projects/backend'

const getMsgFilePath = () => {
  const repoRootPath = process.cwd()

  return path.join(repoRootPath, '.git', 'COMMIT_EDITMSG')
}

const isContainPrefix = (msg) => {
  for (const key in PREFIXES) {
    if (msg.startsWith(PREFIXES[key])) {
      return true
    }
  }

  return false
}

const getStagedFilesPaths = () => {
  return execSync('git diff --name-only --cached', { encoding: 'utf-8' }).split('\n')
}

const getPrefix = () => {
  const filesPaths = getStagedFilesPaths()

  const isFrontedChanged = filesPaths.some((path) => path.includes(FRONTEND_PATH))
  const isBackendChanged = filesPaths.some((path) => path.includes(BACKEND_PATH))

  if (isFrontedChanged && isBackendChanged) {
    return PREFIXES.FRONT_BACK
  }

  if (isFrontedChanged) {
    return PREFIXES.FRONT
  }

  if (isBackendChanged) {
    return PREFIXES.BACK
  }

  return ''
}

const addPrefix = (msg, prefix) => {
  const msgLines = msg.split('\n')

  msgLines[0] = `${prefix} ${msgLines[0]}`

  return msgLines.join('\n')
}

const msgFilePath = getMsgFilePath()

const msg = fs.readFileSync(msgFilePath, { encoding: 'utf-8' })

if (isContainPrefix(msg)) {
  return
}

fs.writeFileSync(msgFilePath, addPrefix(msg, getPrefix()), { encoding: 'utf-8' })
