import process from 'node:process'
import { URLS } from '../constants.js'

export function generateOAuthLink(discordChannelID: string) {
  if (process.env.NODE_EV !== 'production')
    return `http://localhost:${process.env.DISCORD_TO_GITHUB_PORT}/api/auth/github?id=${discordChannelID}`
}

export function generateServerLink(discordChannelID: string) {
  return `${URLS.DISCORD_URL}/channels/${discordChannelID}`
}

export async function getAccessToken(_discordID: string): Promise<string> {
  // The acutal funciton here would query the DB
  return process.env.GITHUB_PERSONAL_ACCESS_TOKEN_FOR_CUHACKING ?? ''
}
