import type { DiscordClient, Interaction, Message } from 'discord.js'
import type { AnyCommand, InteractionTypeOptions } from '../../types.js'
import { ChannelType, EmbedBuilder } from 'discord.js'

export async function channelCooldownFN(client: DiscordClient, message: Message | Interaction<'cached'>, command: AnyCommand, interactionType: InteractionTypeOptions): Promise<boolean> {
  if (!command.channelCooldown || Number.isNaN(command.channelCooldown) || !message.guild)
    return true

  const dbData = `channelCoolown.${message.channel?.id}.${interactionType}.${command.name}.${message.member?.id}`
  const currentTime: number = Date.now()
  const storedTime: number = client.cooldownDB?.get(dbData) ?? 0

  if (Math.floor(currentTime - storedTime) >= command.channelCooldown || !storedTime) {
    client.cooldownDB?.set(dbData, currentTime)
    return true
  }
  else {
    if (command.returnErrors === false || command.returnChannelCooldownError === false)
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
        .setDescription(`You are currently at cooldown. Please try again in <t:${Math.floor(Math.floor(storedTime + command.channelCooldown) / 1000)}:R>.`),
      ],
    })
    return false
  }
}
