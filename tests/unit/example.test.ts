import { describe, expect, it } from 'vitest'

describe('simple example test suite', () => {
  it('should always pass', () => {
    expect(true).toBe(true)
  })
  it('another test to always pass', () => {
    expect(2 + 2).toBe(4)
  })
})
