import type { UserDetails } from '@cuhacking/portal/types/user'
import { UserHackathonApplicationStatus } from '@cuhacking/portal/types/user'
import { Banner } from '@cuhacking/portal/ui/dashboard/banner'
import { HackathonCountdown } from '@cuhacking/portal/ui/dashboard/hackathon-countdown'
import { SocialLinks } from '@cuhacking/portal/ui/dashboard/social-links'
import { Stat } from '@cuhacking/portal/ui/dashboard/stat'
import { StatIcon } from '@cuhacking/portal/ui/dashboard/stat-icon'
import { UserStatus } from '@cuhacking/portal/ui/dashboard/user-status'

import { Layout } from '@cuhacking/portal/ui/layout'
import calendar from '@cuhacking/shared/assets/icons/general/calendar-1.svg'
import handshake from '@cuhacking/shared/assets/icons/general/handshake-white-1.svg'
import mountain from '@cuhacking/shared/assets/icons/general/mountain-white-1.svg'

const constants = {
  hackathonDate: new Date(2025, 2, 14),
  hackathonApplicationStatus: UserHackathonApplicationStatus.complete,
  stats: [
    {
      label: 'Money Raised',
      value: '$20 030',
      statColor: 'text-orange-500',
    },
    {
      label: 'Registrations',
      value: '55',
      statColor: 'text-blue-500',
    },
  ],
  quickLinks: [
    {
      label: 'Sponsors - Coming soon!!',
      icon: handshake,
    },
    {
      label: 'Schedule - Coming soon!!',
      icon: calendar,
    },
    {
      label: 'CHALLANGES - Coming soon!!',
      icon: mountain,
    },
    {
      label: 'MORE FEATURES!! Maybe You will aDD it!!',
      icon: null,
    },
  ],
}

export function Home(
  { user }: { user: UserDetails },
) {
  return (
    <Layout isCompleteProfile={!!user.emergencyContactFullName}>
      <div className="flex flex-col p-4 sm:pt-10 gap-5 md:gap-10 min-h-screen">
        <Banner name={user.preferredDisplayName} />
        <div className="grid gap-4 sm:grid-cols-4 lg:grid-cols-6 lg:grid-row-4 min-h-[70vh]">

          <div className="gap-4 grid grid-cols-1 lg:grid-cols-2 col-span-2 sm:row-span-2 lg:col-span-4">
            <UserStatus name={user.firstName} status="compelte" className="lg:order-2" />
            <HackathonCountdown date={constants.hackathonDate} className="lg:order-1" />
          </div>
          <SocialLinks label="" icon="" className="col-span-2 sm:row-span-2 lg:row-span-4" />

          {constants.stats.map(stat => (
            <Stat key={stat.label} label={stat.label} value={stat.value} statColor={stat.statColor} className="col-span-2" />
          ))}

          {constants.quickLinks.map(link => (
            <StatIcon key={link.label} label={link.label} icon={link.icon} />
          ))}
        </div>

      </div>
    </Layout>
  )
}
