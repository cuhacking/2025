import type { DiscordClient, Interaction, Message } from 'discord.js'
import type { AnyCommand } from '../../types.js'
import { ChannelType, EmbedBuilder } from 'discord.js'

export function onlyChannelsFN(client: DiscordClient, message: Message | Interaction<'cached'>, command: AnyCommand) {
  if (!command.onlyChannels || !Array.isArray(command.onlyChannels) || !message.guild)
    return true

  if (command.onlyChannels.includes(message.channel?.id)) {
    return true
  }
  else {
    if (command.returnErrors === false || command.returnOnlyChannelsError === false)
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
        .setDescription(`The command you tried to execute cannot be ran in the current channel. Please execute the command in of these authorized channels:\n${command.onlyChannels.map(channelId => `↳ <#${channelId}>`).join('\n')}`),
      ],
    })
    return false
  };
}
