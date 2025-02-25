import { UserProfileStatus } from '@cuhacking/portal/types/user'
import handshake from '@cuhacking/shared/assets/icons/general/handshake-white-1.svg'
import logout from '@cuhacking/shared/assets/icons/general/logout-1.svg'
import map from '@cuhacking/shared/assets/icons/general/map-white-1.svg'
import mountain from '@cuhacking/shared/assets/icons/general/mountain-white-1.svg'
import user from '@cuhacking/shared/assets/icons/general/profile-white-1.svg'

import { Dock, DockIcon } from '@cuhacking/shared/ui/dock'
import { Logo } from '@cuhacking/shared/ui/logo'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@cuhacking/shared/ui/tooltip'

import { cn } from '@cuhacking/shared/utils/cn'
import { Link } from '@remix-run/react'

interface HackerDockProps {
  status: UserProfileStatus
}

export function HackerDock({
  status,
}: HackerDockProps) {
  const links = [
    {
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
    },
    {
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
    },
    {
      label: 'Sponsors',
      disabled: true,
      href: '/',
      icon: (
        <img
          className="size-6"
          src={handshake}
          alt="Team Icon"
        />
      ),
    },
    {
      label: 'Home',
      disabled: false,
      href: '/dashboard',
      icon: (
        <Logo link="/dashboard" />
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
          alt="Challenges Icon"
        />
      ),
    },
    {
      label: 'Calendar',
      disabled: true,
      href: '/',
      icon: (
        <img
          className="size-6"
          src={map}
          alt="Map Icon"
        />
      ),
    },
  ]

  return (
    status === UserProfileStatus.complete
    && (
      <div className="fixed w-screen bottom-4 flex flex-col items-center justify-center z-10000">
        <TooltipProvider>
          <Dock direction="middle" className="bg-card">

            {/* Navigation Links */}
            {links.map(link => (
              <DockIcon key={link.label}>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Link
                      to={link.href}
                      aria-label={link.label}
                      className={cn(
                        '',
                        link.disabled && 'opacity-25 pointer-events-none cursor-not-allowed',
                      )}
                    >
                      {link.icon}
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent className="z-10001">
                    <p>{link.label}</p>
                  </TooltipContent>
                </Tooltip>
              </DockIcon>
            ))}
          </Dock>
        </TooltipProvider>
      </div>
    )
  )
}
