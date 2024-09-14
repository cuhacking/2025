import { env } from './env'

describe('env', () => {
  it('should work', () => {
    expect(env()).toEqual('env')
  })
})
