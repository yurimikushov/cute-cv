import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'

const parseArgs = <O extends Record<string, yargs.Options>>(options: O) => {
  return yargs(hideBin(process.argv)).options(options).parseAsync()
}

export default parseArgs
