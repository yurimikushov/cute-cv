import { join } from 'path'
import { writeFileSync } from 'fs'
import git from 'simple-git'
import getNextVersion from './utils/getNextVersion'
import parseArgs from './utils/parseArgs'
import Pkg from './utils/pkg'

enum StatusesEnum {
  Released = 'released',
  Skipped = 'skipped',
  Failed = 'failed',
}

enum ProjectsEnum {
  Frontend = 'frontend',
  Backend = 'backend',
}

const isValidProjectName = (project: string): project is ProjectsEnum => {
  return Object.values<string>(ProjectsEnum).includes(project)
}

const logger = (project: string) => (message: string) => {
  console.log(`[${project}] ${message}`)
}

const release = async (project: ProjectsEnum): Promise<boolean> => {
  const log = logger(project)

  log('Release started')

  try {
    await git().fetch(['--tags', '--unshallow'])
  } catch {
    await git().fetch('--tags')
  }

  log('Tags were fetched')

  await git().checkout('main')

  log(`'main' is checked out`)

  await git().pull()

  log(`'main' is pulled`)

  const path = join(process.cwd(), 'packages', project)

  const nextVersion = await getNextVersion(path)

  log(`Next version - ${nextVersion}`)

  if (nextVersion === null) {
    log('Nothing to release')
    return false
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

  await git().checkout('develop')

  log(`'develop' is checked out`)

  await git().pull()

  log(`'develop' is pulled`)

  await git().rebase(['origin/main'])

  log(`'develop' is rebased to 'main'`)

  await git().push()

  log(`Rebased 'develop' is pushed`)

  await git().checkout('main')

  log(`'main' is checked out`)

  log(`Release ${nextVersion} successfully completed`)

  return true
}

const writeReleaseStatus = (project: ProjectsEnum, status: string) => {
  writeFileSync(`release-status-${project}`, status)
}

const main = async () => {
  const { project } = await parseArgs({
    project: {
      alias: 'p',
      type: 'string',
    },
  })

  if (!project) {
    throw new Error('Project name is missed')
  }

  if (!isValidProjectName(project)) {
    throw new Error('Passed non-existent project name')
  }

  try {
    const released = await release(project)

    writeReleaseStatus(
      project,
      released ? StatusesEnum.Released : StatusesEnum.Skipped
    )
  } catch (err) {
    writeReleaseStatus(project, StatusesEnum.Failed)
    throw err
  }
}

main()
