import request from 'supertest'
import app from '@src/server'
import { describe, expect, it } from 'vitest'
import { URLS } from '../../config'

describe('authentication integration tests', () => {
  it('should redirect you to the GitHub auth link', async () => {
    const res = await request(app).get('/api/auth/github').expect(302)
    const startsWithURL = res.headers.location.startsWith(URLS.GITHUB_AUTHORIZE_URL)
    expect(startsWithURL).toBe(true)
  })
  it('should redirect you to the cuHacking discord channel', async () => {
    const res = await request(app).get('/api/auth/github-callback').expect(302)
    const url = res.headers.location
    expect(url).toBe(`${URLS.DISCORD_URL}/channels/${process.env.CUHACKING_DISCORD_CHANNEL_ID}`)
  })
})
