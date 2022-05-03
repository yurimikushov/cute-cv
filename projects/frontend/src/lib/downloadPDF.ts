type Options = {
  fileName: string
  selector: string
  breakPage: boolean
}

const downloadPDF = async ({ fileName, selector, breakPage }: Options) => {
  const { default: html2pdf } = await import(
    /* webpackPrefetch: true */ /* webpackChunkName: "html2pdf" */ 'html2pdf.js'
  )

  const options = {
    filename: `${fileName}.pdf`,
    margin: 15,
    image: { type: 'png', quality: 1 },
    jsPDF: { orientation: 'p', unit: 'mm', format: 'a4' },
    pagebreak: {
      mode: breakPage ? 'avoid-all' : ['css', 'legacy'],
    },
  }

  const contentRootNode = document.querySelector(selector)

  await html2pdf().set(options).from(contentRootNode).save()
}

export default downloadPDF
