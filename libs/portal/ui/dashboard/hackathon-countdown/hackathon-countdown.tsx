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
    <div className="flex flex-col items-center justify-center w-full h-full p-8">
      <Typography
        variant="h6"
        className="text-center mb-6 uppercase tracking-wider"
      >
        HACKATHON COUNTDOWN
      </Typography>

      <div className="flex gap-4 w-full justify-center mb-8">
        {Object.entries(countdown).map(([dateType, timeRemaining]) => (
          <GlassmorphicCard
            key={dateType}
            className="flex flex-col items-center justify-center p-4 w-24 h-24"
          >
            <Typography
              variant="h3"
              className="text-3xl font-bold mb-1"
            >
              {String(timeRemaining).padStart(2, '0')}
            </Typography>
            <Typography
              variant="paragraph-xs"
              className="text-gray-400 uppercase text-xs"
            >
              {dateType}
            </Typography>
          </GlassmorphicCard>
        ))}
      </div>
    </div>
  )
}
