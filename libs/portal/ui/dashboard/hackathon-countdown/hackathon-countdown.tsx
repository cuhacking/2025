import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Typography } from '@cuhacking/shared/ui/typography'
import { useEffect, useState } from 'react'
import { getCountdownTo } from './countdown'

interface Countdown {
  days: number
  hrs: number
  mins: number
  secs: number
}

export function HackathonCountdown({ date }: { date: Date }) {
  const [countdown, setCountdown] = useState<Countdown>(getCountdownTo(date))
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdownTo(date))
    }, 1000)

    return () => clearInterval(interval)
  }, [date])

  return (
    <GlassmorphicCard className="flex flex-col gap-y-1 p-3">
      <Typography variant="h6" className="text-center">HACKATHON COUNTDOWN</Typography>

      <div className="flex gap-x-1">
        { Object.entries(countdown).map(([dateType, timeRemaining]) => (
          <GlassmorphicCard key={dateType} className="w-16 gap-1-y p-3 flex items-center justify-center flex-col w-full">
            <Typography variant="h4">{timeRemaining}</Typography>
            <Typography variant="paragraph-xs">{dateType}</Typography>
          </GlassmorphicCard>
        ))}
      </div>
    </GlassmorphicCard>

  )
}
