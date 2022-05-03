import { useState } from 'react'
import isUndefined from 'lodash/isUndefined'
import isEmpty from 'lodash/isEmpty'
import getSearchParam from 'lib/getSearchParam'
import downloadPDF from 'lib/downloadPDF'
import { useSharableCv } from '../api'
import { CV_CONTAINER_ID } from '../constants'

const useDownload = (id: string) => {
  const { data: cv } = useSharableCv(id)
  const [isDownloading, setIsDownloading] = useState(false)

  const handleDownloadPDF = async () => {
    if (isUndefined(cv)) {
      throw new Error(`Cv should be defined to download it`)
    }

    setIsDownloading(true)

    const { content } = cv
    const { fullName } = content

    const fileName = isEmpty(fullName) ? 'cv' : fullName

    await downloadPDF({
      fileName,
      selector: `#${CV_CONTAINER_ID}`,
      breakPage: Boolean(getSearchParam('break-page')),
    })

    setIsDownloading(false)
  }

  return {
    isDownloading,
    downloadPDF: handleDownloadPDF,
  }
}

export default useDownload
