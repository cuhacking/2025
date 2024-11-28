import { FOOTER_CONSTANTS, FooterPresenter, NAVBAR_CONSTANTS, NavbarContainer } from '@website/shared/ui/navigation'
import React from 'react'
import { ClientOnly } from 'remix-utils/client-only'

export function Layout({ children }) {
  return (
    <>
      <ClientOnly>
        {() => (
          <NavbarContainer
            links={NAVBAR_CONSTANTS.LINKS}
            logo={NAVBAR_CONSTANTS.LOGO}
            socials={NAVBAR_CONSTANTS.SOCIALS}
            hamburger={NAVBAR_CONSTANTS.HAMBURGER}
          />
        )}
      </ClientOnly>

      <div className="mt-10">{children}</div>
      <FooterPresenter logo={FOOTER_CONSTANTS.LOGO} socials={FOOTER_CONSTANTS.SOCIALS} />
    </>
  )
}
