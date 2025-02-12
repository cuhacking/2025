import { Banner } from '@cuhacking/portal/ui/dashboard/banner'
import { HackathonCountdown } from '@cuhacking/portal/ui/dashboard/hackathon-countdown'
import { Stat } from '@cuhacking/portal/ui/dashboard/stat'
import { UserStatus } from '@cuhacking/portal/ui/dashboard/user-status'
import { Sidebar } from '@cuhacking/portal/ui/sidebar'
import { Button } from '@cuhacking/shared/ui/button'

const constants = {
  user: {
    name: 'Saim',
  },
  hackathonDate: new Date(2025, 2, 14),
  status: 'pending',
  stats: [
    {
      label: 'Total Applications',
      value: 1000,
    },
    {
      label: 'Money Raised',
      value: '$12,230',
    },
  ],
}

export function Home() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-1 flex-col w-full p-4 gap-5">
        <Banner name={constants.user.name} />
        <div className="flex justify-center w-full">
          <Button
            className="text-black px-8 md:px-12 py-2.5"
            variant="secondary"
          >
            APPLY TO CUHACKING 6
          </Button>
        </div>
        <HackathonCountdown date={constants.hackathonDate} />
        {constants.stats.map(stat => (
          <Stat key={stat.label} label={stat.label} value={stat.value} />
        ))}
        <UserStatus name={constants.user.name} status={constants.status} />
      </div>
    </div>
  )
}
