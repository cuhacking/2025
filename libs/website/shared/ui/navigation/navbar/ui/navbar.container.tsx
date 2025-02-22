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
  socials: {
    name: string
    link: string
    media: Media
  }[]
  hamburger: Media
  cross: Media
  banner: {
    link: string
    name: string
    media: Media
  }
}
export function NavbarContainer({
  links,
  logo,
  socials,
  hamburger,
  cross,
  banner,
}: NavbarProps) {
  return (
    <header id="navbar" className="w-full fixed top-0 z-[60] backdrop-blur-sm">
      <NavbarPresenter
        links={links}
        logo={logo}
        socials={socials}
        hamburger={hamburger}
        cross={cross}
        banner={banner}
      />
    </header>
  )
}
