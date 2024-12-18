import type { DiscordClient, Interaction, Message } from 'discord.js'
import type { AnyCommand } from '../../types.js'
import { ChannelType, EmbedBuilder } from 'discord.js'

export function anyUserPermissionsFN(client: DiscordClient, message: Message | Interaction<'cached'>, command: AnyCommand): boolean {
  if (!command.anyUserPermissions || !Array.isArray(command.anyUserPermissions) || !message.guild)
    return true
  if (command.anyUserPermissions.some((permission: bigint) => message.member?.permissions.has(permission))) {
    return true
  }
  else {
    if (command.returnErrors === false || command.returnAnyUserPermissionsError === false)
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
        .setDescription(`You are missing any one of these permissions which are necessary to run this command. Please acquire any one of these permissions to execute this command:\n${command.anyUserPermissions.map((permission: bigint) => `↳ \`${permission}\``).join('\n')}`),
      ],
    })
    return false
  }
}
