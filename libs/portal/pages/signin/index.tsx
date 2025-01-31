import dashboard_background from '@cuhacking/portal/assets/backgrounds/dashboard-bg-1.webp'
import { SignInCallToAction } from '@cuhacking/portal/features/sign-in'

export function Signin() {
  return (
    <section className="max-w-screen-xl mx-auto relative min-h-screen flex items-center justify-center">
      <main className="relative z-10">
        <SignInCallToAction />
      </main>
      <img
        src={dashboard_background}
        alt=""
        aria-hidden="true"
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      />
    </section>
  )
}
