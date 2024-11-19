import { IEvent } from '../../../../../../website/feature/events/models/event'
// HALP --> Need to setup event status 
// HALP --> Fix sizes of event boxes
// HALP --> Fix the padding of elements please!
// HALP --> Do bold for dates
const events: IEvent[] = [
  {
    title: 'Computer Vision',
    description: 'Explore computer vision and build a resume worthy project overnight.',
    date: new Date('2024-11-15T17:00:00'),
    registrationLink: 'https://example.com/register/womenintech',
  },
  {
    title: 'cuHacking Hackathon 2025',
    description: 'Join us for a weekend of hacking, workshops, and networking at Carleton University.',
    date: new Date('2025-03-14T10:00:00'),
    registrationLink: 'https://example.com/register/hackathon2024',
  },
  ]
export const EVENT_CONSTANTS ={
    EVENTS: events
}

// What is cuHacking? --> in person, 36 hours, workshops, networking, hackathon
// A 36 hackathon at Carleton University where you build your own project, attend workshops, and network with industry professionals.

// Who can come?  --> univeristy students from across Canada of any skill or background level
// How much does it cost? --> Free!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
// What type of workshops will be available? --> can't answer yet :(
// Can I work in a team? --> Yes, teams of up to 4 people (might want to combine into "What is cuHacking?")
// I have more questions! --> email/discord/instagram