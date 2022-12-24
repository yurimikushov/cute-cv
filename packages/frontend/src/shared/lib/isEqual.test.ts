import isEqual from './isEqual'

describe('isEqual', () => {
  it('should return true for equal primitive values', () => {
    expect(isEqual(true, true)).toBe(true)
    expect(isEqual(false, false)).toBe(true)
    expect(isEqual('a', 'a')).toBe(true)
    expect(isEqual(1, 1)).toBe(true)
    expect(isEqual(NaN, NaN)).toBe(true)
    expect(isEqual(undefined, undefined)).toBe(true)
    expect(isEqual(null, null)).toBe(true)
  })

  // eslint-disable-next-line max-statements
  it('should return false for unequal primitive values', () => {
    expect(isEqual(true, false)).toBe(false)
    expect(isEqual(true, 'a')).toBe(false)
    expect(isEqual(true, 1)).toBe(false)
    expect(isEqual(true, undefined)).toBe(false)
    expect(isEqual(true, null)).toBe(false)
    expect(isEqual('a', 1)).toBe(false)
    expect(isEqual('a', undefined)).toBe(false)
    expect(isEqual('a', null)).toBe(false)
    expect(isEqual(1, undefined)).toBe(false)
    expect(isEqual(1, null)).toBe(false)
    expect(isEqual(undefined, null)).toBe(false)
  })

  it('should return true for equal object values', () => {
    expect(isEqual({ a: 1, b: 'c' }, { a: 1, b: 'c' })).toBe(true)
    expect(isEqual([1, 2, 3], [1, 2, 3])).toBe(true)
    expect(isEqual({ a: 1, b: { c: 'd' } }, { a: 1, b: { c: 'd' } })).toBe(true)
    expect(
      isEqual(
        { a: 1, b: { c: 'd', f: [1, 2, 3] } },
        { a: 1, b: { c: 'd', f: [1, 2, 3] } }
      )
    ).toBe(true)
    expect(
      isEqual(
        {
          a: { b: new Date('1970/01/01'), c: new RegExp(/[0-1]+/u, 'u') },
        },
        {
          a: { b: new Date('1970/01/01'), c: new RegExp(/[0-1]+/u, 'u') },
        }
      )
    ).toBe(true)
  })

  it('should return false for unequal object values', () => {
    expect(isEqual({ a: 1, b: 'c' }, { a: 1 })).toBe(false)
    expect(isEqual([1, 2, 3], [1, 3])).toBe(false)
    expect(isEqual({ a: 1, b: { c: 'd' } }, { a: 1, b: { c: 2 } })).toBe(false)
    expect(
      isEqual(
        { a: 1, b: { c: 'd', f: [1, 2, 3] } },
        { a: 1, b: { c: 'd', f: [3] } }
      )
    ).toBe(false)
    expect(
      isEqual(
        { a: { b: new Date('1970/01/02') } },
        { a: { b: new Date('1970/01/01') } }
      )
    ).toBe(false)
    expect(
      isEqual(
        { a: { b: new RegExp(/[0-2]+/u, 'u') } },
        { a: { b: new RegExp(/[0-1]+/u, 'u') } }
      )
    ).toBe(false)
  })
})
