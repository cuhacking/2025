import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from '@cuhacking/ui/components/drawer/drawer'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@cuhacking/ui/components/navigation-menu/navigation-menu'
import { EIcons } from '@cuhacking/utils/enums/icons'
import Icon from '../icons/icon'

import Socials from '../socials/socials'
import NavItem from './nav-item'
import MobileNavItem from './nav-item-mobile'

interface NavbarProps {
  links: {
    name: string
    link: string
  }[]
  logo: string
  socials: {
    link: string
    icon: EIcons
  }[]
}

function Navbar({ links, logo, socials }: NavbarProps) {
  return (
    <header className="flex flex-row items-center justify-between w-full px-4 py-2.5">
      <a href="/" aria-label="Return to homepage">
        <img src={logo} alt="cuHacking logo" className="relative z-[60]" />
      </a>
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList className="gap-x-10">
          {links.map(({ name, link }, index) => (
            <NavigationMenuItem key={name}>
              <NavItem index={index} link={link} name={name} />
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
      <Drawer direction="right">
        <nav className="block md:hidden">
          <DrawerTrigger asChild>
            <div>
              <Icon variant={EIcons.HAMBURGER} />
            </div>
          </DrawerTrigger>
          <DrawerContent className="h-full bg-g-nav-drawer-background backdrop-blur-[100px] ">
            <DrawerHeader>
              <DrawerClose className="justify-end">
                Close Parent
              </DrawerClose>
            </DrawerHeader>
            <div className="flex flex-col h-full py-24 text-center px-7 gap-y-7">
              <nav className="flex flex-col gap-y-7">
                {links.map(({ name, link }) => (
                  <MobileNavItem key={name} link={link} name={name} />
                ))}
              </nav>
              <DrawerFooter className="pt-5 mt-0">
                <Socials socials={socials} className="justify-center" />
              </DrawerFooter>
            </div>

          </DrawerContent>
        </nav>
      </Drawer>
    </header>
  )
}

export default Navbar
