const downloadPDF = async (filename: string, fromSelector: string) => {
  const { default: html2pdf } = await import(
    /* webpackPrefetch: true */ /* webpackChunkName: "html2pdf" */ 'html2pdf.js'
  )

  const options = {
    filename: `${filename}.pdf`,
    margin: 15,
    image: { type: 'png', quality: 1 },
    jsPDF: { orientation: 'p', unit: 'mm', format: 'a4' },
  }

  const contentRootNode = document.querySelector(fromSelector)

  await html2pdf().set(options).from(contentRootNode).save()
}

export default downloadPDF
