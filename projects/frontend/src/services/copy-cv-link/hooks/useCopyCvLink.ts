import copyToClipboard from 'lib/copyToClipboard'

const useCopyCvLink = (id: string) => {
  const handleCopyCvLink = async () => {
    const { origin } = new URL(location.href)
    await copyToClipboard(`${origin}/share/cv/${id}`)
  }

  return {
    copyCvLink: handleCopyCvLink,
  }
}

export default useCopyCvLink
