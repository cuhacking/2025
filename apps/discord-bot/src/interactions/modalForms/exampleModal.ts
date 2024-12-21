import type { ModalForm } from '../../types.js'

export const Modal: ModalForm = {
  name: 'ExampleModal',
  run: (interaction): void => {
    interaction.reply({
      content: 'This modal is correctly functioning.',
    })
  },
} // Code for the ExampleModal ModalForm
