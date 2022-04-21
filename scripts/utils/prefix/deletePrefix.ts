import { PrefixesEnum } from './model'

const deletePrefix = (msg: string) => {
  for (const [_, prefix] of Object.entries(PrefixesEnum)) {
    if (msg.startsWith(prefix)) {
      msg = msg.replace(prefix, '').trimStart()
    }
  }

  return msg
}

export default deletePrefix
