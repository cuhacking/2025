import type { Meta, StoryObj } from '@storybook/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { RadioGroupField } from './radio-group-field'

const meta: Meta<typeof RadioGroupField> = {
  title: '🌀 Portal/Radio Group Field',
  component: RadioGroupField,
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
    name: 'radioOption',
    label: 'Select an Option',
    isRequired: true,
    options: [
      { value: 'option1', label: 'Option 1' },
      { value: 'option2', label: 'Option 2' },
      { value: 'option3', label: 'Option 3' },
    ],
  },
}

export default meta

type Story = StoryObj<typeof RadioGroupField>

const schema = z.object({
  radioOption: z.string().min(1, { message: 'Option is required' }),
})

export const Default: Story = {
  render: (args: any) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm<any>({
      resolver: zodResolver(schema),
      mode: 'onBlur',
    })

    return (
      <FormProvider {...form}>
        <RadioGroupField {...args} form={form} />
      </FormProvider>
    )
  },
}
