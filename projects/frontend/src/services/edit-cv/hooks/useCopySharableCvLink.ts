import copyToClipboard from 'lib/copyToClipboard'
import { useCurrentCvMetadata } from '../versions'

const useCopySharableCvLink = () => {
  const { id, allowShare } = useCurrentCvMetadata()

  const handleCopySharableLink = () => {
    const { origin } = new URL(location.href)
    copyToClipboard(`${origin}/share/cv/${id}`)
  }

  return {
    allowShare,
    copySharableLink: handleCopySharableLink,
  }
}

export default useCopySharableCvLink
