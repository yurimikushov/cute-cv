import omit from './omit'

describe('omit', () => {
  it('should omit one element', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, 'a')).toEqual({ b: 2, c: 3 })
    expect(omit({ a: 1, b: 2, c: 3 }, 'b')).toEqual({ a: 1, c: 3 })
    expect(omit({ a: 1, b: 2, c: 3 }, 'c')).toEqual({ a: 1, b: 2 })
  })

  it('should omit several elements', () => {
    expect(omit({ a: 1, b: 2, c: 3 }, 'a', 'b')).toEqual({ c: 3 })
    expect(omit({ a: 1, b: 2, c: 3, d: 4 }, 'b', 'c')).toEqual({ a: 1, d: 4 })
    expect(omit({ a: 1, b: 2, c: 3, d: 4 }, 'b', 'c', 'd')).toEqual({ a: 1 })
    expect(omit({ a: 1, b: 2, c: 3, d: 4 }, 'a', 'b', 'c', 'd')).toEqual({})
  })

  it('should omit all elements', () => {
    expect(omit({ a: 1 }, 'a')).toEqual({})
    expect(omit({ a: 1, b: 2, c: 3, d: 4 }, 'a', 'b', 'c', 'd')).toEqual({})
  })
})
