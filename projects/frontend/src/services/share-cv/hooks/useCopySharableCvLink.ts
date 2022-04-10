import copyToClipboard from 'lib/copyToClipboard'

const useCopySharableCvLink = (id: string) => {
  const handleCopySharableLink = async () => {
    const { origin } = new URL(location.href)
    await copyToClipboard(`${origin}/share/cv/${id}`)
  }

  return {
    copySharableLink: handleCopySharableLink,
  }
}

export default useCopySharableCvLink
