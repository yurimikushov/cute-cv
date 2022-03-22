import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import downloadPDF from 'lib/downloadPDF'
import downloadJSON from 'lib/downloadJSON'
import { useCurrentCv } from 'services/edit-cv'
import { CV_CONTAINER_ID } from './constants'
import { selectIsDownloading } from './selectors'
import { begin, success } from './slice'

const useDownload = () => {
  const isDownloading = useSelector(selectIsDownloading)

  const dispatch = useDispatch()

  const { cv } = useCurrentCv()
  const { content } = cv
  const { fullName } = content

  const handleDownloadPDF = useCallback(async () => {
    dispatch(begin())
    const fileName = isEmpty(fullName) ? 'cv' : fullName
    await downloadPDF(fileName, `#${CV_CONTAINER_ID}`)
    dispatch(success())
  }, [fullName])

  const handleDownloadJSON = useCallback(async () => {
    dispatch(begin())
    const fileName = isEmpty(fullName) ? 'cv' : fullName
    await downloadJSON(cv, fileName)
    dispatch(success())
  }, [cv, fullName])

  return {
    isDownloading,
    handleDownloadPDF,
    handleDownloadJSON,
  }
}

export { useDownload }
