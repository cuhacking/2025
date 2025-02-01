import { Banner } from '@cuhacking/portal/ui/dashboard/banner'
import { HackathonCountdown } from '@cuhacking/portal/ui/dashboard/hackathon-countdown'
import { Stat } from '@cuhacking/portal/ui/dashboard/stat'
import { UserStatus } from '@cuhacking/portal/ui/dashboard/user-status'

const constants = {
  user: {
    name: 'Hasith',
  },
  hackathonDate: new Date(2025, 3, 14),
  status: 'pending',
  stats: [
    {
      label: 'Total Applications',
      value: 1000,
    },
    {
      label: 'Money Raised', // Fixed key from 'name' to 'label'
      value: '$12,230',
    },
  ],
}

export function Index() {
  return (
    <div className="flex flex-col gap-5 relative w-full max-w-screen-xl mx-auto">
      <Banner name={constants.user.name} />
      <HackathonCountdown date={constants.hackathonDate} />
      {constants.stats.map((stat, index) => (
        <Stat key={index} label={stat.label} value={stat.value} />
      ))}
      <UserStatus name={constants.user.name} status={constants.status} />

    </div>
  )
}
