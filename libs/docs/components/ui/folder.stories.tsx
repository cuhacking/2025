import type { Meta, StoryObj } from '@storybook/react'
import { File, Files, Folder } from 'fumadocs-ui/components/files'

const meta: Meta<typeof Files> = {
  title: '📚 Docs Site/Files',
  component: Files,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    name: {
      control: 'text',
      description: 'The name of the file or folder',
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the folder interaction',
      defaultValue: false,
    },
    icon: {
      control: 'object',
      description: 'Optional icon component to display',
    },
  },
}

export default meta

type Story = StoryObj<typeof Files>

export const Default: Story = {
  render: () => (
    <Files>
      <Folder name="app" defaultOpen>
        <Folder name="[id]">
          <File name="page.tsx" />
        </Folder>
        <File name="layout.tsx" />
        <File name="page.tsx" />
        <File name="global.css" />
      </Folder>
      <Folder name="components">
        <File name="button.tsx" />
        <File name="tabs.tsx" />
        <File name="dialog.tsx" />
      </Folder>
      <File name="package.json" />
    </Files>
  ),
}

export const FolderDisabled: Story = {
  render: () => (
    <Files>
      <Folder name="app" disabled>
        <File name="layout.tsx" />
        <File name="page.tsx" />
      </Folder>
      <Folder name="components" disabled>
        <File name="button.tsx" />
        <File name="dialog.tsx" />
      </Folder>
    </Files>
  ),
}

export const CustomIcons: Story = {
  render: () => (
    <Files>
      <Folder name="app" defaultOpen icon={<span>📁</span>}>
        <File name="layout.tsx" icon={<span>📄</span>} />
        <File name="page.tsx" icon={<span>📄</span>} />
      </Folder>
      <Folder name="components" icon={<span>⚙️</span>}>
        <File name="button.tsx" icon={<span>🛠️</span>} />
        <File name="dialog.tsx" icon={<span>🛠️</span>} />
      </Folder>
      <File name="package.json" icon={<span>📦</span>} />
    </Files>
  ),
}
