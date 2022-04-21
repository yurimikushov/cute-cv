import { readFileSync } from 'fs'
import { join } from 'path'

type PackageJson = {
  name?: string
  version?: string
}

const getPackageJson = (path: string) => {
  const rawPackageJson = readFileSync(join(path, 'package.json')).toString()
  return JSON.parse(rawPackageJson) as PackageJson
}

export default getPackageJson
