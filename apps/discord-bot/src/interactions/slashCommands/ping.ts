import type { SlashCommand } from '../../types.js'

export const Slash: SlashCommand = {
  name: 'ping',
  description: 'Pong',
  run: (interaction, client): void => {
    interaction.reply({
      content: `Ping is ${client.ws.ping}ms.`,
    })
  },
} // Simple /Ping command
