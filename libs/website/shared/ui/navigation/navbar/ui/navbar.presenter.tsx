import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerTitle,
} from '@cuhacking/shared/ui/drawer'
import { Icon } from '@cuhacking/shared/ui/icon'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@cuhacking/shared/ui/navigation-menu'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { Link } from '@remix-run/react'
import { useState } from 'react'
import { ClientOnly } from 'remix-utils/client-only'
import { Socials } from '../../../socials'
import { NavItem } from './nav-item'
import { MobileNavItem } from './nav-item-mobile'

interface Media {
  src: string
  alt: string
}

interface NavbarProps {
  links: {
    name: string
    link: string
  }[]
  logo: string
  socials: {
    link: string
    media: Media
  }[]
  hamburger: Media
  cross: Media
}
// TODO: Refactor to have the drawer in separate components
export function NavbarPresenter({
  links,
  logo,
  socials,
  hamburger,
  cross,
}: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false)
  function toggleOpen() {
    setIsOpen(prev => !prev)
  }

  return (
    <div className="mx-auto max-w-screen-xl px-4 py-2.5 flex justify-between">
      <Link to="/" aria-label="Return to homepage">
        <img
          src={logo}
          alt="cuHacking logo"
          className="transition-transform duration-300 hover:scale-[1.2] relative z-[60]"
        />
      </Link>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-x-10">
          {links.map(({ name, link }, index) => (
            <NavigationMenuItem key={name}>
              <NavItem index={index} link={link} name={name} />
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <ClientOnly fallback={null}>
        {() => (
          <Drawer direction="right" open={isOpen}>
            <button
              type="button"
              aria-label={
                isOpen ? 'Close Navigation Drawer' : 'Open Navigation Drawer'
              }
              className="md:hidden"
              onClick={toggleOpen}
            >
              <Icon
                media={isOpen ? cross : hamburger}
                className={`transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
              />
            </button>
            <VisuallyHidden>
              <DrawerTitle>Mobile Navigation</DrawerTitle>
            </VisuallyHidden>
            <DrawerContent
              className="h-full border-none overflow-x-hidden rounded-none bg-g-nav-drawer-background backdrop-blur-[3px]"
              aria-describedby={undefined}
            >
              <div className="flex flex-col justify-center h-full text-center px-7">
                <nav className="flex flex-col justify-between gap-y-7">
                  {links.map(({ name, link }) => (
                    <MobileNavItem
                      onClick={toggleOpen}
                      key={name}
                      link={link}
                      name={name}
                    />
                  ))}
                </nav>
                <DrawerFooter className="pt-5 mt-0">
                  <Socials socials={socials} className="justify-center" />
                </DrawerFooter>
              </div>
            </DrawerContent>
          </Drawer>
        )}
      </ClientOnly>
    </div>
  )
}
