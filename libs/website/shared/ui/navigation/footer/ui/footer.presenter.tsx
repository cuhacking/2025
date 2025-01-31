import type { Media } from '@cuhacking/shared/types'
import codeofconduct from '@cuhacking/shared/assets/logos/codeofconduct/code-of-conduct.svg'
import netlify_logo from '@cuhacking/shared/assets/logos/sponsors/netlify-white.svg'
import { Link } from '@remix-run/react'
import { Socials } from '@website/shared/ui/socials'

interface FooterProps {
  logo: string
  socials: {
    link: string
    media: Media
  }[]
}
export function FooterPresenter({ logo, socials }: FooterProps) {
  return (
    <footer className="max-w-screen-xl px-4 mx-auto pt-5 pb-3.5 gap-y-6 flex flex-col justify-center lg:justify-between">
      <div className="flex flex-col lg:flex-row gap-y-3 lg:justify-between">
        <div className="flex flex-row items-center justify-center gap-2">
          <Link to="/" aria-label="Return to homepage">
            <img
              src={logo}
              alt="cuHacking logo"
              className="transition-transform duration-300 hover:scale-[1.2]"
            />
          </Link>
          <h2 className="text-transparent bg-greendiant bg-clip-text font-extrabold text-[34px]">
            cuHacking
          </h2>
        </div>
        <Socials socials={socials} className="justify-center" />
      </div>
      <div className="flex items-center flex-col lg:flex-row justify-between gap-x-3">
        <a href="https://github.com/cuhacking/2025/graphs/contributors" target="_blank" rel="noopener noreferrer" className="hover:scale-105 duration-300 transition hover:text-accent">
          Made with ❤️ for Hackers by Hackers.
        </a>
        <a href="https://netlify.com" target="_blank" rel="noopener noreferrer" className="flex hover:scale-110 duration-300 transition hover:text-cyan-300  items-center gap-x-3">
          Powered by
          <img className="w-24" src={netlify_logo} />
        </a>
        <a href="https://github.com/cuhacking/2025/blob/main/CODE_OF_CONDUCT.md" target="_blank" rel="noopener noreferrer" className="flex hover:scale-110 duration-300 transition text-white-300 hover:text-green-500 items-center gap-x-1 text-sm underline">
          View our Code of Conduct
          <img className="w-8" src={codeofconduct} alt="" />
        </a>
      </div>
    </footer>
  )
}
