import hackerdock from '@cuhacking/shared/assets/icons/general/hacker-dock-1.svg'
import handshake from '@cuhacking/shared/assets/icons/general/handshake-white-1.svg'
import logout from '@cuhacking/shared/assets/icons/general/logout-1.svg'
import map from '@cuhacking/shared/assets/icons/general/map-white-1.svg'
import mountain from '@cuhacking/shared/assets/icons/general/mountain-white-1.svg'
import user from '@cuhacking/shared/assets/icons/general/profile-white-1.svg'
import { Logo } from '@cuhacking/shared/ui/logo'
import { SidebarBody, Sidebar as SidebarContainer, SidebarItem, SidebarLink } from '@cuhacking/shared/ui/sidebar'

export function Sidebar() {
  const profileLinks = [{
    label: 'Logout',
    href: '/logout',
    disabled: false,
    icon: (
      <img
        className="size-6"
        src={logout}
        alt="Logout Icon"
      />
    ),
  }, {
    label: 'Profile',
    href: '/profile',
    disabled: false,
    icon: (
      <img
        className="size-6"
        src={user}
        alt="Profile Icon"
      />
    ),
  }]

  const navLinks = [
    {
      label: 'Sponsors',
      disabled: true,
      href: '/',
      icon: (
        <img
          className="size-6"
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
          className="size-6"
          src={mountain}
          alt="Settings Icon"
        />
      ),
    },

    {
      label: 'Schedule',
      disabled: true,
      href: '/',
      icon: (
        <img
          className="size-6"
          src={map}
          alt="Calendar Icon"
        />
      ),
    },
  ]

  return (
    <SidebarContainer>
      <SidebarBody className="justify-between">
        <div className="flex flex-col flex-1 gap-y-2 overflow-y-auto overflow-x-hidden">
          <Logo link="/" hasWordmark hasAnimation className="pb-6" />
          <div className="flex flex-col gap-3">
            {navLinks.map((link, idx) => (
              <SidebarLink className="h-10" disabled={link.disabled} key={idx} link={link} />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-3">

          <SidebarItem className="h-10" icon={hackerdock} iconAlt="HackerDock">
            <p>HackerDock</p>
          </SidebarItem>
          {profileLinks.map((link, idx) => (
            <SidebarLink className="h-10" disabled={link.disabled} key={idx} link={link} />
          ))}
        </div>
        <div>
        </div>
      </SidebarBody>
    </SidebarContainer>

  )
}
