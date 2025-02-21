import type { LegalItem } from '@cuhacking/portal/types/legal'

export function getLegalData(): { legalData: LegalItem[] } {
  return {
    legalData: [
      {
        value: 'MLH Code of Conduct',
        title: 'MLH Code of Conduct',
        content: `Additional cases of harassment include, but are not limited to, sharing sexual images, deliberate intimidation, stalking, following, brigading, doxxing, harassing photography or recording, sustained disruption of talks or other events, inappropriate physical contact, and unwelcome sexual attention. If what you’re doing is making someone feel uncomfortable, that counts as harassment and is enough reason to stop doing it.

Participants asked to stop any harassing behavior are expected to comply immediately. Sponsors, judges, mentors, volunteers, organizers, MLH staff, and anyone else participating in the event are also subject to the anti-harassment policy. In particular, attendees should not use sexualized images, activities, or other material both in their hacks and during the event. Booth staff (including volunteers) should not use sexualized clothing, uniforms, or costumes, or otherwise create a sexualized environment.

If a participant engages in harassing behavior, MLH may take any action it deems appropriate, including warning the offender or expulsion from the event with no eligibility for reimbursement or refund of any type. If you are being harassed, notice that someone else is being harassed, or have any other concerns, please contact MLH using the reporting procedures defined below.

MLH representatives can help participants contact campus security or local law enforcement, provide escorts, or otherwise assist those experiencing harassment to feel safe for the duration of the event. We value your attendance.

We expect participants to follow these rules at all hackathon venues, online interactions in relation to the event, hackathon-related social events, and on hackathon-supplied transportation.`,
        buttonContent: 'I have read MLH Code of Conduct',
      },
      {
        value: 'MLH Terms & Conditions',
        title: 'MLH Terms & Conditions',
        content: 'These are the terms and conditions of MLH.',
        buttonContent: 'I have read MLH Terms & Conditions',
      },
      {
        value: 'MLH Privacy Policy',
        title: 'MLH Privacy Policy',
        content: 'Here is how MLH handles your privacy and data.',
        buttonContent: 'I have read MLH Privacy Policy',
      },
      {
        value: 'cuHacking Terms & Conditions',
        title: 'cuHacking Terms & Conditions',
        content: 'The terms and conditions specific to cuHacking are outlined here.',
        buttonContent: 'I have read cuHacking Terms & Conditions',
      },
    ],
  }
}
