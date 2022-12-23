import reject from './reject'

describe('reject', () => {
  it('should reject the first element', () => {
    expect(reject([{ a: 1 }, { b: 2 }, { c: 3 }], { a: 1 })).toEqual([
      { b: 2 },
      { c: 3 },
    ])
  })

  it('should reject the element in the middle', () => {
    expect(reject([{ a: 1 }, { b: 2 }, { c: 3 }], { b: 2 })).toEqual([
      { a: 1 },
      { c: 3 },
    ])
  })

  it('should reject the last element', () => {
    expect(reject([{ a: 1 }, { b: 2 }, { c: 3 }], { c: 3 })).toEqual([
      { a: 1 },
      { b: 2 },
    ])
  })

  it('should reject the element by a predicate with several field', () => {
    expect(
      reject([{ a: 1, b: 2, c: 3 }, { c: 4 }, { a: 1, c: 5 }], { b: 2, c: 3 })
    ).toEqual([{ c: 4 }, { a: 1, c: 5 }])
  })

  it(`should return the same array if predicate isn't matched once`, () => {
    expect(reject([{ a: 1 }, { b: 2 }, { c: 3 }], { c: 1, b: 2 })).toEqual([
      { a: 1 },
      { b: 2 },
      { c: 3 },
    ])
  })
})
