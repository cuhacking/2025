import handshake from '@cuhacking/shared/assets/icons/general/handshake-white-1.svg'
import map from '@cuhacking/shared/assets/icons/general/map-white-1.svg'
import mountain from '@cuhacking/shared/assets/icons/general/mountain-white-1.svg'
import user from '@cuhacking/shared/assets/icons/general/profile-white-1.svg'
import { Logo } from '@cuhacking/shared/ui/logo'
import { SidebarBody, Sidebar as SidebarContainer, SidebarLink } from '@cuhacking/shared/ui/sidebar'
import { useState } from 'react'

export function Sidebar() {
  const links = [
    {
      label: 'Profile',
      href: '/profile',
      disabled: false,
      icon: (
        <img
          className="h-6 w-6"
          src={user}
          alt="Logout Icon"
        />
      ),
    },
    {
      label: 'Team',
      disabled: true,
      href: '/',
      icon: (
        <img
          className="h-6 w-6"
          src={handshake}
          alt="Profile Icon"
        />
      ),
    },
    {
      label: 'Challenges',
      disabled: true,
      href: '/',
      icon: (
        <img
          className="h-6 w-6"
          src={mountain}
          alt="Settings Icon"
        />
      ),
    },

    {
      label: 'Map',
      disabled: true,
      href: '/',
      icon: (
        <img
          className="h-6 w-6"
          src={map}
          alt="Logout Icon"
        />
      ),
    },
  ]

  const [open, setOpen] = useState(false)
  return (
    <SidebarContainer open={open} setOpen={setOpen}>
      <SidebarBody className="justify-between gap-10">
        <div className="flex flex-col flex-1 gap-y-2 overflow-y-auto overflow-x-hidden">
          <Logo link="/" hasWordmark hasAnimation />
          <div className="flex flex-col gap-2">
            {links.map((link, idx) => (
              <SidebarLink disabled={link.disabled} key={idx} link={link} />
            ))}
          </div>
        </div>
        <div>
        </div>
      </SidebarBody>
    </SidebarContainer>

  )
}
