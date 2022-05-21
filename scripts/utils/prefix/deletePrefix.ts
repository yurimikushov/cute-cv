import { PrefixesEnum } from './model'

const deletePrefix = (msg: string) => {
  for (const prefix of Object.values(PrefixesEnum)) {
    if (msg.startsWith(prefix)) {
      msg = msg.replace(prefix, '').trimStart()
    }
  }

  return msg
}

export default deletePrefix
