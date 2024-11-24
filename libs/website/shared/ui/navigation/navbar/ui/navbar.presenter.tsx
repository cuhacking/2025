import React from 'react'
import { NavbarContainer } from './navbar.container'

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
}
export function NavbarPresenter({
  links,
  logo,
  socials,
  hamburger,
}: NavbarProps) {
  return (
    <header id="#navbar" className="w-full fixed top-0 z-[60] backdrop-blur-sm">
      <NavbarContainer
        links={links}
        logo={logo}
        socials={socials}
        hamburger={hamburger}
      />
    </header>
  )
}
