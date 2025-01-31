import github_black from '@cuhacking/shared/assets/icons/socials/github-black-1.svg'
import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'

export function SignInCallToAction() {
  return (
    <GlassmorphicCard
      className="w-full flex flex-col items-center gap-5 p-3"
      aria-labelledby="cta-title"
    >
      <header className="flex flex-col gap-y-1 items-center">
        <h1 id="cta-title" className="text-4xl font-bold">WE HOPE TO</h1>
        <h2
          className="text-transparent bg-greendiant bg-clip-text font-extrabold text-5xl"
          aria-label="cuHacking brand name"
        >
          cuHacking
        </h2>
      </header>

      <Button
        variant="primary"
        className="flex items-center gap-x-3 px-4"
        aria-label="Login with GitHub"
      >
        <img src={github_black} alt="GitHub logo" className="h-5 w-5" />
        <span>Login</span>
      </Button>
    </GlassmorphicCard>
  )
}
