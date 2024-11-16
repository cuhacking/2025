import type { EIcons } from '@cuhacking/utils/enums/icons'
import Socials from '@cuhacking/ui/components/socials/socials'

interface FooterProps {
  logo: string
  socials: {
    link: string
    icon: EIcons
  }[]
}
function Footer({ logo, socials }: FooterProps) {
  return (
    <footer className="px-4 pt-5 pb-3.5 flex flex-col lg:flex-row justify-center lg:justify-between">
      <div className="flex flex-row items-center gap-2">
        <a href="/" aria-label="Return to homepage">
          <img src={logo} alt="cuHacking logo" />
        </a>
        <h2 className="text-transparent bg-greendiant bg-clip-text font-extrabold text-[34px]">cuHacking</h2>
      </div>
      <Socials socials={socials} className="justify-center" />
    </footer>
  )
}

export default Footer
