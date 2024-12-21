import type { DiscordClient } from 'discord.js'
import type { ClientEvent } from '../../types.js'
import { fileReader } from '../../utils/fileReader.js'

export async function EventManager(client: DiscordClient, rootPath: string): Promise<void> {
  const eventFiles: Array<string> = fileReader(`${rootPath}/events`)
  if (!eventFiles.length)
    return

  for (const event of eventFiles) {
    const clientEvent: ClientEvent = (await import(`file:///${event}`))?.Event
    if (clientEvent.ignore)
      continue

    client.events?.set(clientEvent.name, clientEvent)

    if (clientEvent.customEvent)
      clientEvent.run(client)
    else if (clientEvent.name && clientEvent.runOnce)
      client.once(clientEvent.name, (...args: unknown[]) => clientEvent.run(...args, client))
    else if (clientEvent.name)
      client.on(clientEvent.name, (...args: unknown[]) => clientEvent.run(...args, client))
  };
}
