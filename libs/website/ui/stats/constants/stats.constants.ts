import SchoolImg from '@website/assets/ascii-art/50-schools-1.svg'
import ProjectsImg from '@website/assets/ascii-art/60-projects-1.svg'
import AttendeesImg from '@website/assets/ascii-art/300-attendees-1.svg'
import ApplicationsImg from '@website/assets/ascii-art/1000-applications-1.svg'

const stats = [
  { imgUrl: ProjectsImg, title: 'Projects' },
  { imgUrl: SchoolImg, title: 'Schools' },
  { imgUrl: ApplicationsImg, title: 'Applications' },
  { imgUrl: AttendeesImg, title: 'Attendees' },
]

export const STATS_CONSTANTS = {
  STATS: stats,
}
