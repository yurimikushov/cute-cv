import { join } from 'path'
import git from 'simple-git'
import getNextVersion from './utils/getNextVersion'
import Pkg from './utils/pkg'

const release = async (project: 'frontend' | 'backend') => {
  const path = join(process.cwd(), 'projects', project)

  const nextVersion = await getNextVersion(path)

  if (nextVersion === null) {
    console.log('\x1b[33m%s\x1b[0m', `'${project}' has no new release`)
    return
  }

  const pkg = new Pkg({ path })
  pkg.version = nextVersion
  pkg.save()

  const pkgLock = new Pkg({ path, lock: true })
  pkgLock.version = nextVersion
  pkgLock.save()

  const versionTag = `${pkg.name}@${nextVersion}`

  await git()
    .add([pkg.fileName, pkgLock.fileName])
    .commit(`chore(release): v${nextVersion}`)
    .addTag(versionTag)
    .push()
    .push(['origin', versionTag])
}

const main = async () => {
  await release('frontend')
  await release('backend')
}

main()
