import copyToClipboard from 'lib/copyToClipboard'

const useCopySharableCvLink = (id: string) => {
  const handleCopySharableLink = () => {
    const { origin } = new URL(location.href)
    copyToClipboard(`${origin}/share/cv/${id}`)
  }

  return {
    copySharableLink: handleCopySharableLink,
  }
}

export default useCopySharableCvLink
