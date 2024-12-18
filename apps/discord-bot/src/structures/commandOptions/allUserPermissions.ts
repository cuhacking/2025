import type { DiscordClient, Interaction, Message, PermissionsString } from 'discord.js'
import type { AnyCommand } from '../../types.js'
import { ChannelType, EmbedBuilder } from 'discord.js'

export function allUserPermissionsFN(client: DiscordClient, message: Message | Interaction<'cached'>, command: AnyCommand): boolean {
  if (!command.allUserPermissions || !Array.isArray(command.allUserPermissions) || !message.guild)
    return true
  const missingPermissions: Array<PermissionsString> | undefined = message.member?.permissions.missing(command.allUserPermissions)

  if (!missingPermissions?.length) {
    return true
  }
  else {
    if (command.returnErrors === false || command.returnAllUserPermissionsError === false)
      return false
    if (!message.channel || message.channel.type !== ChannelType.GuildText)
      return false

    message?.channel.send({
      embeds: [
        new EmbedBuilder()
          .setColor('DarkRed')
          .setTimestamp()
          .setAuthor({
            name: message.member?.user.globalName ?? message.member?.user.username ?? '',
            iconURL: message.member?.user.displayAvatarURL(),
          })
          .setThumbnail(client.user.displayAvatarURL())
          .setDescription(`You are missing the set permissions which are necessary to run this command. Please acquire these permissions to execute this command:\n${missingPermissions.map((permission: string) => `↳ \`${permission}\``).join('\n')}`),
      ],
    })
    return false
  };
}
