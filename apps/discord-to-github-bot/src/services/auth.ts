import process from 'node:process'
import { URLS } from '../constants.js'

export function generateOAuthLink(discordChannelID: string) {
  if (process.env.NODE_EV !== 'production')
    return `http://localhost:${process.env.DISCORD_TO_GITHUB_PORT}/api/auth/github?id=${discordChannelID}`
}

export function generateServerLink(discordChannelID: string) {
  return `${URLS.DISCORD_URL}/channels/${discordChannelID}`
}

export function getAccessToken(_discordID: string): string {
  return process.env.GITHUB_PERSONAL_ACCESS_TOKEN_FOR_CUHACKING ?? ''
}
