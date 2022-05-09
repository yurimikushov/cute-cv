import { Transform } from 'stream'
import gitRawCommits, { GitOptions } from 'git-raw-commits'
import conventionalCommitsParser, { Commit } from 'conventional-commits-parser'

type Options = GitOptions & {
  cleanMsg?: (msg: string) => string
}

const cleanMessagesStream = (cleanMsg: (msg: string) => string) => {
  return new Transform({
    transform(chunk, _, callback) {
      callback(null, cleanMsg(chunk.toString()))
    },
  })
}

const getCommits = (options: Options) => {
  return new Promise<Array<Commit>>((resolve, reject) => {
    const commits: Array<Commit> = []

    const { cleanMsg } = options

    gitRawCommits(options)
      .pipe(cleanMessagesStream(cleanMsg ?? ((msg: string) => msg)))
      .pipe(conventionalCommitsParser({}))
      .addListener('data', (chunk: Commit) => {
        commits.push(chunk)
      })
      .addListener('end', () => {
        resolve(commits)
      })
      .addListener('error', (err) => {
        reject(err)
      })
  })
}

export default getCommits
export type { Commit }
