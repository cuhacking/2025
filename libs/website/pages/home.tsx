import React from 'react'
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
    </Layout>
  )
}
