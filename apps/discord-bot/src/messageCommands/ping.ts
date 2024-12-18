import type { MessageCommand } from '../types.js'
import { ChannelType } from 'discord.js'

export const MsgCommand: MessageCommand = {
  name: 'ping',
  aliases: ['pong'],
  run: (client, message): void => {
    if (!message.channel || message.channel.type !== ChannelType.GuildText)
      return

    message.channel.send({
      content: `My ping is ${client.ws.ping}ms.`,
    })
  },
} // Simple ping message command.
