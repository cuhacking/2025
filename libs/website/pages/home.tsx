import React from 'react'
import Contactcard from '../feature/contactpage/contact'
import { EventSection } from '../feature/events'
import { FAQSection } from '../feature/faq'
import { MissionSection, WelcomeSection } from '../feature/introduction'
import { SponsorshipSection } from '../feature/sponsorship'

import { Layout } from '../layouts/base'

export function Home() {
  return (
    <Layout>
      <WelcomeSection />
      <MissionSection />
      <EventSection />
      <SponsorshipSection />
      <FAQSection />
      <Contactcard />
    </Layout>
  )
}
