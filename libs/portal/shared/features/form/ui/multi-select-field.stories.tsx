import type { Meta, StoryObj } from '@storybook/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { MultiSelectField } from './multi-select-field'

const meta: Meta<typeof MultiSelectField> = {
  title: '🌀 Portal/Multi Select Field',
  component: MultiSelectField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    isRequired: { control: 'boolean' },
    options: { control: 'object' },
    isDisabled: { control: 'boolean' },
    info: { control: 'text' },
  },
  args: {
    name: 'multi-select',
    label: 'Select Options',
    isRequired: true,
    isDisabled: false,
    options: [
      { label: 'Option 1', value: 'option-1' },
      { label: 'Option 2', value: 'option-2' },
      { label: 'Option 3', value: 'option-3' },
    ],
  },
}

export default meta

type Story = StoryObj<typeof MultiSelectField>

const profileSchema = z.object({
  multiSelect: z
    .array(z.string())
    .min(1, { message: 'At least one option must be selected' }),
})

export const Default: Story = {
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm<any>({
      resolver: zodResolver(profileSchema),
      mode: 'onBlur',
    })

    return (
      <FormProvider {...form}>
        <MultiSelectField {...args} form={form} />
      </FormProvider>
    )
  },
}
