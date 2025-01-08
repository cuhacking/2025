import type { ReactNode } from 'react'
import {
  FOOTER_CONSTANTS,
  FooterPresenter,
  NAVBAR_CONSTANTS,
  NavbarContainer,
} from '@website/shared/ui/navigation'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <NavbarContainer
        banner={NAVBAR_CONSTANTS.MLH_BANNER}
        links={NAVBAR_CONSTANTS.LINKS}
        logo={NAVBAR_CONSTANTS.LOGO}
        socials={NAVBAR_CONSTANTS.SOCIALS}
        hamburger={NAVBAR_CONSTANTS.HAMBURGER}
        cross={NAVBAR_CONSTANTS.CROSS}
      />

      <div className="mt-10">{children}</div>
      <FooterPresenter
        logo={FOOTER_CONSTANTS.LOGO}
        socials={FOOTER_CONSTANTS.SOCIALS}
      />
    </>
  )
}
