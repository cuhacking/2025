import type { GenericContent } from '@/email/types'
import { Banner, Content, Footer, Keyboard } from '@/email/components'
import { Container, Html, Section, Tailwind } from '@react-email/components'

function Generic({ title, body }: GenericContent) {
  return (
    <Tailwind>
      <Html>
        <Container className="w-full max-w-[600px] mx-auto bg-black rounded-t-md">
          <Section className="text-center">
            <Banner />
            <Content title={title} body={body} />
            <Keyboard />
            <Footer />
          </Section>
        </Container>
      </Html>
    </Tailwind>
  )
}

const genericEmailConstants: GenericContent = {
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
