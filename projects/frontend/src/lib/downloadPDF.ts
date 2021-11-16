import html2pdf from 'html2pdf.js'

const downloadPDF = async (filename: string, fromSelector: string) => {
  const options = {
    filename: `${filename}.pdf`,
    margin: 20,
    image: { type: 'png', quality: 1 },
    jsPDF: { orientation: 'p', unit: 'mm', format: 'a4' },
  }

  const contentRootNode = document.querySelector(fromSelector)

  await html2pdf().set(options).from(contentRootNode).save()
}

export default downloadPDF
