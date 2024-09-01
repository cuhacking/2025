import request from 'supertest'
import app from '@src/server'
import { describe, expect, it } from 'vitest'
import { URLS } from '../../config'

describe('get-issue template integration tests', () => {
  it('should send an object back of all issues', async () => {
    const res = await request(app).get('/api/issues')
    const url = res.headers.location
    expect(url).toBe(``)
  })
})
