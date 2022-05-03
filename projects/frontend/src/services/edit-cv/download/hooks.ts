import { useCallback } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import isEmpty from 'lodash/isEmpty'
import getSearchParam from 'lib/getSearchParam'
import downloadPDF from 'lib/downloadPDF'
import downloadJSON from 'lib/downloadJSON'
import { useGetCurrentCv, useGetCurrentCvFullName } from '../versions'
import { CV_CONTAINER_ID } from './constants'
import { selectIsDownloading } from './selectors'
import { begin, success } from './slice'

const useDownload = () => {
  const isDownloading = useSelector(selectIsDownloading)
  const getCurrentCv = useGetCurrentCv()
  const getCurrentCvFullName = useGetCurrentCvFullName()

  const dispatch = useDispatch()

  const handleDownloadPDF = useCallback(async () => {
    const fullName = getCurrentCvFullName()

    dispatch(begin())

    const fileName = isEmpty(fullName) ? 'cv' : fullName

    await downloadPDF({
      fileName,
      selector: `#${CV_CONTAINER_ID}`,
      breakPage: Boolean(getSearchParam('break-page')),
    })

    dispatch(success())
  }, [getCurrentCvFullName])

  const handleDownloadJSON = useCallback(async () => {
    const cv = getCurrentCv()
    const fullName = getCurrentCvFullName()

    dispatch(begin())
    const fileName = isEmpty(fullName) ? 'cv' : fullName
    await downloadJSON(cv, fileName)
    dispatch(success())
  }, [getCurrentCv, getCurrentCvFullName])

  return {
    isDownloading,
    handleDownloadPDF,
    handleDownloadJSON,
  }
}

export { useDownload }
