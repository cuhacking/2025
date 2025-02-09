import type { Meta, StoryObj } from '@storybook/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { ComboboxField } from './combobox-field'

const meta: Meta<typeof ComboboxField> = {
  title: '🌀 Portal/Combobox Field',
  component: ComboboxField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    options: { control: 'object' },
    isRequired: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    info: { control: 'text' },
  },
  args: {
    name: 'comboboxField',
    label: 'Select Option',
    options: [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ],
    isRequired: true,
    isDisabled: false,
    info: 'Optional information about the combobox',
  },
}

export default meta

type Story = StoryObj<typeof ComboboxField>

const schema = z.object({
  comboboxField: z.string().min(1, { message: 'Field is required' }),
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
        <ComboboxField {...args} form={form} />
      </FormProvider>
    )
  },
}
