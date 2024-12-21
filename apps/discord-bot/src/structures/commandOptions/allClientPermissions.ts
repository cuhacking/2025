import type { DiscordClient, Interaction, Message, PermissionsString } from 'discord.js'
import type { AnyCommand } from '../../types.js'
import { ChannelType, EmbedBuilder } from 'discord.js'

export function allClientPermissionsFN(client: DiscordClient, message: Message | Interaction<'cached'>, command: AnyCommand): boolean {
  if (!command.allClientPermissions || !Array.isArray(command.allClientPermissions) || !message.guild)
    return true
  const missingPermissions: Array<PermissionsString> | undefined = message.guild?.members?.me?.permissions.missing(command.allClientPermissions)

  if (!missingPermissions?.length) {
    return true
  }
  else {
    if (command.returnErrors === false || command.returnAllClientPermissionsError === false)
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
          .setDescription(`The client is missing the set permissions which are necessary to run this command. Please provide the client these permissions to execute this command:\n${missingPermissions.map((permission: string) => `↳ \`${permission}\``).join('\n')}`),
      ],
    })
    return false
  };
}
