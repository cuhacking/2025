/* import { execSync } from 'node:child_process' */
import { Banner, Content, Footer, Keyboard } from '@/email/components'
/* import { render } from "@react-email/render"; */
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
    text: `You're registered for cuHacking 2025 at Carleton University! 🔥🔥🔥

Details ...

📍 Richcraft Hall (1125 Colonel By Dr, Carleton University)
⌛ March 14-16 (Check-in from 5pm - 9pm)

🥗 Food + Merch will be provided for the first 300 hackers on site!<br>
What to bring?
🪪 Government ID
💻 Your laptop + charger
🛏 Sleeping bags
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
        text: 'Learn about QNX with 3 awesome speakers + meet some interns. Make sure you bring your laptop. Happening March 11th, 6:30 to 8:00 pm. Register now!',
        buttons: [
          {
            text: "REGISTER",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfni0BpF_2vf9xM02Ux4t979C_jVVXLvxVDv0u1hrrobVan-A/viewform"
          }
        ]
      },
      {
        title: "Learn about Gadget",
        text: "Gadget is hosting a Q&A webinar to teach students the basics of their platform. It's happening Wednesday, March 12th at 2:30pm. You must create an account using the link below. If you already have an account let Gadget know during the webinar.",
        buttons: [
          {
            text: "CREATE ACCOUNT",
            link: "https://app.gadget.dev/auth/login?returnTo=/auth/hackathon"
          },
          {
            text: "WEBINAR",
            link: "https://meet.google.com/ybk-wumk-hig"
          }
        ]
      },
      {
        title: "Resume Roast",
        text: "Get your resume roasted at cuHacking! Sign up below to be eligible. Brought to you by uO SESA",
        buttons: [
          {
            text: "REGISTER",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdljqp8Z6F6ADINhJergvcqJZ6aTYSW2SSSVrngsY6ltx1eHQ/viewform"
          }
        ]
      },
      {
        title: "Sign up for our portal!",
        text: "Create your account on our portal! You must do this to be eligible for our hackathon",
        buttons: [
          {
            text: "CREATE ACCOUNT",
            link: "https://portal.cuhacking.ca"
          }
        ]
      }
    ],
  },
}
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

export default function Preview() {
  return (
    <Generic {...genericEmailConstants} />
  )
}
