import type { DiscordClient } from 'discord.js'
import type { ButtonCommand } from '../../types.js'
import { fileReader } from '../../utils/fileReader.js'

export async function ButtonManager(client: DiscordClient, rootPath: string): Promise<void> {
  const buttonCommandFiles: Array<string> = fileReader(`${rootPath}/interactions/buttons`)
  if (!buttonCommandFiles.length)
    return

  for (const buttonCommandFile of buttonCommandFiles) {
    const buttonCommand: ButtonCommand = (await import(`file:///${buttonCommandFile}`))?.Button
    if (!buttonCommand)
      continue

    if (!buttonCommand?.ignore && buttonCommand?.name)
      client.buttonCommands?.set(buttonCommand?.name, buttonCommand)
  };
}
