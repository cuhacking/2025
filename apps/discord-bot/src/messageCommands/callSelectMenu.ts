import type { MessageCommand } from '../types.js'
import { ActionRowBuilder, ChannelType, StringSelectMenuBuilder } from 'discord.js'

export const MsgCommand: MessageCommand = {
  name: 'callselectmenu',
  run: (client, message): void => {
    if (!message.channel || message.channel.type !== ChannelType.GuildText)
      return

    message.channel.send({
      content: 'Cookies SelectMenu',
      components: [
        new ActionRowBuilder<StringSelectMenuBuilder>().addComponents(
          new StringSelectMenuBuilder()
            .setCustomId('SelectMenuExample')
            .setPlaceholder('Free Cookies!')
            .addOptions(
              [{
                label: 'Click for cookies!',
                description: 'Freeee!',
                value: 'CookieBox',
              }],
            ),
        ),
      ],
    })
  },
} // Calls the SelectMenuExample SelectMenu.
