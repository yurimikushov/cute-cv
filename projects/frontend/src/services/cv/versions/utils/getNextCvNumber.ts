const getNextCvNumber = (numbers: Array<number>) => {
  // eslint-disable-next-line no-magic-numbers
  return Math.max(...numbers) + 1
}

export default getNextCvNumber
