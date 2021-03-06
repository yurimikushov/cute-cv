import loader from 'conventional-changelog-preset-loader'
import semver from 'semver'
import getCommits, { Commit } from './getCommits'
import Pkg from './pkg'
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

const getNextVersion = async (path: string) => {
  const pkg = new Pkg({ path })

  const commits = await getCommits({
    path,
    from: `${pkg.name}@${pkg.version}`,
    cleanMsg: deletePrefix,
  })

  if (commits.length === 0) {
    return null
  }

  const bumpLevel = await whatBump(commits)

  return semver.inc(pkg.version || '', VERSIONS[bumpLevel])
}

export default getNextVersion
