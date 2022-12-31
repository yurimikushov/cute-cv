import { useAtom } from '@reatom/npm-react'
import getSearchParam from 'shared/lib/getSearchParam'
import downloadPDF from 'shared/lib/downloadPDF'
import { isDownloadingAtom } from '../model'

type Options = {
  selector: string
  name: string
}

const useDownloadPDF = () => {
  const [isDownloading, setIsDownloading] = useAtom(isDownloadingAtom)

  const handleDownloadPDF = async ({ selector, name }: Options) => {
    setIsDownloading(true)

    await downloadPDF({
      fileName: name || 'cv',
      selector,
      breakPage: Boolean(getSearchParam('break-page')),
    })

    setIsDownloading(false)
  }

  return {
    isDownloading,
    downloadPDF: handleDownloadPDF,
  }
}

export default useDownloadPDF
