import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../button'
import { Label } from '../label'
import { RadioGroup, RadioGroupItem } from './radio-group'

const meta: Meta<typeof RadioGroup> = {
  title: 'cuHacking Design System/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
}

export default meta

type Story = StoryObj<typeof RadioGroup>

export const Default: Story = {
  args: {
    children: (
      <>
        <RadioGroup defaultValue="option1">
          <div className="flex items-center">
            <RadioGroupItem id="1" value="option1" />

            <Label
              htmlFor="1"
              className="px-3 py-2 rounded-md flex items-center justify-center gap-2 text-white text-sm font-medium font-mono uppercase leading-tight cursor-pointer
                          peer-data-[state=checked]:bg-white/25 hover:bg-white/10 transition-colors"
            >
              Option 1
            </Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem id="2" value="option2" />
            <Label
              htmlFor="2"
              className="px-3 py-2 rounded-md flex items-center justify-center gap-2 text-white text-sm font-medium font-mono uppercase leading-tight cursor-pointer
                          peer-data-[state=checked]:bg-white/25 hover:bg-white/10 transition-colors"
            >
              Option 1
            </Label>
          </div>
          <div className="flex items-center">
            <RadioGroupItem id="3" value="option3" />
            <Label
              htmlFor="3"
              className="px-3 py-2 rounded-md flex items-center justify-center gap-2 text-white text-sm font-medium font-mono uppercase leading-tight cursor-pointer
                          peer-data-[state=checked]:bg-white/25 hover:bg-white/10 transition-colors"
            >
              Option 1
            </Label>
          </div>
        </RadioGroup>
      </>
    ),
  },
}

export const DisabledOption: Story = {
  args: {
    children: (
      <>
        <RadioGroup defaultValue="option1">
          <RadioGroupItem value="option1">Option 1</RadioGroupItem>
          <RadioGroupItem value="option2" disabled>
            Option 2 (Disabled)
          </RadioGroupItem>
          <RadioGroupItem value="option3">Option 3</RadioGroupItem>
        </RadioGroup>
      </>
    ),
  },
}

export const WithButton: Story = {
  args: {
    children: (
      <>
        <RadioGroup defaultValue="option1">
          <RadioGroupItem value="option1">Option 1</RadioGroupItem>
          <RadioGroupItem value="option2">Option 2</RadioGroupItem>
          <RadioGroupItem value="option3">Option 3</RadioGroupItem>
        </RadioGroup>
        <Button className="mt-4">Submit Selection</Button>
      </>
    ),
  },
}
