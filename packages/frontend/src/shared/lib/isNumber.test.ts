import isNumber from './isNumber'

describe('isNumber', () => {
  it('should return true if value is number', () => {
    expect(isNumber(0)).toBe(true)
    expect(isNumber(1)).toBe(true)
    expect(isNumber(NaN)).toBe(true)
  })

  it('should return false if value is not number', () => {
    expect(isNumber('')).toBe(false)
    expect(isNumber(true)).toBe(false)
    expect(isNumber(false)).toBe(false)
    expect(isNumber(undefined)).toBe(false)
    expect(isNumber(null)).toBe(false)
    expect(isNumber(Symbol.for(''))).toBe(false)
    expect(isNumber({})).toBe(false)
    expect(isNumber([])).toBe(false)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isNumber(() => {})).toBe(false)
  })
})
