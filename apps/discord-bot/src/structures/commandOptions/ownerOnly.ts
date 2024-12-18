import type { DiscordClient, Interaction, Message } from 'discord.js'
import type { AnyCommand } from '../../types.js'
import { ChannelType, EmbedBuilder } from 'discord.js'
import { OWNER_IDS } from '../../config.js'

export function ownerOnlyFN(client: DiscordClient, message: Message | Interaction<'cached'>, command: AnyCommand) {
  if (!command.ownerOnly || typeof command.ownerOnly !== 'boolean')
    return true
  if (OWNER_IDS.includes(((message as Interaction<'cached'>).user ?? (message as Message).author)?.id)) {
    return true
  }
  else {
    if (command.returnErrors === false || command.returnOwnerOnlyError === false)
      return false
    if (!message.channel || message.channel.type !== ChannelType.GuildText)
      return false

    message.channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor('DarkRed')
          .setTimestamp()
          .setAuthor({
            name: message.member?.user.globalName ?? message.member?.user.username ?? '',
            iconURL: message.member?.user.displayAvatarURL(),
          })
          .setThumbnail(client.user.displayAvatarURL())
          .setDescription('The command you tried to run is __restricted__ for the developers of this bot and thus the command failed to execute.'),
      ],
    })
    return false
  };
}
