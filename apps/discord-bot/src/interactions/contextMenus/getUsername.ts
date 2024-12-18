import type { UserContextMenuCommandInteraction } from 'discord.js'
import type { ContextMenu } from '../../types.js'
import { ApplicationCommandType } from 'discord.js'

export const Context: ContextMenu = {
  name: 'getuser',
  type: ApplicationCommandType.User,
  run: (interaction): void => {
    interaction = interaction as UserContextMenuCommandInteraction<'cached'> // If you want to use UserContextMenuCommandInteraction specifically.

    let member = interaction.guild.members.cache.get(interaction.targetId)
    if (!member)
      member = interaction.member

    interaction.reply({
      content: `That is ${member.user.tag}.`,
    })
  },
} // Simple UserContextMenu example
