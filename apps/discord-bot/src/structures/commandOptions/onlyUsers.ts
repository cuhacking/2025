import type { DiscordClient, Interaction, Message } from 'discord.js'
import type { AnyCommand } from '../../types.js'
import { ChannelType, EmbedBuilder } from 'discord.js'

export function onlyUsersFN(client: DiscordClient, message: Message | Interaction<'cached'>, command: AnyCommand) {
  if (!command.onlyUsers || !Array.isArray(command.onlyUsers))
    return true

  if (command.onlyUsers.includes(((message as Interaction<'cached'>).user ?? (message as Message).author)?.id)) {
    return true
  }
  else {
    if (command.returnErrors === false || command.returnOnlyUsersError === false)
      return false
    if (!message.channel || message.channel.type !== ChannelType.GuildText)
      return false

    message.channel.send({
      embeds: [new EmbedBuilder()
        .setColor('DarkRed')
        .setTimestamp()
        .setAuthor({
          name: message.member?.user.globalName ?? message.member?.user.username ?? '',
          iconURL: message.member?.user.displayAvatarURL(),
        })
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription('The command you tried to execute couldn\'t be ran as you are not one of the authorized users.'),
      ],
    })
    return false
  };
}
