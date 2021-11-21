import { useCallback } from 'react'
import isEmpty from 'lodash/isEmpty'
import downloadPDF from 'lib/downloadPDF'
import { useFullName } from 'services/cv'
import { CV_CONTAINER_ID } from './constants'

const useDownload = () => {
  const { fullName } = useFullName()

  const handleDownloadPDF = useCallback(async () => {
    const fileName = isEmpty(fullName) ? 'cv' : fullName
    await downloadPDF(fileName, `#${CV_CONTAINER_ID}`)
  }, [fullName])

  return {
    handleDownloadPDF,
  }
}

export { useDownload }
