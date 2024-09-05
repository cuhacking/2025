import { describe, expect, it } from 'vitest'
import { generateOAuthLink, generateServerLink, getAccessToken } from '@services/auth'

const OAUTH_URL = `http://localhost:3333/api/auth/github?id=1193362882302320751`
const DISCORD_SERVER_URL = `https://discord.com/channels/1193362882302320751`
const DISCORD_SERVER_ID = '1193362882302320751'

describe('authentication tests', () => {
  // We would have to mock data to do this
  it('should generate an OAUTH link for the user to click on', () => {
    const res = generateOAuthLink(DISCORD_SERVER_ID)
    expect(res).toBe(OAUTH_URL)
  })
  it('should generate a discord link for the cuHacking server', () => {
    const res = generateServerLink(DISCORD_SERVER_ID)
    expect(res).toBe(DISCORD_SERVER_URL)
  })
  it('should find a user with a matching discord ID', () => {
    const discordID = '123123123'
    const res = getAccessToken(discordID)
    expect(res.accessToken).toBe('321321321')
  })
  it('should not find a user with a matching discord ID', () => {
    const discordID = '01230123'
    const res = getAccessToken(discordID)
    expect(res.accessToken).toBe(undefined)
  })
})
