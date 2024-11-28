import type { Media } from '@cuhacking/shared/types'
import { Link } from '@remix-run/react'
import { Socials } from '@website/shared/ui/socials'
import React from 'react'

interface FooterProps {
  logo: string
  socials: {
    link: string
    media: Media
  }[]
}

export function FooterPresenter({ logo, socials }: FooterProps) {
  return (
    <footer className="max-w-screen-xl px-4 mx-auto pt-5 pb-3.5 gap-y-6 flex flex-col lg:flex-row justify-center lg:justify-between">
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
    </footer>
  )
}
