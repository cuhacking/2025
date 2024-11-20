import type { Event } from '../types/event'

const events: Event[] = [
  {
    title: 'Computer Vision',
    description: 'Explore computer vision and build a resume worthy project overnight.',
    date: new Date('2024-11-15T17:00:00'),
    link: 'https://photos.app.goo.gl/jJGGh6kMCXvL3NTQ9',
    status: 'past',
  },
  {
    title: 'cuHacking Hackathon 2025',
    description: 'Join us for a weekend of hacking, workshops, and networking at Carleton University.',
    date: new Date('2025-03-14T10:00:00'),
    link: 'https://example.com/register/hackathon2024',
    status: 'in-progress',
  },
]
export const EVENT_CONSTANTS = {
  EVENTS: events,
}
