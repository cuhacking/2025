import type { Meta, StoryObj } from '@storybook/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { NumberField } from './number-field'

const meta: Meta<typeof NumberField> = {
  title: '🌀 Portal/Number Field',
  component: NumberField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    isRequired: { control: 'boolean' },
    isDisabled: { control: 'boolean' },
    info: { control: 'text' },
  },
  args: {
    name: 'number-field',
    label: 'Enter a number',
    isRequired: true,
    isDisabled: false,
  },
}

export default meta

type Story = StoryObj<typeof NumberField>

const profileSchema = z.object({
  number: z.number().min(1, { message: 'Number must be greater than 0' }),
})

export const Default: Story = {
  render: (args: any) => {
    const name = 'number'
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const form = useForm<any>({
      resolver: zodResolver(profileSchema),
      mode: 'onBlur',
    })
    const number = form.watch(name)

    const handleIncrement = () => {
      const currentValue = form.getValues(name)
      form.setValue(number, currentValue + 1)
    }

    const handleDecrement = () => {
      const currentValue = form.getValues(name)
      form.setValue(number, currentValue - 1)
    }

    return (
      <FormProvider {...form}>
        <NumberField
          {...args}
          form={form}
          value={number}
          handleIncrement={handleIncrement}
          handleDecrement={handleDecrement}
        />
      </FormProvider>
    )
  },
}
