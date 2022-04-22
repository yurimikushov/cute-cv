import { readFileSync, writeFileSync } from 'fs'
import * as path from 'path'
import { execSync } from 'child_process'
import load from '@commitlint/load'
import lint from '@commitlint/lint'
import format from '@commitlint/format'
import { addPrefix, deletePrefix, getPrefix } from './utils/prefix'

const getMsgFilePath = () => {
  const repoRootPath = process.cwd()

  return path.join(repoRootPath, '.git', 'COMMIT_EDITMSG')
}

const getStagedFilesPaths = () => {
  return execSync('git diff --name-only --cached', { encoding: 'utf-8' }).split(
    '\n'
  )
}

const isValidMsg = async (msg: string) => {
  const { rules } = await load({
    extends: ['@commitlint/config-conventional'],
  })

  const report = await lint(msg, rules)

  process.stdout.write(
    format({
      results: [report],
    })
  )

  return report.valid
}

const main = async () => {
  const msgFilePath = getMsgFilePath()

  const rawMsg = readFileSync(msgFilePath, { encoding: 'utf-8' })
  const msg = deletePrefix(rawMsg.trim())

  if (!(await isValidMsg(msg))) {
    process.exit(1)
  }

  const stagedFilesPaths = getStagedFilesPaths()
  const prefixedMsg = addPrefix(msg, getPrefix(stagedFilesPaths)).trim()

  writeFileSync(msgFilePath, prefixedMsg, {
    encoding: 'utf-8',
  })
}

main()
