import loader from 'conventional-changelog-preset-loader'
import semver from 'semver'
import getCommits, { Commit } from './getCommits'
import getProjectPath from './getProjectPath'
import getPackageJson from './getPackageJson'
import { deletePrefix } from './prefix'

const VERSIONS = ['major', 'minor', 'patch'] as const

const whatBump = async (commits: Array<Commit>) => {
  // @ts-expect-error bad typing
  const { recommendedBumpOpts } = await loader('angular')
  const { level } = recommendedBumpOpts.whatBump(commits) as {
    level: 0 | 1 | 2
    reason: string
  }

  return level
}

const getNextVersion = async (project: 'frontend' | 'backend') => {
  const path = getProjectPath(project)
  const { name, version } = getPackageJson(path)

  const commits = await getCommits({
    path,
    from: `${name}@${version}`,
    cleanMsg: deletePrefix,
  })

  const bumpLevel = await whatBump(commits)

  return semver.inc(version || '', VERSIONS[bumpLevel])
}

export default getNextVersion
