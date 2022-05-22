import { useSelector, useDispatch } from 'react-redux'
import getSearchParam from 'shared/lib/getSearchParam'
import downloadPDF from 'shared/lib/downloadPDF'
import { selectIsDownloading } from '../selectors'
import { begin, finish } from '../slice'

type Options = {
  selector: string
  name: string
}

const useDownloadPDF = () => {
  const isDownloading = useSelector(selectIsDownloading)
  const dispatch = useDispatch()

  const handleDownloadPDF = async ({ selector, name }: Options) => {
    dispatch(begin())

    await downloadPDF({
      fileName: name || 'cv',
      selector,
      breakPage: Boolean(getSearchParam('break-page')),
    })

    dispatch(finish())
  }

  return {
    isDownloading,
    downloadPDF: handleDownloadPDF,
  }
}

export default useDownloadPDF
