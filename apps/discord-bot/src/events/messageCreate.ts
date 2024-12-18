import type { DiscordClient, Message } from 'discord.js'
import type { ClientEvent, MessageCommand } from '../types.js'
import { PREFIX } from '../config.js'
import commandOptionsChecker from '../structures/commandOptions/processor.js'

export const Event: ClientEvent = {
  name: 'messageCreate',
  run: (message: Message, client: DiscordClient): void => {
    if (!Array.isArray(PREFIX))
      return
    PREFIX.forEach(async (botPrefix: string) => {
      if (!message.content.startsWith(botPrefix))
        return
      const commandName: string = message.content.toLowerCase().slice(botPrefix.length).trim().split(' ')[0]
      const command: MessageCommand | undefined = client.messageCommands?.get(commandName) ?? client.messageCommands?.get(client.messageCommands_Aliases?.get(commandName) ?? '')
      if (!command)
        return
      const args: Array<string> = message.content.slice(botPrefix.length).trim().slice(commandName.length).trim().split(' ')
      const processedCommandOptionsChecker: boolean = await commandOptionsChecker(client, message, command, 'MessageCommand')

      if (!command.allowInDms && !message.guild)
        return
      if (!command.allowBots && message.author.bot)
        return

      if (processedCommandOptionsChecker)
        await command.run(client, message, args)
    })
  },
} // MessageCreate event to handle all messages and execute messageCommands (if found).
