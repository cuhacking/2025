/* eslint-disable react/prefer-destructuring-assignment */
/* eslint-disable ts/no-use-before-define */
import type { Meta, StoryObj } from '@storybook/react'
import Calender from '@cuhacking/portal/assets/public/Calender.png'
import cuHackingLogo from '@cuhacking/portal/assets/public/cuhackingnavlogo.png'
import hackermode from '@cuhacking/portal/assets/public/hacker-mode.png'
import handshake from '@cuhacking/portal/assets/public/handshake.png'
import map from '@cuhacking/portal/assets/public/map.png'
import mountain from '@cuhacking/portal/assets/public/mountain.png'
import user from '@cuhacking/portal/assets/public/user.png'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { Sidebar, SidebarBody } from './sidebar'

const meta = {
  title: '🌀 Portal/Sidebar',
  component: Sidebar,
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

type Story = StoryObj<typeof Sidebar>

const Template: Story = (args: { open: boolean, animate: boolean }) => {
  const [open, setOpen] = useState(args.open)

  useEffect(() => {
    setOpen(args.open)
  }, [args.open])

  return (
    <Sidebar {...args} open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          <Logo />
          <div className="mt-8 flex flex-col gap-2">
            {links.map(link => (
              <motion.a
                key={link.label}
                href={link.href}
                className="flex items-center gap-2 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md w-full"
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 10 }}
              >
                {link.icon}
                <span>{link.label}</span>
              </motion.a>
            ))}
          </div>
        </div>
        <div>
          <motion.a
            href="#"
            className="flex items-center gap-2 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <img
              src={hackermode.src}
              className="h-5 w-5"
              alt="Settings Icon"
            />
            <span
              className={`truncate font-medium transition-all ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
            >
              Hacker Mode
            </span>
          </motion.a>
          <motion.a
            href="#"
            className="flex items-center gap-2 py-2 text-sm text-neutral-700 dark:text-neutral-200 hover:bg-neutral-100 dark:hover:bg-neutral-700 rounded-md"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          >
            <img
              src={user.src}
              className="h-7 w-7 rounded-full"
              alt="Avatar"
            />
            <span
              className={`truncate font-medium transition-all ${open ? 'visible opacity-100' : 'invisible opacity-0'}`}
            >
              {constants.user.name}
            </span>
          </motion.a>
        </div>
      </SidebarBody>
    </Sidebar>
  )
}

export const Default: Story = Template.bind({})
Default.args = {
  open: true,
  animate: true,
}

function Logo() {
  return (
    <a
      href="#"
      className="flex items-center space-x-2 text-sm text-black py-1 relative z-20"
    >
      <img
        src={cuHackingLogo.src}
        alt="CuHacking Logo"
        className="h-5 w-6 rounded-sm"
      />
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="font-medium text-black dark:text-white whitespace-pre"
      >
        CuHacking
      </motion.span>
    </a>
  )
}

const links = [
  {
    label: 'Events',
    href: '#',
    icon: (
      <img
        className="h-5 w-5"
        src={Calender.src}
        alt="Calendar Icon"
      />
    ),
  },
  {
    label: 'Team',
    href: '#',
    icon: (
      <img
        className="h-5 w-5"
        src={handshake.src}
        alt="Profile Icon"
      />
    ),
  },
  {
    label: 'Challenges',
    href: '#',
    icon: (
      <img
        className="h-5 w-5"
        src={mountain.src}
        alt="Settings Icon"
      />
    ),
  },
  {
    label: 'User',
    href: '#',
    icon: (
      <img
        className="h-5 w-5"
        src={user.src}
        alt="Logout Icon"
      />
    ),
  },
  {
    label: 'Map',
    href: '#',
    icon: (
      <img
        className="h-5 w-5"
        src={map.src}
        alt="Logout Icon"
      />
    ),
  },
]

const constants = {
  user: {
    name: 'Saim',
  },
}
