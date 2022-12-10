declare module '*.svg' {
  // eslint-disable-next-line init-declarations
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
  export = content
}
