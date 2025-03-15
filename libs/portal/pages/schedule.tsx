import { Layout } from '@cuhacking/portal/ui/layout'
import { Badge } from '@cuhacking/shared/ui/badge'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@cuhacking/shared/ui/dialog'
import { GlassmorphicCard } from '@cuhacking/shared/ui/glassmorphic-card'
import { Typography } from '@cuhacking/shared/ui/typography'
import { cn } from '@cuhacking/shared/utils/cn'
import { format, parseISO } from 'date-fns'
import { useState } from 'react'

const formatTime = (isoString: string) => format(new Date(isoString), 'h:mm a')

const days = [
  { label: 'Fri', date: '2025-03-14' },
  { label: 'Sat', date: '2025-03-15' },
  { label: 'Sun', date: '2025-03-16' },
]

const options = [
  { label: '🔊 Ceremony', value: 'ceremony' },
  { label: '💻 Workshop', value: 'workshop' },
  { label: '🤝 Networking', value: 'networking' },
  { label: '🎉 Social', value: 'social' },
  { label: '💡 Hackathon', value: 'hackathon' },
  { label: '😂 Fun', value: 'fun' },
  { label: '🥑 Food', value: 'food' },
  { label: '🤹 Other', value: 'other' },
  { label: '💻 Tech Talk', value: 'techtalk' },
]

export function SchedulePage({ data }) {
  const [selectedDay, setSelectedDay] = useState('2025-03-14')

  const filteredEvents = data
    .filter((event) => {
      const eventDate = format(parseISO(event.start), 'yyyy-MM-dd')
      return eventDate === selectedDay
    })
    .sort((a, b) => new Date(a.start).getTime() - new Date(b.start).getTime())

  return (
    <Layout isCompleteProfile>
      <section className="max-w-screen-xl mx-auto p-5 sm:px-10 py-40 pt-10">
        <GlassmorphicCard className="row-span-2 p-5 text-center mb-5">
          <Typography variant="h2">SCHEDULE</Typography>
        </GlassmorphicCard>

        <div className="flex flex-col gap-5">
          {/* DAY SELECTION */}
          <div className="flex flex-row gap-3 justify-center">
            {days.map(day => (
              <button key={day.date} onClick={() => setSelectedDay(day.date)}>
                <GlassmorphicCard
                  className={cn(
                    'flex flex-col gap-y-1 p-3 w-auto cursor-pointer hover:border-primary',
                    selectedDay === day.date ? 'border-2 border-primary' : '',
                  )}
                >
                  <Typography
                    variant="h6"
                    className={selectedDay === day.date ? 'text-primary' : ''}
                  >
                    {day.label}
                  </Typography>
                  <Typography
                    variant="h2"
                    className={
                      selectedDay === day.date
                        ? 'text-primary text-center m-auto'
                        : 'text-center m-auto'
                    }
                  >
                    {day.date.split('-')[2]}
                  </Typography>
                </GlassmorphicCard>
              </button>
            ))}
          </div>

          {/* EVENTS LIST */}
          {filteredEvents.length > 0
            ? (
                filteredEvents.map(event => (
                  <Event key={event.id} eventData={event} />
                ))
              )
            : (
                <Typography variant="paragraph-lg" className="text-center">
                  No events for this day.
                </Typography>
              )}
        </div>
      </section>
    </Layout>
  )
}

function Event({ eventData }) {
  const now = new Date()
  const eventEndTime = new Date(eventData.end)
  const isOngoing = eventEndTime > now

  return (
    <Dialog>
      <DialogTrigger asChild>
        <GlassmorphicCard
          className={cn(
            'p-4 flex flex-col sm:flex-row cursor-pointer',
            isOngoing ? '!border-3 !border-primary' : '',
          )}
        >
          <div className="flex-grow-1 space-y-3">
            <Typography variant="h5">{eventData.title}</Typography>
            <Typography variant="paragraph-xs">
              📍
              {eventData.location}
            </Typography>
            <Typography variant="paragraph-xs">
              ⌛
              {' '}
              {formatTime(eventData.start)}
              {' '}
              -
              {' '}
              {formatTime(eventData.end)}
            </Typography>
            <Typography variant="paragraph-xs">{eventData.description}</Typography>
          </div>
          <div className="flex flex-wrap p-2 w-fit my-auto gap-2">
            {eventData.type.map((tag, index) => {
              const matchedOption = options.find(option => option.value === tag)
              return (
                <Badge
                  key={index}
                  variant="outline"
                  className="px-4 py-1 text-sm font-thin uppercase text-center min-w-[8rem] flex justify-center"
                >
                  {matchedOption ? matchedOption.label : tag}
                </Badge>
              )
            })}
          </div>
        </GlassmorphicCard>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[425px]">
        <Typography variant="h4">{eventData.title}</Typography>
        <Typography variant="paragraph-sm">{eventData.description}</Typography>
      </DialogContent>
    </Dialog>
  )
}
