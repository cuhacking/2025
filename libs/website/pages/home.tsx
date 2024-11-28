import { EventSection } from '@website/feature/events'
import { Layout } from '@website/layouts/base'
import { FAQSection } from '@website/ui/faq'
import { MissionSection, WelcomeSection } from '@website/ui/introduction'
import { SponsorshipSection } from '@website/ui/sponsorship'
import React from 'react'

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
