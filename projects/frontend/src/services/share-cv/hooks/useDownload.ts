import { useState } from 'react'
import isNull from 'lodash/isNull'
import isEmpty from 'lodash/isEmpty'
import downloadPDF from 'lib/downloadPDF'
import { CV_CONTAINER_ID } from '../constants'
import { cvAtom } from '../store'

const useDownload = () => {
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadPDF = async () => {
    const cv = cvAtom.get()

    if (isNull(cv)) {
      throw new Error('')
    }

    setIsDownloading(true)

    const { content } = cv
    const { fullName } = content

    const fileName = isEmpty(fullName) ? 'cv' : fullName
    await downloadPDF(fileName, `#${CV_CONTAINER_ID}`)

    setIsDownloading(false)
  }

  return {
    isDownloading,
    downloadPDF: handleDownloadPDF,
  }
}

export default useDownload
