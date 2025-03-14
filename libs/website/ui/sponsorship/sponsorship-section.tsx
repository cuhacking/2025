import { SponsorshipPresenter } from './sponsorship-presenter/sponsorship.presenter'

export function SponsorshipSection() {
  return (
    <div className="flex justify-center w-full">
      <div className="w-full max-w-screen-xl px-5 py-5 lg:px-20 lg:py-14">
        <section id="sponsors" className="w-full">
          <SponsorshipPresenter />
        </section>
      </div>
    </div>
  )
}
