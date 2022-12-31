import copyToClipboard from 'shared/lib/copyToClipboard'

const copyCvLink = async (id: string) => {
  const { origin } = new URL(location.href)
  await copyToClipboard(`${origin}/share/cv/${id}`)
}

export { copyCvLink }
