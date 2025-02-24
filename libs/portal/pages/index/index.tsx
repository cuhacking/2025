import { UserHackathonApplicationStatus } from '@cuhacking/portal/types/user'
import { BentoCard, BentoGrid } from '@cuhacking/portal/ui/bentogrid/bento-grid'
import { Banner } from '@cuhacking/portal/ui/dashboard/banner'
import { HackathonCountdown } from '@cuhacking/portal/ui/dashboard/hackathon-countdown'
import { Stat } from '@cuhacking/portal/ui/dashboard/stat'
import clock from '@cuhacking/shared/assets/icons/general/clock.svg'
import handshake from '@cuhacking/shared/assets/icons/general/handshake-white-1.svg'
import user from '@cuhacking/shared/assets/icons/general/profile-white-1.svg'
import discord_white from '@cuhacking/shared/assets/icons/socials/discord-white-1.svg'
import docs_white from '@cuhacking/shared/assets/icons/socials/docs-white-1.svg'
import email_white from '@cuhacking/shared/assets/icons/socials/email-white-1.svg'
import figma_white from '@cuhacking/shared/assets/icons/socials/figma-white-1.svg'
import github_white from '@cuhacking/shared/assets/icons/socials/github-white-1.svg'
import instagram_white from '@cuhacking/shared/assets/icons/socials/instagram-white-1.svg'
import linkedin_white from '@cuhacking/shared/assets/icons/socials/linkedin-white-1.svg'
import linktree_white from '@cuhacking/shared/assets/icons/socials/linktree-white-1.svg'
import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'

const constants = {
  user: {
    name: 'Saim',
  },
  hackathonDate: new Date(2025, 2, 14),
  hackathonApplicationStatus: UserHackathonApplicationStatus.notComplete,
  stats: [
    {
      label: 'Money Raised',
      value: '$20 030',
    },
    {
      label: 'Applications',
      value: '456',
    },
  ],
}

const socials: { link: string, name: string, media: Media }[] = [
  {
    link: 'https://www.instagram.com/cuhacking/',
    name: 'Instagram',
    media: {
      src: instagram_white,
      alt: 'Instagram',
    },
  },
  {
    link: 'https://github.com/cuhacking/2025',
    name: 'Github',
    media: {
      src: github_white,
      alt: 'GitHub',
    },
  },
  {
    link: 'https://discord.com/invite/h2cQqF9aZf',
    name: 'Discord',
    media: {
      src: discord_white,
      alt: 'Discord',
    },
  },
  {
    link: 'https://docs.cuhacking.ca/',
    name: 'Docs',
    media: {
      src: docs_white,
      alt: 'Documentation',
    },
  },
  {
    link: 'https://www.figma.com/design/wc1JOWR48tBNkjcjwY3AzB/%E2%8C%A8%EF%B8%8F-cuHacking-Design-System',
    name: 'Figma',
    media: {
      src: figma_white,
      alt: 'Figma',
    },
  },
  {
    link: 'mailto:info@cuhacking.ca',
    name: 'Email',
    media: {
      src: email_white,
      alt: 'Email',
    },
  },
  {
    link: 'https://ca.linkedin.com/company/cuhacking',
    name: 'LinkedIn',
    media: {
      src: linkedin_white,
      alt: 'LinkedIn',
    },
  },
  {
    link: 'https://linktr.ee/cuhacking_',
    name: 'Linktree',
    media: {
      src: linktree_white,
      alt: 'Linktree',
    },
  },
]

const features = [
  {
    Icon: () => <img src={email_white} alt="info" className="w-10 h-10" />,
    name: 'Sponsor Challenges',
    description: 'COMING SOON !!!',
    href: 'https://cuhacking.ca/#sponsors',
    target: '_blank',
    rel: 'noopener noreferrer',
    cta: 'VIEW MORE',
    isSponsorship: true,
    className:
      'col-span-1 sm:col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-1 lg:row-end-2 min-h-full',
  },
  {
    Icon: () => null,
    name: '',
    description: '',
    className:
      'col-span-1 sm:col-span-1 lg:col-start-1 lg:col-end-2 lg:row-start-2 lg:row-end-3 min-h-full',
    background: (
      <div className="absolute inset-0 flex items-center justify-center p-6">
        <div className="grid grid-cols-4 gap-4 w-full">
          {socials.map(social => (
            <a
              key={social.name}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-2 rounded-lg hover:bg-white/10 transition-all duration-200"
            >
              <img
                src={social.media.src}
                alt={social.media.alt}
                className="w-10 h-10"
              />
            </a>
          ))}
        </div>
      </div>
    ),
  },
  {
    Icon: () => <img src={clock} alt="time" className="w-10 h-10" />,
    name: 'Hackathon Countdown',
    description: 'Time remaining until CUHacking 6',
    href: '#',
    cta: 'View Details',

    className:
      'col-span-1 sm:col-span-2 lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3 min-h-full',
    background: (
      <div className="flex items-center justify-center w-full h-full absolute right-0 top-2 bottom-2 scale-95 transition-all duration-300 ease-out group-hover:scale-90">
        <HackathonCountdown date={constants.hackathonDate} />
      </div>
    ),
  },
  {
    Icon: () => <img src={handshake} alt="money" className="w-10 h-10" />,
    name: 'Money Raised',
    description: 'Funds raised for CUHacking 6',
    href: '#',
    cta: 'Learn More',
    className:
      'col-span-1 sm:col-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-1 lg:row-end-2 min-h-full',
    background: (
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-3xl font-bold absolute right-[40%] top-[40%] origin-top scale-95 transition-all duration-300 ease-out group-hover:scale-90">
          {' '}
          {/* Adjusted positioning */}
          <GlassmorphicCard className="gap-y-1 p-3 text-center w-auto">
            {constants.stats[0].value}
          </GlassmorphicCard>
        </div>
      </div>
    ),
  },
  {
    Icon: () => <img src={user} alt="Applications" className="w-10 h-10" />,
    name: 'Applications',
    description: 'Total number of hackathon applications',
    href: '#',
    className:
      'col-span-1 sm:col-span-1 lg:col-start-3 lg:col-end-4 lg:row-start-2 lg:row-end-3 min-h-full',
    background: (
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-4xl font-bold absolute mt-6 p-4 right-10 top-2 origin-top scale-95 transition-all duration-300 ease-out group-hover:scale-90">
          <Stat label="Total Applications" value={constants.stats[1].value} />
        </div>
      </div>
    ),
  },
]

export function Home() {
  return (
    <div className="flex flex-col lg:flex-row max-w-screen-xl mx-auto">

      <div className="flex-1 w-full p-4">
        <Banner name={constants.user.name} />
        <div className="flex justify-center mt-6">
          <Button className="text-black px-10 md:px-14 py-3 md:py-4 text-lg md:text-xl" variant="secondary">
            REGISTER FOR CUHACKING 6
          </Button>
        </div>

        <BentoGrid className="mt-6 flex-1 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map(feature => (
            <GlassmorphicCard key={feature.name} className={feature.className || ''}>
              <BentoCard {...feature} className="h-full w-full bg-transparent p-6 flex flex-col justify-between group" />
            </GlassmorphicCard>
          ))}
        </BentoGrid>
      </div>
    </div>
  )
}
