/* import { execSync } from 'node:child_process' */
import { Banner, Content, Footer, Keyboard } from '@/email/components'
import { Container, Html, Section, Tailwind } from '@react-email/components'

function getGenericEmailConstants() {
  /* try {
*   const response = execSync(
*     `curl -s ${process.env.CUHACKING_2025_AXIOM_LOCAL_URL}/api/emails/1?depth=1`,
*   ).toString()

*   const { title = 'No Title', body = {} } = JSON.parse(response)

*   return {
*     title,
*     body: {
*       text: body.text || 'No body text provided.',
*       buttonText: body.buttonText || '',
*       buttonLink: body.buttonLink || '',
*       footer: body.footer || '',
*     },
*   }
* } */
  /* catch (error) {
*   console.error('Error fetching email content:', error) */
    return {
      title: 'Default Title',
      body: {
        text: 'This is a fallback email body.',
        buttonText: 'Click Here',
        buttonLink: 'https://portal.cuhacking.ca',
        footer: 'See you soon!',
      },
    }
  /* } */
}

const genericEmailConstants = getGenericEmailConstants()

function Generic({ title, body }) {
  return (
    <Tailwind>
      <Html>
        <Container className="w-full max-w-[600px] mx-auto bg-black rounded-t-md">
          <Section className="text-center">
            <Banner />
            <Content title={title} body={body} />
            <Keyboard />
            <Footer>{body.footer}</Footer>
          </Section>
        </Container>
      </Html>
    </Tailwind>
  )
}

export default function Preview() {
  return <Generic {...genericEmailConstants} />
}
