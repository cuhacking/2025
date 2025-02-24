/* eslint-disable react/prefer-destructuring-assignment */
import type { Meta, StoryObj } from '@storybook/react'
import handshake from '@cuhacking/shared/assets/icons/general/handshake-white-1.svg'
import map from '@cuhacking/shared/assets/icons/general/map-white-1.svg'
import mountain from '@cuhacking/shared/assets/icons/general/mountain-white-1.svg'
import user from '@cuhacking/shared/assets/icons/general/profile-white-1.svg'
import { Logo } from '@cuhacking/shared/ui/logo'
import { createRemixStub } from '@remix-run/testing'
import { useEffect, useState } from 'react'
import { SidebarBody, Sidebar as SidebarContainer, SidebarLink } from './sidebar'

const links = [
  {
    label: 'User',
    href: '#',
    disabled: false,
    icon: (
      <img
        className="size-5"
        src={user.src}
        alt="Logout Icon"
      />
    ),
  },
  {
    label: 'Team',
    href: '#',
    disabled: false,
    icon: (
      <img
        className="size-5"
        src={handshake.src}
        alt="Profile Icon"
      />
    ),
  },
  {
    label: 'Challenges',
    href: '#',
    disabled: false,
    icon: (
      <img
        className="size-5"
        src={mountain.src}
        alt="Settings Icon"
      />
    ),
  },
  {
    label: 'Map',
    href: '#',
    disabled: true,
    icon: (
      <img
        className="size-5"
        src={map.src}
        alt="Logout Icon"
      />
    ),
  },
]

const meta = {
  title: 'cuHacking Design System/Sidebar',
  component: SidebarContainer,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
    },
  },
  args: {
    animate: true,
    open: false,
  },
  decorators: [
    (story) => {
      const remixStub = createRemixStub([
        {
          path: '/*',
          action: () => ({ redirect: '/' }),
          loader: () => ({ redirect: '/' }),
          Component: () => story(),
        },
      ])

      return remixStub({ initialEntries: ['/'] })
    },
  ],
  argTypes: {
    animate: {
      control: 'boolean',
      description: 'Enable/disable hover animations',
    },
    open: {
      control: 'boolean',
      description: 'Open/close the sidebar',
    },
  },
} as Meta

export default meta

type Story = StoryObj<typeof SidebarContainer>

function Template(args: { open: boolean, animate: boolean }) {
  const [open, setOpen] = useState(args.open)

  useEffect(() => {
    setOpen(args.open)
  }, [args.open])

  return (
    <SidebarContainer open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 gap-y-2 overflow-y-auto overflow-x-hidden">
          <Logo className="px-2" link="/" hasWordmark hasAnimation />
          <div className="flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink className="px-2" disabled={link.disabled} key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
        </div>
      </SidebarBody>
    </SidebarContainer>
  )
}

export const Default: Story = Template.bind({})
Default.args = {
  open: true,
  animate: true,
}
