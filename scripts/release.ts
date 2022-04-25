import { join } from 'path'
import git from 'simple-git'
import getNextVersion from './utils/getNextVersion'
import Pkg from './utils/pkg'

const logger = (project: string) => (message: string) => {
  console.log(`[${project}] ${message}`)
}

const release = async (project: 'frontend' | 'backend') => {
  const log = logger(project)

  log('Release started')

  const path = join(process.cwd(), 'projects', project)

  const nextVersion = await getNextVersion(path)

  log(`Next version - ${nextVersion}`)

  if (nextVersion === null) {
    log('Nothing to release')
    return
  }

  const pkg = new Pkg({ path })
  pkg.version = nextVersion
  pkg.save()

  log('package.json is updated')

  const pkgLock = new Pkg({ path, lock: true })
  pkgLock.version = nextVersion
  pkgLock.save()

  log('package-lock.json is updated')

  const versionTag = `${pkg.name}@${nextVersion}`
  const changedFiles = [pkg.fileName, pkgLock.fileName]

  await git().add(changedFiles).commit(`chore(release): v${nextVersion}`)

  log(`${changedFiles.join(', ')} are committed`)

  await git().push()

  log(`${changedFiles.join(', ')} are pushed`)

  await git().addTag(versionTag)

  log(`${versionTag} tag is added`)

  await git().push(['origin', versionTag])

  log(`${versionTag} tag is pushed`)

  log(`Release ${nextVersion} successfully completed`)
}

const main = async () => {
  try {
    await release('frontend')
    await release('backend')
  } catch (err) {
    console.error(err)
    process.exit(1)
  }
}

main()
