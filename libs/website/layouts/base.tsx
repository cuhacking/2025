import type { ReactNode } from 'react'
import cuHackingLogo from '@cuhacking/shared/assets/logos/cuHacking/cuhacking-logo-1.svg'
import { useLoaderData } from '@remix-run/react'
import {
  FOOTER_CONSTANTS,
  FooterPresenter,
  NAVBAR_CONSTANTS,
  NavbarContainer,
} from '@website/shared/ui/navigation'

export function Layout({ children }: { children: ReactNode }) {
  const { header } = useLoaderData<{ header: { links: { id: string, name: string, link: string }[] } }>()

  return (
    <>
      <NavbarContainer
        logo={cuHackingLogo}
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
