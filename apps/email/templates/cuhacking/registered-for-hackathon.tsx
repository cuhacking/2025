import type { GenericEmailContent } from '@/email/types/content'
import { EmailBanner } from '@/email/components/email-banner'
import { EmailContent } from '@/email/components/email-content'
import { EmailFooter } from '@/email/components/email-footer'
import { EmailKeyboard } from '@/email/components/email-keyboard'
import { Container, Html, Section, Tailwind } from '@react-email/components'

function Generic({ title, body }: GenericEmailContent) {
  return (
    <Tailwind>
      <Html>
        <Container className="w-full max-w-[600px] mx-auto bg-black rounded-t-md">
          <Section className="text-center">
            <EmailBanner />
            <EmailContent title={title} body={body} />
            <EmailKeyboard />
            <EmailFooter />
          </Section>
        </Container>
      </Html>
    </Tailwind>
  )
}

const genericEmailConstants: GenericEmailContent = {
  title: 'Thank you for registering Hasith!',
  body: [
    {
      text: 'Your submission has been received. Looking forward to seeing you on March 14th!',
    },
    {
      buttonText: 'RSVP',
      buttonLink: 'https://portal.cuhacking.ca/',
      text: 'See you there!',

    },
  ],
}

export default function Preview() {
  return (
    <Generic {...genericEmailConstants} />
  )
}
