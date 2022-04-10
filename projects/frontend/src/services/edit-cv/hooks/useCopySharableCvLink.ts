import copyToClipboard from 'lib/copyToClipboard'
import { useCurrentCvMetadata } from '../versions'

const useCopySharableCvLink = () => {
  const { id, allowShare } = useCurrentCvMetadata()

  const handleCopySharableLink = async () => {
    const { origin } = new URL(location.href)
    await copyToClipboard(`${origin}/share/cv/${id}`)
  }

  return {
    allowShare,
    copySharableLink: handleCopySharableLink,
  }
}

export default useCopySharableCvLink
