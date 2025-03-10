/* import { execSync } from 'node:child_process' */
import { Banner, Content, Footer, Keyboard } from '@/email/components'
import { render } from "@react-email/render";
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
      title: 'Your account is created.',
      body: {
        buttonText: 'Complete Registration',
        buttonLink: 'https://portal.cuhacking.ca/terms',
        text: 'Looking forward to seeing you on March 14th!',
        footer: 'See you soon!',
      },
    }
  /* } */
}



const genericEmailConstants = getGenericEmailConstants()

 function Generic({ title, body } : { title: string, body: string }) {
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

export default function RegisteredForHackathon() {
  return <Generic {...genericEmailConstants} />
}
