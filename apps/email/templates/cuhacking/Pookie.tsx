import { Banner, Content, Footer, Keyboard } from '@/email/components'
import { Container, Html, Section, Tailwind } from '@react-email/components'

const EMAIL_SUPABASE_URLS = {
  headerBg: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/email/cuhacking_email_header_bg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9lbWFpbC9jdWhhY2tpbmdfZW1haWxfaGVhZGVyX2JnLnBuZyIsImlhdCI6MTc0MTY2MDQ1MCwiZXhwIjoxNzczMTk2NDUwfQ.uwIZdlao58676NBpt8LWSTdg4UEjRjCoArhQFbzF9p8',
  footerBg: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/email/cuhacking_email_footer_bg.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9lbWFpbC9jdWhhY2tpbmdfZW1haWxfZm9vdGVyX2JnLnBuZyIsImlhdCI6MTc0MTY2MDQwNywiZXhwIjoxNzczMTk2NDA3fQ.is1-j7yWwHq8qs6jryPaI2Qv5ANhZjd-oJk2P1kB2Mw',
  logo: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/email/cuhacking_keycap_logo_grayscale.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9lbWFpbC9jdWhhY2tpbmdfa2V5Y2FwX2xvZ29fZ3JheXNjYWxlLnBuZyIsImlhdCI6MTc0MTY2ODE3NiwiZXhwIjoxNzczMjA0MTc2fQ.exe_432RbbuvVPu9jXah03g4vQY30QclWjW1yooYZnw',
  socials: [
    {
      alt: 'Instagram',
      img: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/email/cuhacking_icon_instagram.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9lbWFpbC9jdWhhY2tpbmdfaWNvbl9pbnN0YWdyYW0ucG5nIiwiaWF0IjoxNzQxNjY4MjI4LCJleHAiOjE3NzMyMDQyMjh9.TPHz-WJ379ONSX7TlbWWrcZ-5R7ac7OoPSClBh-Zogw',
      link: 'https://instagram.com/cuhacking'
    },
    {
      alt: 'discord',
      img: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/email/cuhacking_icon_discord.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9lbWFpbC9jdWhhY2tpbmdfaWNvbl9kaXNjb3JkLnBuZyIsImlhdCI6MTc0MTY2ODI0MCwiZXhwIjoxNzczMjA0MjQwfQ.gPhoh6VdZHuzoz1lh1Q-O4wrrT5pefDG-z9Qv6rMMvE',
      link: 'https://discord.gg/VnbWdAe8kA'
    },
    {
      alt: 'Website',
      img: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/email/cuhacking_icon_website.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9lbWFpbC9jdWhhY2tpbmdfaWNvbl93ZWJzaXRlLnBuZyIsImlhdCI6MTc0MTY2ODE5MywiZXhwIjoxNzczMjA0MTkzfQ.EyC-8Wla1--JKL0eW2LugynQXVJfMCdKjs-a-DsM6tg',
      link: 'https://cuhacking.ca/'
    },
    {
      alt: 'LinkedIn',
      img: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/email/cuhacking_icon_linkedin.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9lbWFpbC9jdWhhY2tpbmdfaWNvbl9saW5rZWRpbi5wbmciLCJpYXQiOjE3NDE2NjgyMTgsImV4cCI6MTc3MzIwNDIxOH0.p86rBQI2Ykj2cbPNntUTKqp_4sAF4x7q0vbM78sAY60',
      link: 'https://www.linkedin.com/company/cuhacking/posts/?feedView=all'
    },
    {
      alt: 'Linktree',
      img: 'https://rtmsxedfqcyusebbrull.supabase.co/storage/v1/object/sign/development/email/cuhacking_icon_linktree.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJkZXZlbG9wbWVudC9lbWFpbC9jdWhhY2tpbmdfaWNvbl9saW5rdHJlZS5wbmciLCJpYXQiOjE3NDE2NjgyMDgsImV4cCI6MTc3MzIwNDIwOH0.IDh2mQtdy4ZjG2i_oLVca4QkIpfDcYYJo1J6yPY5u04',
      link: 'https://linktr.ee/cuhacking_'
    },
  ]
}

function getGenericEmailConstants() {

return {
  title: 'Heeyy :333',
  body: {
    text: `/*** DETAILS ***/
📍 Richcraft Hall (1125 Colonel By Dr, Carleton University)
⌛ March 14-16 (Check-in from 5pm - 9pm)
🥗 Food + Merch will be provided for the first 300 hackers on site!

/*** WHAT TO BRING? ***/
🪪 Government ID
💻 Your laptop + charger
🛏 Sleeping bags
🪥 Personal hygiene (plz bring deodorant, plz ...)
🥤 Reusable water bottle
🤪 A positive attitude!`,

    buttonText: 'JOIN DISCORD ↗',
    buttonLink: 'https://discord.gg/VnbWdAe8kA',

    secondButtonText: '+ ADD TO CALENDAR',
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
            text: "REGISTER ↗",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSfni0BpF_2vf9xM02Ux4t979C_jVVXLvxVDv0u1hrrobVan-A/viewform"
          }
        ]
      },
      {
        title: "Learn about Gadget",
        text: "Gadget is hosting a Q&A webinar to teach students the basics of their platform. It's happening Wednesday, March 12th at 2:30pm. You must create an account using the link below. If you already have an account let Gadget know during the webinar.",
        buttons: [
          {
            text: "CREATE ACCOUNT ↗",
            link: "https://app.gadget.dev/auth/login?returnTo=/auth/hackathon"
          },
          {
            text: "WEBINAR ↗",
            link: "https://meet.google.com/ybk-wumk-hig"
          }
        ]
      },
      {
        title: "Resume Roast",
        text: "Get your resume roasted at cuHacking! Sign up below to be eligible. Brought to you by uO SESA",
        buttons: [
          {
            text: "REGISTER ↗",
            link: "https://docs.google.com/forms/d/e/1FAIpQLSdljqp8Z6F6ADINhJergvcqJZ6aTYSW2SSSVrngsY6ltx1eHQ/viewform"
          }
        ]
      },
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
            <Banner backgroundSrc={EMAIL_SUPABASE_URLS.headerBg} logoSrc={EMAIL_SUPABASE_URLS.logo}/>
            <Content title={title} body={body} />
            <Keyboard keyboardSrc={EMAIL_SUPABASE_URLS.footerBg}/>
            <Footer socials={EMAIL_SUPABASE_URLS.socials} logoSrc={EMAIL_SUPABASE_URLS.logo}/>
          </Section>
        </Container>
      </Html>
    </Tailwind>
  )
}

export default function Pookie() {
  return (
    <Generic {...genericEmailConstants} />
  )
}
