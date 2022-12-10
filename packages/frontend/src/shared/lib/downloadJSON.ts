const downloadJSON = async <T extends Record<string, unknown>>(
  obj: T,
  filename: string
  // eslint-disable-next-line require-await
) => {
  const linkElement = document.createElement('a')
  linkElement.href = `data:text/json;charset=utf-8,${encodeURIComponent(
    // eslint-disable-next-line no-magic-numbers
    JSON.stringify(obj, null, 2)
  )}`
  linkElement.download = `${filename}.json`
  linkElement.click()
  linkElement.remove()
}

export default downloadJSON
