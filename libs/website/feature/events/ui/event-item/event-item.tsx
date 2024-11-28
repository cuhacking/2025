import type { Event } from '../../types/event'
import { Button } from '@cuhacking/shared/ui/button'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Separator } from '@cuhacking/shared/ui/separator'
import { TerminalText } from '@cuhacking/shared/ui/terminal-text'
import { cn } from '@cuhacking/shared/utils/cn'
import {
  getDatePostfix,
  getDayOfMonth,
  getMonth,
} from '@cuhacking/shared/utils/date.helpers'
import { Link } from '@remix-run/react'
import React from 'react'

interface EventProps {
  event: Event
  className: string
}
export function EventItem({ event, className }: EventProps) {
  const date = event.date
  const day = getDayOfMonth(date)
  const month = getMonth(date)
  const datePostfix = getDatePostfix(date)
  const buttonMessage
    = event.status === 'upcoming' ? 'REGISTER NOW' : 'VIEW PHOTOS'
  return (
    <GlassmorphicCard
      variant="nested"
      className={cn(
        'flex flex-col lg:flex-row px-3 py-4 gap-x-3 gap-y-2.5 items-center h-full',
        className,
      )}
    >
      <section className="flex flex-col items-center">
        <time className="text-3xl">
          {day}
          <sup>{datePostfix}</sup>
        </time>
        <time className="text-xs font-bold">{month}</time>
      </section>
      <Separator
        orientation="vertical"
        className="self-stretch hidden h-auto lg:block"
        decorative
      />
      <Separator
        orientation="horizontal"
        className="block w-full lg:hidden"
        decorative
      />
      <article className="flex flex-col">
        <header className="px-2">
          <h4 className="text-2xl">{event.title}</h4>
        </header>
        <main>
          <TerminalText className="text-sm">{event.description}</TerminalText>
        </main>
        {event.status !== 'in-progress'
          ? (
              <div className="flex justify-end w-full pt-1 text-xl">
                <Button variant="default" size="sm">
                  <Link to={event.link} target="_blank">
                    {buttonMessage}
                  </Link>
                </Button>
              </div>
            )
          : null}
      </article>
    </GlassmorphicCard>
  )
}
