const store = new Map()

export async function storeDiscordTokens(userId: string, tokens: any) {
  await store.set(`discord-${userId}`, tokens)
}

export async function getDiscordTokens(userId: string) {
  return store.get(`discord-${userId}`)
}
