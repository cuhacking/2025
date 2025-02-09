import { Input } from './input'

export default {
  title: 'Shadcn-ui/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    type: {
      control: 'text',
      defaultValue: 'text',
    },
    className: {
      control: 'text',
      defaultValue: '',
    },
  },
}

const Template = (args: React.ComponentProps<typeof Input>) => <Input {...args} />

export const Default = Template.bind({})
Default.args = {
  type: 'text',
  placeholder: 'Enter text...',
  className: 'border-2 border-border p-2 rounded-md',
}

export const Number = Template.bind({})
Number.args = {
  type: 'number',
  placeholder: 'Enter a number...',
  className: 'border-2 border-border p-2 rounded-md',
}
