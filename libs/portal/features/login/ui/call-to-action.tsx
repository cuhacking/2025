import linkedinBlack from '@cuhacking/shared/assets/icons/socials/linkedin-black-1.svg'
import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Typography } from '@cuhacking/shared/ui/typography'
import { Form } from '@remix-run/react'

export function LoginCallToAction() {
  return (
    <GlassmorphicCard
      className="w-full flex flex-col items-center gap-5 p-3 md:gap-6 md:px-14 md:py-8 lg:gap-8 lg:px-20 lg:py-10"
      aria-labelledby="cta-title"
    >
      <header className="flex flex-col gap-y-1 items-center">
        <h1 id="cta-title" className="text-4xl font-bold md:text-5xl lg:text-6xl">WE HOPE TO</h1>
        <h2
          className="text-transparent bg-greendiant bg-clip-text font-extrabold text-5xl md:text-7xl lg:text-9xl"
          aria-label="cuHacking brand name"
        >
          cuHacking
        </h2>
      </header>

      <Form method="get" action="/api/auth">
        <Button
          type="submit"
          variant="primary"
          className="flex items-center gap-x-3 px-4 md:px-6 lg:px-8 py-4 cursor-pointer"
          aria-label="Login with Linkedin"
        >
          <img src={linkedinBlack} alt="Linkedin logo" className="size-5" />
          <Typography variant="h6">Log In</Typography>
        </Button>
      </Form>
    </GlassmorphicCard>
  )
}
