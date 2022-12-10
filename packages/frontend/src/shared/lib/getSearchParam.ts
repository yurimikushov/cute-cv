const getSearchParam = (name: string) => {
  return new URLSearchParams(window.location.search).get(name)
}

export default getSearchParam
