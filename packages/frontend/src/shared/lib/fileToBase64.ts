const fileToBase64 = (file: File): Promise<string> => {
  return new Promise((resolve): void => {
    const reader = new FileReader()
    reader.onload = (): void => {
      resolve((reader.result as string) ?? '')
    }
    reader.readAsDataURL(file)
  })
}

export default fileToBase64
