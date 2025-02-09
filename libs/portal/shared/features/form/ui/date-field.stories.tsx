import type { Meta, StoryObj } from '@storybook/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { DateField } from './date-field'

const meta: Meta<typeof DateField> = {
  title: '🌀 Portal/Date Field',
  component: DateField,
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
    name: 'date',
    label: 'Graduation Date',
    isRequired: true,
    isDisabled: false,
  },
}

export default meta

type Story = StoryObj<typeof DateField>

const profileSchema = z.object({
  date: z.date(),
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
        <DateField {...args} form={form} />
      </FormProvider>
    )
  },
}
