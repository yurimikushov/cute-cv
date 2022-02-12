import { readFileSync, writeFileSync } from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'

enum Prefixes {
  Front = '[front]',
  Back = '[back]',
  Front_Back = '[front/back]',
}

const FRONTEND_PATH = 'projects/frontend'
const BACKEND_PATH = 'projects/backend'

const getMsgFilePath = () => {
  const repoRootPath = process.cwd()

  return path.join(repoRootPath, '.git', 'COMMIT_EDITMSG')
}

const isContainPrefix = (msg: string) => {
  for (const [_, prefix] of Object.entries(Prefixes)) {
    if (msg.startsWith(prefix)) {
      return true
    }
  }

  return false
}

const getStagedFilesPaths = () => {
  return execSync('git diff --name-only --cached', { encoding: 'utf-8' }).split(
    '\n'
  )
}

const getPrefix = () => {
  const filesPaths = getStagedFilesPaths()

  const isFrontedChanged = filesPaths.some(path => path.includes(FRONTEND_PATH))
  const isBackendChanged = filesPaths.some(path => path.includes(BACKEND_PATH))

  if (isFrontedChanged && isBackendChanged) {
    return Prefixes.Front_Back
  }

  if (isFrontedChanged) {
    return Prefixes.Front
  }

  if (isBackendChanged) {
    return Prefixes.Back
  }

  return ''
}

const addPrefix = (msg: string, prefix: string) => {
  const msgLines = msg.split('\n')

  msgLines[0] = `${prefix} ${msgLines[0]}`

  return msgLines.join('\n')
}

const main = () => {
  const msgFilePath = getMsgFilePath()

  const msg = readFileSync(msgFilePath, { encoding: 'utf-8' }).trim()

  if (isContainPrefix(msg)) {
    return
  }

  writeFileSync(msgFilePath, addPrefix(msg, getPrefix()), {
    encoding: 'utf-8',
  })
}

main()