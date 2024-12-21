import type { DiscordClient, Interaction, Message } from 'discord.js'
import type { AnyCommand } from '../../types.js'
import { ChannelType, EmbedBuilder } from 'discord.js'

export function onlyGuildsFN(client: DiscordClient, message: Message | Interaction<'cached'>, command: AnyCommand) {
  if (!command.onlyGuilds || !Array.isArray(command.onlyGuilds) || !message.guild)
    return true

  if (command.onlyGuilds.includes(message.guild?.id)) {
    return true
  }
  else {
    if (command.returnErrors === false || command.returnOnlyGuildsError === false)
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
        .setDescription(`The command you tried to execute cannot be ran in the current guild. Please execute the command in of these authorized guilds:\n${command.onlyGuilds.map((guildID: string) => `↳ <#${guildID}>`).join('\n')}`),
      ],
    })
    return false
  };
}
