import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Typography } from '@cuhacking/shared/ui/typography'
import { cn } from '@cuhacking/shared/utils/cn'
import { useEffect, useState } from 'react'
import { getCountdownTo } from './countdown'

interface Countdown {
  days: number
  hrs: number
  mins: number
  secs: number
}

export function HackathonCountdown({ date, className }: { date: Date, className?: string }) {
  const [countdown, setCountdown] = useState<Countdown>(getCountdownTo(date))
  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(getCountdownTo(date))
    }, 1000)

    return () => clearInterval(interval)
  }, [date])

  return (
    <GlassmorphicCard className={cn('flex flex-col gap-y-2 p-3 w-auto', className)}>
      <Typography variant="h6">HACKATHON COUNTDOWN</Typography>

      <div className="flex flex-col gap-2">
        <Typography variant="h5" className="text-center text-primary">March 14-16 2025</Typography>
        <div className="flex gap-2">
          { Object.entries(countdown).map(([dateType, timeRemaining]) => (
            <GlassmorphicCard key={dateType} className="w-16 gap-1-y p-3 flex items-center justify-center flex-col w-full">
              <Typography variant="h4">{timeRemaining}</Typography>
              <Typography variant="paragraph-xs">{dateType}</Typography>
            </GlassmorphicCard>
          ))}
        </div>
      </div>
    </GlassmorphicCard>

  )
}
