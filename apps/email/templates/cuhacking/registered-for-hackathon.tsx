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
  title: 'Heeyy :333',
  body: {
    text: `Your application to the cuHacking 2025 event at Carleton University has been accepted! 🔥🔥🔥

Details ...
📍 Richcraft Hall (1125 Colonel By Dr, Carleton University)
⌛ March 14-16 (Check-in from 5pm - 9pm)

🥗 Food + Merch will be provided for the first 300 hackers on site!
What to bring?
🪪 Government ID
💻 Your laptop + charger
🛏️ Sleeping bags
🪥 Personal hygiene (plz bring deodorant, plz ...)
🥤 Reusable water bottle
🤪 A positive attitude!`,
   
    buttonText: 'JOIN DISCORD',
    buttonLink: 'https://discord.gg/VnbWdAe8kA',

    secondButtonText: 'ADD TO CALENDAR',
    secondButtonLink: 'https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=MDY1bnFyb3B2c2Z1NjM4dDRxODcybmhtYWwgZmNkYmEzZjM1NGQ0ZTAxNTUyZTI0OTVkNzQzMTA1YmQ5ZWZjZTRlMTA3NmNkYTNjMWVjMTQ1NGQwZjVmYWE3M0Bn&tmsrc=fcdba3f354d4e01552e2495d743105bd9efce4e1076cda3c1ec1454d0f5faa73%40group.calendar.google.com', 

    events: [
      {
        title: 'Upcoming events...',
      },
      {
        title: 'Intro to QNX',
        text: 'Learn about QNX with 3 awesome speakers + meet some interns. Make sure you bring your laptop. Register now!',
        buttonText: 'REGISTER',
      },
    ],
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
