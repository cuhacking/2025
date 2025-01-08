import { NavbarPresenter } from './navbar.presenter'

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
  banner: {
    name: string
    link: string
    media: Media
  }[]
  socials: {
    name: string
    link: string
    media: Media
  }[]
  hamburger: Media
  cross: Media
}
export function NavbarContainer({
  links,
  logo,
  banner,
  socials,
  hamburger,
  cross,
}: NavbarProps) {
  return (
    <header id="navbar" className="w-full fixed top-0 z-[60] backdrop-blur-sm">
      <NavbarPresenter
        links={links}
        logo={logo}
        banner={banner}
        socials={socials}
        hamburger={hamburger}
        cross={cross}
      />
    </header>
  )
}
