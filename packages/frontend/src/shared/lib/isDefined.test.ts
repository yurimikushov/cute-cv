import isDefined from './isDefined'

describe('isDefined', () => {
  it('should return true if value is string', () => {
    expect(isDefined('')).toBe(true)
    expect(isDefined('abc')).toBe(true)
  })

  it('should return true if value is number', () => {
    expect(isDefined(0)).toBe(true)
    expect(isDefined(1)).toBe(true)
  })

  it('should return true if value is boolean', () => {
    expect(isDefined(true)).toBe(true)
    expect(isDefined(false)).toBe(true)
  })

  it('should return true if value is object', () => {
    expect(isDefined({})).toBe(true)
    expect(isDefined([])).toBe(true)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    expect(isDefined(() => {})).toBe(true)
  })

  it('should return true if value is symbol', () => {
    expect(isDefined(Symbol.for(''))).toBe(true)
  })

  it('should return false if value is null', () => {
    expect(isDefined(null)).toBe(false)
  })

  it('should return false if value is undefined', () => {
    // eslint-disable-next-line no-undefined
    expect(isDefined(undefined)).toBe(false)
  })
})
