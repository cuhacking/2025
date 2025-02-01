import type { GenericEmailContent } from '../types/content'
import { Container, Html, Section, Tailwind } from '@react-email/components'
import { EmailBanner } from './../components/email-banner'
import { EmailContent } from './../components/email-content'
import { EmailFooter } from './../components/email-footer'
import { EmailKeyboard } from './../components/email-keyboard'

export default function Generic({ title, body }: GenericEmailContent) {
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
