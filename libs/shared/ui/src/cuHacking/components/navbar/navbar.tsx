import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@cuhacking/ui/components/drawer/drawer';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from '@cuhacking/ui/components/navigation-menu/navigation-menu';
import Icon from '../icons/icon';
import { useEffect, useRef, useState } from 'react';
import Socials from '../socials/socials';
import NavItem from './nav-item';
import MobileNavItem from './nav-item-mobile';

interface Media {
  src: string;
  alt: string;
}

interface NavbarProps {
  links: {
    name: string;
    link: string;
  }[];
  logo: string;
  socials: {
    link: string;
    media: Media;
  }[];
  hamburger: Media;
}

function Navbar({ links, logo, socials, hamburger }: NavbarProps) {
  const navbarRef = useRef<HTMLElement>(null);

  function adjustWidth() {
    const parent = document.querySelector('body');
    const parentWidth = parent ? parent.clientWidth : 0;
  }

  useEffect(() => {
    adjustWidth();
    const handleResize = () => adjustWidth();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <header
      ref={navbarRef}
      id="#navbar"
      className="w-full fixed top-0 z-[999] "
    >
      <div className="mx-auto max-w-screen-xl px-4 py-2.5 flex flex-row justify-between">
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
        <Drawer direction="right" aria-describedby={undefined}>
          <nav className="block md:hidden">
            <DrawerTrigger asChild>
              <div>
                <Icon media={hamburger} />
              </div>
            </DrawerTrigger>
            <DrawerContent
              className="h-full overflow-x-hidden rounded-none bg-g-nav-drawer-background backdrop-blur-[3px]"
              aria-describedby={undefined}
            >
              <DrawerHeader>
                <DrawerTitle>
                  <DrawerClose className="flex justify-end w-full">
                    <Icon media={hamburger} />
                  </DrawerClose>
                </DrawerTitle>
              </DrawerHeader>
              <div className="flex flex-col justify-center h-full text-center px-7 gap-y-7">
                <nav className="flex flex-col justify-between gap-y-7">
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
      </div>
    </header>
  );
}

export default Navbar;
