import { Button, Card } from '@/email'
import { Banner, Footer, Keyboard } from '@/email/components'
import { Text, Container, Html, Section, Tailwind } from '@react-email/components'

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

function Content({ title, body }) {
  const events = body.events || []

  return (
    <table className="w-full max-w-[600px] mx-auto bg-black">
      <tbody>
        <tr>
          <td className="px-10 pb-10">
            <Card title={title}>
              <table className="w-full">
                <tbody>
                  <tr>
                    <td className="text-center">
                      <pre className="text-sm text-[#e6e6e6] font-mono text-center">
                        {body.text}
                      </pre>
                      {body.buttonLink && (
                        <>
                          <a href={body.buttonLink} target="_blank" className="block">
                            <Button>
                              <Text className="m-0 p-0 font-mono uppercase w-40">
                                {body.buttonText}
                              </Text>
                            </Button>
                          </a>
                          <br />
                          <a
                            href={body.secondButtonLink || body.buttonText}
                            target="_blank"
                            className="block"
                          >
                          </a>
                        </>
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </td>
        </tr>
        {events.length > 0 && (
          <tr>
            <td className="px-10">
              <table className="w-full">
                <tbody>
                  <tr>
                    <td>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  )
}

function getGenericEmailConstants() {
    return {
      title: 'Your account is created 🥳',
      body: {
        buttonText: 'Complete Registration',
        buttonLink: 'https://portal.cuhacking.ca/terms',
        text: 'Looking forward to seeing you on March 14th!',
        footer: 'See you soon!',
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



export default function AccountCreated() {
  return <Generic {...genericEmailConstants} />
}
