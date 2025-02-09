import type { Meta, StoryObj } from '@storybook/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import * as z from 'zod'
import { CheckboxField } from './checkbox-field'

const meta: Meta<typeof CheckboxField> = {
  title: '🌀 Portal/Checkbox Field',
  component: CheckboxField,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    label: { control: 'text' },
    isRequired: { control: 'boolean' },
  },
  args: {
    name: 'terms',
    label: 'I agree to the terms and conditions',
    isRequired: true,
  },
}

export default meta

type Story = StoryObj<typeof CheckboxField>

const profileSchema = z.object({
  terms: z.boolean().refine(val => val === true, {
    message: 'You must agree to the terms and conditions',
  }),
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
        <CheckboxField {...args} form={form} />
      </FormProvider>
    )
  },
}
