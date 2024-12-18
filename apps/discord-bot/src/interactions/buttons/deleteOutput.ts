import type { ButtonCommand } from '../../types.js'

export const Button: ButtonCommand = {
  name: 'deleteOutput',
  ownerOnly: true,
  run: (interaction): void => {
    interaction.message.delete()
  },
} // ButtonCommand of the deleteOutput button.
