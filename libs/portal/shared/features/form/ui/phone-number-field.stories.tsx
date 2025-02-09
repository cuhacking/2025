import type { Meta, StoryObj } from '@storybook/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { PhoneNumberField } from './phone-number-field'

const meta: Meta<typeof PhoneNumberField> = {
  title: '🌀 Portal/Phone Number Field',
  component: PhoneNumberField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    isRequired: { control: 'boolean' },
    info: { control: 'text' },
  },
  args: {
    name: 'phoneNumber',
    label: 'Phone Number',
    isRequired: true,
  },
}

export default meta

type Story = StoryObj<typeof PhoneNumberField>

const profileSchema = z.object({
  phoneNumber: z.string().min(10, { message: 'Phone number is required' }),
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
        <PhoneNumberField {...args} form={form} />
      </FormProvider>
    )
  },
}
