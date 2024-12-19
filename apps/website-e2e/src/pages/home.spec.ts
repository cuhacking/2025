// import type { Browser } from 'playwright'
// import { chromium, expect, test } from '@playwright/test'
import { footerMobileTabletDesktop } from '@website-e2e/ui/footer/footer'
import { navbarMobile, navbarMobileTabletDesktop, navbarTabletDesktop } from '@website-e2e/ui/navbar/navbar'
import { sponsorsMobileTabletDesktop } from '@website-e2e/ui/sponsorship/sponsorship'
import { welcomeMobileTabletDesktop } from '@website-e2e/ui/welcome/welcome'

navbarMobileTabletDesktop()
navbarTabletDesktop()
navbarMobile()
welcomeMobileTabletDesktop()
footerMobileTabletDesktop()
sponsorsMobileTabletDesktop()
