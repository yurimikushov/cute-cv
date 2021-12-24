import * as path from 'path'
import { mkdirSync, writeFileSync } from 'fs'

const createComponent = (name: string) =>
  `import { FC } from 'react'
import ${name}PropsT from './${name}.props'

const ${name}: FC<${name}PropsT> = () => {
  return (
    <div>
      It was automatically generated
    </div>
  )
}

export default ${name}
`

const createComponentProps = (name: string) =>
  `type ${name}PropsT = {
  className?: string
}

export default ${name}PropsT
`

const createIndexFile = (name: string) =>
  `export { default } from './${name}'
`

const defaultDir = path.join('src', 'components')

const main = (name: string, dir: string = defaultDir) => {
  const root = path.join(__dirname, '..', dir, name)

  mkdirSync(root)
  writeFileSync(path.join(root, `${name}.tsx`), createComponent(name))
  writeFileSync(path.join(root, `${name}.props.ts`), createComponentProps(name))
  writeFileSync(path.join(root, `index.ts`), createIndexFile(name))

  // eslint-disable-next-line no-console
  console.log(`'${name}' was generated in '${path.join(dir, name)}'`)
}

// eslint-disable-next-line prefer-destructuring, no-magic-numbers
const name = process.argv[2]
// eslint-disable-next-line prefer-destructuring, no-magic-numbers
const dir = process.argv[3]

if (!name) {
  throw new Error('Component name is required')
}

main(name, dir)