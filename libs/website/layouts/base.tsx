import type { ReactNode } from 'react'
import { useLoaderData } from '@remix-run/react'
import {
  FOOTER_CONSTANTS,
  FooterPresenter,
  NAVBAR_CONSTANTS,
  NavbarContainer,
} from '@website/shared/ui/navigation'

export function Layout({ children }: { children: ReactNode }) {
  const { header } = useLoaderData<{ header: { logo: { url: string }, links: { id: string, name: string, link: string }[] } }>()

  return (
    <>
      <NavbarContainer
        logo={header.logo.url}
        links={header.links.map(({ id, ...rest }) => rest)}
        socials={NAVBAR_CONSTANTS.SOCIALS}
        hamburger={NAVBAR_CONSTANTS.HAMBURGER}
        cross={NAVBAR_CONSTANTS.CROSS}
        banner={NAVBAR_CONSTANTS.MLH_BANNER}
      />

      <div className="mt-10">{children}</div>
      <FooterPresenter
        logo={FOOTER_CONSTANTS.LOGO}
        socials={FOOTER_CONSTANTS.SOCIALS}
      />
    </>
  )
}
