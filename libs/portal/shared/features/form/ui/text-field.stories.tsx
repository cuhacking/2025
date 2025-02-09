import type { Meta, StoryObj } from '@storybook/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { TextField } from './text-field'

const meta: Meta<typeof TextField> = {
  title: '🌀 Portal/Text Field',
  component: TextField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    placeholder: { control: 'text' },
    isRequired: { control: 'boolean' },
    variant: { control: 'select', options: ['text', 'link', 'email'] },
    isDisabled: { control: 'boolean' },
    info: { control: 'text' },
  },
  args: {
    name: 'textField',
    label: 'Input Label',
    placeholder: 'Enter something...',
    isRequired: true,
    variant: 'text',
    isDisabled: false,
    info: 'Optional information about the field',
  },
}

export default meta

type Story = StoryObj<typeof TextField>

const schema = z.object({
  textField: z.string().min(1, { message: 'Field is required' }),
})

export const Default: Story = {
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm<any>({
    //  since this is a story, not necessary to follow hook rules
      resolver: zodResolver(schema),
      mode: 'onBlur',
    })

    return (
      <FormProvider {...form}>
        <TextField {...args} form={form} />
      </FormProvider>
    )
  },
}
