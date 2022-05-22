// https://stackoverflow.com/questions/400212/how-do-i-copy-to-the-clipboard-in-javascript

// eslint-disable-next-line max-statements
const fallbackCopyToClipboard = (data: string) => {
  const textArea = document.createElement('textarea')
  textArea.value = data

  textArea.style.position = 'absolute'
  textArea.style.top = '-9999px'
  textArea.style.left = '-9999px'
  textArea.style.zIndex = '-9999'
  textArea.style.opacity = '0'

  document.body.appendChild(textArea)

  textArea.focus()
  textArea.select()

  try {
    const isCopied = document.execCommand('copy')

    document.body.removeChild(textArea)

    if (isCopied) {
      return Promise.resolve()
    }
    return Promise.reject(new Error('Unable to copy'))
  } catch {
    return Promise.reject(new Error('Unable to copy'))
  }
}

const copyToClipboard = async (data: string) => {
  if (!navigator.clipboard) {
    await fallbackCopyToClipboard(data)
    return
  }

  await navigator.clipboard.writeText(data)
}

export default copyToClipboard
