'use client'

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import listPlugin from '@fullcalendar/list'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

import './calendar-styles.css'

interface CalendarProps {
  googleApiKey: string
  calendarId: string
}

export const Calendar: React.FC<CalendarProps> = ({ googleApiKey, calendarId }) => {
  return (
    <FullCalendar
      plugins={[dayGridPlugin, timeGridPlugin, listPlugin, googleCalendarPlugin]}
      googleCalendarApiKey={googleApiKey}
      events={{
        googleCalendarId: calendarId,
      }}
      initialView="timeGridWeek"
      headerToolbar={{
        left: 'today prev,next',
        center: 'title',
        right: 'timeGridWeek listWeek dayGridMonth',
      }}
      views={{
        timeGridWeek: {
          slotMinTime: '06:00:00',
          slotMaxTime: '24:00:00',
          scrollTime: '17:00:00',
        },
        dayGridMonth: {},
        listWeek: {},
      }}
    />
  )
}
