import { readFileSync, writeFileSync } from 'fs'
import { join } from 'path'

type PackageJson = {
  name?: string
  version?: string
}

type Options = {
  path: string
  lock?: boolean
}

class Pkg {
  private _fileName: string
  private _pkg: PackageJson

  constructor({ path, lock = false }: Options) {
    this._fileName = join(path, lock ? 'package-lock.json' : 'package.json')
    this._pkg = JSON.parse(readFileSync(this._fileName).toString())
  }

  get name() {
    return this._pkg.name ?? ''
  }

  set name(name: string) {
    this._pkg.name = name
  }

  get version() {
    return this._pkg.version ?? ''
  }

  set version(version: string) {
    this._pkg.version = version
  }

  save() {
    writeFileSync(this._fileName, JSON.stringify(this._pkg, null, 2) + '\n')
  }
}

export default Pkg
